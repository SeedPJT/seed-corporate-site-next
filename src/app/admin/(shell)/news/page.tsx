import Link from 'next/link'
import { getAllNews, NEWS_CATEGORIES, formatNewsDate } from '@/lib/news'

// admin news list = 現行の記事一覧、 編集 / 削除導線付き。
// SSR で file system から読み込み = ローカル開発時も deploy 後も同じ挙動。
// GitHub API で保存後は Vercel deploy 完了するまで list に反映されない ( 1-2 分)。
export const dynamic = 'force-dynamic'

export default function AdminNewsList() {
  const items = getAllNews()
  return (
    <>
      <h1 className="admin_h1">お知らせ</h1>
      <div className="admin_toolbar">
        <div className="admin_field_hint">
          記事数: {items.length} 件 = 保存すると GitHub に commit → Vercel が自動 deploy します ( 反映まで 1-2 分)。
        </div>
        <Link href="/admin/news/new" className="admin_btn">新規投稿</Link>
      </div>

      {items.length === 0 ? (
        <div className="admin_card">まだ記事がありません。 「新規投稿」 から始めてください。</div>
      ) : (
        <table className="admin_table">
          <thead>
            <tr>
              <th style={{ width: 120 }}>日付</th>
              <th style={{ width: 120 }}>カテゴリ</th>
              <th>タイトル</th>
              <th className="admin_col_actions">操作</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.slug}>
                <td>{formatNewsDate(item.date)}</td>
                <td>{NEWS_CATEGORIES[item.category]}</td>
                <td>{item.title}</td>
                <td className="admin_col_actions">
                  <Link href={`/admin/news/${item.slug}/edit`}>編集</Link>
                  <Link href={`/news/${item.slug}/`} target="_blank">表示</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}
