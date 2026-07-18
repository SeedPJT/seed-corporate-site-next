import LoadingAnimation from '@/components/LoadingAnimation'

export default function Home() {
  return (
    <>
      <LoadingAnimation />
      {/* front-page = 次phase で 完全 忠実 移植。 一時 placeholder */}
      <section id="fv">
        <div className="fv_inner innerbox_1280">
          <h2 className="fv_title">
            <div className="fv_title_inner">
              From Diversity, <br />Innovation Grows<span></span>
            </div>
          </h2>
          <h3 className="fv_subtitle">
            <div className="fv_title_inner">
              多様性からイノベーションが育つ<span></span>
            </div>
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
          </div>
        </div>
      </section>
    </>
  )
}
