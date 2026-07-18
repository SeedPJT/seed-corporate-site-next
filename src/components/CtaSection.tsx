import Link from 'next/link'

export default function CtaSection() {
  return (
    <section id="cta">
      <div className="cta_inner innerbox_1180">
        <h2 className="section_title">
          <span className="en_title">contact</span>
          <span className="ja_title">お問い合わせ</span>
        </h2>

        <div className="cta_lower">
          <div className="cta_left">
            ご相談やご質問など、お気軽にお問い合わせください。
          </div>
          <div className="cta_right">
            <Link href="/contact/" className="btn arrow_btn">
              <img src="/img/common/icon_arrow.webp" alt="→" className="arrow" />
              <span className="text">お問い合わせはこちら</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
