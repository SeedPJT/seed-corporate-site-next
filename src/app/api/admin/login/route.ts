import { NextResponse } from 'next/server'
import { issueSessionCookie } from '@/lib/auth'

// admin ログイン = env `ADMIN_PASSWORD` と完全一致のみ受付。
// 一致したら signed session cookie を発行して 7 日有効。
export async function POST(req: Request) {
  try {
    const { password } = (await req.json()) as { password?: string }
    const expected = process.env.ADMIN_PASSWORD
    if (!expected) {
      return NextResponse.json({ error: 'ADMIN_PASSWORD env が未設定です' }, { status: 500 })
    }
    if (!password || password !== expected) {
      return NextResponse.json({ error: 'パスワードが違います' }, { status: 401 })
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
    return NextResponse.json({ error: 'ログイン処理エラー' }, { status: 500 })
  }
}
