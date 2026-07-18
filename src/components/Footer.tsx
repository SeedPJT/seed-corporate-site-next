import Link from 'next/link'

const FOOTER_NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us/' },
  { label: 'Product', href: '/product/' },
  { label: 'Service', href: '/service/' },
  { label: 'Contact', href: '/contact/' },
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
            {FOOTER_NAV.map((item) => (
              <li key={item.href} className="menu-item">
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
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
