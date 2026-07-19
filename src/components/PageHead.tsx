import Link from 'next/link'

// 各ページ共通の見出し + パンくず。 元 parts/page_head.php 相当。
// 現状は単純な 1階層のみ想定 ( 固定ページ)。 深い階層が出たら extraCrumbs で拡張。
type Crumb = { label: string; href?: string }
type Props = {
  en: string
  ja: string
  extraCrumbs?: Crumb[]
  variant?: 'common' | 'single'
}

export default function PageHead({ en, ja, extraCrumbs, variant = 'common' }: Props) {
  return (
    <section id="page_head" className={`${variant}_page_head`}>
      <h2 className="page_title">
        <div className="page_title_inner innerbox_1180">
          <span className="en_title">{en}</span>
          <span className="ja_title">{ja}</span>
        </div>
      </h2>

      <div className="breadcrumb_wrapper">
        <ul className="breadcrumb_inner innerbox_1180">
          <li className="breadcrumb_item"><Link href="/">TOP</Link></li>
          {extraCrumbs?.map((c, i) => (
            <li key={i} className="breadcrumb_item">
              {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}
            </li>
          ))}
          <li className="breadcrumb_item">{ja}</li>
        </ul>
      </div>
    </section>
  )
}
