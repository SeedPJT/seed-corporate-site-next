'use client'
import { useEffect, useRef } from 'react'

// 元 WP header.php + loading.js の 完全 忠実 移植。
// React で JSX render すると custom element (lottie-player) の 属性 set + 定義 タイミング が
// React 制御 に 干渉 = autoplay が 効か ない / SVG が render されない 等 の 現象 発生。
// 対策 = dangerouslySetInnerHTML で raw HTML として mount = 通常 の DOM parser を経由 = 元 WP と同じ 挙動。
const LOADING_HTML = `
<div id="loading_container">
  <lottie-player id="loadingAnimation" src="/img/top/loading.json" background="transparent" speed="1" autoplay></lottie-player>
  <div id="skipButton">Skip</div>
</div>
<lottie-player id="loadingAnimationSub" src="/img/top/loading.json" background="transparent" speed="100" autoplay></lottie-player>
`

export default function LoadingAnimation() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return
    // raw HTML で 挿入 = React 干渉なし。
    mountRef.current.innerHTML = LOADING_HTML

    // 元 loading.js を忠実 に 再現。
    const loadingContainer = document.getElementById('loading_container')
    let isPageLoaded = false
    let cancelled = false

    const hideLoadingIfReady = () => {
      if (cancelled) return
      if (isPageLoaded && loadingContainer) {
        loadingContainer.classList.add('hidden')
        document.body.classList.add('loading_container__hidden')
      }
    }

    const onLoad = () => {
      isPageLoaded = true
      setTimeout(hideLoadingIfReady, 3000)
    }
    if (document.readyState === 'complete') {
      onLoad()
    } else {
      window.addEventListener('load', onLoad)
    }

    const skipButton = document.getElementById('skipButton')
    const handleSkip = () => {
      isPageLoaded = true
      hideLoadingIfReady()
      document.querySelectorAll<HTMLElement>('*:not(.text_bridge > ul)').forEach((el) => {
        el.style.animationDuration = '0s'
        el.style.animationDelay = '0s'
      })
    }
    if (skipButton) skipButton.addEventListener('click', handleSkip)

    return () => {
      cancelled = true
      window.removeEventListener('load', onLoad)
      if (skipButton) skipButton.removeEventListener('click', handleSkip)
    }
  }, [])

  // SSR 時 は 空、 client mount で 上記 innerHTML に置換 される。
  // suppressHydrationWarning = hydration mismatch を silence。
  return <div ref={mountRef} suppressHydrationWarning />
}
