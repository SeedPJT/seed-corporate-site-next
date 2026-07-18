'use client'
import { useEffect, useState } from 'react'

// 元 WP header.php + loading.js の 完全 忠実 移植。
// SSR HTML に loading 一式 を 直接 含める = hard reload 時 に 初回描画 から DOM に存在。
// SPA nav で は useState lazy initializer が sessionStorage を 読んで 初回 render を null 化
// = loading DOM が 一 瞬 でも paint されない = flash 完全 消滅。
const LOADING_HTML = `<div id="loading_container"><lottie-player id="loadingAnimation" src="/img/top/loading.json" background="transparent" speed="1" autoplay></lottie-player><div id="skipButton">Skip</div></div><lottie-player id="loadingAnimationSub" src="/img/top/loading.json" background="transparent" speed="100" autoplay></lottie-player>`

const SESSION_KEY = 'seed_loading_shown'

export default function LoadingAnimation() {
  // SPA nav 時 の 「既 表示 済」 判定 = 初回 render 前 に 決定 する ため lazy init。
  // SSR (typeof window === 'undefined') は false で render = hard reload 用 の HTML を SSR に含める。
  const [skip] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    return window.sessionStorage.getItem(SESSION_KEY) === '1'
  })

  useEffect(() => {
    if (skip) {
      // SPA nav = loading DOM 無し で 即 完成 状態 に。
      document.body.classList.add('loading_container__hidden')
      document.body.classList.add('loading_skipped')
      return
    }

    // hard reload path = 従来通り loading 再生 → hide → session flag set。
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
        window.sessionStorage.setItem(SESSION_KEY, '1')
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
