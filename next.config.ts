import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // 旧サービス URL は Kaika 実装伴走 に集約 = 301 redirect で /service/ に。
  // SEO 保険 + 既存 リンク の 有効 化。
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
