import type { Metadata } from 'next'
import Link from 'next/link'
import PageHead from '@/components/PageHead'
import CtaSection from '@/components/CtaSection'

export const metadata: Metadata = {
  title: 'Service | 株式会社Seed',
}

export default function Service() {
  return (
    <>
      <PageHead en="service" ja="Service" />

      <div className="page_contents_wrapper service_contents_wrapper">
        <section id="page_explain" className="innerbox_1180">
          <h2 className="section_title">
            <span className="en_title">Service Concept</span>
            <span className="ja_title">一人ひとりに最適な学びと成長の伴走を。</span>
          </h2>
          <div className="section_explain">
            Seedは、テクノロジーと人の力を掛け合わせ、学びの可能性を最大化するサービスを提供します。<br />
            個々の特性を深く理解し、最適なサポートを届けることで、誰もが自分らしく成長できる社会を目指します。
          </div>
        </section>

        <section id="service_list" className="innerbox_1180">
          <div className="service_list_links">
            <a href="#support-and-growth" className="sll_item active">Support &amp; Growth</a>
            <a href="#ai-and-system" className="sll_item">AI &amp; System</a>
            <a href="#ai-x-education" className="sll_item">AI × Education</a>
          </div>

          <div className="service_list_main">
            <div id="support-and-growth" className="slm_co">
              <img src="/img/service/service_list_01.webp" alt="包括的で最適な伴走サービス" className="slm_co_image" />
              <h3 className="slm_co_title">
                <span className="en_title">Support &amp; Growth</span>
                <span className="ja_title">包括的で最適な伴走サービス</span>
              </h3>
              <div className="slm_co_text_wrapper">
                <div className="slm_co_explain">個々に最適な学びを、多様な伴走者とともに。</div>
                <div className="slm_co_details">
                  <ul>
                    <li>個人の特性を分析し、学習・進路・生活を最適にサポート</li>
                    <li>専門知識を持つ多様な伴走者が、一人ひとりの成長を伴走</li>
                    <li>データに基づく効果測定を行い、柔軟に伴走をアップデート</li>
                  </ul>
                </div>
              </div>
              <div className="slm_co_btn_wrapper">
                <Link href="/service/support-and-growth/" className="btn arrow_btn">
                  <img src="/img/common/icon_arrow.webp" alt="→" className="arrow" />
                  <span className="text">サービス詳細へ</span>
                </Link>
              </div>
            </div>

            <div id="ai-and-system" className="slm_co">
              <img src="/img/service/service_list_02.webp" alt="AI・システムの受託開発" className="slm_co_image" />
              <h3 className="slm_co_title">
                <span className="en_title">AI &amp; System</span>
                <span className="ja_title">AI・システムの受託開発</span>
              </h3>
              <div className="slm_co_text_wrapper">
                <div className="slm_co_explain">課題を深く理解し、最適なAI・システムをオーダーメイド。</div>
                <div className="slm_co_details">
                  <ul>
                    <li>クライアントの課題を深く理解し、最適な技術ソリューションを提案</li>
                    <li>機械学習・深層学習・ルールベース・検索拡張型生成（RAG）など、ニーズに応じたシステムを構築</li>
                    <li>開発後も活用状況を分析し、より効果的な運用をサポート</li>
                  </ul>
                </div>
              </div>
              <div className="slm_co_btn_wrapper">
                <Link href="/service/ai-and-system/" className="btn arrow_btn">
                  <img src="/img/common/icon_arrow.webp" alt="→" className="arrow" />
                  <span className="text">サービス詳細へ</span>
                </Link>
              </div>
            </div>

            <div id="ai-x-education" className="slm_co">
              <img src="/img/service/service_list_03.webp" alt="独自プロダクトを活用した教育支援" className="slm_co_image" />
              <h3 className="slm_co_title">
                <span className="en_title">AI × Education</span>
                <span className="ja_title">独自プロダクトを活用した教育支援</span>
              </h3>
              <div className="slm_co_text_wrapper">
                <div className="slm_co_explain">AIを学び、未来を創る。</div>
                <div className="slm_co_details">
                  <ul>
                    <li>初心者から上級者まで幅広く対応し、実践的な学びを提供</li>
                    <li>目的に応じたカリキュラム設計で、効果的なAI学習環境を提供</li>
                    <li>独自プロダクトを活用し、学びの最適化とスキル定着を支援</li>
                  </ul>
                </div>
              </div>
              <div className="slm_co_btn_wrapper">
                <Link href="/service/ai-x-education/" className="btn arrow_btn">
                  <img src="/img/common/icon_arrow.webp" alt="→" className="arrow" />
                  <span className="text">サービス詳細へ</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <CtaSection />
    </>
  )
}
