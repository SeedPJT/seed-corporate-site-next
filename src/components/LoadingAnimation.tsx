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

const LOADING_HTML = `<div id="loading_container"><lottie-player id="loadingAnimation" src="/img/top/loading.json" background="transparent" speed="1" autoplay></lottie-player><div id="skipButton">Skip</div></div><lottie-player id="loadingAnimationSub" src="/img/top/loading.json" background="transparent" speed="100" autoplay></lottie-player>`

export default function LoadingAnimation() {
  const pathname = usePathname()
  const isFrontpage = pathname === '/'

  // 各 render で module 変数 を fresh に 読む = hard reload 直後 は false で LOADING_HTML を出し、
  // hasShown=true 後 の nav は 即 skip。 useState で 固定 する と 後続 の nav でも 再 loading して しまう bug。
  const shouldRenderLoading = isFrontpage && !hasShownInPageLoad

  // 全 nav で 実行 = frontpage 離れ たら class 清掃、 skip 再訪 で は 即 skip 状態 に。
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

  useEffect(() => {
    if (!shouldRenderLoading) return

    // hard reload path = 従来通り。 完了 時 に module flag を set。
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
  }, [shouldRenderLoading])

  if (!shouldRenderLoading) return null
  return <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: LOADING_HTML }} />
}
