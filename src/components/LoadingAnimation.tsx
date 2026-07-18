'use client'
import { useEffect, useLayoutEffect, useState } from 'react'

// 元 WP header.php + loading.js の 完全 忠実 移植。
//
// 「1 page load で 1 回」 semantics = hard reload は 必ず 走る、 SPA nav は skip。
// sessionStorage は タブ 閉じ まで 持続 する ため 「reload しても skip」 に なって しまう =
// module 変数 で page-load 単位 の state を保持 する ( module 再評価 は hard reload のみ )。
let hasShownInPageLoad = false

// SSR 中 は useLayoutEffect が 使え ない ため isomorphic 変種。
// SPA nav 時 = client 側 で 動く = useLayoutEffect が paint 前 に class を反映 = flash 消える。
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

const LOADING_HTML = `<div id="loading_container"><lottie-player id="loadingAnimation" src="/img/top/loading.json" background="transparent" speed="1" autoplay></lottie-player><div id="skipButton">Skip</div></div><lottie-player id="loadingAnimationSub" src="/img/top/loading.json" background="transparent" speed="100" autoplay></lottie-player>`

export default function LoadingAnimation() {
  // 初回 render 前 に skip 判定 = SSR は false 固定 で LOADING_HTML を render。
  const [skip] = useState<boolean>(() => hasShownInPageLoad)

  // skip 経路 = BodyIdSetter の body id 変更 と 同 tick で class を貼って paint 一 発。
  useIsoLayoutEffect(() => {
    if (skip) {
      document.body.classList.add('loading_container__hidden')
      document.body.classList.add('loading_skipped')
    }
  }, [skip])

  useEffect(() => {
    if (skip) return

    // hard reload path = 従来通り。 module 変数 は 最後 に set = 途中 unmount で skip 化 しない。
    document.body.classList.remove('loading_container__hidden')
    document.body.classList.remove('loading_skipped')

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
  }, [skip])

  if (skip) return null
  return <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: LOADING_HTML }} />
}
