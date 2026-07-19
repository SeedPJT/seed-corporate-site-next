import Link from 'next/link'
import '../admin.css'

// admin UI は 公 開 site と CSS を 完 全 分離 = 独自 の 軽量 UI shell。
// SCSS 継承 しない ( 記事 body prose のみ 別途 対応)。
export const metadata = {
  title: '管理 | 株式会社Seed',
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin_shell">
      <header className="admin_header">
        <Link href="/admin/news" className="admin_brand">Seed 管理</Link>
        <nav className="admin_nav">
          <Link href="/admin/news">お知らせ</Link>
          <Link href="/" target="_blank">サイトを見る ↗</Link>
          <form action="/api/admin/logout" method="post" className="admin_logout_form">
            <button type="submit" className="admin_link_button">ログアウト</button>
          </form>
        </nav>
      </header>
      <main className="admin_main">{children}</main>
    </div>
  )
}
