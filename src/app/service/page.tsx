import type { Metadata } from 'next'
import Link from 'next/link'
import CtaSection from '@/components/CtaSection'

export const metadata: Metadata = {
  title: '実装伴走 | 株式会社Seed',
  description: 'Kaikaを社長やチームの業務に定着させる実装伴走サービス。業務要件のヒアリングから右腕設計・実装、運用定着・チューニング、効果測定まで並走します。',
}

export default function ServicePage() {
  return (
    <>
      <div className="service_page_contents_wrapper">
        <section id="fv">
          <div className="fv_text_wrapper innerbox_1280">
            <img src="/img/common/logo_brain.webp" alt="." className="fv_bg" />
            <h2 className="fv_title">
              <span className="fv_title_text"><span className="fv_title_text_brand">Kaika</span>を、<br />業務に<span className="fv_title_text_accent">定着</span>させる。</span>
            </h2>
            <div className="fv_explain section_explain">
              業務に合わせて、プロダクトそのものを拡張。導入で終わらせない、使うほど育つ経営の右腕を、あなたの業務に定着させます。
            </div>
            <div className="fv_btn_wrapper">
              <Link href="/contact/" className="btn black_btn">まずは無料で相談する</Link>
            </div>
          </div>
          <div className="fv_image_wrapper">
            <img src="/img/service/system/feature_01.webp" alt="本質的な課題を捉えた企画・設計" className="fv_main_image" />
            <img src="/img/service/education/fv_icon_left.webp" alt="icon" className="fv_icon fv_icon_left" />
            <img src="/img/service/education/fv_icon_right.webp" alt="icon" className="fv_icon fv_icon_right" />
            <img src="/img/service/education/fv_icon_bottom.webp" alt="icon" className="fv_icon fv_icon_bottom" />
          </div>
        </section>

        <section id="what" className="icon_text_list">
          <img src="/img/service/what_bg_left.webp" alt="." className="what_bg what_bg_left" />
          <img src="/img/service/what_bg_right.webp" alt="." className="what_bg what_bg_right" />
          <div className="what_inner innerbox_1058">
            <h2 className="section_title small_title">
              <span className="en_title">Why?</span>
              <span className="ja_title">AI導入で、こんな失敗ありませんか？</span>
            </h2>
            <div className="section_explain">
              通常のコンサルや汎用SaaSでは起こりがちな3つの失敗。Kaika実装伴走は、それを構造的に乗り越えます。
            </div>

            <div className="icon_text_list_inner">
              <div className="itl_item">
                <div className="itl_item__icon">
                  <div className="itl_num">01</div>
                </div>
                <div className="itl_item__text center">
                  <span className="itl_item__text__title">導入して終わる</span>
                  初期構築は完了、でも業務に定着しない。ツールが増えただけで、実業務は変わらない。
                </div>
              </div>
              <div className="itl_item">
                <div className="itl_item__icon">
                  <div className="itl_num">02</div>
                </div>
                <div className="itl_item__text center">
                  <span className="itl_item__text__title">属人化が続く</span>
                  導入したメンバーが去ると、知識ごと消える。マニュアルを書いても、更新されない。
                </div>
              </div>
              <div className="itl_item">
                <div className="itl_item__icon">
                  <div className="itl_num">03</div>
                </div>
                <div className="itl_item__text center">
                  <span className="itl_item__text__title">効果が測れない</span>
                  「便利になった」感覚はあるけど、利益インパクトが見えない。次の投資判断ができない。
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="what_02">
          <div className="what_inner innerbox_1058">
            <h2 className="section_title small_title">
              <span className="en_title">What?</span>
              <span className="ja_title">普通の業務改善と、ここが違う</span>
            </h2>
            <div className="section_explain">
              「導入して終わり」ではなく、使い続けるほど成果が育つ。Kaika実装伴走ならではの3つの特徴です。
            </div>

            <div className="product_what_inner">
              <div className="pwi_item">
                <div className="pwi_item__icon">
                  <img src="/img/service/support/about_flow_02.webp" alt="プロダクトが、業務に合わせて変わる" className="pwi_item__icon" />
                </div>
                <div className="pwi_item__text">
                  <span className="pwi_item__text__title">プロダクトが、業務に合わせて変わる</span>
                  <span className="pwi_item__text__content">Kaikaは、共通基盤(プロダクト本体)と、あなた専用の右腕の2層構造。基盤の安定性を保ったまま、右腕側を業務要件に合わせて柔軟にカスタム・拡張できる設計です。通常なら「そういう仕様です」で終わる制約も、その場で即判断・即対応。1年後も陳腐化しない業務が定着します。</span>
                </div>
              </div>
              <div className="pwi_item">
                <div className="pwi_item__icon">
                  <img src="/img/service/system/what_01.webp" alt="使うほど、成果が育ち続ける" className="pwi_item__icon" />
                </div>
                <div className="pwi_item__text">
                  <span className="pwi_item__text__title">使うほど、成果が育ち続ける</span>
                  <span className="pwi_item__text__content">伴走が終わった後も、効果が育ち続けます。Kaika自身が使うほど学び、あなたの業務に合わせて自動で進化します。契約終了で改善が止まる、通常のパターンとは違います。</span>
                </div>
              </div>
              <div className="pwi_item">
                <div className="pwi_item__icon">
                  <img src="/img/service/education/what_01.webp" alt="チームの暗黙知が、会社の資産に" className="pwi_item__icon" />
                </div>
                <div className="pwi_item__text">
                  <span className="pwi_item__text__title">チームの暗黙知が、会社の資産に</span>
                  <span className="pwi_item__text__content">暗黙知が、動く仕組みに変わります。日々の会話が、事実とルールとしてKaikaに蓄積。「あの人が覚えていた」に依存しない、資産化された経営体制へ。</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education_who" className="recommend_who">
          <div className="who_inner innerbox_1180">
            <h2 className="who_title section_title small_title">
              <span className="en_title">who?</span>
              <span className="ja_title"><span className="underline">こんな社長</span>に<br className="u_sp" />おすすめです</span>
            </h2>
            <div className="who_contents_wrapper who_size__2">
              <div className="wh_co">
                <img src="/img/product/point_02.webp" alt="属人化から脱却して、資産化した経営体制を作りたい" className="wh_co_image" />
                <div className="wh_co_title">
                  <span className="main_color">属人化から脱却</span>して、<br />
                  資産化した経営体制を作りたい
                </div>
                <div className="wh_co_content center">
                  「あの人が覚えていた」に依存しない体制へ。チームの暗黙知をKaikaに蓄積し、会社の資産に変えます。
                </div>
              </div>
              <div className="wh_co">
                <img src="/img/service/system/who_01.webp" alt="AIプロダクトを導入したいが、社内で実装リソースが足りない社長" className="wh_co_image" />
                <div className="wh_co_title">
                  <span className="main_color">AIプロダクト導入</span>したいが、<br />
                  社内で実装リソースが足りない社長
                </div>
                <div className="wh_co_content center">
                  自社開発は難しいが、AIエージェントを業務に組み込みたい。Seedが実装まで伴走するので、社内リソース不足でも導入を進められます。
                </div>
              </div>
              <div className="wh_co">
                <img src="/img/service/system/who_02.webp" alt="オーダーメイドのAIエージェントを、業務に組み込みたい" className="wh_co_image" />
                <div className="wh_co_title">
                  <span className="main_color">オーダーメイド</span>のAIエージェントを、<br />
                  業務に組み込みたい
                </div>
                <div className="wh_co_content center">
                  汎用SaaSではフィットしない、独自業務プロセスを持つ社長。Kaikaの2層構造で、業務に完全フィットするAIエージェントを構築します。
                </div>
              </div>
              <div className="wh_co">
                <img src="/img/service/system/who_03.webp" alt="継続改善する伴走型パートナーを求めている" className="wh_co_image" />
                <div className="wh_co_title">
                  <span className="main_color">継続改善</span>する<br />
                  伴走型パートナーを求めている
                </div>
                <div className="wh_co_content center">
                  導入で終わらせたくない、使い続けるほど効果が育つ関係を求める社長。Kaikaは使うほど学び、業務変化に追随します。
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="service_step" className="step">
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
                  <span className="st_co_title__text">現状ヒアリング</span>
                </div>
                <div className="st_co_detail">
                  抱えている業務・判断・課題を丁寧に棚卸しし、Kaikaに任せていく順序を一緒に決めます。ご要望に応じた進め方をご提案します。
                </div>
              </div>
              <div className="st_co">
                <div className="st_co_title">
                  <span className="st_co_title__number">Step 03</span>
                  <span className="st_co_title__text">右腕設計・実装</span>
                </div>
                <div className="st_co_detail">
                  業務専用の右腕を設計・実装。Kaikaの2層構造を活かして、業務要件にフィットする右腕に仕上げます。
                </div>
              </div>
              <div className="st_co">
                <div className="st_co_title">
                  <span className="st_co_title__number">Step 04</span>
                  <span className="st_co_title__text">運用定着・チューニング</span>
                </div>
                <div className="st_co_detail">
                  日々の対話の中で「もう少しこうしてほしい」を拾い、右腕を継続的にチューニング。使いながら育てるサイクルを回します。標準装備の使いこなしから個別カスタムまで並走します。
                </div>
              </div>
              <div className="st_co">
                <div className="st_co_title">
                  <span className="st_co_title__number">Step 05</span>
                  <span className="st_co_title__text">効果測定・分析レポート</span>
                </div>
                <div className="st_co_detail">
                  削減できた工数・利益インパクトを定期的に可視化。次に任せる業務や、次に育てたい右腕を、数字とともに設計し直します。
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
