import Link from 'next/link'
import CtaSection from '@/components/CtaSection'
import {
  getAllNews,
  NEWS_CATEGORIES,
  formatNewsDate,
  getThumbnailOrDefault,
  isThumbnailFallback,
} from '@/lib/news'

export default function Home() {
  const latestNews = getAllNews().slice(0, 3)
  return (
    <>
      <section id="fv">
        <div className="fv_inner innerbox_1280">
          <h2 className="fv_title">
            <div className="fv_title_inner">From Diversity, <br />Innovation Grows<span></span></div>
          </h2>
          <h3 className="fv_subtitle">
            <div className="fv_title_inner">多様性からイノベーションが育つ<span></span></div>
          </h3>
          <div className="fv_scroll_icon">
            <img src="/img/common/icon_arrow_black.webp" alt="↓" className="arrow" />
            <span className="text">Please Scroll</span>
          </div>
        </div>
      </section>

      <section id="message">
        <div className="message_inner innerbox_1180">
          <div className="message_text_wrapper">
            <h2 className="section_title">
              <span className="en_title">Message</span>
              <span className="ja_title">尖りを活かそう。</span>
            </h2>
            <div className="section_explain">
              私たちSeedは、多様性こそが個人の力を引き出し、社会を進化させる原動力だと考えています。<br />
              種が芽吹き、花を咲かせ、やがて実を結ぶように、私たちは、多様な価値観が活かされる包摂的な社会を育てるための&quot;種&quot;をまき続けます。<br />
              違いを恐れず、それぞれの&quot;尖り&quot;を力に変え、未来を切り拓こう。
            </div>
            <div className="section_btn_wrapper u_pc">
              <Link href="/about-us/" className="btn arrow_btn">
                <img src="/img/common/icon_arrow.webp" alt="→" className="arrow" />
                <span className="text">Seedについて</span>
              </Link>
            </div>
          </div>

          <div className="message_triangle_wrapper">
            <div className="message_triangle flex_center">
              <span className="en_text">Vision</span>
              <span className="ja_text">
                誰もが本質的な行動に<br />
                熱中できるような<br />
                社会を創る
              </span>
            </div>
            <div className="message_triangle flex_center">
              <span className="en_text">Mission</span>
              <span className="ja_text">
                散らかった行動を整理し、<br />
                価値ある情報に変える
              </span>
            </div>
            <div className="message_triangle flex_center">
              <span className="en_text">Values</span>
              <span className="ja_text">
                圧倒的没頭 /<br />
                多面的思考 /<br />
                直感的選択
              </span>
            </div>
          </div>

          <div className="section_btn_wrapper u_sp">
            <Link href="/about-us/" className="btn arrow_btn">
              <img src="/img/common/icon_arrow.webp" alt="→" className="arrow" />
              <span className="text">Seedについて</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="product">
        <div className="product_inner innerbox_1180">
          <div className="product_text_wrapper">
            <h2 className="section_title">
              <span className="en_title">product</span>
              <span className="ja_title">プロダクト紹介</span>
            </h2>
            <div className="section_subtitle">
              Kaika<span className="small">（Keep Advancing with Innovative Knowledge Assistance）</span>
            </div>
            <div className="section_explain">
              Kaikaは、社長の日々の業務と意思決定を一つの場で整理できるAIプロダクトです。<br />
              個人やチームのプロジェクトや振り返りがKaikaに蓄積され、業務も経営判断も、次の一手に繋がる状態へ。<br />
              散らかりを整理するだけでなく、発信や分析にも活かし、社長を支えます。
            </div>
            <div className="section_btn_wrapper">
              <Link href="/product/" className="btn arrow_btn">
                <img src="/img/common/icon_arrow.webp" alt="→" className="arrow" />
                <span className="text">プロダクト詳細へ</span>
              </Link>
            </div>
          </div>
          <div className="product_image_wrapper">
            <img src="/img/product/fv_main.webp" alt="プロダクト" className="product_image" />
          </div>
        </div>
      </section>

      <div className="text_bridge">
        <ul>
          <li>Empowering Personalized Action with AI-Driven Solutions.</li>
          <li>Empowering Personalized Action with AI-Driven Solutions.</li>
        </ul>
      </div>

      <section id="service">
        <div className="service_inner innerbox_1180">
          <h2 className="section_title">
            <span className="en_title">Service</span>
            <span className="ja_title">私たちができること</span>
          </h2>
          <div className="section_explain">
            Seedは、テクノロジーと人の力を融合し、一人ひとりの散らかった行動を整理し、本質的な行動に熱中できる環境をつくります。<br />
            独自プロダクト Kaika は、業務の実行や、意思決定の整理を一つの場で行える AI プロダクトです。身軽になりたい社長に伴走します。
          </div>

          <div className="service_contents_wrapper service_contents_wrapper__single">
            <div className="serv_co">
              <img src="/img/top/service_02.webp" alt="Kaika実装伴走" className="serv_co_image" />
              <div className="serv_co_text_wrapper">
                <div className="serv_co_title">Kaika実装伴走</div>
                <div className="serv_co_text">
                  Kaikaを社長の業務に組み込む、月額定額の伴走支援。<br />
                  業務要件のヒアリングから実装、運用定着まで並走します。
                </div>
                <div className="serv_co_btn_wrapper">
                  <Link href="/service/" className="btn arrow_btn">
                    <img src="/img/common/icon_arrow.webp" alt="→" className="arrow" />
                    <span className="text">詳しく見る</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {latestNews.length > 0 && (
        <section id="news">
          <div className="news_inner innerbox_1180">
            <div className="section_title_wrapper">
              <h2 className="section_title">
                <span className="en_title">news</span>
                <span className="ja_title">お知らせ</span>
              </h2>
              <div className="section_btn_wrapper news_btn_wrapper news_btn_wrapper__pc">
                <Link href="/news/" className="btn arrow_btn">
                  <img src="/img/common/icon_arrow.webp" alt="→" className="arrow" />
                  <span className="text">お知らせ一覧へ</span>
                </Link>
              </div>
            </div>

            <div className="news_contents_wrapper archive_main_contents">
              {latestNews.map((item) => (
                <Link key={item.slug} href={`/news/${item.slug}/`} className="co">
                  <img
                    src={getThumbnailOrDefault(item)}
                    alt={item.title}
                    className={`co_image${isThumbnailFallback(item) ? ' co_image__fallback' : ''}`}
                  />
                  <div className="co_title">{item.title}</div>
                  <div className="co_date">{formatNewsDate(item.date)}</div>
                  <div className="co_cats_wrapper category_wrapper">
                    <span className="co_cat_item cat_item">{NEWS_CATEGORIES[item.category]}</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="section_btn_wrapper news_btn_wrapper news_btn_wrapper__sp">
              <Link href="/news/" className="btn arrow_btn">
                <img src="/img/common/icon_arrow.webp" alt="→" className="arrow" />
                <span className="text">お知らせ一覧へ</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      <CtaSection />
    </>
  )
}
