import type { Metadata } from 'next'
import PageHead from '@/components/PageHead'
import CtaSection from '@/components/CtaSection'

export const metadata: Metadata = {
  title: 'About | 株式会社Seed',
}

const CEO_MESSAGE = `Seedは、すべての人が互いの多面性を理解し、尊重し合える社会の実現を目指し、そのために一人ひとりに最適な学習支援を提供します。
社名には、種をまき、花を咲かせ、実を結ぶように、次世代の社会を多様性と包摂性に満ちたものへと育てる一助になりたいという思いを込めました。
私たちは、行動データに基づいた精密な特性分析を行い、個々の目標に応じた最適なカリキュラムを提案する技術の開発に取り組んでいます。一人ひとりに合った包括的な学びの機会を提供し、自立を支援することが私たちの使命です。
この理念のもと、私は教育とテクノロジーの力を活用し、学びの機会を広げることに挑戦し続けます。システムやAIの開発を進めるとともに、教育現場にも関わり続けることで、より良い社会の実現に貢献していきます。
Seedは、常に顧客の声に耳を傾け、クオリティの高い製品とサービスを追求し続ける企業でありたいと考えています。今後とも、皆さまのご支援をよろしくお願いいたします。`

const CEO_INTRO = `1998年、千葉県市川市生まれ。2023年、筑波大学大学院 情報理工学位プログラム修了。
在学中よりシステムの受託開発に携わる一方で、不登校支援団体の世話人として活動。不登校の生徒と支援者の間にあるジェネレーションギャップの課題を実感する。
この経験をもとに、一人ひとりに寄り添った学習支援の実現を目指し、2024年に株式会社Seedを設立。`

const CEO_NAME = '株式会社Seed 代表取締役CEO　井上 峻之介'
const CEO_IMG = '/img/about/ceo.png'

const COMPANY_DETAILS = [
  { label: '会社名', content: '株式会社Seed' },
  { label: '設立', content: '2024年12月6日' },
  { label: '所在地', content: '東京都足立区千住3-6 ツオード千住壱番館1001号室' },
  { label: '代表者', content: '井上 峻之介' },
  { label: '事業内容', content: '包括的で最適な伴走サービス、AI・システムの受託開発、独自プロダクトを活用した教育支援' },
]

const MAP_SRC = 'https://www.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%B6%B3%E7%AB%8B%E5%8C%BA%E5%8D%83%E4%BD%8F3-6+%E3%83%84%E3%82%AA%E3%83%BC%E3%83%89%E5%8D%83%E4%BD%8F%E5%A3%B1%E7%95%AA%E9%A4%A8&hl=ja&z=18&output=embed'

// 段落 中 の 改行 を <br /> に = WP の nl2br 相当。
const nl2br = (text: string) =>
  text.split('\n').map((line, i, arr) => (
    <span key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </span>
  ))

