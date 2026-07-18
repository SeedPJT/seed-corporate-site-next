'use client'
import { useEffect, useRef, useState } from 'react'

// front-page 専用 の Lottie ローディング。
// 初回 SSR 時、 <lottie-player> が HTML に出た瞬間 は lottie script が未実行 = custom element 未 upgrade =
// autoplay が効かず 空 の 画面 に見える 現象 の 対策。
// 対策 = customElements.whenDefined('lottie-player') を await してから DOM に inject する。
export default function LoadingAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    let cancelled = false

    // Step 1: lottie-player custom element の 定義 を 待つ
    const injectAndStart = () => {
      if (cancelled || !containerRef.current) return
      containerRef.current.innerHTML = `
        <div id="loading_container">
          <lottie-player id="loadingAnimation" src="/img/top/loading.json" background="transparent" speed="1" autoplay></lottie-player>
          <div id="skipButton" role="button" tabindex="0">Skip</div>
        </div>
        <lottie-player id="loadingAnimationSub" src="/img/top/loading.json" background="transparent" speed="100" autoplay></lottie-player>
      `
      setMounted(true)

      // Step 2: 3 秒 後 に hide + skip button hook
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
      const skip = document.getElementById('skipButton')
      const handleSkip = () => {
        hide()
        document.querySelectorAll<HTMLElement>('*:not(.text_bridge > ul)').forEach((el) => {
          el.style.animationDuration = '0s'
          el.style.animationDelay = '0s'
        })
      }
      if (skip) skip.addEventListener('click', handleSkip)
    }

    if (typeof customElements !== 'undefined') {
      customElements.whenDefined('lottie-player').then(injectAndStart).catch(() => {
        // 万が一 lottie script が失敗 したら 即 hide して 通常 flow に
        setMounted(true)
        document.body.classList.add('loading_container__hidden')
      })
    } else {
      // customElements 未対応 環境 = 即 hide
      setMounted(true)
      document.body.classList.add('loading_container__hidden')
    }

    return () => { cancelled = true }
  }, [])

  return <div ref={containerRef} suppressHydrationWarning aria-hidden={!mounted} />
}
