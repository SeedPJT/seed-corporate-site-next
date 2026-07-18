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
}

// SSR 中 は useLayoutEffect が 使え ない ため isomorphic 変種。
// paint 前 に body id を確定 する = 前 page 状態 と body#frontpage 規則 の 一 瞬 flash 消える。
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

export default function BodyIdSetter() {
  const pathname = usePathname()
  useIsoLayoutEffect(() => {
    const normalized = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname
    const id = PATH_TO_ID[normalized] || 'other_page'
    document.body.id = id
  }, [pathname])
  return null
}
