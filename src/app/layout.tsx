import type { Metadata } from 'next'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BodyIdSetter from '@/components/BodyIdSetter'
import '@/styles/style.scss'

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
        {/* Lottie player (front-page で使用)。
            Next.js の Script strategy="beforeInteractive" は 実 際 に は 遅延 実行 される =
            fullscreen loading の 初期 フェーズ で lottie が 未 定義 に なる 現象 の 対策 で、
            script 実 タグ で 同期 loading。 */}
        <script async src="https://unpkg.com/@lottiefiles/lottie-player@2.0.12/dist/lottie-player.js" />
      </head>
      <body>
        {/* body id を DOM parse 直後 に 設定 = SCSS の body#frontpage 等 の セレクタ が 初回描画 から効く。
            useEffect ( BodyIdSetter) だと hydration 後 = ローディング アニメーション の 一部 が 効かない タイミング が ある。 */}
        <Script id="body-id-script" strategy="beforeInteractive">
          {`(function(){var m={'/':'frontpage','/about-us':'about-us','/product':'product','/service':'service','/service/ai-and-system':'ai-and-system','/service/ai-x-education':'ai-x-education','/service/support-and-growth':'support-and-growth','/contact':'contact','/thanks':'thanks'};var p=location.pathname.replace(/\\/+$/,'');if(p==='')p='/';document.body.id=m[p]||'other_page';})();`}
        </Script>
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

        <BodyIdSetter />
        <div id="pagetop" className="all_container">
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
