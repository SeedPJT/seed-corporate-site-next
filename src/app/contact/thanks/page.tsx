import type { Metadata } from 'next'
import Link from 'next/link'
import PageHead from '@/components/PageHead'
import CtaSection from '@/components/CtaSection'

export const metadata: Metadata = {
  title: 'お問い合わせ | 株式会社Seed',
  icons: { icon: '/img/favicon.webp' },
}

export default function Thanks() {
  return (
    <>
      <PageHead
        en="contact"
        ja="お問い合わせ"
        extraCrumbs={[{ label: 'お問い合わせ', href: '/contact/' }]}
      />

      <div className="page_contents_wrapper innerbox_980">
        <div className="page_inner">
          <img src="/img/contact/thanks_check.webp" alt="&check;" className="thanks_icon" />

          <h3 className="contact_thanks_title">お問い合わせ<br className="u_sp" />ありがとうございます</h3>

          <div className="contact_explain">
            <span>ご記入いただいた情報は無事送信されました。<br />担当者より、通常2〜3営業日以内にご連絡いたします。</span>
            <span>お急ぎの場合や、しばらく経ってもご連絡が届かない場合は、<br /><Link href="/contact/" className="link green">お問い合わせフォーム</Link>より再度お知らせください。</span>
          </div>

          <div className="contact_return_btn_wrapper">
            <Link href="/" className="btn green_btn">TOPページへ戻る</Link>
          </div>
        </div>
      </div>

      <CtaSection />
    </>
  )
}
