import type { MetadataRoute } from 'next'
import { SITE_URL } from './sitemap'

// Search Console が robots.txt を 404 として拾っていたため追加。
// admin 配下 と 問い合わせ完了 page はクロール不要 = 明示的に除外する。
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/admin/', '/contact/thanks'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
