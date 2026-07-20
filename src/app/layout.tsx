import type { Metadata } from 'next'
import Script from 'next/script'
import { headers } from 'next/headers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BodyIdSetter from '@/components/BodyIdSetter'
import FadeInObserver from '@/components/FadeInObserver'
import LoadingAnimation from '@/components/LoadingAnimation'
import '@/styles/style.scss'

// pathname → body id map。 middleware で注入された x-pathname header を使って SSR で決定。
const PATH_TO_ID: Record<string, string> = {
  '/': 'frontpage',
  '/about-us': 'about-us',
  '/product': 'product',
  '/service': 'service',
  '/contact': 'contact',
  '/contact/thanks': 'thanks',
  '/news': 'news',
}

// news 詳細 = 動的 slug は個別に mapping せず、 prefix match で news body id を付ける。
const DYNAMIC_PATH_PREFIXES: { prefix: string; id: string }[] = [
  { prefix: '/news/', id: 'news' },
]

function resolveBodyId(pathname: string): string {
  if (PATH_TO_ID[pathname]) return PATH_TO_ID[pathname]
  for (const { prefix, id } of DYNAMIC_PATH_PREFIXES) {
    if (pathname.startsWith(prefix)) return id
  }
  return 'other_page'
}

async function getRouteInfo(): Promise<{ bodyId: string; pathname: string }> {
  const h = await headers()
  const pathname = h.get('x-pathname') || '/'
  const normalized = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
  return { bodyId: resolveBodyId(normalized), pathname: normalized }
}

export const metadata: Metadata = {
  title: '株式会社Seed',
  description: '身軽になりたい社長の右腕として、業務と意思決定を一つの場で整理するAIプロダクト「Kaika」を開発・提供しています。',
  keywords: 'Kaika, AI, 業務改善, 社長, 意思決定支援, 議事録, 発信支援, AIエージェント, Seed',
  icons: { icon: '/img/favicon.webp' },
  openGraph: {
    title: '株式会社Seed',
    description: '身軽になりたい社長の右腕として、業務と意思決定を一つの場で整理するAIプロダクト「Kaika」を開発・提供しています。',
    images: ['/img/ogp.webp'],
    type: 'website',
  },
}

const gtmId = 'GTM-MX2RWFNP'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { bodyId } = await getRouteInfo()
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
        {/* Lottie player = sync loading で初回描画前に custom element を確実に定義。
            async/defer だと lottie-player render 時点で未定義 = fullscreen loading の初期フェーズが empty に見える。 */}
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
        {/* .animation_fade を viewport 入場で fadein 化 */}
        <FadeInObserver />
        <div id="pagetop" className="all_container">
          <Header />
          {/* 元 WP header.php と同じ位置 = main の外に render。
              root layout は SPA nav で再 render されないため常時 mount し、
              LoadingAnimation 内で usePathname を watch して全 nav に反応する。 */}
          <LoadingAnimation />
          <main id="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
