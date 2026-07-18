'use client'
import { useState } from 'react'
import Link from 'next/link'

const NAV_ITEMS = [
  { label: 'TOP', href: '/' },
  { label: 'Seedについて', href: '/about-us/' },
  { label: 'サービス', href: '/service/' },
  { label: 'プロダクト紹介', href: '/product/' },
  { label: 'お問い合わせ', href: '/contact/' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
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
              <Link href="/" className="hamburger_logo u_sp" onClick={() => setOpen(false)}>
                <img src="/img/common/logo.webp" alt="株式会社Seed" className="logo header_logo" />
              </Link>

              <ul className="hamburger_menu_list">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href} className="menu-item">
                    <Link href={item.href} onClick={() => setOpen(false)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
