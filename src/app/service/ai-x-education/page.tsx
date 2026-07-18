import type { Metadata } from 'next'
import Link from 'next/link'
import CtaSection from '@/components/CtaSection'

export const metadata: Metadata = {
  title: 'AI x Education | 株式会社Seed',
}

export default function AiXEducation() {
  return (
    <>
      <div className="service_page_contents_wrapper">
        <section id="fv">
          <div className="fv_text_wrapper innerbox_1280">
            <img src="/img/common/logo_brain.webp" alt="." className="fv_bg" />
            <h2 className="fv_title">
              <img src="/img/service/education/fv_title_text.webp" alt="AIで知識を最大化し、未来を切り拓こう。" className="fv_title_image" />
            </h2>
            <div className="fv_explain section_explain">
              学校・塾・企業研修など、あなたの目的やニーズに合わせた柔軟な学びをサポートします。業界経験豊富な講師による実践的な指導と、独自プロダクト「Kaika」が実現する個別最適化学習で、効率よく確実にスキルを身につけることができます。
            </div>
            <div className="fv_btn_wrapper">
              <Link href="/contact/" className="btn black_btn">まずは無料で相談する</Link>
            </div>
          </div>
          <div className="fv_image_wrapper">
            <img src="/img/service/education/fv_main.webp" alt="AIで知識を最大化し、未来を切り拓こう。" className="fv_main_image" />
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
              <span className="en_title">What?</span>
              <span className="ja_title">Seedの教育支援とは？</span>
            </h2>
            <div className="section_explain">
              これからの時代、AIを使いこなせるかどうかが、仕事や学びの質を大きく左右します。私たちは、AI概論・機械学習・ディープラーニング・AIプログラミングなどを通じて、AIを「受け身で使う」のではなく、「積極的に活用する力」を身につけるサポートを行います。
            </div>

            <div className="icon_text_list_inner">
              <div className="itl_item">
                <div className="itl_item__icon">
                  <img src="/img/service/education/what_01.webp" alt="業界経験を持つ講師による実践的なAI指導" className="itl_item__icon" />
                </div>
                <div className="itl_item__text center">
                  業界経験を持つ講師による<br />
                  実践的なAI指導
                </div>
              </div>
              <div className="itl_item">
                <div className="itl_item__icon">
                  <img src="/img/service/education/what_02.webp" alt="独自プロダクトKaikaが生徒に合わせた学びの最適化を実現" className="itl_item__icon" />
                </div>
                <div className="itl_item__text center">
                  独自プロダクトKaikaが<br />
                  生徒に合わせた学びの最適化を実現
                </div>
              </div>
              <div className="itl_item">
                <div className="itl_item__icon">
                  <img src="/img/service/education/what_03.webp" alt="独自プロダクトKaikaが教師の負担を軽減し、より効率的な指導をサポート" className="itl_item__icon" />
                </div>
                <div className="itl_item__text center">
                  独自プロダクトKaikaが<br />
                  教師の負担を軽減し、<br />
                  より効率的な指導をサポート
                </div>
              </div>
            </div>

            <div className="arrow_and_text">
              <img src="/img/service/icon_arrow_and_text.webp" alt="↓" className="aat_arrow" />
              <div className="aat_text">
                学校・塾・企業研修など、<br />
                <span className="underline">それぞれの目的やニーズに合わせた柔軟な活用が可能</span>です。
              </div>
            </div>
          </div>
        </section>

        <section id="usecase" className="number_image_list">
          <div className="usecase_inner innerbox_1180">
            <h2 className="usecase_title section_title">
              <span className="en_title">use case</span>
              <span className="ja_title">サービスの活用事例</span>
            </h2>

            <div className="number_image_list_inner">
              <div className="nil_co">
                <div className="nil_co_image_wrapper">
                  <img src="/img/service/education/usecase_01.webp" alt="01" className="nil_co_image" />
                </div>
                <div className="nil_co_text_wrapper">
                  <div className="nil_co_label main_color_label">教育機関向け</div>
                  <div className="nil_co_title">
                    <span className="nil_co_title__text">
                      AI × 実務経験講師による<br />
                      実践的なAI学習支援
                    </span>
                  </div>
                  <div className="nil_co_explain">
                    実務経験を持つ講師が、AIの基礎から応用までを体系的に指導し、生徒がAIを実践的に活用できるレベルまで成長できるようサポートします。 機械学習やディープラーニングの仕組み、生成AIの応用などを学び、AIプログラミングの実践演習を通じて、実際の現場で活躍できるスキルを習得。AIを単に理解するだけではなく、「使いこなせる」人材を育成します。
                  </div>
                </div>
              </div>

              <div className="nil_co">
                <div className="nil_co_image_wrapper">
                  <img src="/img/service/education/usecase_02.webp" alt="02" className="nil_co_image" />
                </div>
                <div className="nil_co_text_wrapper">
                  <div className="nil_co_label green_label">企業向け</div>
                  <div className="nil_co_title">
                    <span className="nil_co_title__text">
                      AI × 実務経験講師による<br />
                      即戦力AI人材の育成
                    </span>
                  </div>
                  <div className="nil_co_explain">
                    実務経験豊富な講師が、AIの基礎から応用、AIプログラミングまでを体系的に指導し、ビジネスの現場で活躍できるAIスキルの習得を支援します。AIエンジニアとの円滑な連携を図れるコンサルタントの育成や、AIの開発・活用ができる実務人材の育成を目指し、AIリテラシーの習得から実践レベルのスキル強化までをサポート。単なる知識のインプットにとどまらず、実務の現場でAIを活かせる人材の育成を推進します。
                  </div>
                </div>
              </div>

              <div className="nil_co">
                <div className="nil_co_image_wrapper">
                  <img src="/img/service/education/usecase_03.webp" alt="03" className="nil_co_image" />
                </div>
                <div className="nil_co_text_wrapper">
                  <div className="nil_co_label main_color_label">教育機関向け</div>
                  <div className="nil_co_title">
                    <span className="nil_co_title__text">
                      AI × 教師・講師の連携で、<br />
                      一人ひとりに最適な学びを提供
                    </span>
                  </div>
                  <div className="nil_co_explain">
                    独自プロダクトKaikaで、生徒の特性や理解度を詳細に分析し、教師の指導をサポートします。生徒一人ひとりの得意・苦手分野を可視化することで、指導の優先度を明確にし、最適なアプローチを提案。教師や講師は、個々の生徒に適した指導方法を効率的に選択でき、個別対応にかかる負担を軽減できます。さらに、苦手が多い生徒に対しては、AIを活用して苦手分野を補う方法を指導し、自ら学習を進める力を育成。AIを使った効果的な学習方法を身につけることで、生徒は自身の課題を主体的に克服できるようになります。これにより、教師は指導の準備時間を削減し、生徒の学びを深めることに集中できるため、より質の高い教育の提供が可能になります。
                  </div>
                </div>
              </div>

              <div className="nil_co">
                <div className="nil_co_image_wrapper">
                  <img src="/img/service/education/usecase_04.webp" alt="04" className="nil_co_image" />
                </div>
                <div className="nil_co_text_wrapper">
                  <div className="nil_co_label green_label">企業向け</div>
                  <div className="nil_co_title">
                    <span className="nil_co_title__text">
                      AI × 人事戦略で、<br />
                      最適な人材育成・配置・評価を実現
                    </span>
                  </div>
                  <div className="nil_co_explain">
                    独自プロダクトKaikaが、日々の業務データや1 on 1の記録を包括的に分析し、社員一人ひとりに最適な学習プランを提案。個々の強みや成長課題を可視化することで、より効果的なスキル育成をサポートします。さらに、Kaikaにより、社員の適性を見極め、最適な人材配置や公正な評価を実現。個人の成長を促しながら、組織全体の生産性向上を支援します。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="program">
          <div className="program_inner innerbox_1180">
            <h2 className="program_title section_title small_title">
              <span className="en_title">program</span>
              <span className="ja_title">AI学習プログラム一覧<br className="u_sp" />（講座・研修）</span>
            </h2>
            <div className="section_explain">
              短期の研修から通年の授業まで、<span className="main_color">ニーズに合わせたカスタマイズ</span>が可能です。<br />
              各講座は、目的やレベルに応じて<span className="main_color">講座内容を最適化</span>できます。
            </div>

            <div className="program_contents_wrapper">
              {[
                { img: 'program_01', title: 'AI概論', content: 'AIの歴史や基本概念を学び、AI技術に関する基礎知識や主要アルゴリズムを理解します。' },
                { img: 'program_02', title: '機械学習', content: '教師あり学習・教師なし学習の理論と実践を学びます。' },
                { img: 'program_03', title: '深層学習・ディープラーニング', content: 'ニューラルネットワークやCNN・RNNなどの手法を学習します。' },
                { img: 'program_04', title: 'AIプログラミング基礎', content: 'Pythonを使ったAI開発の基礎を習得し、実装スキルを身につけます。' },
                { img: 'program_05', title: 'AIプログラミング応用', content: 'AIを活用した一つのアプリケーション作成を通じて、AIを活用したシステム開発を実践します。' },
                { img: 'program_06', title: 'プロンプトエンジニアリング基礎', content: 'ChatGPTなどの生成AIを活用するためのプロンプト設計や生成AIの活用方法を学びます。' },
              ].map((p) => (
                <div key={p.img} className="pr_co">
                  <img src={`/img/service/education/${p.img}.webp`} alt={p.title} className="pr_co_image" />
                  <div className="pr_co_text_wrapper">
                    <span className="pr_co_title">{p.title}</span>
                    <span className="pr_co_content">{p.content}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education_who" className="recommend_who">
          <div className="who_inner innerbox_1180">
            <h2 className="who_title section_title small_title">
              <span className="en_title">who?</span>
              <span className="ja_title"><span className="underline">こんな教育機関・企業</span>に<br className="u_sp" />おすすめです</span>
            </h2>
            <div className="who_contents_wrapper who_size__2">
              <div className="wh_co">
                <img src="/img/service/education/who_01.webp" alt="実践的なAI教育を導入したい教育機関" className="wh_co_image" />
                <div className="wh_co_title">
                  <span className="main_color">実践的なAI教育</span>を<br />
                  導入したい教育機関
                </div>
                <div className="wh_co_content center">
                  AIの専門講師によるカリキュラムを提供し、<br />
                  生徒が実際にAIを活用できるスキルを習得できます。
                </div>
              </div>
              <div className="wh_co">
                <img src="/img/service/education/who_02.webp" alt="AIリテラシーを組織全体で向上させたい企業" className="wh_co_image" />
                <div className="wh_co_title">
                  <span className="main_color">AIリテラシー</span>を組織全体で<br />
                  向上させたい企業
                </div>
                <div className="wh_co_content center">
                  エンジニアだけでなく、コンサルタントやビジネス職の社員にも<br />
                  AIの基礎知識を習得させ、業務に活かすことができます。
                </div>
              </div>
              <div className="wh_co">
                <img src="/img/service/education/who_03.webp" alt="個別最適化教育で、生徒の成長をサポートしたい教育機関" className="wh_co_image" />
                <div className="wh_co_title">
                  <span className="main_color">個別最適化教育</span>で、生徒の成長を<br />
                  サポートしたい教育機関
                </div>
                <div className="wh_co_content center">
                  AIを活用し、生徒一人ひとりの理解度や学習ペースに<br />
                  合わせた指導を実現し、教師の負担を軽減します。
                </div>
              </div>
              <div className="wh_co">
                <img src="/img/service/education/who_04.webp" alt="適材適所の人材配置でプロジェクトの生産性を向上させたい企業" className="wh_co_image" />
                <div className="wh_co_title">
                  <span className="main_color">適材適所の人材配置</span>でプロジェクトの<br />
                  生産性を向上させたい企業
                </div>
                <div className="wh_co_content center">
                  AIを活用し、社員のスキルや適性を分析し、最適な業務配置を実現。<br />
                  システム開発やプロジェクト運営の効率を高めます。
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education_step" className="step">
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
                  企業・学校・塾など、導入先の学習目的や対象者に応じた最適な教育支援プログラムを設計するため、詳細をヒアリングします。
                </div>
              </div>
              <div className="st_co">
                <div className="st_co_title">
                  <span className="st_co_title__number">Step 03</span>
                  <span className="st_co_title__text">カリキュラム設計・教材準備</span>
                </div>
                <div className="st_co_detail">
                  AI概論・AIプログラミング・生成AIの活用など、受講者に合わせた最適なカリキュラムを設計。 必要な教材や学習ツールも準備します。<br />
                  Kaikaを活用したデータ分析では、受講者の特性やスキルを的確に把握し、一人ひとりに最適な指導をサポートします。
                </div>
              </div>
              <div className="st_co">
                <div className="st_co_title">
                  <span className="st_co_title__number">Step 04</span>
                  <span className="st_co_title__text">教育支援の実施</span>
                </div>
                <div className="st_co_detail">
                  研修・講義・ハンズオン形式など、最適な形式で実施。実践的な学びを提供し、スキルの定着をサポートします。Kaikaを活用したデータ分析では、学習の効率を高め、スキル習得を最大限に促進するとともに、指導者の負担を軽減し、より質の高い教育を実現します。
                </div>
              </div>
              <div className="st_co">
                <div className="st_co_title">
                  <span className="st_co_title__number">Step 05</span>
                  <span className="st_co_title__text">効果測定・フォローアップ</span>
                </div>
                <div className="st_co_detail">
                  研修・講義・ハンズオンを通して、学習の定着度を確認し、学びの継続や業務活用に向けたフォローアップを実施。必要に応じて追加支援を行います。
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
