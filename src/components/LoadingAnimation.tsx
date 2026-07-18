'use client'
import { useEffect, useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'

// 元 WP header.php + loading.js の 完全 忠実 移植。
//
// 「1 page load で 1 回」 semantics = hard reload は 必ず 走る、 SPA nav は skip。
// sessionStorage は タブ 閉じ まで 持続 = 「reload でも skip」 と なる ため module 変数 で
// page-load 単位 の state を保持 ( module 再評価 は hard reload のみ )。
let hasShownInPageLoad = false

// Next.js App Router は root layout を SPA nav で 再 render しない = LoadingAnimation の
// mount / unmount で 制御 する と 挙動 が壊れる。 pathname を watch して body class を
// 全 nav で 再同期 する。
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

// 一時 debug = user 依頼 で SPA nav 挙動 追跡 用。 本 番 fix 後 に 除去 予定。
const dbg = (...args: unknown[]) => {
  if (typeof window !== 'undefined') console.log('[loading]', ...args)
}

// full loading = 中央 の 巨大 tree loading + corner に 定着 する sub tree の 2 つ。
const LOADING_HTML_FULL = `<div id="loading_container"><lottie-player id="loadingAnimation" src="/img/top/loading.json" background="transparent" speed="1" autoplay></lottie-player><div id="skipButton">Skip</div></div><lottie-player id="loadingAnimationSub" src="/img/top/loading.json" background="transparent" speed="100" autoplay></lottie-player>`

// SPA nav 帰還時 = 最後 の 完成状態 ( corner に 定着 した 小 tree のみ) を静的 に出す。
// autoplay 外して useEffect で 最終 frame に seek = 咲く animation を 再生 させない。
const LOADING_HTML_SKIP = `<lottie-player id="loadingAnimationSub" src="/img/top/loading.json" background="transparent"></lottie-player>`

export default function LoadingAnimation() {
  const pathname = usePathname()
  const isFrontpage = pathname === '/'

  // 各 render で module 変数 を fresh に 読む = hard reload 直後 は false で LOADING_HTML を出し、
  // hasShown=true 後 の nav は 即 skip 扱い ( full loading は render しない、 corner tree のみ)。
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

  // skip mode = corner tree を最終 frame に固定 ( 咲く animation を再生 させない)。
  useEffect(() => {
    if (!isFrontpage || shouldRunFullLoading) return
    const el = document.getElementById('loadingAnimationSub') as (HTMLElement & { getLottie?: () => { totalFrames: number; goToAndStop: (frame: number, isFrame?: boolean) => void } }) | null
    if (!el) return
    const seekEnd = () => {
      const anim = el.getLottie?.()
      if (anim) {
        anim.goToAndStop(Math.max(0, anim.totalFrames - 1), true)
        dbg('seek to end frame', anim.totalFrames - 1)
      }
    }
    el.addEventListener('ready', seekEnd)
    // 既に ready 済 の場合 も seek
    seekEnd()
    return () => {
      el.removeEventListener('ready', seekEnd)
    }
  }, [isFrontpage, shouldRunFullLoading])

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

  if (!isFrontpage) return null
  const html = shouldRunFullLoading ? LOADING_HTML_FULL : LOADING_HTML_SKIP
  return <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: html }} />
}
