'use client'
import { useEffect } from 'react'

// 元 WP header.php + loading.js の 完全 忠実 移植。
// 重要 = HTML を SSR で render する = リロード 時 も 初回描画 から DOM に存在 = lottie が確実 に upgrade。
// dangerouslySetInnerHTML を JSX return で 使う = SSR HTML に 直接 含まれる。
const LOADING_HTML = `<div id="loading_container"><lottie-player id="loadingAnimation" src="/img/top/loading.json" background="transparent" speed="1" autoplay></lottie-player><div id="skipButton">Skip</div></div><lottie-player id="loadingAnimationSub" src="/img/top/loading.json" background="transparent" speed="100" autoplay></lottie-player>`

export default function LoadingAnimation() {
  useEffect(() => {
    // 1 セッション で 1 回 のみ = hard reload は 走る、 SPA nav は skip。
    // 元 WP は毎 reload = SPA じゃない ため 毎回走った ので、 SPA nav で は 邪魔 な UX。
    const SESSION_KEY = 'seed_loading_shown'
    if (typeof window !== 'undefined' && window.sessionStorage.getItem(SESSION_KEY)) {
      document.body.classList.add('loading_container__hidden')
      const c = document.getElementById('loading_container')
      if (c) c.classList.add('hidden')
      return
    }

    const container = document.getElementById('loading_container')
    if (container) container.classList.remove('hidden')
    document.body.classList.remove('loading_container__hidden')

    let cancelled = false
    let isPageLoaded = false

    const hideLoadingIfReady = () => {
      if (cancelled) return
      if (isPageLoaded) {
        const c = document.getElementById('loading_container')
        if (c) c.classList.add('hidden')
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

  return <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: LOADING_HTML }} />
}
