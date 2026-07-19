import Link from 'next/link'
import { getAllNews, NEWS_CATEGORIES, formatNewsDate } from '@/lib/news'

// admin news list = 現行 の 記事 一覧、 編集 / 削除 導線 付き。
// SSR で file system から 読み込み = ローカル 開発 時 も deploy 後 も 同 じ 挙動。
// GitHub API で 保存 後 は Vercel deploy 完了 する まで list に反映 されない ( 1-2 分)。
export const dynamic = 'force-dynamic'

export default function AdminNewsList() {
  const items = getAllNews()
  return (
    <>
      <h1 className="admin_h1">お知らせ</h1>
      <div className="admin_toolbar">
        <div className="admin_field_hint">
          記事 数: {items.length} 件 = 保存 する と GitHub に commit → Vercel が 自動 deploy します ( 反映 まで 1-2 分)。
        </div>
        <Link href="/admin/news/new" className="admin_btn">新規 投稿</Link>
      </div>

      {items.length === 0 ? (
        <div className="admin_card">まだ 記事 が ありません。 「新規 投稿」 から 始めて ください。</div>
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
