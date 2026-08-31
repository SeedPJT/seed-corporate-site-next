/**
 * why の節に置く図 = 「なぜ散らかった思考と行動を価値に変えられるのか？」
 *
 * Kaika-app の LP と同じ図。 色だけ HP のもの ( 紫 #777de1 / ピンク #f05f7c) に
 * 差し替えてある ( _page.scss の .hana_diagram)。
 *
 * 一言が事実とルールに分解され、 知識のつながりを辿って、 答えとして返るまでを
 * 1 枚で見せる。 下の特許カード 2 枚の 「会話から事実とルールを構造化する」 が
 * 目に見える形。
 *
 * 色は landing.css の .hana_diagram で LP の色に差し替えている ( 図自体は CSS 変数
 * で色を持つ作り)。 ここでは形だけを持つ。
 */
export default function HanaFlowDiagram() {
  return (
    <div className="hana_diagram" role="img" aria-label="話した事とKaika上でやった事が事実とルールに分解され、その蓄積をたどってHanaの答えとして返るまでの流れ図">
      <svg className="wide" viewBox="0 0 1100 640" role="img" aria-label="Kaikaの内部構造">
          <defs>
            <marker id="aB" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--b)"/></marker>
            <marker id="aG" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--g)"/></marker>
            <radialGradient id="hanaG" cx="40%" cy="38%" r="60%">
              <stop offset="0%" stopColor="#ffd6e7"/><stop offset="100%" stopColor="#fbb1bb"/>
            </radialGradient>
          </defs>
          <rect width="1100" height="640" className="bgf"/>

          {/* あなた */}
          <rect x="30" y="56" width="170" height="92" rx="12" className="pnl"/>
          <rect x="30" y="56" width="170" height="92" rx="12" className="ln"/>
          <path d="M52 148 L 58 168 L 72 148 z" className="pnl"/>
          <path d="M52 148 L 58 168 L 72 148" className="ln"/>
          <text x="50" y="92" className="body ink" fontSize="13">「<tspan className="fb" fontWeight="700">サクラ</tspan>の件、</text>
          <line x1="63" y1="98" x2="102" y2="98" stroke="var(--b)" strokeWidth="1.4"/>
          <text x="63" y="120" className="body ink" fontSize="13">今どうなってる?」</text>

          <circle cx="62" cy="188" r="17" fill="#FFFFFF" stroke="var(--line)" strokeWidth="1"/>
          <g transform="translate(51.5,177.5) scale(0.0205)" fill="var(--fnt)">
            <path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"/>
          </g>
          <text x="86" y="193" className="body ink" fontSize="13" fontWeight="700">あなた</text>

          {/* Hana */}
          <g transform="translate(44,288) scale(0.36)">
            <circle cx="50" cy="50" r="46" fill="url(#hanaG)"/>
            <ellipse cx="40" cy="40" rx="10" ry="7" fill="#ffffff" opacity=".22"/>
          </g>
          <text x="86" y="311" className="body ink" fontSize="13" fontWeight="700">Hana</text>

          <rect x="30" y="340" width="195" height="112" rx="12" className="srf"/>
          <rect x="30" y="340" width="195" height="112" rx="12" className="sg" strokeWidth="1.4"/>
          <path d="M52 341 L 58 323 L 72 341 z" className="srf"/>
          <path d="M52 341 L 58 323 L 72 341" className="sg" strokeWidth="1.4"/>
          <text x="46" y="368" className="body ink" fontSize="12">試み「サクラ食品の</text>
          <text x="46" y="388" className="body ink" fontSize="12">業務改善」は進行中です。</text>
          <text x="46" y="408" className="body ink" fontSize="12">先週の会議で3つ決まり、</text>
          <text x="46" y="428" className="body ink" fontSize="12">次の行動は今週が期限です。</text>

          {/* Kaika 外枠 */}
          <rect x="380" y="30" width="690" height="580" rx="16" className="ln" strokeWidth="1.6"/>
          <rect x="400" y="18" width="100" height="24" className="bgf"/>
          {/* 枠の上に載る名前。 76x21 ( 約 3.6:1) は文字入りロゴの比率に合わせた枠なので、
              アイコンだけの logo_b だと縦横比が合わず小さく浮く。 ここは 「この箱は何か」 を
              言う所なので、 名前が入っている logo_a を使う。 */}
          <image className="lpLogo" x="412" y="20" width="76" height="21" href="/img/common/kaika_logo.png"/>
    

          <g transform="translate(-80,0)">
          {/* 辺 */}
          <g className="eg">
            <line x1="740" y1="208" x2="740" y2="152"/>
            <line x1="814" y1="129" x2="861" y2="129"/>
            <line x1="698" y1="250" x2="610" y2="250" strokeDasharray="3 3"/>
            <line x1="740" y1="292" x2="740" y2="350"/>
            <line x1="929" y1="272" x2="929" y2="350"/>
            <path d="M814 138 C 850 138, 878 170, 888 226"/>
            <line x1="782" y1="250" x2="870" y2="250"/>
          </g>

          {/* ノード */}
          <g className="body ink" fontSize="12" textAnchor="middle">
            <rect x="666" y="110" width="148" height="42" rx="5" className="srf"/><rect x="666" y="110" width="148" height="42" rx="5" className="ln"/>
            <text x="740" y="136">チーム</text>
            <circle cx="895" cy="131" r="34" className="srf"/><circle cx="895" cy="131" r="34" className="ln"/>
            <text x="895" y="136" className="mut">メンバー</text>
            <rect x="500" y="228" width="110" height="44" rx="5" className="srf"/><rect x="500" y="228" width="110" height="44" rx="5" className="sg" strokeWidth="1.2"/>
            <text x="555" y="255" className="fg" fontWeight="700">特性</text>
          </g>

          {/* 関係先 ( 引き当たった先) */}
          <rect x="870" y="228" width="118" height="44" rx="5" className="hl"/>
          <rect x="870" y="228" width="118" height="44" rx="5" className="sb" strokeWidth="1.6"/>
          <text x="929" y="247" className="body ink" fontSize="12" fontWeight="700" textAnchor="middle">関係先</text>
          <text x="929" y="262" className="body fb" fontSize="8.5" textAnchor="middle">サクラ食品</text>

          {/* あなた */}
          <circle cx="740" cy="250" r="42" className="srf"/>
          <circle cx="740" cy="250" r="42" className="sg" strokeWidth="2"/>
          <text x="740" y="256" className="body fg" fontSize="14" fontWeight="700" textAnchor="middle">あなた</text>

          {/* 試み */}
          <rect x="520" y="350" width="474" height="132" rx="8" className="bgf"/>
          <rect x="520" y="350" width="474" height="132" rx="8" className="sb" strokeWidth="1.4" strokeDasharray="6 4"/>
          <text x="536" y="374" className="body fb" fontSize="12.5" fontWeight="700">試み</text>
          <g className="body ink" fontSize="11.5" textAnchor="middle">
            <rect x="538" y="386" width="106" height="54" rx="5" className="srf"/><rect x="538" y="386" width="106" height="54" rx="5" className="ln"/>
            <rect x="654" y="386" width="96" height="54" rx="5" className="srf"/><rect x="654" y="386" width="96" height="54" rx="5" className="ln"/>
            <rect x="760" y="386" width="84" height="54" rx="5" className="srf"/><rect x="760" y="386" width="84" height="54" rx="5" className="ln"/>
            <rect x="854" y="386" width="84" height="54" rx="5" className="srf"/><rect x="854" y="386" width="84" height="54" rx="5" className="ln"/>
            <text x="591" y="418">ドキュメント</text><text x="702" y="418">議事録</text>
            <text x="802" y="418">目標</text><text x="896" y="418">行動</text>
          </g>

          {/* 事実とルール */}
          <text x="500" y="510" className="body ink" fontSize="11.5" fontWeight="700">事実とルール</text>
          <g className="body fnt" fontSize="9">
            <text x="512" y="526">誰が</text><text x="594" y="526">どうしている</text>
            <text x="714" y="526">何を</text><text x="1098" y="526" textAnchor="end">確かさ</text>
          </g>
          <line x1="500" y1="530" x2="1110" y2="530" stroke="var(--edge)" strokeWidth=".8"/>
          <rect x="500" y="534" width="610" height="15" className="srf"/>
          <rect x="500" y="564" width="610" height="15" className="srf"/>
          <g className="mono" fontSize="9">
            <text x="512" y="545" className="ink">あなた</text><text x="594" y="545" className="fb">大切にしている</text>
            <text x="714" y="545" className="ink">議事録は24時間以内に共有する</text><text x="1098" y="545" className="mut" textAnchor="end">0.92</text>
            <text x="512" y="560" className="ink">チーム</text><text x="594" y="560" className="fb">取引がある</text>
            <text x="714" y="560" className="ink">サクラ食品</text><text x="1098" y="560" className="mut" textAnchor="end">0.98</text>
            <text x="512" y="575" className="ink">あなた</text><text x="594" y="575" className="fb">経験した</text>
            <text x="714" y="575" className="ink">サクラ食品の業務改善の立ち上げ</text><text x="1098" y="575" className="mut" textAnchor="end">0.87</text>
          </g>
          </g>

          {/* 流れ */}
          <path d="M84 56 A 10 10 0 0 1 94 46 L 930 46 A 10 10 0 0 1 940 56 L 940 240 A 10 10 0 0 1 930 250 L 908 250" className="sb" strokeWidth="1.7" strokeLinejoin="round" markerEnd="url(#aB)"/>
          <text x="952" y="160" className="body fb" fontSize="10.5">特定</text>
          <path d="M440 416 C 384 414, 330 398, 231 378" className="sg" strokeWidth="1.7" markerEnd="url(#aG)"/>
        </svg>

      {/* 狭い画面用 = 縦に積んだ図。
          横長のまま縮めると 1100 -> 350px で倍率 0.32 = 文字が 4px になり読めない。
          幅 380 に組み直して、 上から 話す -> 溜まる -> 返る の順に読ませる。 */}
      <svg className="narrow" viewBox="0 -14 380 786" role="img" aria-label="話した事とKaika上でやった事が事実とルールに分解され、その蓄積をたどってHanaの答えとして返るまでの流れ図">
        {/* 2026-08-31: 縦版の定義は **縦版の中に置く**。
            広い版は狭い画面で display:none になるので、 その中の defs は効かない
            ( 矢印の頭と Hana の丸が消えた)。 */}
        <defs>
          <marker id="aB2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--b)" /></marker>
          <marker id="aG2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--g)" /></marker>
          <radialGradient id="hanaG2" cx="40%" cy="38%" r="60%">
            <stop offset="0%" stopColor="#ffd6e7" /><stop offset="100%" stopColor="#fbb1bb" />
          </radialGradient>
        </defs>
        {/* 社長の一言 */}
        <rect x="16" y="14" width="228" height="60" rx="10" className="pnl" />
        <rect x="16" y="14" width="228" height="60" rx="10" className="ln" />
        {/* 塗りを枠線の太さぶん ( 1.2px) 上まで伸ばす。 ちょうど枠線の上に
            合わせると線の上半分が残り、 尻尾の付け根に区切り線が見える。 */}
        <path d="M36 72.4 L 42 92 L 56 72.4 z" className="pnl" />
        <path d="M36 74 L 42 92 L 56 74" className="ln" />
        <text x="30" y="40" className="body ink" fontSize="12">「<tspan className="fb">サクラ</tspan>の件、</text>
        <text x="42" y="62" className="body ink" fontSize="12">今どうなってる?」</text>
        {/* 広い版と同じく 「サクラ」 に下線 = ここが手掛かりだと示す */}
        <line x1="42" y1="46" x2="78" y2="46" stroke="var(--b)" strokeWidth="1.3" />
        <circle cx="28" cy="110" r="12" fill="#FFFFFF" stroke="var(--line)" strokeWidth="1" />
        <g transform="translate(20.5,102.5) scale(0.0145)" fill="var(--fnt)">
          <path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-43.4 18.3-82.4 44.6-115.9 78.1a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 140 908c-.2 4.4 3.3 8 7.7 8h60c4.3 0 7.9-3.4 8-7.7 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.5-87.9s155.8 31.2 212.5 87.9C783.3 758.8 814.3 831.1 816.3 908c.1 4.3 3.7 7.7 8 7.7h60c4.4 0 7.9-3.6 7.7-8-1.1-51.6-11.6-101.7-31.5-148.1zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" />
        </g>
        <text x="48" y="115" className="body ink" fontSize="12" fontWeight="500">あなた</text>

        {/* 取り込み = 話した事とやった事が中へ */}
        {/* 広い版と同じ意味にする = 一言から 「どの関係先の話か」 を特定する道。
            まっすぐ枠に落とすと何を指しているのか分からなかった。 */}
        <path d="M 60 14 A 8 8 0 0 1 68 6 L 332 6 A 8 8 0 0 1 340 14 L 340 258" className="sb" strokeWidth="1.6" fill="none" markerEnd="url(#aB2)" />
        <text x="334" y="152" className="body fb" fontSize="10" textAnchor="end">特定</text>

        {/* Kaika の中 */}
        <rect x="12" y="166" width="356" height="418" rx="14" className="ln" />
        <rect x="36" y="155" width="86" height="22" className="bgf" />
        <image className="lpLogo" x="40" y="157" width="76" height="21" href="/img/common/kaika_logo.png" />

        <rect x="120" y="192" width="86" height="32" rx="5" className="srf" />
        <rect x="120" y="192" width="86" height="32" rx="5" className="ln" />
        <text x="163" y="212" className="body ink" fontSize="11" textAnchor="middle">チーム</text>
        <circle cx="286" cy="208" r="24" className="srf" />
        <circle cx="286" cy="208" r="24" className="ln" />
        <text x="286" y="212" className="body mut" fontSize="10" textAnchor="middle">メンバー</text>
        <line x1="206" y1="208" x2="262" y2="208" className="ln" />

        <line x1="163" y1="224" x2="163" y2="252" className="ln" />
        <circle cx="163" cy="286" r="32" className="srf" />
        <circle cx="163" cy="286" r="32" className="sg" />
        <text x="163" y="290" className="body ink" fontSize="11" textAnchor="middle" fontWeight="500">あなた</text>

        <rect x="24" y="270" width="72" height="32" rx="5" className="srf" />
        <rect x="24" y="270" width="72" height="32" rx="5" className="sg" />
        <text x="60" y="290" className="body fg" fontSize="11" textAnchor="middle">特性</text>
        <line x1="96" y1="286" x2="129" y2="286" className="ln" strokeDasharray="2 3" />

        <rect x="250" y="266" width="102" height="40" rx="5" className="hl" />
        <rect x="250" y="266" width="102" height="40" rx="5" className="sb" />
        <text x="301" y="284" className="body ink" fontSize="11" textAnchor="middle" fontWeight="500">関係先</text>
        <text x="301" y="298" className="body mut" fontSize="9" textAnchor="middle">サクラ食品</text>
        <line x1="195" y1="286" x2="250" y2="286" className="ln" />

        <line x1="163" y1="318" x2="163" y2="344" className="ln" />
        <line x1="301" y1="306" x2="301" y2="344" className="ln" />

        <rect x="24" y="344" width="332" height="112" rx="8" className="bgf" />
        <rect x="24" y="344" width="332" height="112" rx="8" className="sb" strokeDasharray="4 3" />
        <text x="38" y="364" className="body fb" fontSize="10" fontWeight="500">試み</text>
        <rect x="34" y="372" width="152" height="32" rx="5" className="srf" />
        <rect x="34" y="372" width="152" height="32" rx="5" className="ln" />
        <text x="110" y="392" className="body ink" fontSize="11" textAnchor="middle">ドキュメント</text>
        <rect x="194" y="372" width="152" height="32" rx="5" className="srf" />
        <rect x="194" y="372" width="152" height="32" rx="5" className="ln" />
        <text x="270" y="392" className="body ink" fontSize="11" textAnchor="middle">議事録</text>
        <rect x="34" y="412" width="152" height="32" rx="5" className="srf" />
        <rect x="34" y="412" width="152" height="32" rx="5" className="ln" />
        <text x="110" y="432" className="body ink" fontSize="11" textAnchor="middle">目標</text>
        <rect x="194" y="412" width="152" height="32" rx="5" className="srf" />
        <rect x="194" y="412" width="152" height="32" rx="5" className="ln" />
        <text x="270" y="432" className="body ink" fontSize="11" textAnchor="middle">行動</text>

        {/* 事実とルール = 確かさの列は幅が足りないので落とす */}
        <text x="24" y="486" className="body ink" fontSize="11" fontWeight="500">事実とルール</text>
        <line x1="24" y1="494" x2="356" y2="494" className="eg" strokeWidth=".8" />
        <text x="28" y="508" className="body fnt" fontSize="8">誰が</text>
        <text x="92" y="508" className="body fnt" fontSize="8">どうしている</text>
        <text x="176" y="508" className="body fnt" fontSize="8">何を</text>
        <rect x="24" y="514" width="332" height="15" className="srf" />
        <text x="28" y="525" className="body ink" fontSize="9">あなた</text>
        <text x="92" y="525" className="body fg" fontSize="9">大切にしている</text>
        <text x="176" y="525" className="body ink" fontSize="9">議事録は24時間以内に共有する</text>
        <text x="28" y="543" className="body ink" fontSize="9">チーム</text>
        <text x="92" y="543" className="body fg" fontSize="9">取引がある</text>
        <text x="176" y="543" className="body ink" fontSize="9">サクラ食品</text>
        <rect x="24" y="550" width="332" height="15" className="srf" />
        <text x="28" y="561" className="body ink" fontSize="9">あなた</text>
        <text x="92" y="561" className="body fg" fontSize="9">経験した</text>
        <text x="176" y="561" className="body ink" fontSize="9">サクラ食品の業務改善の立ち上げ</text>

        {/* 返る */}
        <line x1="163" y1="584" x2="163" y2="620" className="sg" strokeWidth="1.6" markerEnd="url(#aG2)" />

        <circle cx="28" cy="646" r="12" fill="url(#hanaG2)" />
        <ellipse cx="24" cy="642" rx="4" ry="3" fill="#ffffff" opacity=".22" />
        <text x="48" y="651" className="body ink" fontSize="12" fontWeight="500">Hana</text>
        <rect x="16" y="664" width="212" height="94" rx="10" className="srf" />
        <rect x="16" y="664" width="212" height="94" rx="10" className="sg" strokeWidth="1.3" />
        <path d="M92 665.6 L 98 646 L 112 665.6 z" className="srf" />
        <path d="M92 664 L 98 646 L 112 664" className="sg" />
        <text x="30" y="688" className="body ink" fontSize="11">試み「サクラ食品の</text>
        <text x="30" y="706" className="body ink" fontSize="11">業務改善」は進行中です。</text>
        <text x="30" y="724" className="body ink" fontSize="11">先週の会議で3つ決まり、</text>
        <text x="30" y="742" className="body ink" fontSize="11">次の行動は今週が期限です。</text>
      </svg>
      {/* 2026-08-31: ここで改行すると画面では半角スペースになる。
          日本語の間に空白を入れない規則に反するので、 1 行で持つ。 */}
      <p className="diagram_cap">話した事も、Kaikaの上でやった事も、事実とルールに分解されて残ります。だから次に聞いた時、その蓄積から答えが返ります。</p>
    </div>
  )
}
