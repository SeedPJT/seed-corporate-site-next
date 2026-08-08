import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // 旧サービス URL は /service/ 単一 page に集約 = 301 redirect で SEO 保険 + 既存リンク の有効化。
  async redirects() {
    return [
      { source: '/service/ai-and-system', destination: '/service/', permanent: true },
      { source: '/service/ai-and-system/', destination: '/service/', permanent: true },
      { source: '/service/ai-x-education', destination: '/service/', permanent: true },
      { source: '/service/ai-x-education/', destination: '/service/', permanent: true },
      { source: '/service/support-and-growth', destination: '/service/', permanent: true },
      { source: '/service/support-and-growth/', destination: '/service/', permanent: true },

      // 旧 WordPress 由来の URL。 Wayback Machine のアーカイブと現行サイトを突き合わせて
      // 実際に 404 になっているものを列挙した。 Search Console の
      // 「見つかりませんでした (404)」 の実体がこれ。
      // お知らせ 個別記事 と そのカテゴリ アーカイブ
      { source: '/info/:id(\\d+)', destination: '/news', permanent: true },
      { source: '/category/info', destination: '/news', permanent: true },
      // 実績 個別記事 と そのカテゴリ アーカイブ。
      // source は percent-encoded で書く必要がある。 日本語のまま書くと照合されず 404 のまま。
      // デコードすると /プロジェクト・実績/:id と /category/プロジェクト・実績。
      {
        source: '/%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%83%BB%E5%AE%9F%E7%B8%BE/:id(\\d+)',
        destination: '/service',
        permanent: true,
      },
      {
        source: '/category/%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%83%BB%E5%AE%9F%E7%B8%BE',
        destination: '/service',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
