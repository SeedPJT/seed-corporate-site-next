'use client'
import { useEffect } from 'react'

// 初回 サイト 訪問 時 のみ ローディング を出す ( SPA client-nav では出さない)。
// - sessionStorage 'loading_shown' を flag で 判定
// - flag なし = 初回 訪問 = SSR HTML の loading container が動く → 3秒後 hide
// - flag あり = client-nav 済 = 即座 に body に loading_container__hidden class 付与 = header/main/footer が visible に
export default function LoadingAnimation() {
  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('loading_shown')
    if (alreadyShown) {
      // client-nav = すでに session 内で 初回訪問済 = ローディング skip
      const container = document.getElementById('loading_container')
      if (container) container.classList.add('hidden')
      document.body.classList.add('loading_container__hidden')
      return
    }

    // 初回 = flag set + 3秒後 hide
    sessionStorage.setItem('loading_shown', '1')
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
        <lottie-player id="loadingAnimation" src="/img/top/loading.json" background="transparent" speed="1" autoplay="true" />
        <div id="skipButton" role="button" tabIndex={0}>Skip</div>
      </div>
      {/* @ts-expect-error lottie-player custom element */}
      <lottie-player id="loadingAnimationSub" src="/img/top/loading.json" background="transparent" speed="100" autoplay="true" />
    </>
  )
}
