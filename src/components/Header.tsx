'use client'
import { useState } from 'react'
import Link from 'next/link'

// 元 WP の nav 構造 と 完全 一致:
// - `menu-item-has-children` = サブメニュー 持ち (Service)
// - `header_menu__contact` = お問い合わせ = SCSS で button 化
// - `sub-menu` = ドロップダウン
// - `u_sp` = mobile のみ表示 (「サービス一覧」 は PC では Service ラベル で 集約 = mobile では 子として表示)
type SubItem = { label: string; href: string; spOnly?: boolean }
type NavItem = { label: string; href: string; contact?: boolean; children?: SubItem[] }

const NAV_ITEMS: NavItem[] = [
  { label: 'TOP', href: '/' },
  { label: 'Seedについて', href: '/about-us/' },
  {
    label: 'サービス',
    href: '/service/',
    children: [
      { label: 'サービス一覧', href: '/service/', spOnly: true },
      { label: '包括的で最適な伴走サービス', href: '/service/support-and-growth/' },
      { label: 'AI・システムの受託開発', href: '/service/ai-and-system/' },
      { label: '独自プロダクトによる教育支援', href: '/service/ai-x-education/' },
    ],
  },
  { label: 'プロダクト紹介', href: '/product/' },
  { label: 'お知らせ', href: '/news/' },
  { label: 'お問い合わせ', href: '/contact/', contact: true },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header id="header">
      <div className="header_inner">
        <h1 className="header_left">
          <Link href="/">
            <img src="/img/common/logo.webp" alt="株式会社Seed" className="logo header_logo" />
          </Link>
        </h1>

        <div className="header_right">
          <div className={`hamburger_menu${open ? ' open' : ''}`}>
            <div
              className="hamburger_menu_btn"
              onClick={() => setOpen((v) => !v)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setOpen((v) => !v)}
              aria-label="メニュー"
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>

            <div className="hamburger_menu_list_wrapper">
              <Link href="/" className="hamburger_logo u_sp" onClick={close}>
                <img src="/img/common/logo.webp" alt="株式会社Seed" className="logo header_logo" />
              </Link>

              <div className="menu-header_main_menu-container">
                <ul id="menu-header_main_menu" className="hamburger_menu_list">
                  {NAV_ITEMS.map((item) => {
                    const classes = ['menu-item', 'menu-item-type-post_type', 'menu-item-object-page']
                    if (item.children) classes.push('menu-item-has-children')
                    if (item.contact) classes.push('header_menu__contact')
                    return (
                      <li key={item.href + item.label} className={classes.join(' ')}>
                        <Link href={item.href} onClick={close}>{item.label}</Link>
                        {item.children && (
                          <ul className="sub-menu">
                            {item.children.map((sub) => {
                              const subClasses = ['menu-item', 'menu-item-type-post_type', 'menu-item-object-page']
                              if (sub.spOnly) subClasses.push('u_sp')
                              return (
                                <li key={sub.href + sub.label} className={subClasses.join(' ')}>
                                  <Link href={sub.href} onClick={close}>{sub.label}</Link>
                                </li>
                              )
                            })}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
