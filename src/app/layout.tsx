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
        {/* Lottie player (front-page で使用) */}
        <Script src="https://unpkg.com/@lottiefiles/lottie-player@2.0.12/dist/lottie-player.js" strategy="beforeInteractive" />
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
