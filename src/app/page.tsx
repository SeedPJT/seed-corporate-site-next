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
              多様性を活かすことは、お互いを尊重しながら、それぞれの尖った個性や才能を存分に発揮し、実を結ぶこと。その実がまた新たな種となり、社会課題の解決や経済の発展へと波及していくと信じています。<br />
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

          <div className="service_contents_wrapper">
            <div className="serv_co">
              <div className="serv_co_text_wrapper">
                <div className="serv_co_number">01</div>
                <div className="serv_co_title">
                  包括的で最適な<br />
                  伴走サービス
                </div>
                <div className="serv_co_text">
                  独自プロダクトKaikaを活用し、個人の特性を把握して、多様な伴走者によって、学習や進路、生活の包括的で最適な伴走をします。
                </div>
              </div>
              <img src="/img/top/service_01.webp" alt="01" className="serv_co_image" />
            </div>

            <div className="serv_co">
              <div className="serv_co_text_wrapper">
                <div className="serv_co_number">02</div>
                <div className="serv_co_title">
                  AI・システムの<br />
                  受託開発
                </div>
                <div className="serv_co_text">
                  顧客の課題分析から参画し、課題解決に直結するAI・システムをオーダーメイドで開発します。
                </div>
              </div>
              <img src="/img/top/service_02.webp" alt="02" className="serv_co_image" />
            </div>

            <div className="serv_co">
              <div className="serv_co_text_wrapper">
                <div className="serv_co_number">03</div>
                <div className="serv_co_title">
                  独自プロダクトを<br />
                  活用した教育支援
                </div>
                <div className="serv_co_text">
                  AI概論、AIプログラミング、生成AIの活用を軸に、学校・塾・企業向けの教育支援をします。
                </div>
              </div>
              <img src="/img/top/service_03.webp" alt="03" className="serv_co_image" />
            </div>
          </div>

          <div className="section_btn_wrapper">
            <Link href="/service/" className="btn arrow_btn">
              <img src="/img/common/icon_arrow.webp" alt="→" className="arrow" />
              <span className="text">サービス一覧へ</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="text_bridge">
        <ul>
          <li>Empowering Personalized Action with AI-Driven Solutions.</li>
          <li>Empowering Personalized Action with AI-Driven Solutions.</li>
        </ul>
      </div>

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
              Kaikaは、個々の特性をデータ分析し、最適な学習・進路・生活支援を実現するAI搭載の学習支援プロダクトです。学びのスタイルや進路の選択肢は人それぞれ。Kaikaは、行動データをもとに一人ひとりに合った支援プランを提案し、多様な伴走者とともに学びと成長をサポートします。<br />
              特性分析による個別最適化を行い、最適な学習プランを設計。さらに、伴走者や伴走マネージャーのサポートによって、進路やキャリアの選択肢を広げることができます。AIによる進捗分析を活用し、学びの内容やサポート方針を柔軟に調整することで、継続的な成長を支援します。
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
