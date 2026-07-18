'use client'
import { useEffect, useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'

// 元 WP header.php + loading.js の 完全 忠実 移植。
//
// 「1 page load で 1 回」 semantics = hard reload は 必ず 走る、 SPA nav は skip。
// sessionStorage は タブ 閉じ まで 持続 = 「reload でも skip」 と なる ため module 変数 で
// page-load 単位 の state を保持 ( module 再評価 は hard reload のみ )。
let hasShownInPageLoad = false

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

// 一時 debug = user 依頼 で SPA nav 挙動 追跡 用。 本 番 fix 後 に 除去 予定。
const dbg = (...args: unknown[]) => {
  if (typeof window !== 'undefined') console.log('[loading]', ...args)
}

// full loading 用 = 中央 の 巨大 tree + skip button。 hard reload の時 のみ 描画。
const LOADING_CONTAINER_HTML = `<div id="loading_container"><lottie-player id="loadingAnimation" src="/img/top/loading.json" background="transparent" speed="1" autoplay></lottie-player><div id="skipButton">Skip</div></div>`

export default function LoadingAnimation() {
  const pathname = usePathname()
  const isFrontpage = pathname === '/'

  const shouldRunFullLoading = isFrontpage && !hasShownInPageLoad

  dbg('render', { pathname, isFrontpage, hasShown: hasShownInPageLoad, shouldRunFullLoading })

  useIsoLayoutEffect(() => {
    dbg('layoutEffect', { isFrontpage, hasShown: hasShownInPageLoad })
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

  // corner tree = LoadingAnimation の 初回 mount 時 に document.createElement で lottie を作り、
  // body 直下 に append。 React が触ら ない = 全 nav で 完全 に 継続 = frame state / seek 状態 保持。
  useEffect(() => {
    let el = document.getElementById('loadingAnimationSub') as
      | (HTMLElement & { getLottie?: () => { totalFrames: number; goToAndStop: (frame: number, isFrame?: boolean) => void; play: () => void } })
      | null
    if (!el) {
      dbg('sub: creating new element')
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
      dbg('sub: seekEnd', { hasAnim: !!anim, totalFrames: anim?.totalFrames })
      if (!anim) return
      anim.goToAndStop(Math.max(0, anim.totalFrames - 1), true)
      target.classList.add('tree-ready')
    }
    target.addEventListener('ready', seekEnd)
    target.addEventListener('load', seekEnd)
    // 既に ready 済 の 場合 も seek 試行
    seekEnd()
    return () => {
      target.removeEventListener('ready', seekEnd)
      target.removeEventListener('load', seekEnd)
    }
  }, [])

  useEffect(() => {
    if (!shouldRunFullLoading) return

    dbg('useEffect: start full loading')
    let cancelled = false
    let isPageLoaded = false

    const hideLoadingIfReady = () => {
      if (cancelled) return
      if (isPageLoaded) {
        const c = document.getElementById('loading_container')
        if (c) c.classList.add('hidden')
        document.body.classList.add('loading_container__hidden')
        hasShownInPageLoad = true
        dbg('loading hidden, hasShown=true')
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

  // sub は document.body に直接 append する ため React tree から 外す = React reconcile 対象 外。
  // loading_container のみ conditional に render。
  if (!shouldRunFullLoading) return null
  return <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: LOADING_CONTAINER_HTML }} />
}
