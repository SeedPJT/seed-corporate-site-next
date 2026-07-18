import type { Metadata } from 'next'
import Script from 'next/script'
import { headers } from 'next/headers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BodyIdSetter from '@/components/BodyIdSetter'
import FadeInObserver from '@/components/FadeInObserver'
import LoadingAnimation from '@/components/LoadingAnimation'
import '@/styles/style.scss'

// pathname → body id map。 middleware で 注入 された x-pathname header を使って SSR で 決定。
const PATH_TO_ID: Record<string, string> = {
  '/': 'frontpage',
  '/about-us': 'about-us',
  '/product': 'product',
  '/service': 'service',
  '/service/ai-and-system': 'ai-and-system',
  '/service/ai-x-education': 'ai-x-education',
  '/service/support-and-growth': 'support-and-growth',
  '/contact': 'contact',
  '/contact/thanks': 'thanks',
}

async function getRouteInfo(): Promise<{ bodyId: string; pathname: string }> {
  const h = await headers()
  const pathname = h.get('x-pathname') || '/'
  const normalized = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
  return { bodyId: PATH_TO_ID[normalized] || 'other_page', pathname: normalized }
}

export const metadata: Metadata = {
  title: '株式会社Seed',
  description: 'テクノロジーと人の力を融合し、個々に寄り添う学びの支援を実現します。',
  keywords: 'AI学習支援, 個別最適化教育, 多様性推進, 進路サポート, 教育テクノロジー',
  icons: { icon: '/img/favicon.webp' },
  openGraph: {
    title: '株式会社Seed',
    description: 'テクノロジーと人の力を融合し、個々に寄り添う学びの支援を実現します。',
    images: ['/img/ogp.webp'],
    type: 'website',
  },
}

const gtmId = 'GTM-MX2RWFNP'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { bodyId, pathname } = await getRouteInfo()
  const isFrontpage = pathname === '/'
  return (
    <html lang="ja">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        {/* Lottie player = sync loading で 初回描画 前 に custom element を確実 に 定義。
            async/defer だと lottie-player render 時点 で 未定義 = fullscreen loading の 初期 フェーズ が empty に見える。 */}
        <script src="https://unpkg.com/@lottiefiles/lottie-player@2.0.12/dist/lottie-player.js" />
      </head>
      <body id={bodyId}>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* client-side navigation で body id を更新 */}
        <BodyIdSetter />
        {/* .animation_fade を viewport 入場 で fadein 化 */}
        <FadeInObserver />
        <div id="pagetop" className="all_container">
          <Header />
          {/* 元 WP header.php と 同じ 位置 = main の 外 に render。
              main の 中 に 置くと body#frontpage の main opacity 0 が 継承 されて loading が 見え ない。 */}
          {isFrontpage && <LoadingAnimation />}
          <main id="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
