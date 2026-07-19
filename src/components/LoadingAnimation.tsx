'use client'
import { useEffect, useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'

// 元 WP header.php + loading.js の完全忠実移植。
//
// 「1 page load で 1 回」 semantics = hard reload は必ず走る、 SPA nav は skip。
// sessionStorage はタブ閉じまで持続 = 「reload でも skip」 となるため module 変数で
// page-load 単位の state を保持 ( module 再評価は hard reload のみ )。
let hasShownInPageLoad = false

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

// full loading 用 = 中央の巨大 tree + skip button。 hard reload の時のみ描画。
const LOADING_CONTAINER_HTML = `<div id="loading_container"><lottie-player id="loadingAnimation" src="/img/top/loading.json" background="transparent" speed="1" autoplay></lottie-player><div id="skipButton">Skip</div></div>`

export default function LoadingAnimation() {
  const pathname = usePathname()
  const isFrontpage = pathname === '/'

  const shouldRunFullLoading = isFrontpage && !hasShownInPageLoad

  useIsoLayoutEffect(() => {
    if (!isFrontpage) {
      document.body.classList.remove('loading_container__hidden')
      document.body.classList.remove('loading_skipped')
      return
    }
    if (hasShownInPageLoad) {
      document.body.classList.add('loading_container__hidden')
      document.body.classList.add('loading_skipped')
    } else {
      document.body.classList.remove('loading_container__hidden')
      document.body.classList.remove('loading_skipped')
    }
  }, [isFrontpage])

  // corner tree = LoadingAnimation の初回 mount 時に document.createElement で lottie を作り、
  // body 直下に append。 React が触らない = 全 nav で完全に継続 = frame state / seek 状態保持。
  useEffect(() => {
    let el = document.getElementById('loadingAnimationSub') as
      | (HTMLElement & { getLottie?: () => { totalFrames: number; goToAndStop: (frame: number, isFrame?: boolean) => void; play: () => void } })
      | null
    if (!el) {
        const created = document.createElement('lottie-player') as HTMLElement
      created.id = 'loadingAnimationSub'
      created.setAttribute('src', '/img/top/loading.json')
      created.setAttribute('background', 'transparent')
      created.setAttribute('speed', '100')
      created.setAttribute('autoplay', '')
      document.body.appendChild(created)
      el = created as unknown as typeof el
    }
    if (!el) return
    const target = el
    const seekEnd = () => {
      const anim = target.getLottie?.()
      if (!anim) return
      anim.goToAndStop(Math.max(0, anim.totalFrames - 1), true)
      target.classList.add('tree-ready')
    }
    target.addEventListener('ready', seekEnd)
    target.addEventListener('load', seekEnd)
    // 既に ready 済の場合も seek 試行
    seekEnd()
    return () => {
      target.removeEventListener('ready', seekEnd)
      target.removeEventListener('load', seekEnd)
    }
  }, [])

  useEffect(() => {
    if (!shouldRunFullLoading) return

    let cancelled = false
    let isPageLoaded = false

    const hideLoadingIfReady = () => {
      if (cancelled) return
      if (isPageLoaded) {
        const c = document.getElementById('loading_container')
        if (c) c.classList.add('hidden')
        document.body.classList.add('loading_container__hidden')
        hasShownInPageLoad = true
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
  }, [shouldRunFullLoading])

  // sub は document.body に直接 append するため React tree から外す = React reconcile 対象外。
  // loading_container のみ conditional に render。
  if (!shouldRunFullLoading) return null
  return <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: LOADING_CONTAINER_HTML }} />
}
