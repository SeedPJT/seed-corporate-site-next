import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifySessionCookieValue, SESSION_COOKIE_NAME } from '@/lib/auth'
import { getFile, upsertFile } from '@/lib/github'

// 記事 の 新規 作成 = POST /api/admin/news
// body = { slug, title, date, category, summary, body }
// content/news/${slug}.md を GitHub API で create commit する。

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

function isValidSlug(s: string): boolean {
  return /^[a-z0-9-]+$/.test(s) && s.length > 0 && s.length <= 128
}

export async function POST(req: Request) {
  if (!(await requireAuth())) {
    return NextResponse.json({ error: '未認証 です' }, { status: 401 })
  }
  try {
    const data = await req.json()
    const slug = String(data.slug || '').trim()
    const title = String(data.title || '').trim()
    const date = String(data.date || '').trim()
    const category = String(data.category || 'info').trim()
    const summary = String(data.summary || '').trim()
    const thumbnail = String(data.thumbnail || '').trim()
    const body = String(data.body || '').trim()

    if (!isValidSlug(slug)) {
      return NextResponse.json({ error: 'スラッグ が不正 です ( 半 角 英 数 + ハイフン)' }, { status: 400 })
    }
    if (!title || !date) {
      return NextResponse.json({ error: 'タイトル / 日付 は必須 です' }, { status: 400 })
    }

    const filePath = `content/news/${slug}.md`
    const existing = await getFile(filePath)
    if (existing) {
      return NextResponse.json({ error: '同 じ スラッグ の 記事 が既 に あります' }, { status: 409 })
    }

    const md = buildMarkdown({ title, date, category, summary, thumbnail, body })
    await upsertFile({
      path: filePath,
      content: md,
      message: `news: create ${slug}`,
    })

    return NextResponse.json({ ok: true, slug })
  } catch (err) {
    console.error('[admin/news POST] error:', err)
    const msg = err instanceof Error ? err.message : '保存 失敗'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
