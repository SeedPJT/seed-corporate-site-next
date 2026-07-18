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

// full loading = 中央 の 巨大 tree loading + skip button。 hard reload の時 のみ 描画。
const LOADING_CONTAINER_HTML = `<div id="loading_container"><lottie-player id="loadingAnimation" src="/img/top/loading.json" background="transparent" speed="1" autoplay></lottie-player><div id="skipButton">Skip</div></div>`

// corner の tree = 常時 mount で lottie state を持続 = SPA nav 帰還時 に 即 表示 可能。
// autoplay = full loading 完了 で fadein する 際 に 咲く animation を再生 させる ため。
// skip mode で は useEffect が 最終 frame に seek + pause させる。
const LOADING_SUB_HTML = `<lottie-player id="loadingAnimationSub" src="/img/top/loading.json" background="transparent" speed="100" autoplay></lottie-player>`

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

  // skip mode = corner tree を 最終 frame で stop、 咲く animation を再生 させない。
  // mount は 1 度 きり = tree state は 全 nav で 持続 する。
  useEffect(() => {
    const el = document.getElementById('loadingAnimationSub') as
      | (HTMLElement & { getLottie?: () => { totalFrames: number; goToAndStop: (frame: number, isFrame?: boolean) => void; play: () => void } })
      | null
    if (!el) return
    const seekEnd = () => {
      const anim = el.getLottie?.()
      if (!anim) return
      anim.goToAndStop(Math.max(0, anim.totalFrames - 1), true)
      el.classList.add('tree-ready')
      dbg('sub seek to end frame', anim.totalFrames - 1)
    }
    // hard reload で full loading 実行中 = 通常 autoplay で 咲く animation を 見せる。
    // 完了 後 ( hasShown=true) の nav では seek 済 で 静止 させる。
    if (shouldRunFullLoading) return
    el.addEventListener('ready', seekEnd)
    el.addEventListener('load', seekEnd)
    seekEnd()
    return () => {
      el.removeEventListener('ready', seekEnd)
      el.removeEventListener('load', seekEnd)
    }
  }, [shouldRunFullLoading])

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

  return (
    <>
      {shouldRunFullLoading && (
        <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: LOADING_CONTAINER_HTML }} />
      )}
      {/* corner tree = 全 route で mount 維持 = 再訪時 に 即 表示、 lottie load / seek の delay なし。
          CSS で 非 frontpage は display:none で hide される。 */}
      <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: LOADING_SUB_HTML }} />
    </>
  )
}
