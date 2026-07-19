import Link from 'next/link'
import PageHead from '@/components/PageHead'
import CtaSection from '@/components/CtaSection'
import { getAllNews, NEWS_CATEGORIES, formatNewsDate, getThumbnailOrDefault } from '@/lib/news'

export const metadata = {
  title: 'お知らせ | 株式会社Seed',
  description: '株式会社Seed の お知らせ 一覧。 リリース / メディア掲載 / 提携 / 採用 等 の 情報 を お届 け します。',
}

export default function NewsIndex() {
  const items = getAllNews()
  return (
    <>
      <PageHead en="news" ja="お知らせ" />

      <div className="page_contents_wrapper innerbox_1180">
        <div className="news_contents_wrapper archive_main_contents">
          {items.length === 0 ? (
            <div style={{ width: '100%', textAlign: 'center', padding: '48px 0', opacity: 0.5 }}>
              現在 お知らせ は ありません。
            </div>
          ) : (
            items.map((item) => (
              <Link key={item.slug} href={`/news/${item.slug}/`} className="co">
                <img src={getThumbnailOrDefault(item)} alt={item.title} className="co_image" />
                <div className="co_title">{item.title}</div>
                <div className="co_date">{formatNewsDate(item.date)}</div>
                <div className="co_cats_wrapper category_wrapper">
                  <span className="co_cat_item cat_item">{NEWS_CATEGORIES[item.category]}</span>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>

      <CtaSection />
    </>
  )
}
