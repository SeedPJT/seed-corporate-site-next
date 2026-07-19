import type { Metadata } from 'next'
import PageHead from '@/components/PageHead'
import CtaSection from '@/components/CtaSection'

export const metadata: Metadata = {
  title: 'About | 株式会社Seed',
}

const CEO_MESSAGE = `会社員からフリーランス、そして経営者へと歩む中で、私は自分と他人の責任を混同し、本当に重要なことではなく、不安や責任にエネルギーを使っていた時期がありました。
だからこそ、事業に向き合う社長が、本当に重要なことに集中し、自分の望みから価値を生み出せるような環境を実現したい。その想いで、Kaikaを開発しました。
Seedは、常に顧客の声に耳を傾け、身軽になりたい社長を支えるプロダクトを追求し続けます。今後とも、皆さまのご支援をよろしくお願いいたします。`

const CEO_INTRO = `1998年、千葉県市川市生まれ。2023年、筑波大学大学院情報理工学位プログラム修了(自然言語処理研究)。
在学中よりシステムの受託開発に携わり、修了後は株式会社pluszero(AIスタートアップ)にて4年間、AIモデル研究開発とシステム/AIの受託開発、プロジェクトマネジメントを担当。技術とビジネス両方の視点から、業務改善を得意とする。
2024年12月に株式会社Seedを設立し、独自プロダクトKaikaを開発。2件の独自特許技術(1件取得済、1件出願中)を保有。
主な受賞歴は、全国大学ビジコンファイナリスト / cvg東京大会優秀賞 / 立命館大学学生ベンチャーコンテスト最優秀賞 / MIT-VFJ HIROメモリアル賞。`

const CEO_NAME = '株式会社Seed 代表取締役CEO　井上峻之介'
const CEO_IMG = '/img/about/ceo.png'

const COMPANY_DETAILS = [
  { label: '会社名', content: '株式会社Seed' },
  { label: '設立', content: '2024年12月6日' },
  { label: '所在地', content: '東京都足立区千住3-6 ツオード千住壱番館1001号室' },
  { label: '代表者', content: '井上峻之介' },
  { label: '事業内容', content: 'AIプロダクト「Kaika」の開発・提供、Kaika実装伴走(受託開発)' },
]

const MAP_SRC = 'https://www.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%B6%B3%E7%AB%8B%E5%8C%BA%E5%8D%83%E4%BD%8F3-6+%E3%83%84%E3%82%AA%E3%83%BC%E3%83%89%E5%8D%83%E4%BD%8F%E5%A3%B1%E7%95%AA%E9%A4%A8&hl=ja&z=18&output=embed'

// 段落中の改行を <br /> に = WP の nl2br 相当。
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
                <span className="ja_title">誰もが本来の自分の行動に<br className="u_pc" />熱中できる社会を創る</span>
              </h2>
              <div className="section_explain">
                人生の早くから責任を背負ってきた人、他人のためにエネルギーを注ぎ続けてきた人たち。<span className="main_color bold">本来の自分から離れてしまった人も含めて、私たちは、一人ひとりが本来の自分の行動に熱中できる社会を創ります。</span>
              </div>
            </div>
            {/* @ts-expect-error lottie-player custom element */}
            <lottie-player src="/img/about/vision_main.json" background="transparent" speed="1" class="afsw_image" loop autoplay />
          </section>

          <section id="mission" className="about_flex_section innerbox_1180">
            <div className="afsw_text_wrapper">
              <h2 className="section_title small_title">
                <span className="en_title">mission</span>
                <span className="ja_title">散らかった行動を整理し、<br className="u_pc" />価値ある情報に変える</span>
              </h2>
              <div className="section_explain">
                発達障害の傾向や行動量が多く、頭の中が散らかっていて自分だけで整理するのが難しい人も含めて、<span className="main_color bold">Kaikaが情報の構造化を担い、人は本質的な判断と行動に集中できるようにします。</span>
              </div>
            </div>
            {/* @ts-expect-error lottie-player custom element */}
            <lottie-player src="/img/about/mission_main.json" background="transparent" speed="1" class="afsw_image" loop autoplay />
          </section>

          <section id="values" className="about_flex_section innerbox_1180">
            <h2 className="section_title small_title">
              <span className="en_title">values</span>
              <span className="ja_title">私たちは<span className="pink">「圧倒的没頭 / 多面的思考 / 直感的選択」</span>を<br className="u_pc" />核となる価値観として掲げています。</span>
            </h2>
            <div className="afsw_text_wrapper">
              <ul className="values_explain_list">
                <li className="vel_item">
                  <div className="vel_item_title">
                    <img src="/img/about/values_icon_01.webp" alt="01" className="icon" />
                    <span className="text">やりたいことに圧倒的に没頭しよう</span>
                  </div>
                  <div className="vel_item_text">
                    やりたいことに没頭し、情熱を持って取り組む人こそ、大きな成果を生み出します。
                  </div>
                </li>
                <li className="vel_item">
                  <div className="vel_item_title">
                    <img src="/img/about/values_icon_02.webp" alt="02" className="icon" />
                    <span className="text">多様性を大切にし、多面的な思考を持とう</span>
                  </div>
                  <div className="vel_item_text">
                    異なる価値観や背景を尊重し、多面的な視点で物事を捉えることで、革新的なアイデアやより良い解決策が生まれます。
                  </div>
                </li>
                <li className="vel_item">
                  <div className="vel_item_title">
                    <img src="/img/about/values_icon_03.webp" alt="03" className="icon" />
                    <span className="text">直感的な選択をしよう</span>
                  </div>
                  <div className="vel_item_text">
                    心がワクワクするかどうかを意思決定の基準にすることで、情熱と創造性が最大限に引き出され、長期的な成長につながります。
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
