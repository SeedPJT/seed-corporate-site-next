import type { Metadata } from 'next'
import Link from 'next/link'
import CtaSection from '@/components/CtaSection'

export const metadata: Metadata = {
  title: 'Support & Growth | 株式会社Seed',
}

export default function SupportAndGrowth() {
  return (
    <>
      <div className="service_page_contents_wrapper">
        <section id="fv">
          <div className="fv_title_wrapper innerbox_1220">
            <h2 className="fv_title">
              尖りを<span className="main_color">伸ばし</span>、弱みを<span className="main_color">補い</span>、<br />
              社会で<span className="pink">自立する力</span>を育む場&ensp;
            </h2>
          </div>

          <div className="fv_subcontents_wrapper">
            <div className="fv_sub_left">
              <Link href="/contact/" className="btn fv_contact_btn">
                <img src="/img/common/icon_mail.webp" alt="MAIL" className="icon_mail" />
                <span className="text">まずはお気軽に<br className="u_pc" />ご相談ください！</span>
                <img src="/img/common/icon_arrow.webp" alt="→" className="icon_arrow" />
              </Link>
            </div>
            <div className="fv_sub_center">
              {/* @ts-expect-error lottie-player custom element */}
              <lottie-player src="/img/service/support/fv_main_pc.json" background="transparent" speed="1" loop autoplay class="u_pc" />
              {/* @ts-expect-error lottie-player custom element */}
              <lottie-player src="/img/service/support/fv_main_sp.json" background="transparent" speed="1" loop autoplay class="u_sp" />
            </div>
            <div className="fv_sub_right">
              <div className="fv_explain_text">
                Seedは、学校の枠にとらわれずに学びたい子どもたちの、学びと心身の成長を支える包括的で最適な伴走を提供します。
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="about_inner innerbox_1280">
            <picture>
              <source srcSet="/img/service/support/about_bg_sp.webp" media="(max-width: 768px)" />
              <img src="/img/service/support/about_bg.webp" alt="." className="about_bg animation_fade" />
            </picture>

            <div className="about_maincontents_wrapper">
              <div className="amcw_text_wrapper">
                <h2 className="amcw_title section_title">
                  {/* @ts-expect-error lottie-player custom element */}
                  <lottie-player src="/img/service/support/about_en_title.json" background="transparent" speed="0.5" class="en_title_image lazy_lottie" preload="none" />
                  <span className="ja_title">伴走サービスとは？</span>
                </h2>
                <div className="amcw_explain section_explain">
                  伴走サービスは、お子さん一人ひとりの特性や課題に寄り添い、専門家チームが包括的なサポートをしながら、お子さんの自立化を支援するサービスです。<br />
                  サービスでは、独自プロダクトKaikaを活用し、お子さんの特性をアセスメントし、専任の伴走マネージャーがお子さんの特性・価値観・才能・情熱から、最適なカリキュラムを提案します。さらに伴走時のお子さんの情報もKaikaで記録することで、分析レポートによる効果測定が行え、進捗に応じた目標設定とカリキュラムの見直しを行います。
                </div>
                <div className="amcw_sub_explain">
                  <span className="text">お子さまの「ワクワク」という感情を大切にしています。基礎学力の向上はもちろん、ソーシャルスキルやライフスキルを育むことで、将来的な自立をサポートします。</span>
                  {/* @ts-expect-error lottie-player custom element */}
                  <lottie-player src="/img/service/support/about_sub_explain.json" background="transparent" speed="1" class="image" preload="none" loop autoplay />
                </div>
              </div>

              <div className="amcw_image_wrapper">
                <img src="/img/service/support/about_main_01.webp" alt="01" className="amcw_main_image amcw_main_image_01 animation_fade" />
                <img src="/img/service/support/about_main_02.webp" alt="02" className="amcw_main_image amcw_main_image_02 animation_fade" />
                <img src="/img/service/support/about_main_03.webp" alt="03" className="amcw_main_image amcw_main_image_03 animation_fade" />
                <img src="/img/service/support/about_main_bg.webp" alt="伴走サービスとは？" className="amcw_bg_image" />
              </div>
            </div>
          </div>
        </section>

        <section id="about_flow" className="icon_text_list">
          <h2 className="about_flow_title">伴走サービスの流れ</h2>
          <div className="icon_text_list_inner innerbox_1058">
            <div className="itl_item">
              <div className="itl_item__icon">
                <img src="/img/service/support/about_flow_01.webp" alt="お子さんの特性のアセスメント" className="itl_item__icon" />
              </div>
              <div className="itl_item__text center">
                お子さんの<span className="main_color fs_22">特性</span>の<span className="main_color fs_22">アセスメント</span>
              </div>
            </div>
            <div className="itl_item">
              <div className="itl_item__icon">
                <img src="/img/service/support/about_flow_02.webp" alt="最適な伴走サービスの提供" className="itl_item__icon" />
              </div>
              <div className="itl_item__text center">
                <span className="main_color fs_22">最適</span>な<span className="main_color fs_22">伴走</span>サービスの提供
              </div>
            </div>
            <div className="itl_item">
              <div className="itl_item__icon">
                <img src="/img/service/support/about_flow_03.webp" alt="分析レポートによる効果測定" className="itl_item__icon" />
              </div>
              <div className="itl_item__text center">
                <span className="main_color fs_22">分析レポート</span>による<span className="main_color fs_22">効果測定</span>
              </div>
            </div>
          </div>
        </section>

        <section id="feature" className="number_image_list">
          <div className="feature_title_wrapper innerbox_1180">
            <h2 className="feature_title section_title">
              {/* @ts-expect-error lottie-player custom element */}
              <lottie-player src="/img/service/support/feature_en_title.json" background="transparent" speed="0.5" class="en_title_image lazy_lottie" preload="none" />
              <span className="ja_title">伴走サービスの特徴</span>
            </h2>
            <picture>
              <source srcSet="/img/service/support/feature_decoration_sp.webp" media="(max-width: 768px)" />
              <img src="/img/service/support/feature_decoration.webp" alt="." className="feature_title_decolation" />
            </picture>
          </div>

          <div className="number_image_list_inner innerbox_1180">
            <div className="nil_co">
              <div className="nil_co_image_wrapper">
                <img src="/img/service/support/feature_01.webp" alt="01" className="nil_co_image" />
              </div>
              <div className="nil_co_text_wrapper">
                <div className="nil_co_title">
                  <span className="nil_co_title__number">01</span>
                  <span className="nil_co_title__text">
                    お子さんの特性に合わせた<br />
                    カスタムメイドの伴走
                  </span>
                </div>
                <div className="nil_co_explain">
                  AIの分析をもとに専任の伴走マネージャーが対話を重ね、お子さんに一人ひとりに応じた最適なプランを提案します。
                </div>
                <ul className="nil_co_list">
                  <li className="nil_co_list_item">
                    <img src="/img/service/support/feature_icon_01_01.webp" alt="01" className="icon" />
                    <div className="text">一人ひとりの状況に寄り添い、<span className="main_color">最適な伴走プラン</span>を設計</div>
                  </li>
                  <li className="nil_co_list_item">
                    <img src="/img/service/support/feature_icon_01_02.webp" alt="02" className="icon" />
                    <div className="text">目標達成に向けた<span className="main_color">最適なカリキュラム</span>を提案</div>
                  </li>
                  <li className="nil_co_list_item">
                    <img src="/img/service/support/feature_icon_01_03.webp" alt="03" className="icon" />
                    <div className="text">「じっくり」「すぐに結果を」など、<span className="main_color">希望のペースに応じた伴走</span></div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="nil_co">
              <div className="nil_co_image_wrapper">
                <img src="/img/service/support/feature_02.webp" alt="02" className="nil_co_image" />
              </div>
              <div className="nil_co_text_wrapper">
                <div className="nil_co_title">
                  <span className="nil_co_title__number">02</span>
                  <span className="nil_co_title__text">
                    将来の選択肢を広げることに<br className="u_pc" />焦点を当てた伴走
                  </span>
                </div>
                <div className="nil_co_explain">
                  学習の伴走では、将来の自立を目標として、お子さんの興味と強みを活かし、苦手な分野を補うカスタムメイドの教材を使用します。
                </div>
                <ul className="nil_co_list">
                  <li className="nil_co_list_item">
                    <img src="/img/service/support/feature_icon_02_01.webp" alt="01" className="icon" />
                    <div className="text">基礎学力だけでなく、<span className="main_color">ソーシャルスキルやライフスキルの習得</span>もサポート</div>
                  </li>
                  <li className="nil_co_list_item">
                    <img src="/img/service/support/feature_icon_02_02.webp" alt="02" className="icon" />
                    <div className="text">基礎学力が社会でどう活かされるかを<span className="main_color">実践的に指導</span></div>
                  </li>
                  <li className="nil_co_list_item">
                    <img src="/img/service/support/feature_icon_02_03.webp" alt="03" className="icon" />
                    <div className="text"><span className="main_color">一人では気づきにくい興味や強み</span>を共に発見し、伸ばしていく</div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="nil_co">
              <div className="nil_co_image_wrapper">
                <img src="/img/service/support/feature_03.webp" alt="03" className="nil_co_image" />
              </div>
              <div className="nil_co_text_wrapper">
                <div className="nil_co_title">
                  <span className="nil_co_title__number">03</span>
                  <span className="nil_co_title__text">
                    学習だけでなく、<br />
                    心身の健康も重視した伴走
                  </span>
                </div>
                <div className="nil_co_explain">
                  臨床心理士や整体師など多様な伴走者とともに、心と身体の健康を支える包括的な伴走を提供し、お子さんの潜在能力を最大限に引き出します。
                </div>
                <ul className="nil_co_list">
                  <li className="nil_co_list_item">
                    <img src="/img/service/support/feature_icon_03_01.webp" alt="01" className="icon" />
                    <div className="text"><span className="main_color">多様な専門性を持つ伴走者</span>が連携し、総合的にサポート</div>
                  </li>
                  <li className="nil_co_list_item">
                    <img src="/img/service/support/feature_icon_03_02.webp" alt="02" className="icon" />
                    <div className="text">心が落ち込んだときも寄り添い、<span className="main_color">穏やかな状態へ導く</span></div>
                  </li>
                  <li className="nil_co_list_item">
                    <img src="/img/service/support/feature_icon_03_03.webp" alt="03" className="icon" />
                    <div className="text"><span className="main_color">自律神経の乱れにアプローチ</span>し、健やかな心身を保つサポート</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="who">
          <div className="who_inner innerbox_1180">
            <img src="/img/service/support/who_bg.webp" alt="." className="who_bg" />
            <h2 className="section_title small_title">
              <span className="en_title">who?</span>
              <span className="ja_title"><span className="underline">こんなお子さん</span>におすすめです</span>
            </h2>
            <div className="who_contents_wrapper">
              <div className="wh_co">
                <img src="/img/service/support/who_01.webp" alt="01" className="wh_co_image" />
                <div className="wh_co_text"><span className="main_color">得意</span>をさらに伸ばしたい！</div>
              </div>
              <div className="wh_co">
                <img src="/img/service/support/who_02.webp" alt="02" className="wh_co_image" />
                <div className="wh_co_text"><span className="main_color">苦手を克服</span>し、<br />自信をつけたい！</div>
              </div>
              <div className="wh_co">
                <img src="/img/service/support/who_03.webp" alt="03" className="wh_co_image" />
                <div className="wh_co_text"><span className="main_color">将来の可能性</span>を広げたい！</div>
              </div>
              <div className="wh_co">
                <img src="/img/service/support/who_04.webp" alt="04" className="wh_co_image" />
                <div className="wh_co_text"><span className="main_color">社会スキル</span>を高めたい！</div>
              </div>
              <div className="wh_co">
                <img src="/img/service/support/who_05.webp" alt="05" className="wh_co_image" />
                <div className="wh_co_text"><span className="main_color">心と身体の健康</span>を<br />大切にしたい！</div>
              </div>
            </div>
          </div>
        </section>

        <section id="support_step" className="step">
          <img src="/img/service/step_bg.webp" alt="." className="step_bg" />
          <div className="step_inner innerbox_1180">
            <h2 className="section_title small_title step_title">
              <span className="en_title">step</span>
              <span className="ja_title">サービスの流れ</span>
            </h2>
            <div className="step_contents_wrapper">
              <div className="st_co">
                <div className="st_co_title">
                  <span className="st_co_title__number">Step 01</span>
                  <span className="st_co_title__text">お問い合わせ</span>
                </div>
                <div className="st_co_detail">
                  まずは、お気軽にご相談ください。お問い合わせフォームは<Link href="/contact/" className="link">こちら</Link>
                </div>
              </div>
              <div className="st_co">
                <div className="st_co_title">
                  <span className="st_co_title__number">Step 02</span>
                  <span className="st_co_title__text">初回相談<span className="text_small"> (オンラインor対面)</span></span>
                </div>
                <div className="st_co_detail">
                  専任の伴走マネージャーがお子さんの特性・価値観・才能・情熱から、最適なカリキュラムを提案します。
                </div>
              </div>
              <div className="st_co">
                <div className="st_co_title">
                  <span className="st_co_title__number">Step 03</span>
                  <span className="st_co_title__text">伴走サービスの開始</span>
                </div>
                <div className="st_co_detail">
                  多様な伴走者によって、学びや進路、生活をサポートします。
                </div>
              </div>
              <div className="st_co">
                <div className="st_co_title">
                  <span className="st_co_title__number">Step 04</span>
                  <span className="st_co_title__text">継続的な効果測定と調整</span>
                </div>
                <div className="st_co_detail">
                  伴走時のお子さんの情報も記録することで、分析レポートによる効果測定が行え、進捗に応じた目標設定とカリキュラムの見直しを行います。
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <CtaSection />
    </>
  )
}
