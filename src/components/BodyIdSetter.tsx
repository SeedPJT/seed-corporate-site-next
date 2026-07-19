'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useLayoutEffect } from 'react'

// path から body#{id} を動的に設定。 元 WP の $page->post_name = body id と同じ挙動で
// SCSS 側の body#frontpage / body#about-us 等の page 特有スタイルを効かせる。
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

// 動的 slug ( news/[slug] 等) は prefix 一致で body id を付ける。
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

// SSR 中は useLayoutEffect が使えないため isomorphic 変種。
// paint 前に body id を確定する = 前 page 状態と body#frontpage 規則の一瞬 flash 消える。
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

export default function BodyIdSetter() {
  const pathname = usePathname()
  useIsoLayoutEffect(() => {
    const normalized = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname
    document.body.id = resolveBodyId(normalized)
  }, [pathname])
  return null
}
