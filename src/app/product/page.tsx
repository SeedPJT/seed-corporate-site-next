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
                  身軽になりたい、<br />社長の<span className="fv_title_text_accent">右腕。</span>
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
              <img src="/img/product/plan_main.webp" alt="Kaikaプラン画面·目標と対話が一つの場で" className="fv_main_image" />
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
          <div className="what_inner innerbox_1180">
            <h2 className="section_title small_title">
              <span className="en_title">What?</span>
              <span className="ja_title"><span className="ja_brand">Kaika</span>とは？</span>
            </h2>
            <div className="section_explain">
              Kaikaは、面倒な実務も、事業推進も、まとめて任せられる右腕です。日々の行動を覚え、つなげ、育てていきます。右腕が何かを動かすときは、知っていることから考え、<strong className="main_color">利益に繋げます。</strong>
            </div>

            <div className="lc-main">
              <div className="lc-stage">
                <svg className="lc-svg" viewBox="0 0 480 480" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <marker id="lc-ah" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto" markerUnits="userSpaceOnUse">
                      <path d="M 0 0 L 10 5 L 0 10 Z" fill="#7d75c9"/>
                    </marker>
                  </defs>
                  <path className="lc-arc" d="M 300 76 A 175 175 0 0 1 412 270" markerEnd="url(#lc-ah)"/>
                  <path className="lc-arc" d="M 353 374 A 175 175 0 0 1 127 374" markerEnd="url(#lc-ah)"/>
                  <path className="lc-arc" d="M 68 270 A 175 175 0 0 1 180 76" markerEnd="url(#lc-ah)"/>
                </svg>

                <div className="lc-hub">
                  <img src="/img/common/kaika_icon.png" alt="Kaika" className="lc-hub__icon" />
                  <div className="lc-hub__text">暗黙知を、<br/>言葉にする。</div>
                </div>

                <div className="lc-phase" data-pos="top">
                  <div className="lc-phase__num">01</div>
                  <div className="lc-phase__ja">覚える</div>
                  <div className="lc-phase__en">Remember</div>
                </div>
                <div className="lc-phase" data-pos="br">
                  <div className="lc-phase__num">02</div>
                  <div className="lc-phase__ja">動く</div>
                  <div className="lc-phase__en">Act</div>
                </div>
                <div className="lc-phase" data-pos="bl">
                  <div className="lc-phase__num">03</div>
                  <div className="lc-phase__ja">整える</div>
                  <div className="lc-phase__en">Organize</div>
                </div>
              </div>

              <div className="lc-details">
                <div className="lc-detail">
                  <div className="lc-detail__head">
                    <div className="lc-detail__num">01</div>
                    <h3 className="lc-detail__ja">覚える</h3>
                    <div className="lc-detail__en">Remember</div>
                  </div>
                  <p className="lc-detail__body">使うだけで、日々の行動と判断が静かに蓄積されていきます。</p>
                </div>
                <div className="lc-detail">
                  <div className="lc-detail__head">
                    <div className="lc-detail__num">02</div>
                    <h3 className="lc-detail__ja">動く</h3>
                    <div className="lc-detail__en">Act</div>
                  </div>
                  <p className="lc-detail__body">議事録・計画・発信・学習など、標準装備の右腕がすぐ動きます。蓄えた情報とSlack・Gmail・Notion等の外部ソースを元に、オーダーメイドの動きも可能。</p>
                </div>
                <div className="lc-detail">
                  <div className="lc-detail__head">
                    <div className="lc-detail__num">03</div>
                    <h3 className="lc-detail__ja">整える</h3>
                    <div className="lc-detail__en">Organize</div>
                  </div>
                  <p className="lc-detail__body">右腕の利益インパクトが見える化され、日々の会話から事実とルールも積み上がっていきます。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="why">
          <div className="why_inner innerbox_1180">
            <h2 className="section_title small_title">
              <span className="en_title">Why?</span>
              <span className="ja_title">なぜ「使うだけで育つ」が<br className="u_sp" />実現できるのか？</span>
            </h2>
            <div className="section_explain">
              Kaikaが保有する<strong className="main_color">2つの独自特許技術</strong>が、これを支えています。
            </div>

            <div className="patents_wrapper">
              <div className="patent_item">
                <span className="patent_badge">特許取得済み</span>
                <h3 className="patent_title">行動から、<br />特性を可視化する</h3>
                <p className="patent_body">日々の行動から、暗黙知を捉え、変化に対応します。手短なコミュニケーションからでも意図を推定します。</p>
              </div>
              <div className="patent_item">
                <span className="patent_badge patent_badge--pending">特許出願中</span>
                <h3 className="patent_title">会話から、<br />事実とルールを構造化する</h3>
                <p className="patent_body">日々の会話や指示・マニュアルを、事実とルールに自動分解。知識を容易に引き出せたり、右腕を半自動で構築できます。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="video">
          <div className="video_inner innerbox_1180">
            <h2 className="section_title small_title">
              <span className="en_title">Watch</span>
              <span className="ja_title"><span className="ja_brand">Kaika</span>のある<span className="ja_brand">1</span>日</span>
            </h2>
            <div className="section_explain">
              Kaika使用後の日常をX分の動画で体感してください。
            </div>
            <div className="video_placeholder">
              <div className="video_placeholder__icon"></div>
              <div className="video_placeholder__text">
                <strong>Coming Soon</strong>
                <small>近日公開予定</small>
              </div>
            </div>
          </div>
        </section>

        <section id="impact">
          <img src="/img/service/step_bg.webp" alt="." className="step_bg" />
          <div className="impact_inner innerbox_1180">
            <h2 className="section_title small_title">
              <span className="en_title">How?</span>
              <span className="ja_title"><span className="ja_brand">Kaika</span>が変える<span className="ja_brand">1</span>週間</span>
            </h2>

            <div className="impact_compare">
              <div className="impact_col impact_col--before">
                <div className="impact_col__label">現状 · As-Is</div>
                <div className="impact_metrics">
                  <div className="impact_row"><span className="impact_row__label">情報探索・整理</span><span className="impact_row__value">5<small>h/週</small></span></div>
                  <div className="impact_row"><span className="impact_row__label">議事録・振り返り</span><span className="impact_row__value">3<small>h/週</small></span></div>
                  <div className="impact_row"><span className="impact_row__label">発信素材作成</span><span className="impact_row__value">4<small>h/週</small></span></div>
                </div>
                <div className="impact_cost">
                  <span className="impact_cost__label">追加コスト</span>
                  <span className="impact_cost__value">月30万円<small>業務委託メンバー</small></span>
                </div>
                <div className="impact_state">重たい思考</div>
              </div>

              <div className="impact_arrow">→</div>

              <div className="impact_col impact_col--after">
                <div className="impact_col__label">Kaika使用後 · To-Be</div>
                <div className="impact_metrics">
                  <div className="impact_row"><span className="impact_row__label">情報探索・整理</span><span className="impact_row__value">1<small>h/週</small></span></div>
                  <div className="impact_row"><span className="impact_row__label">議事録・振り返り</span><span className="impact_row__value">15<small>m/週</small></span></div>
                  <div className="impact_row"><span className="impact_row__label">発信素材作成</span><span className="impact_row__value">30<small>m/週</small></span></div>
                </div>
                <div className="impact_cost">
                  <span className="impact_cost__label">サブスク料金</span>
                  <span className="impact_cost__value">月5,980円<small>無料プランあり</small></span>
                </div>
                <div className="impact_state impact_state--after">身軽な活動</div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <CtaSection />
    </>
  )
}
