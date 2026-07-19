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
    ]
  },
}

export default nextConfig
