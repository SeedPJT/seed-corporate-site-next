import { NextResponse } from 'next/server'
import { issueSessionCookie } from '@/lib/auth'

// admin ログイン = env `ADMIN_PASSWORD` と 完全 一致 のみ 受 付。
// 一致 したら signed session cookie を発行 して 7 日 有効。
export async function POST(req: Request) {
  try {
    const { password } = (await req.json()) as { password?: string }
    const expected = process.env.ADMIN_PASSWORD
    if (!expected) {
      return NextResponse.json({ error: 'ADMIN_PASSWORD env が未設定 です' }, { status: 500 })
    }
    if (!password || password !== expected) {
      return NextResponse.json({ error: 'パスワード が違います' }, { status: 401 })
    }
    const cookie = await issueSessionCookie()
    const res = NextResponse.json({ ok: true })
    res.cookies.set(cookie.name, cookie.value, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: cookie.maxAge,
    })
    return res
  } catch (err) {
    console.error('[admin/login] error:', err)
    return NextResponse.json({ error: 'ログイン 処理 エラー' }, { status: 500 })
  }
}
