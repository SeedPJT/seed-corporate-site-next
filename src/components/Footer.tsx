import Link from 'next/link'

// 元 WP footer と完全一致 = Service を親 + 3 子項目の番号付き構造に、
// service 子は menu__service_child class で SCSS の小 font 対応。
type FooterItem = { label: string; href: string; serviceChild?: boolean }

const FOOTER_NAV: FooterItem[] = [
  { label: 'トップページ', href: '/' },
  { label: 'Seedについて', href: '/about-us/' },
  { label: 'プロダクト紹介', href: '/product/' },
  { label: 'サービス', href: '/service/' },
  { label: 'お知らせ', href: '/news/' },
  { label: 'お問い合わせ', href: '/contact/' },
]

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer_inner innerbox_1180">
        <div className="footer_left">
          <Link href="/" className="footer_logo">
            <img src="/img/common/logo.webp" alt="株式会社Seed" className="logo" />
          </Link>
          <div className="footer_bottom u_pc">
            <div className="copyright">&copy; 2025 Seed All Rights Reserved.</div>
            <Link href="/privacy-policy/" className="link">プライバシーポリシー</Link>
          </div>
        </div>

        <div className="footer_right">
          <ul className="footer_menu_list">
            {FOOTER_NAV.map((item) => {
              const classes = ['menu-item', 'menu-item-type-post_type', 'menu-item-object-page']
              if (item.serviceChild) classes.push('menu__service_child')
              return (
                <li key={item.href} className={classes.join(' ')}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="footer_bottom u_sp_f">
          <div className="copyright">&copy; 2025 Seed All Rights Reserved.</div>
          <Link href="/privacy-policy/" className="link">プライバシーポリシー</Link>
        </div>
      </div>
    </footer>
  )
}
