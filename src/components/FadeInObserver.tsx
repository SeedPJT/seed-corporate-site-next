'use client'
import { useEffect } from 'react'

// 元 WP の fadein.js と 同等 = .animation_fade 要素 が viewport に入ったら .fadein class を付与。
// IntersectionObserver で 実装 (scroll listener より 効率的)。
// pathname 変更 (client-nav) の 度 に 再走査 する ため 全 route で mount。
export default function FadeInObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fadein')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px 0px 0px', threshold: 0.01 },
    )
    const scan = () => {
      document.querySelectorAll<HTMLElement>('.animation_fade:not(.fadein)').forEach((el) => {
        observer.observe(el)
      })
    }
    scan()
    // client-nav で 新規追加 された 要素 を 拾う ため の 短い インターバル (低頻度)
    const interval = setInterval(scan, 500)
    return () => {
      clearInterval(interval)
      observer.disconnect()
    }
  }, [])

  return null
}
