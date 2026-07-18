import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// pathname を header に注入 = server component (layout) で読める ように する。
// layout で body id を SSR 時に設定する ため。
export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  response.headers.set('x-pathname', request.nextUrl.pathname)
  return response
}

export const config = {
  matcher: [
    // 静的 assets / api 以外 の 全 route
    '/((?!api|_next/static|_next/image|favicon.ico|img).*)',
  ],
}
