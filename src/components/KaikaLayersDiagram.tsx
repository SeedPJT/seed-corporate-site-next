/**
 * What? の節に置く図 = 「Kaika 実装伴走は、何をどこまで作るのか」。
 *
 * 3 つの特徴の **前提** を 1 枚で見せる。 下の 3 つはどれもこの構造の上に
 * 乗っている ( 右腕を作り替えられる / 基盤側が学ぶ / 基盤側に溜まる) ので、
 * 特徴 1 の下ではなく **3 つの前** に置く。
 *
 * 作るのは真ん中だけ、 という一点だけを伝える。 箱の中は名前のみで、
 * 主張は下の一文に逃がしてある ( すぐ下に 3 つの特徴の本文が続く為)。
 *
 * 色は _page.scss の .kaika_layers で持つ ( 図自体は CSS 変数で色を持つ作り)。
 * 変数名は .hana_diagram と揃えてあるので、 同じ palette がそのまま効く。
 */
export default function KaikaLayersDiagram() {
  return (
    <div
      className="kaika_layers"
      role="img"
      aria-label="Kaikaと、御社専用の右腕と、御社のシステムが繋がる図。あらたに作るのは真ん中の右腕だけ"
    >
      <svg viewBox="0 0 960 190" aria-hidden="true">
        <defs>
          <marker id="kl_arrow" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
            <path d="M0,0 L9,4.5 L0,9 z" fill="var(--fnt)" />
          </marker>
        </defs>

        {/* Kaika = 共通基盤。 変えない側なので構造の色 ( 藤) */}
        <rect x="20" y="34" width="250" height="122" rx="10" fill="var(--srf)" stroke="var(--b)" strokeWidth="2.2" />
        <image href="/img/common/kaika_logo.png" x="72" y="76" width="146" height="40" preserveAspectRatio="xMidYMid meet" />

        <path d="M278 84 L342 84" stroke="var(--fnt)" strokeWidth="1.3" markerEnd="url(#kl_arrow)" />
        <path d="M342 106 L278 106" stroke="var(--fnt)" strokeWidth="1.3" markerEnd="url(#kl_arrow)" />

        {/* 御社専用の右腕 = ここだけ作る。 人の側の色 ( ピンク) */}
        <rect x="350" y="34" width="250" height="122" rx="10" fill="var(--pnl)" stroke="var(--g)" strokeWidth="2.2" />
        <rect x="350" y="34" width="250" height="122" rx="10" fill="var(--g)" opacity="0.06" />
        <text x="475" y="103" className="kl_title" textAnchor="middle">御社専用の右腕</text>

        <path d="M608 84 L672 84" stroke="var(--fnt)" strokeWidth="1.3" markerEnd="url(#kl_arrow)" />
        <path d="M672 106 L608 106" stroke="var(--fnt)" strokeWidth="1.3" markerEnd="url(#kl_arrow)" />

        {/* 御社のシステム = すでにお持ちの物。 点線の筒 */}
        <g stroke="var(--fnt)" strokeWidth="1.3" fill="none" strokeDasharray="5 4">
          <path d="M690 52 v86 a58 15 0 0 0 116 0 v-86" />
          <ellipse cx="748" cy="52" rx="58" ry="15" />
          <path d="M690 80 a58 15 0 0 0 116 0" strokeDasharray="3 4" />
        </g>
        <text x="834" y="90" className="kl_title2">御社の</text>
        <text x="834" y="114" className="kl_title2">システム</text>
      </svg>

      <p className="kaika_layers__note">
        あらたに作るのは真ん中だけです。Kaika本体は変えないので、新しくなればそのまま届きます。
      </p>
    </div>
  )
}
