import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifySessionCookieValue, SESSION_COOKIE_NAME } from '@/lib/auth'
import { getFile, upsertFile, deleteFile } from '@/lib/github'

// 記事 の 更新 = PUT /api/admin/news/${slug}
// 記事 の 削除 = DELETE /api/admin/news/${slug}

async function requireAuth(): Promise<boolean> {
  const jar = await cookies()
  const value = jar.get(SESSION_COOKIE_NAME)?.value
  return verifySessionCookieValue(value)
}

function buildMarkdown(input: {
  title: string
  date: string
  category: string
  summary: string
  thumbnail: string
  body: string
}): string {
  const fm = [
    '---',
    `title: ${JSON.stringify(input.title)}`,
    `date: ${input.date}`,
    `category: ${input.category}`,
    input.summary ? `summary: ${JSON.stringify(input.summary)}` : null,
    input.thumbnail ? `thumbnail: ${JSON.stringify(input.thumbnail)}` : null,
    '---',
    '',
    input.body.trim(),
    '',
  ].filter((line) => line !== null)
  return fm.join('\n')
}

async function findFilePath(slug: string): Promise<string | null> {
  const md = `content/news/${slug}.md`
  const mdx = `content/news/${slug}.mdx`
  if (await getFile(md)) return md
  if (await getFile(mdx)) return mdx
  return null
}

type Ctx = { params: Promise<{ slug: string }> }

export async function PUT(req: Request, ctx: Ctx) {
  if (!(await requireAuth())) {
    return NextResponse.json({ error: '未認証 です' }, { status: 401 })
  }
  try {
    const { slug } = await ctx.params
    const data = await req.json()
    const title = String(data.title || '').trim()
    const date = String(data.date || '').trim()
    const category = String(data.category || 'info').trim()
    const summary = String(data.summary || '').trim()
    const thumbnail = String(data.thumbnail || '').trim()
    const body = String(data.body || '').trim()

    if (!title || !date) {
      return NextResponse.json({ error: 'タイトル / 日付 は必須 です' }, { status: 400 })
    }

    const filePath = await findFilePath(slug)
    if (!filePath) {
      return NextResponse.json({ error: '該当 記事 が見つかり ません' }, { status: 404 })
    }
    const existing = await getFile(filePath)
    if (!existing) {
      return NextResponse.json({ error: '該当 記事 が見つかり ません' }, { status: 404 })
    }

    const md = buildMarkdown({ title, date, category, summary, thumbnail, body })
    await upsertFile({
      path: filePath,
      content: md,
      message: `news: update ${slug}`,
      sha: existing.sha,
    })

    return NextResponse.json({ ok: true, slug })
  } catch (err) {
    console.error('[admin/news PUT] error:', err)
    const msg = err instanceof Error ? err.message : '更新 失敗'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}

export async function DELETE(req: Request, ctx: Ctx) {
  if (!(await requireAuth())) {
    return NextResponse.json({ error: '未認証 です' }, { status: 401 })
  }
  try {
    const { slug } = await ctx.params
    const filePath = await findFilePath(slug)
    if (!filePath) {
      return NextResponse.json({ error: '該当 記事 が見つかり ません' }, { status: 404 })
    }
    const existing = await getFile(filePath)
    if (!existing) {
      return NextResponse.json({ error: '該当 記事 が見つかり ません' }, { status: 404 })
    }
    await deleteFile({
      path: filePath,
      sha: existing.sha,
      message: `news: delete ${slug}`,
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[admin/news DELETE] error:', err)
    const msg = err instanceof Error ? err.message : '削除 失敗'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
