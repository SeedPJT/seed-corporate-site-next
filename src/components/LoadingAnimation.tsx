'use client'
import { useEffect, useState } from 'react'

// front-page 専用 の Lottie ローディング アニメーション。
// 元 loading.js の 挙動 = window.load から 3 秒 で 非表示、 skip button で 即 スキップ。
// 完了 で body に .loading_container__hidden を 付与 = SCSS 側 の fade-in animation を trigger。
export default function LoadingAnimation() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let cancelled = false
    const hide = () => {
      if (cancelled) return
      setHidden(true)
      document.body.classList.add('loading_container__hidden')
    }
    const onLoad = () => setTimeout(hide, 3000)
    if (document.readyState === 'complete') {
      onLoad()
    } else {
      window.addEventListener('load', onLoad)
    }
    return () => {
      cancelled = true
      window.removeEventListener('load', onLoad)
    }
  }, [])

  const handleSkip = () => {
    setHidden(true)
    document.body.classList.add('loading_container__hidden')
    document.querySelectorAll<HTMLElement>('*:not(.text_bridge > ul)').forEach((el) => {
      el.style.animationDuration = '0s'
      el.style.animationDelay = '0s'
    })
  }

  return (
    <>
      <div id="loading_container" className={hidden ? 'hidden' : undefined}>
        {/* @ts-expect-error lottie-player custom element */}
        <lottie-player
          id="loadingAnimation"
          src="/img/top/loading.json"
          background="transparent"
          speed="1"
          autoplay
        />
        <div id="skipButton" onClick={handleSkip} role="button" tabIndex={0}>
          Skip
        </div>
      </div>
      {/* @ts-expect-error lottie-player custom element */}
      <lottie-player
        id="loadingAnimationSub"
        src="/img/top/loading.json"
        background="transparent"
        speed="100"
        autoplay
      />
    </>
  )
}
