'use client'
import { useEffect, useRef } from 'react'

// front-page 専用 の Lottie ローディング アニメーション。
// 元 loading.js の 挙動 = window.load から 3 秒 で 非表示、 skip button で 即 スキップ。
// 完了 で body に .loading_container__hidden を 付与 = SCSS 側 の fade-in animation を trigger。
//
// lottie-player は custom element = React JSX で render すると 属性 set 順序 の 都合 で
// 初期化 されない ケース が ある。 dangerouslySetInnerHTML で 一 度だけ raw HTML として render し、
// 状態変化 は 直接 DOM class 操作 で 行 う ( innerHTML を書き換 えると lottie が再作成 される)。
export default function LoadingAnimation() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cancelled = false
    const hide = () => {
      if (cancelled) return
      const container = document.getElementById('loading_container')
      if (container) container.classList.add('hidden')
      document.body.classList.add('loading_container__hidden')
    }
    const onLoad = () => setTimeout(hide, 3000)
    if (document.readyState === 'complete') {
      onLoad()
    } else {
      window.addEventListener('load', onLoad)
    }
    // skip button click = 即座 に hide + 全 animation を 短縮
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

  const containerHtml = `
    <div id="loading_container">
      <lottie-player id="loadingAnimation" src="/img/top/loading.json" background="transparent" speed="1" autoplay></lottie-player>
      <div id="skipButton" role="button" tabindex="0">Skip</div>
    </div>
    <lottie-player id="loadingAnimationSub" src="/img/top/loading.json" background="transparent" speed="100" autoplay></lottie-player>
  `

  return <div ref={rootRef} suppressHydrationWarning dangerouslySetInnerHTML={{ __html: containerHtml }} />
}
