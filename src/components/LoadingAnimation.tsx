'use client'
import { useEffect } from 'react'

// 完全 reload / 初回 URL 直訪 = module state hasShownOnce=false = loading 表示
// SPA client-nav (frontpage の 外 → frontpage への Link click) = module state 保持 = hasShownOnce=true = skip
// 完全 reload や タブ 閉じ = JS 再 load = module state リセット = 再度 表示 される
let hasShownOnce = false

export default function LoadingAnimation() {
  useEffect(() => {
    if (hasShownOnce) {
      // SPA nav = 既に session 中に一度出した = skip
      const container = document.getElementById('loading_container')
      if (container) container.classList.add('hidden')
      document.body.classList.add('loading_container__hidden')
      return
    }
    hasShownOnce = true

    let cancelled = false
    const hide = () => {
      if (cancelled) return
      const container = document.getElementById('loading_container')
      if (container) container.classList.add('hidden')
      document.body.classList.add('loading_container__hidden')
    }
    // 元 WP = window.load 後 setTimeout 3s = 全 resource ( 画像 / lottie JSON / fonts / GTM 等 数MB) 待ち で
    // 実質 5-10s の 体感。 Vercel は CDN 高速 = timer だけ だと 短く 感じる ので 8s に 延長。
    const onLoad = () => setTimeout(hide, 8000)
    if (document.readyState === 'complete') {
      onLoad()
    } else {
      window.addEventListener('load', onLoad)
    }
    const skip = document.getElementById('skipButton')
    const handleSkip = () => {
      hide()
      document.querySelectorAll<HTMLElement>('*:not(.text_bridge > ul)').forEach((el) => {
        el.style.animationDuration = '0s'
        el.style.animationDelay = '0s'
      })
    }
    if (skip) skip.addEventListener('click', handleSkip)
    return () => {
      cancelled = true
      window.removeEventListener('load', onLoad)
      if (skip) skip.removeEventListener('click', handleSkip)
    }
  }, [])

  return (
    <>
      <div id="loading_container">
        {/* @ts-expect-error lottie-player custom element */}
        <lottie-player id="loadingAnimation" src="/img/top/loading.json" background="transparent" speed="1" autoplay="true" />
        <div id="skipButton" role="button" tabIndex={0}>Skip</div>
      </div>
      {/* @ts-expect-error lottie-player custom element */}
      <lottie-player id="loadingAnimationSub" src="/img/top/loading.json" background="transparent" speed="100" autoplay="true" />
    </>
  )
}
