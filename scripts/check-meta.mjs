#!/usr/bin/env node
/**
 * ページの名乗り方が揃っているかを、 書いた物の側で確かめる。
 *
 *     社長  HPについてもKaikaだけ Kaika 株式会社Seed みたいに | がない
 *
 * 1 ページだけ区切りが抜けていた ( /product)。 タブと検索結果に出る名前で、
 * 1 つだけ形が違うと 「別のサイト」 に見える。
 *
 * 揃っているかは目で見ても分からない ( ページが 8 つあって、 名乗りは
 * それぞれの file に書いてある) ので、 形を 1 か所で言う。
 *
 *   名前      「{そのページ} | 株式会社Seed」 ( 入口だけ 「株式会社Seed」)
 *   正規 URL  alternates.canonical が在る ( どれが正規かをこちらが言う)
 *   小さな絵  icons が在る ( 継承が build で飛ぶ事があるので各ページに)
 *
 * 使い方:
 *   node scripts/check-meta.mjs
 *
 * 管理の画面 ( /admin) は見ない = 検索に出さない物なので名乗りを揃える
 * 意味が無い。
 */
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const APP = 'src/app'
const SUFFIX = '| 株式会社Seed'
const HOME_NAME = '株式会社Seed'

/** 入口の名乗りは 1 つ ( 「株式会社Seed | 株式会社Seed」 にはしない)。 */
const ROOT_LAYOUT = join(APP, 'layout.tsx')

const files = []
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) {
      if (name === 'admin' || name === 'api') continue
      walk(path)
      continue
    }
    if (name === 'page.tsx' || name === 'layout.tsx') files.push(path)
  }
}
walk(APP)

/** metadata を書いている所だけ見る ( 書いていないページは親から受ける)。 */
const titlesIn = (src) =>
  [...src.matchAll(/^\s*title: (['"`])(.+?)\1,/gm)].map((m) => m[2])

let bad = 0
const say = (ok, path, said) => {
  if (!ok) bad++
  console.log(`  [${ok ? 'OK ' : '**NG**'}] ${relative('.', path).padEnd(44)} ${said}`)
}

for (const path of files.sort()) {
  const src = readFileSync(path, 'utf-8')
  //   metadata も generateMetadata も無い = 親の名乗りを受ける = 見ない
  if (!/export (const metadata|async function generateMetadata)/.test(src)) continue

  for (const title of titlesIn(src)) {
    if (path === ROOT_LAYOUT) {
      say(title === HOME_NAME, path, `入口の名乗り = ${title}`)
      continue
    }
    //   openGraph の中の名乗りは、 そのページの名前と同じ形で良い
    say(title.endsWith(SUFFIX), path, title)
  }

  /*
   * 同じ型の抜けを一緒に掃く ( 1 つだけ無い所が出来やすい)。
   *
   * 名乗りを返す所が 2 つ在るページも在る ( 記事が無い時 / 在る時)。
   * **返す所の数だけ** 揃っている事を見る = 片方だけ付いている形を通さない。
   */
  const places = /export const metadata/.test(src)
    ? 1
    : (src.match(/return \{/g) || []).length
  const found = (re) => (src.match(re) || []).length
  say(found(/alternates: \{ canonical:/g) >= places, path,
      `canonical ${found(/alternates: \{ canonical:/g)} / ${places}`)
  say(found(/icons: \{ icon:/g) >= places, path,
      `icons ${found(/icons: \{ icon:/g)} / ${places}`)
}

console.log(`\nずれ ${bad} 件`)
process.exit(bad === 0 ? 0 : 1)
