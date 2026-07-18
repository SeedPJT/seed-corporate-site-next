import type { Metadata } from 'next'
import Link from 'next/link'
import CtaSection from '@/components/CtaSection'

export const metadata: Metadata = {
  title: 'AI & System | 株式会社Seed',
}

export default function AiAndSystem() {
  return (
    <>
      <div className="service_page_contents_wrapper">
        <section id="fv">
          <div className="fv_inner innerbox_1280">
            <h2 className="fv_title">
              <img src="/img/service/system/fv_title_text.webp" alt="ビジネス課題を解決する、最適なAIシステムを。" className="fv_title_text" />
            </h2>
            <div className="fv_explain section_explain">
              課題の本質を捉え、<br className="u_sp" />ビジネスに直結するAI・システムを<br />
              オーダーメイドで開発します。
            </div>
            <div className="fv_btn_wrapper">
              <Link href="/contact/" className="btn white_btn">まずは無料で相談する</Link>
            </div>
          </div>
        </section>

        <section id="what" className="icon_text_list">
          <img src="/img/service/what_bg_left.webp" alt="." className="what_bg what_bg_left" />
          <img src="/img/service/what_bg_right.webp" alt="." className="what_bg what_bg_right" />
          <div className="what_inner innerbox_1058">
            <h2 className="section_title small_title">
              <span className="en_title">What?</span>
              <span className="ja_title">Seedの<br className="u_sp" />AI・システム開発とは？</span>
            </h2>
            <div className="section_explain">
              Seedは、単なるシステム開発ではなく、課題の本質を見極め、<br className="u_pc" />ビジネスに直結する最適なAI・システムを構築します。
            </div>

            <div className="icon_text_list_inner">
              <div className="itl_item">
                <div className="itl_item__icon">
                  <img src="/img/service/system/what_01.webp" alt="課題の本質を捉えた設計" className="itl_item__icon" />
                </div>
                <div className="itl_item__text">
                  <span className="itl_item__text__title">課題の本質を捉えた設計</span>
                  <span className="fs_14">AIやシステム導入が目的ではなく、ビジネスの本質的な課題を解決するための設計を行います。業務の流れやデータの活用状況を詳細に分析し、最適なアプローチを提案します。</span>
                </div>
              </div>
              <div className="itl_item">
                <div className="itl_item__icon">
                  <img src="/img/service/system/what_02.webp" alt="オーダーメイドのAI・システム開発" className="itl_item__icon" />
                </div>
                <div className="itl_item__text">
                  <span className="itl_item__text__title">オーダーメイドのAI・システム開発</span>
                  <span className="fs_14">企業ごとに異なるニーズに対応し、機械学習・深層学習・ルールベース・検索拡張型生成（RAG）などの技術を組み合わせ、最適なソリューションを構築します。</span>
                </div>
              </div>
              <div className="itl_item">
                <div className="itl_item__icon">
                  <img src="/img/service/system/what_03.webp" alt="導入後の運用・改善までサポート" className="itl_item__icon" />
                </div>
                <div className="itl_item__text">
                  <span className="itl_item__text__title">導入後の運用・改善までサポート</span>
                  <span className="fs_14">開発して終わりではなく、システム導入後の運用支援や改善提案まで伴走します。</span>
                </div>
              </div>
            </div>

            <div className="arrow_and_text">
              <img src="/img/service/icon_arrow_and_text.webp" alt="↓" className="aat_arrow" />
              <div className="aat_text">
                <span className="underline">「課題解決」に徹底的にこだわったテクノロジーパートナー</span>
                <span className="aat_text__small">ビジネスの本質的な課題を解決するAI・システムを設計・開発。<br />完全オーダーメイドで業務にフィットするソリューションを提供し、導入後の運用・改善まで伴走します。</span>
              </div>
            </div>
          </div>
        </section>

        <section id="feature" className="number_image_list">
          <h2 className="feature_title section_title innerbox_1180">
            <span className="en_title">Feature</span>
            <span className="ja_title">サービスの特長</span>
          </h2>

          <div className="number_image_list_inner innerbox_1180">
            <div className="nil_co">
              <div className="nil_co_image_wrapper">
                <img src="/img/service/system/feature_01.webp" alt="01" className="nil_co_image" />
              </div>
              <div className="nil_co_text_wrapper">
                <div className="nil_co_title">
                  <span className="nil_co_title__number">01</span>
                  <span className="nil_co_title__text">
                    本質的な課題を捉えた<br />
                    企画・設計
                  </span>
                </div>
                <div className="nil_co_explain">
                  ヒアリングを通じて業務のボトルネックや改善ポイントを徹底分析。最適なAI・システム活用の方向性を策定します。
                </div>
                <ul className="nil_co_list">
                  <li className="nil_co_list_item">
                    <img src="/img/service/system/feature_icon_01_01.webp" alt="01" className="icon" />
                    <div className="text">業務プロセスの徹底分析</div>
                  </li>
                  <li className="nil_co_list_item">
                    <img src="/img/service/system/feature_icon_01_02.webp" alt="02" className="icon" />
                    <div className="text">最適なAI・システム活用の提案</div>
                  </li>
                  <li className="nil_co_list_item">
                    <img src="/img/service/system/feature_icon_01_03.webp" alt="03" className="icon" />
                    <div className="text">実証実験やプロトタイプ開発にも対応</div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="nil_co">
              <div className="nil_co_image_wrapper">
                <img src="/img/service/system/feature_02.webp" alt="02" className="nil_co_image" />
              </div>
              <div className="nil_co_text_wrapper">
                <div className="nil_co_title">
                  <span className="nil_co_title__number">02</span>
                  <span className="nil_co_title__text">
                    オーダーメイドの<br />
                    AI・システム開発
                  </span>
                </div>
                <div className="nil_co_explain">
                  機械学習・深層学習・ルールベース・検索拡張型生成（RAG）など、ビジネスニーズに応じたシステムをゼロから開発します。
                </div>
                <ul className="nil_co_list">
                  <li className="nil_co_list_item">
                    <img src="/img/service/system/feature_icon_02_01.webp" alt="01" className="icon" />
                    <div className="text">企業ごとの課題に合わせたカスタム開発</div>
                  </li>
                  <li className="nil_co_list_item">
                    <img src="/img/service/system/feature_icon_02_02.webp" alt="02" className="icon" />
                    <div className="text">最先端のAI技術を活用</div>
                  </li>
                  <li className="nil_co_list_item">
                    <img src="/img/service/system/feature_icon_02_03.webp" alt="03" className="icon" />
                    <div className="text">業務フローや既存システムとの連携も考慮</div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="nil_co">
              <div className="nil_co_image_wrapper">
                <img src="/img/service/system/feature_03.webp" alt="03" className="nil_co_image" />
              </div>
              <div className="nil_co_text_wrapper">
                <div className="nil_co_title">
                  <span className="nil_co_title__number">03</span>
                  <span className="nil_co_title__text">
                    導入後の運用支援と<br />
                    継続的な改善
                  </span>
                </div>
                <div className="nil_co_explain">
                  システム導入後も、効果測定・最適化・アップデートを継続的にサポート。成果を最大化するための運用体制を構築します。
                </div>
                <ul className="nil_co_list">
                  <li className="nil_co_list_item">
                    <img src="/img/service/system/feature_icon_03_01.webp" alt="01" className="icon" />
                    <div className="text">導入後の定着支援</div>
                  </li>
                  <li className="nil_co_list_item">
                    <img src="/img/service/system/feature_icon_03_02.webp" alt="02" className="icon" />
                    <div className="text">パフォーマンス分析と最適化</div>
                  </li>
                  <li className="nil_co_list_item">
                    <img src="/img/service/system/feature_icon_03_03.webp" alt="03" className="icon" />
                    <div className="text">追加開発や機能拡張にも対応</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="system_who" className="recommend_who">
          <div className="who_inner innerbox_1180">
            <h2 className="who_title section_title small_title">
              <span className="en_title">who?</span>
              <span className="ja_title"><span className="underline">こんな企業</span>におすすめです</span>
            </h2>

            <div className="who_contents_wrapper who_size__3">
              <div className="wh_co">
                <img src="/img/service/system/who_01.webp" alt="AI導入の可能性を探る企業" className="wh_co_image" />
                <div className="wh_co_title">
                  <span className="main_color">AI導入の可能性</span>を探る企業
                </div>
                <div className="wh_co_content">
                  自社の業務課題に合ったAI・システムを導入したいが、何から始めればよいかわからない。
                </div>
              </div>
              <div className="wh_co">
                <img src="/img/service/system/who_02.webp" alt="AI活用の壁を乗り越えたい企業" className="wh_co_image" />
                <div className="wh_co_title">
                  <span className="main_color">AI活用の壁</span>を乗り越えたい企業
                </div>
                <div className="wh_co_content">
                  既存のツールでは業務改善が難しく、自社のニーズに合ったカスタムソリューションが必要。
                </div>
              </div>
              <div className="wh_co">
                <img src="/img/service/system/who_03.webp" alt="長期的なAIパートナーを求める企業" className="wh_co_image" />
                <div className="wh_co_title">
                  <span className="main_color">長期的なAIパートナー</span>を<br />
                  求める企業
                </div>
                <div className="wh_co_content">
                  導入後の運用・活用までサポートしてくれる開発パートナーがほしい。
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="system_step" className="step">
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
                  まずは企業の現状をヒアリングし、課題の特定・AI活用の方向性を策定します。
                </div>
              </div>
              <div className="st_co">
                <div className="st_co_title">
                  <span className="st_co_title__number">Step 03</span>
                  <span className="st_co_title__text">設計・プロトタイプ開発</span>
                </div>
                <div className="st_co_detail">
                  課題解決に向けた最適なAI・システムの設計を行い、必要に応じてプロトタイプを開発。
                </div>
              </div>
              <div className="st_co">
                <div className="st_co_title">
                  <span className="st_co_title__number">Step 04</span>
                  <span className="st_co_title__text">システム開発・導入</span>
                </div>
                <div className="st_co_detail">
                  設計内容に基づき、業務に最適化されたAI・システムを開発し、導入までサポート。
                </div>
              </div>
              <div className="st_co">
                <div className="st_co_title">
                  <span className="st_co_title__number">Step 05</span>
                  <span className="st_co_title__text">運用・改善サポート</span>
                </div>
                <div className="st_co_detail">
                  システム導入後も運用状況を分析し、<br />
                  効果を最大化するためのチューニングやアップデートを実施。
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
