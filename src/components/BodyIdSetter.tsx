'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useLayoutEffect } from 'react'

// path から body#{id} を 動的 に 設定。 元 WP の $page->post_name = body id と 同 じ 挙動 で
// SCSS 側 の body#frontpage / body#about-us 等 の page 特有 スタイル を 効かせる。
const PATH_TO_ID: Record<string, string> = {
  '/': 'frontpage',
  '/about-us': 'about-us',
  '/product': 'product',
  '/service': 'service',
  '/service/ai-and-system': 'ai-and-system',
  '/service/ai-x-education': 'ai-x-education',
  '/service/support-and-growth': 'support-and-growth',
  '/contact': 'contact',
  '/contact/thanks': 'thanks',
  '/news': 'news',
}

// 動 的 slug ( news/[slug] 等) は prefix 一致 で body id を付ける。
const DYNAMIC_PATH_PREFIXES: { prefix: string; id: string }[] = [
  { prefix: '/news/', id: 'news' },
]

function resolveBodyId(pathname: string): string {
  if (PATH_TO_ID[pathname]) return PATH_TO_ID[pathname]
  for (const { prefix, id } of DYNAMIC_PATH_PREFIXES) {
    if (pathname.startsWith(prefix)) return id
  }
  return 'other_page'
}

// SSR 中 は useLayoutEffect が 使え ない ため isomorphic 変種。
// paint 前 に body id を確定 する = 前 page 状態 と body#frontpage 規則 の 一 瞬 flash 消える。
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

export default function BodyIdSetter() {
  const pathname = usePathname()
  useIsoLayoutEffect(() => {
    const normalized = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname
    document.body.id = resolveBodyId(normalized)
  }, [pathname])
  return null
}
