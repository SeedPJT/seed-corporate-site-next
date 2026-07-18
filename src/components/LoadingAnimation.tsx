'use client'
import { useEffect } from 'react'

// frontpage mount の 度 に loading 表示 = 完全 reload + SPA nav 両方 で 出る (元 WP の 挙動 に 近い)。
// 画像 が behind に あって も それ が 「いけてる 感じ」 の brand 挙動。
export default function LoadingAnimation() {
  useEffect(() => {
    // mount 時 に 常に container を fullscreen 表示 に戻す ( 前回 hide 状態 が 残って いる 可能性)
    const container = document.getElementById('loading_container')
    if (container) container.classList.remove('hidden')
    document.body.classList.remove('loading_container__hidden')

    let cancelled = false
    const hide = () => {
      if (cancelled) return
      const c = document.getElementById('loading_container')
      if (c) c.classList.add('hidden')
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
        <lottie-player id="loadingAnimation" src="/img/top/loading.json" background="transparent" speed="1" autoplay="true" loop="true" style={{ width: '100%', height: '100%', display: 'block' }} />
        <div id="skipButton" role="button" tabIndex={0}>Skip</div>
      </div>
      {/* @ts-expect-error lottie-player custom element */}
      <lottie-player id="loadingAnimationSub" src="/img/top/loading.json" background="transparent" speed="100" autoplay="true" loop="true" />
    </>
  )
}
