import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifySessionCookieValue, SESSION_COOKIE_NAME } from '@/lib/auth'
import { upsertFile, getFile } from '@/lib/github'

// admin から の 画像 upload = multipart FormData を受け取り GitHub API で
// public/img/news/*.{ext} に commit する。 return は 公 開 URL ( /img/news/xxx.ext)。
// Vercel は public/ を root で serve する ので この path が そのまま HP から アクセス可能。

const MAX_SIZE = 5 * 1024 * 1024 // 5 MB
const ALLOWED_MIME: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/gif': 'gif',
}

async function requireAuth(): Promise<boolean> {
  const jar = await cookies()
  const value = jar.get(SESSION_COOKIE_NAME)?.value
  return verifySessionCookieValue(value)
}

function sanitizeSlug(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '').slice(0, 60) || 'file'
}

export async function POST(req: Request) {
  if (!(await requireAuth())) {
    return NextResponse.json({ error: '未認証 です' }, { status: 401 })
  }
  try {
    const form = await req.formData()
    const file = form.get('file')
    const nameHint = String(form.get('nameHint') || 'thumbnail')
    if (!(file instanceof File)) {
      return NextResponse.json({ error: 'file が付いて い ません' }, { status: 400 })
    }
    if (file.size > MAX_SIZE) {
      return NextResponse.json({ error: `ファイル が 大き過ぎ ます ( 上限 ${MAX_SIZE / 1024 / 1024}MB)` }, { status: 400 })
    }
    const ext = ALLOWED_MIME[file.type]
    if (!ext) {
      return NextResponse.json({ error: '対応 して い ない 形式 です ( jpg / png / webp / gif のみ)' }, { status: 400 })
    }
    const arrayBuf = await file.arrayBuffer()
    const b64 = Buffer.from(arrayBuf).toString('base64')

    // ファイル 名 = slug hint + タイムスタンプ ( unique 化) + 拡張 子。
    const base = sanitizeSlug(nameHint)
    const stamp = Date.now().toString(36)
    const fileName = `${base}-${stamp}.${ext}`
    const filePath = `public/img/news/${fileName}`

    // 既存 file が ある 場合 は sha 付与 ( 通常 は timestamp 化 で 衝 突 なし)。
    const existing = await getFile(filePath)

    // upsertFile は 内 部 で toBase64(str) する = string 前提。 ここ は 直接 API 叩く。
    // 画像 は 生 base64 で 送 る 必要 が ある。
    await putBinary(filePath, b64, existing?.sha, `news: upload ${fileName}`)

    return NextResponse.json({ ok: true, path: `/img/news/${fileName}` })
  } catch (err) {
    console.error('[admin/upload] error:', err)
    const msg = err instanceof Error ? err.message : 'upload 失敗'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}

async function putBinary(path: string, contentB64: string, sha: string | undefined, message: string) {
  const raw = process.env.GITHUB_REPO
  const owner = raw?.split('/')[0] || process.env.VERCEL_GIT_REPO_OWNER
  const repo = raw?.split('/')[1] || process.env.VERCEL_GIT_REPO_SLUG
  if (!owner || !repo) throw new Error('GITHUB_REPO env 未設定 かつ Vercel Git env も 未 取得')
  const branch = process.env.GITHUB_BRANCH || 'main'
  const token = process.env.GITHUB_TOKEN
  if (!token) throw new Error('GITHUB_TOKEN env 未設定')
  const res = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${encodeURIComponent(path)}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      body: JSON.stringify({ message, content: contentB64, branch, sha }),
    },
  )
  if (!res.ok) throw new Error(`GitHub upload ${path} 失敗: ${res.status} ${await res.text()}`)
}
