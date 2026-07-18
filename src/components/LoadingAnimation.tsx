'use client'
import { useEffect } from 'react'

// body#frontpage は 初期 opacity:0 で header/main/footer を 隠す 設計 = ローディング が
// SSR 時から DOM にないと「空 の 白 画面」 が見える。 lottie-player を SSR で render し、
// hide は DOM class 操作 で 行う。
export default function LoadingAnimation() {
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
        <lottie-player id="loadingAnimation" src="/img/top/loading.json" background="transparent" speed="1" autoplay="" />
        <div id="skipButton" role="button" tabIndex={0}>Skip</div>
      </div>
      {/* @ts-expect-error lottie-player custom element */}
      <lottie-player id="loadingAnimationSub" src="/img/top/loading.json" background="transparent" speed="100" autoplay="" />
    </>
  )
}
