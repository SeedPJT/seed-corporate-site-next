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

// body id を DOM parse 前 に 設定 する ため の inline script。
// SCSS の body#frontpage 等 の セレクタ (レスポンシブ含む) が 初回描画 から効く。
const bodyIdScript = `(function(){var m={'/':'frontpage','/about-us':'about-us','/product':'product','/service':'service','/service/ai-and-system':'ai-and-system','/service/ai-x-education':'ai-x-education','/service/support-and-growth':'support-and-growth','/contact':'contact','/contact/thanks':'thanks'};var p=location.pathname.replace(/\\/+$/,'');if(p==='')p='/';var id=m[p]||'other_page';var setId=function(){if(document.body){document.body.id=id;}else{document.addEventListener('DOMContentLoaded',function(){document.body.id=id;});}};setId();})();`

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
        {/* body id を 早期 設定 = レスポンシブ含む body#{id} セレクタが初回描画から効く */}
        <script dangerouslySetInnerHTML={{ __html: bodyIdScript }} />
        {/* Lottie player = defer で HTML parse 完了後、 hydration 前に実行 = custom element が使える状態 に */}
        <script defer src="https://unpkg.com/@lottiefiles/lottie-player@2.0.12/dist/lottie-player.js" />
      </head>
      <body>
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
        <div id="pagetop" className="all_container">
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
