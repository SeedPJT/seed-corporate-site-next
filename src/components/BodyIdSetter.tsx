'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

// path から body#{id} を 動的 に 設定。 元 WP の $page->post_name = body id と 同 じ 挙動 で
// SCSS 側 の body#frontpage / body#about-us 等 の page 特有 スタイル を 効かせる。
const PATH_TO_ID: Record<string, string> = {
  '/': 'frontpage',
  '/about-us': 'about-us',
  '/product': 'product',
  '/service': 'service',
  '/ai-and-system': 'ai-and-system',
  '/ai-x-education': 'ai-x-education',
  '/support-and-growth': 'support-and-growth',
  '/contact': 'contact',
  '/thanks': 'thanks',
}

export default function BodyIdSetter() {
  const pathname = usePathname()
  useEffect(() => {
    const normalized = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname
    const id = PATH_TO_ID[normalized] || 'other_page'
    document.body.id = id
  }, [pathname])
  return null
}
