import type { MetadataRoute } from 'next'
import { getAllNews } from '@/lib/news'

// Search Console が sitemap.xml を 404 として拾っていたため追加。
// 静的 page + content/news/*.md から生成した お知らせ 詳細 を列挙する。
// admin 配下 と contact/thanks は robots.ts 側で除外しているのでここにも載せない。
export const SITE_URL = 'https://seed-tech.co.jp'

// 末尾スラッシュを付けないこと。 next.config で trailingSlash 未設定 = false のため、
// 「/about-us/」 は 308 で 「/about-us」 に飛ぶ。 sitemap にリダイレクト先を載せると
// Search Console が 「ページにリダイレクトがあります」 として弾く。
const STATIC_PATHS = [
  { path: '/', priority: 1.0, changeFrequency: 'monthly' as const },
  { path: '/about-us', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/service', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/product', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/news', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/contact', priority: 0.5, changeFrequency: 'yearly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }))

  // getAllNews は draft: true を除外済み = 下書きが sitemap に漏れない。
  const newsEntries: MetadataRoute.Sitemap = getAllNews().map((item) => ({
    url: `${SITE_URL}/news/${item.slug}`,
    lastModified: new Date(item.date),
    changeFrequency: 'yearly',
    priority: 0.5,
  }))

  return [...staticEntries, ...newsEntries]
}
