import type { Metadata } from 'next'
import CtaSection from '@/components/CtaSection'

export const metadata: Metadata = {
  title: 'Kaika | 株式会社Seed',
  description: '身軽になりたい社長の右腕。業務も意思決定も、一つの場で。',
}

export default function Product() {
  return (
    <>
      <div className="product_page_contents_wrapper">
        <section id="fv">
          <img src="/img/product/fv_bg.webp" alt="." className="fv_bg" />
          <div className="fv_inner innerbox_1280">
            <div className="fv_text_wrapper">
              <h2 className="fv_title">
                <img src="/img/product/fv_title_label.webp" alt="Kaika（Keep Advancing with Innovative Knowledge Assistance）" className="fv_title_label" />
                <span className="fv_title_text">
                  身軽になりたい<br />社長の<span className="fv_title_text_accent">右腕</span>
                </span>
              </h2>
              <div className="fv_explain section_explain">
                業務も意思決定も、一つの場で。
              </div>
              <div className="fv_btn_wrapper u_pc">
                <a href="https://kaika.world/" className="btn black_btn" target="_blank" rel="noopener noreferrer">まずは<span className="yellow">無料</span>で試す</a>
              </div>
            </div>
            <div className="fv_image_wrapper">
              <img src="/img/product/plan_main.png" alt="Kaika プラン画面 · 目標と対話が一つの場で" className="fv_main_image" />
              <img src="/img/common/logo_brain.webp" alt="." className="fv_main_bg" />
            </div>
            <div className="fv_btn_wrapper u_sp">
              <a href="https://kaika.world/" className="btn black_btn" target="_blank" rel="noopener noreferrer">まずは<span className="yellow">無料</span>で試す</a>
            </div>
          </div>
        </section>

        <section id="what">
          <img src="/img/service/what_bg_left.webp" alt="." className="what_bg what_bg_left" />
          <img src="/img/service/what_bg_right.webp" alt="." className="what_bg what_bg_right" />
          <div className="what_inner innerbox_1058">
            <h2 className="section_title small_title">
              <span className="en_title">What?</span>
              <span className="ja_title">Kaikaとは？</span>
            </h2>
            <div className="section_explain">
              Kaikaは、特許取得済みのAI技術を活用し、対象者の行動データに基づいた精密な特性分析を行い、個々の目標に応じた<br />
              包括的で最適なカリキュラムを提案します。私たちは、以下の3つの強みを活かし、より良い学習支援を提供します。
            </div>

            <div className="product_what_inner">
              <div className="pwi_item">
                <div className="pwi_item__icon">
                  <img src="/img/product/what_01.webp" alt="多様な専門家によるアドバイザリーチーム" className="pwi_item__icon" />
                </div>
                <div className="pwi_item__text">
                  <span className="pwi_item__text__title">多様な専門家によるアドバイザリーチーム</span>
                  <span className="pwi_item__text__content">各分野の第一線で活躍する専門家がアドバイザーとして参画。さらに、さまざまな業界のプロフェッショナルと連携し、多角的な視点からプロダクトを磨き上げ、より精度の高い学習支援を実現します。</span>
                </div>
              </div>

              <div className="pwi_item">
                <div className="pwi_item__icon">
                  <img src="/img/product/what_02.webp" alt="特許取得済みの独自アルゴリズム" className="pwi_item__icon" />
                </div>
                <div className="pwi_item__text">
                  <span className="pwi_item__text__title">特許取得済みの独自アルゴリズム</span>
                  <span className="pwi_item__text__content">ルールベースの強みである精密な論理構造と透明性を活かしながら、LLMの高度な自然言語処理能力と柔軟な適応力を組み合わせることで、より正確かつパーソナライズされた分析・カリキュラム提案を実現。また、データの蓄積・フィードバックを通じて、アルゴリズム自体が継続的に進化し、個々の学習スタイルや特性に最適化されていきます。</span>
                </div>
              </div>

              <div className="pwi_item">
                <div className="pwi_item__icon">
                  <img src="/img/product/what_03.webp" alt="多様なデータを活用した実践的アプローチ" className="pwi_item__icon" />
                </div>
                <div className="pwi_item__text">
                  <span className="pwi_item__text__title">多様なデータを活用した実践的アプローチ</span>
                  <span className="pwi_item__text__content">教育現場で実際に活用され、フィードバックをもとにプロダクトを改善し続けています。また、教育分野にとどまらず、多様な業界のシステム開発を通じて蓄積したドメイン知識を活かし、さまざまな分野と連携。これにより、より多角的なアプローチで最適な学習支援を提供します。</span>
                </div>
              </div>
            </div>

            <div className="arrow_and_text">
              <img src="/img/service/icon_arrow_and_text.webp" alt="↓" className="aat_arrow" />
              <div className="aat_text">
                <span className="underline">Kaikaの3つの強みで実現する、<br className="u_sp" />個別最適な学習支援</span>
                <span className="aat_text__small">
                  Kaikaは、専門家の知見・特許取得済みの独自アルゴリズム・多様なデータの活用という<br />
                  3つの強みを組み合わせることで、一人ひとりに最適な学習カリキュラムを提供します。<br />
                  これにより、一人ひとりの特性を最大限に活かし、学びの可能性を広げることを目指しています。
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="product_point_01">
          <div className="product_point_01_inner innerbox_1180">
            <h2 className="section_title small_title">
              <span className="en_title">point</span>
              <span className="ja_title">個別最適化を高める3つの工夫</span>
            </h2>

            <div className="product_point_contents_wrapper">
              <div className="ppcw_co">
                <h3 className="ppcw_co_title">
                  <span className="ppcw_co_title__number">01</span>
                  <span className="ppcw_co_title__text">高解像度な特性分析</span>
                </h3>
                <div className="ppcw_co_maincontent">
                  <div className="ppcw_co_asis">
                    <div className="ppcw_co_subtitle">従来の方法（As is）</div>
                    <div className="ppcw_co_list">
                      <ul>
                        <li>アンケート形式の診断をもとに、あらかじめ決められたタイプに分類される</li>
                        <li>主観的な要素が含まれやすく、分析の精度に限界がある</li>
                      </ul>
                    </div>
                  </div>
                  <span className="arrow"></span>
                  <div className="ppcw_co_tobe">
                    <div className="ppcw_co_subtitle">Kaikaのアプローチ（To be）</div>
                    <div className="ppcw_co_list">
                      <ul>
                        <li>普段の行動データを含むビッグデータを活用し、個人の特性をスコアの組み合わせで表現</li>
                        <li>無限のパターンで分析が可能となり、より精密な個別特性の把握が実現</li>
                        <li>客観的なデータに基づき、主観の影響を排除し、より正確な分析を提供</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ppcw_co">
                <h3 className="ppcw_co_title">
                  <span className="ppcw_co_title__number">02</span>
                  <span className="ppcw_co_title__text">多様なアルゴリズムによる支援の最適化</span>
                </h3>
                <div className="ppcw_co_maincontent">
                  <div className="ppcw_co_asis">
                    <div className="ppcw_co_subtitle">従来の方法（As is）</div>
                    <div className="ppcw_co_list">
                      <ul>
                        <li>過去の学習履歴や成績をもとに、AIが問題や教材を推薦</li>
                        <li>「勉強が得意な生徒のやり方」を学習しやすく、個々の特性に最適化されないケースがある</li>
                      </ul>
                    </div>
                  </div>
                  <span className="arrow"></span>
                  <div className="ppcw_co_tobe">
                    <div className="ppcw_co_subtitle">Kaikaのアプローチ（To be）</div>
                    <div className="ppcw_co_list">
                      <ul>
                        <li>目標設定から必要なスキルを算出し、特性に応じたカリキュラムを推薦</li>
                        <li>独自タグを活用し、ルールベースロジックによる精密な分析で、個別最適化された学習プランを提供</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ppcw_co">
                <h3 className="ppcw_co_title">
                  <span className="ppcw_co_title__number">03</span>
                  <span className="ppcw_co_title__text">データ蓄積による特性の動的更新</span>
                </h3>
                <div className="ppcw_co_maincontent">
                  <div className="ppcw_co_asis">
                    <div className="ppcw_co_subtitle">従来の方法（As is）</div>
                    <div className="ppcw_co_list">
                      <ul>
                        <li>少量の情報をもとに、主観的な学習支援が行われている</li>
                        <li>学生時代の成績が、社会人になってから活用されない</li>
                        <li>異なる学校や企業ごとに評価基準が異なり、統一的な分析が困難</li>
                      </ul>
                    </div>
                  </div>
                  <span className="arrow"></span>
                  <div className="ppcw_co_tobe">
                    <div className="ppcw_co_subtitle">Kaikaのアプローチ（To be）</div>
                    <div className="ppcw_co_list">
                      <ul>
                        <li>長期間のデータ蓄積により、特性分析の精度を向上</li>
                        <li>個人の特性の変化を動的に追跡し、適応型の支援が可能</li>
                        <li>統一された評価基準を導入し、異なるコミュニティ間での一貫した分析が可能に</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="product_point_02" className="number_image_list">
          <img src="/img/service/what_bg_left.webp" alt="." className="what_bg what_bg_left" />
          <img src="/img/service/what_bg_right.webp" alt="." className="what_bg what_bg_right" />
          <div className="innerbox_1180">
            <h2 className="product_point_02_title section_title small_title">
              <span className="en_title">Feature</span>
              <span className="ja_title">Kaikaが創る未来の学習支援</span>
            </h2>

            <div className="point_explain">
              <span className="point_explain__title">「客観的なデータに基づく<br className="u_sp" />AIと共に行う学習支援」</span>
              <span className="point_explain__text">
                Kaikaは、AIと人が協力し、客観的なデータに基づいた学習支援を提供することで、<br />
                一人ひとりに最適な学びの形を実現します。<br />
                このアプローチにより、次の2つの大きな価値を生み出します。
              </span>
            </div>

            <div className="number_image_list_inner">
              <div className="nil_co">
                <div className="nil_co_image_wrapper">
                  <img src="/img/product/point_01.webp" alt="01" className="nil_co_image" />
                </div>
                <div className="nil_co_text_wrapper">
                  <div className="nil_co_title">
                    <span className="nil_co_title__number">01</span>
                    <span className="nil_co_title__text">判断の質の向上</span>
                  </div>
                  <div className="nil_co_explain">
                    <div className="nil_co_explain__subtitle">より正確で公平な学習支援</div>
                    従来の学習支援では、指導者の経験や主観に依存する判断が多く、学習者の本来の特性が見落とされることもありました。
                    Kaikaでは、行動データ・学習履歴などの多様なデータをAIが分析し、客観的な判断を支援。これにより、指導者の経験だけでは気づけない個々の強みや課題を的確に捉え、より適切な指導を可能にします。
                  </div>
                  <ul className="nil_co_list">
                    <li className="nil_co_list_item">
                      <img src="/img/common/icon_check.webp" alt="01" className="icon" />
                      <div className="text">主観に頼らない客観的なデータ分析で、適切な指導判断を支援</div>
                    </li>
                    <li className="nil_co_list_item">
                      <img src="/img/common/icon_check.webp" alt="02" className="icon" />
                      <div className="text">一人ひとりに最適な学習カリキュラムを提案し、学習効果を最大化</div>
                    </li>
                    <li className="nil_co_list_item">
                      <img src="/img/common/icon_check.webp" alt="03" className="icon" />
                      <div className="text">データに基づく意思決定で、より公平で透明性のある学習支援を実現</div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="nil_co">
                <div className="nil_co_image_wrapper">
                  <img src="/img/product/point_02.webp" alt="02" className="nil_co_image" />
                </div>
                <div className="nil_co_text_wrapper">
                  <div className="nil_co_title">
                    <span className="nil_co_title__number">02</span>
                    <span className="nil_co_title__text">学習支援の効率化</span>
                  </div>
                  <div className="nil_co_explain">
                    <div className="nil_co_explain__subtitle">個別最適な学習をスムーズに提供</div>
                    従来の学習指導は、個別対応に時間と労力がかかるため、指導者の負担が大きいという課題がありました。<br />
                    Kaikaは、学習者ごとのデータを瞬時に分析し、最適な教材・学習方法・カリキュラムを提案。さらに、指導中の記録もKaikaで処理されることで、特性分析の精度が向上し、よりパーソナライズされた学習支援が可能になります。
                  </div>
                  <ul className="nil_co_list">
                    <li className="nil_co_list_item">
                      <img src="/img/common/icon_check.webp" alt="01" className="icon" />
                      <div className="text">カリキュラムの自動最適化で、指導の負担を軽減</div>
                    </li>
                    <li className="nil_co_list_item">
                      <img src="/img/common/icon_check.webp" alt="02" className="icon" />
                      <div className="text">指導記録も踏まえたリアルタイムデータ解析により、最適な学習プランを即時提供</div>
                    </li>
                    <li className="nil_co_list_item">
                      <img src="/img/common/icon_check.webp" alt="03" className="icon" />
                      <div className="text">学習進捗の可視化により、効果的なフィードバックが可能に</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="arrow_and_text">
              <img src="/img/service/icon_arrow_and_text.webp" alt="↓" className="aat_arrow" />
              <div className="aat_text">
                Kaikaの目指す未来：<br className="u_sp" /><span className="underline">AIと人が共創する学びの進化</span>
                <span className="aat_text__small">
                  AIの客観的なデータ分析と、人の感性や経験を組み合わせることで、<br />
                  学習支援の判断の質を向上させながら、支援の効率を最大化。<br />
                  これにより、学習者一人ひとりが自分に合った学び方で可能性を最大限に引き出せる環境を創り出します。
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <CtaSection />
    </>
  )
}
