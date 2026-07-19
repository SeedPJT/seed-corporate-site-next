import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifySessionCookieValue, SESSION_COOKIE_NAME } from '@/lib/auth'

// pathname を header に注入 = server component (layout) で読める ように する。
// layout で body id を SSR 時に設定する ため。
// また、 /admin/* は session cookie 検証 + 未認証 なら /admin/login に redirect。
export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // /admin/* の 保護 ( login page と login API は 除 外)
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const cookie = request.cookies.get(SESSION_COOKIE_NAME)?.value
    const valid = await verifySessionCookieValue(cookie)
    if (!valid) {
      const loginUrl = request.nextUrl.clone()
      loginUrl.pathname = '/admin/login'
      loginUrl.searchParams.set('from', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  const response = NextResponse.next()
  response.headers.set('x-pathname', pathname)
  return response
}

export const config = {
  matcher: [
    // 静的 assets / api 以外 の 全 route
    '/((?!api|_next/static|_next/image|favicon.ico|img).*)',
  ],
}