export default function AboutUs() {
  return (
    <>
      <PageHead en="about us" ja="About" />

      <div className="page_contents_wrapper about__page_contents_wrapper">
        <div className="about_flex_section_wrapper">
          <section id="vision" className="about_flex_section innerbox_1180">
            <div className="afsw_text_wrapper">
              <h2 className="section_title small_title">
                <span className="en_title">vision</span>
                <span className="ja_title">多様な価値観が活かされる<br />包摂的な社会を創る</span>
              </h2>
              <div className="section_explain">
                世界には、さまざまな価値観や背景を持つ人々が共に生きています。<br />
                <span className="main_color bold">私たちは、一人ひとりの価値観が尊重され、活かされる社会を築くことが不可欠だと考えています。</span><br />
                多様な価値観が受け入れられることで、人々はより自由に、自分らしく生きられるようになります。さらに、異なる視点やアイデアが交わることで、新たな解決策や創造的なアプローチが生まれ、組織や社会全体の生産性や創造性を高めます。<br />
                <span className="main_color bold">私たちは、多様性を力に変え、誰もが活躍できる未来を共に創造していきます。</span>
              </div>
            </div>
            {/* @ts-expect-error lottie-player custom element */}
            <lottie-player src="/img/about/vision_main.json" background="transparent" speed="1" class="afsw_image" loop autoplay />
          </section>

          <section id="mission" className="about_flex_section innerbox_1180">
            <div className="afsw_text_wrapper">
              <h2 className="section_title small_title">
                <span className="en_title">mission</span>
                <span className="ja_title">一人ひとりが自立化につながる道を<br className="u_pc" />主体的に選択できるようにする</span>
              </h2>
              <div className="section_explain">
                私たちは、<span className="main_color bold">多様な価値観や背景を持つすべての人が、自らの可能性を信じ、主体的に自立の道を選べる環境を築く</span>ことを目指しています。しかし、社会や組織には依然として固定観念が根強く残り、個人の選択肢を制限してしまうことがあります。<br />
                そこで私たちは、多様な情報やリソースを提供し、一人ひとりに最適な選択肢を提示し、共に歩みます。AIを活用することで、客観的なデータに基づいた選択肢を提示しつつ、感情のケアや生活や意思決定の支援は人が寄り添いながら行うことで、より深いサポートを実現します。<br />
                さらに、<span className="main_color bold">社会全体の基盤づくりにも取り組みます。</span>教育や学びの機会の提供、AI・システムの導入支援、異業種との連携を通じて、多様な人々が活躍できる仕組みを構築し、持続可能な社会の実現を目指します。<br />
                <span className="main_color bold">どんな背景を持つ人でも、急速に変化する社会の中で取り残されることなく、自らの意志で未来を選択できる世界を実現する。</span>それが、私たちの使命です。
              </div>
            </div>
            {/* @ts-expect-error lottie-player custom element */}
            <lottie-player src="/img/about/mission_main.json" background="transparent" speed="1" class="afsw_image" loop autoplay />
          </section>

          <section id="values" className="about_flex_section innerbox_1180">
            <h2 className="section_title small_title">
              <span className="en_title">values</span>
              <span className="ja_title">私たちは<span className="pink">「情熱 / 多様性 / 多面的思考 / 創造性 / ワクワク」</span>を<br className="u_pc" />核となる価値観として掲げています。</span>
            </h2>
            <div className="afsw_text_wrapper">
              <ul className="values_explain_list">
                <li className="vel_item">
                  <div className="vel_item_title">
                    <img src="/img/about/values_icon_01.webp" alt="01" className="icon" />
                    <span className="text">やりたいことを徹底的に追求しよう</span>
                  </div>
                  <div className="vel_item_text">
                    やりたいことに没頭し、情熱を持って取り組む人こそ、大きな成果を生み出します。
                  </div>
                </li>
                <li className="vel_item">
                  <div className="vel_item_title">
                    <img src="/img/about/values_icon_02.webp" alt="02" className="icon" />
                    <span className="text">多様性を大切にし、多面的な視点を持とう</span>
                  </div>
                  <div className="vel_item_text">
                    異なる価値観や背景を尊重し、多面的な視点で物事を捉えることで、革新的なアイデアやより良い解決策が生まれます。
                  </div>
                </li>
                <li className="vel_item">
                  <div className="vel_item_title">
                    <img src="/img/about/values_icon_03.webp" alt="03" className="icon" />
                    <span className="text">ワクワクする選択をしよう</span>
                  </div>
                  <div className="vel_item_text">
                    ワクワクするかどうかを意思決定の基準にすることで、<br />情熱と創造性が最大限に引き出され、長期的な成長につながります。
                  </div>
                </li>
              </ul>
            </div>
            {/* @ts-expect-error lottie-player custom element */}
            <lottie-player src="/img/about/values_main.json" background="transparent" speed="1" class="afsw_image" loop autoplay />
          </section>
        </div>

        <section id="message">
          <div className="message_inner innerbox_1180">
            <div className="message_main_contents">
              <div className="message_text_wrapper">
                <h2 className="section_title">
                  <span className="en_title">message</span>
                  <span className="ja_title">代表メッセージ</span>
                </h2>
                <img src={CEO_IMG} alt={CEO_NAME} className="message_image u_sp" />
                <div className="message_main_text">{nl2br(CEO_MESSAGE)}</div>
                <div className="message_name">{CEO_NAME}</div>
              </div>
              <img src={CEO_IMG} alt={CEO_NAME} className="message_image u_pc" />
            </div>
            <div className="message_sub_contents">
              <div className="message_sub_title">代表紹介</div>
              <div className="message_sub_text">{nl2br(CEO_INTRO)}</div>
            </div>
          </div>
        </section>

        <section id="company">
          <div className="company_inner innerbox_1180">
            <h2 className="section_title">
              <span className="en_title">Company</span>
              <span className="ja_title">会社概要</span>
            </h2>
            <div className="company_contents_wrapper">
              <div className="company_co_map">
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                  <iframe
                    src={MAP_SRC}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              <ul className="company_co_details">
                {COMPANY_DETAILS.map((d) => (
                  <li key={d.label} className="company_co_details_item">
                    <div className="ccdi_lebel">{d.label}</div>
                    <div className="ccdi_content">{nl2br(d.content)}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>

      <CtaSection />
    </>
  )
}
