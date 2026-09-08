#!/usr/bin/env node
/**
 * canonical が全ページに出ているかを、 動いているサイトで確かめる。
 *
 * Search Console 「重複しています。 Google により、 ユーザーがマークした
 * ページとは異なるページが正規ページとして選択されました」 ( 2026-08-10)。
 * 実物を見た所、 canonical が 1 ページも出ていなかった。 どれが正規かを
 * こちらが言っていないので、 Google が自分で選ぶ。
 *
 * 使い方:
 *   node scripts/check-canonical.mjs                    # 本番を見る
 *   node scripts/check-canonical.mjs http://localhost:3000
 */
const base = (process.argv[2] || 'https://seed-tech.co.jp').replace(/\/$/, '')

/** 見る道と、 そこで期待する正規 URL。 */
const PAGES = [
  ['/', '/'],
  ['/about-us', '/about-us'],
  ['/service', '/service'],
  ['/product', '/product'],
  ['/news', '/news'],
  ['/contact', '/contact'],
  ['/privacy-policy', '/privacy-policy'],
  // 問い合わせ文字列が付いても、 正規は素の URL を指す
  ['/news?category=release', '/news'],
  ['/about-us?utm_source=x', '/about-us'],
]

const canonicalOf = (html) => {
  const m = html.match(/<link[^>]*rel="canonical"[^>]*>/i)
  if (!m) return null
  const href = m[0].match(/href="([^"]+)"/i)
  return href ? href[1] : null
}

let bad = 0
for (const [path, want] of PAGES) {
  const url = base + path
  let got = null
  try {
    const res = await fetch(url, { redirect: 'follow' })
    got = canonicalOf(await res.text())
  } catch (e) {
    console.log(`  [取れず] ${path}  ${e.message}`)
    bad++
    continue
  }
  // 末尾スラッシュの揺れは同じ物として見る
  const norm = (u) => (u || '').replace(/\/$/, '') || '/'
  const expect = norm(base + (want === '/' ? '' : want))
  const ok = norm(got) === expect
  if (!ok) bad++
  console.log(`  [${ok ? 'OK ' : '**NG**'}] ${path.padEnd(28)} ${got || 'canonical なし'}`)
}
console.log(`\nずれ ${bad} / ${PAGES.length}`)
process.exit(bad === 0 ? 0 : 1)
