import type { Metadata } from 'next'
import Link from 'next/link'
import CtaSection from '@/components/CtaSection'

// Kaika実装伴走 の詳細 page。 元 WP の /service/support-and-growth/ の SCSS 構造を流用、
// 中身 は Kaika実装伴走 の brand 方向 に書き換え。 animation ( fv の lottie) は削除、
// FV の中央 は Kaika 実物 UI screenshot で置き換え。 画像 は 一部 support/ を流用
// ( 抽象 な 背景 / decoration のみ)、 人物 画像 ( kids/教室 系) は使わない。
export const metadata: Metadata = {
  title: 'Kaika実装伴走 | 株式会社Seed',
  description:
    'Kaikaを社長の業務に組み込み、業務・意思決定・発信・分析を一つの場で扱える状態まで並走する月額定額の伴走支援。',
}

export default function ServicePage() {
  return (
    <>
      <div className="service_page_contents_wrapper">
        <section id="fv">
          <div className="fv_title_wrapper innerbox_1220">
            <h2 className="fv_title">
              業務を<span className="main_color">整え</span>、意思決定を<span className="main_color">支え</span>、<br />
              社長の<span className="pink">身軽な状態</span>を育む場&ensp;
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
              <img src="/img/product/fv_main.webp" alt="Kaika" className="fv_kaika_image" />
            </div>
            <div className="fv_sub_right">
              <div className="fv_explain_text">
                Seedは、社長の日々の業務にKaikaを組み込み、業務・意思決定・発信・分析を一つの場で扱える状態まで並走する、月額定額の伴走支援を提供します。
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
                  <span className="en_title">about</span>
                  <span className="ja_title">Kaika実装伴走とは？</span>
                </h2>
                <div className="amcw_explain section_explain">
                  Kaika実装伴走は、社長一人ひとりの業務や意思決定のパターンに寄り添い、専門チームが Kaika の実装から運用定着まで包括的にサポートするサービスです。<br />
                  業務要件のヒアリングから始まり、Kaika のカスタマイズ、AIエージェントの構築、実運用と効果測定 まで、月額定額 で並走 します。散らかった業務を整え、社長が本質的な行動に集中できる環境を届けます。
                </div>
                <div className="amcw_sub_explain">
                  <span className="text">社長 の 「身軽 になりたい」 という願い を大切 にしています。 業務効率化 だけ でなく、 意思決定 の 質 と 発信 の量産 まで含めた 包括的 な 支援 で、 事業推進 を根本 から加速 します。</span>
                </div>
              </div>

              <div className="amcw_image_wrapper">
                <img src="/img/service/support/about_main_bg.webp" alt="Kaika実装伴走とは？" className="amcw_bg_image" />
              </div>
            </div>
          </div>
        </section>

        <section id="about_flow" className="icon_text_list">
          <h2 className="about_flow_title">Kaika実装伴走 の流れ</h2>
          <div className="icon_text_list_inner innerbox_1058">
            <div className="itl_item">
              <div className="itl_item__icon">
                <img src="/img/service/support/about_flow_01.webp" alt="業務課題のヒアリング" className="itl_item__icon" />
              </div>
              <div className="itl_item__text center">
                業務課題 の<span className="main_color fs_22">ヒアリング</span>
              </div>
            </div>
            <div className="itl_item">
              <div className="itl_item__icon">
                <img src="/img/service/support/about_flow_02.webp" alt="Kaikaのカスタマイズ・実装" className="itl_item__icon" />
              </div>
              <div className="itl_item__text center">
                Kaika の<span className="main_color fs_22">カスタマイズ</span>・<span className="main_color fs_22">実装</span>
              </div>
            </div>
            <div className="itl_item">
              <div className="itl_item__icon">
                <img src="/img/service/support/about_flow_03.webp" alt="運用定着と効果測定" className="itl_item__icon" />
              </div>
              <div className="itl_item__text center">
                <span className="main_color fs_22">運用定着</span>と<span className="main_color fs_22">効果測定</span>
              </div>
            </div>
          </div>
        </section>

        <section id="feature" className="number_image_list">
          <div className="feature_title_wrapper innerbox_1180">
            <h2 className="feature_title section_title">
              <span className="en_title">feature</span>
              <span className="ja_title">Kaika実装伴走 の特徴</span>
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
                    社長の業務に合わせた<br />
                    カスタム実装
                  </span>
                </div>
                <div className="nil_co_explain">
                  業務分析 の もと Kaika を業務 に組み込み、 社長ごとの働き方 に応じた 最適 な形 で 定着 させます。
                </div>
                <ul className="nil_co_list">
                  <li className="nil_co_list_item">
                    <img src="/img/service/support/feature_icon_01_01.webp" alt="01" className="icon" />
                    <div className="text">業務要件 に寄り添い、 <span className="main_color">最適 な実装 プラン</span>を設計</div>
                  </li>
                  <li className="nil_co_list_item">
                    <img src="/img/service/support/feature_icon_01_02.webp" alt="02" className="icon" />
                    <div className="text">用途 に応じた <span className="main_color">AIエージェント</span> を構築</div>
                  </li>
                  <li className="nil_co_list_item">
                    <img src="/img/service/support/feature_icon_01_03.webp" alt="03" className="icon" />
                    <div className="text">「じっくり」「すぐに」 <span className="main_color">希望 の ペース</span> で 実装</div>
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
                    業務 と 意思決定 を<br className="u_pc" />一つの場 で扱える伴走
                  </span>
                </div>
                <div className="nil_co_explain">
                  散らかった業務 を Kaika が構造化 し、 業務 と経営判断 を 同じ場 で 連続的 に扱える 状態 まで並走 します。
                </div>
                <ul className="nil_co_list">
                  <li className="nil_co_list_item">
                    <img src="/img/service/support/feature_icon_02_01.webp" alt="01" className="icon" />
                    <div className="text">会議・タスク・議事録・振り返り を <span className="main_color">共通 の 場 に蓄積</span></div>
                  </li>
                  <li className="nil_co_list_item">
                    <img src="/img/service/support/feature_icon_02_02.webp" alt="02" className="icon" />
                    <div className="text">業務 と 経営判断 が <span className="main_color">次の一手 に繋がる状態</span> へ</div>
                  </li>
                  <li className="nil_co_list_item">
                    <img src="/img/service/support/feature_icon_02_03.webp" alt="03" className="icon" />
                    <div className="text">一人では気づきにくい <span className="main_color">業務パターン</span> を 共に発見</div>
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
                    発信 や 分析 まで含めた<br />
                    包括的 な運用支援
                  </span>
                </div>
                <div className="nil_co_explain">
                  業務整理 だけで なく、 発信 コンテンツ の量産 や 意思決定 の 分析 まで Kaika 内 で完結 する形 を作り、 事業推進 を根本 から加速 します。
                </div>
                <ul className="nil_co_list">
                  <li className="nil_co_list_item">
                    <img src="/img/service/support/feature_icon_03_01.webp" alt="01" className="icon" />
                    <div className="text"><span className="main_color">業務・意思決定・発信・分析</span> を Kaika 内 で 完結</div>
                  </li>
                  <li className="nil_co_list_item">
                    <img src="/img/service/support/feature_icon_03_02.webp" alt="02" className="icon" />
                    <div className="text">多様 な <span className="main_color">活用シーン</span> を 一緒 に発掘</div>
                  </li>
                  <li className="nil_co_list_item">
                    <img src="/img/service/support/feature_icon_03_03.webp" alt="03" className="icon" />
                    <div className="text"><span className="main_color">継続的 な 改善サイクル</span> を回して 業務 の質 を高め続ける</div>
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
              <span className="ja_title"><span className="underline">こんな社長</span>におすすめです</span>
            </h2>
            <div className="who_contents_wrapper">
              <div className="wh_co">
                <div className="wh_co_text"><span className="main_color">業務を減らして</span>本質に集中したい！</div>
              </div>
              <div className="wh_co">
                <div className="wh_co_text"><span className="main_color">抱え込みがち</span>で、<br />誰にも任せられない！</div>
              </div>
              <div className="wh_co">
                <div className="wh_co_text"><span className="main_color">AI導入したい</span>けど、<br />使い方がわからない！</div>
              </div>
              <div className="wh_co">
                <div className="wh_co_text"><span className="main_color">意思決定を記録・分析</span>して、<br />次の一手に活かしたい！</div>
              </div>
              <div className="wh_co">
                <div className="wh_co_text"><span className="main_color">発信や分析</span>も<br />一つの場で済ませたい！</div>
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
                  現状 の 業務 と 課題 を ヒアリング し、 Kaika で どこ を整えるか、 どこ に AI エージェント を配置 するか、 実装 の 方針 を 一緒 に描 きます。
                </div>
              </div>
              <div className="st_co">
                <div className="st_co_title">
                  <span className="st_co_title__number">Step 03</span>
                  <span className="st_co_title__text">Kaika実装伴走 の 開始</span>
                </div>
                <div className="st_co_detail">
                  月額定額 で Kaika の カスタマイズ、 AIエージェント の 構築、 業務 への 組み込み まで 並走 します。
                </div>
              </div>
              <div className="st_co">
                <div className="st_co_title">
                  <span className="st_co_title__number">Step 04</span>
                  <span className="st_co_title__text">継続的 な 効果測定 と 改善</span>
                </div>
                <div className="st_co_detail">
                  運用後 の 業務データ を もとに、 実装 の 効果 を測定 し、 改善サイクル を回し続けます。 定着 まで並走 します。
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
