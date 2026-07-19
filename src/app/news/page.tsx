import Link from 'next/link'
import PageHead from '@/components/PageHead'
import CtaSection from '@/components/CtaSection'
import { getAllNews, NEWS_CATEGORIES, formatNewsDate } from '@/lib/news'

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
        <div className="news_list_wrapper page_inner">
          {items.length === 0 ? (
            <div className="news_empty">現在 お知らせ は ありません。</div>
          ) : (
            <ul className="news_list">
              {items.map((item) => (
                <li key={item.slug} className="news_list_item">
                  <Link href={`/news/${item.slug}/`} className="news_link">
                    <div className="news_meta">
                      <time className="news_date" dateTime={item.date}>{formatNewsDate(item.date)}</time>
                      <span className={`news_category news_category__${item.category}`}>
                        {NEWS_CATEGORIES[item.category]}
                      </span>
                    </div>
                    <div className="news_title">{item.title}</div>
                    {item.summary && <div className="news_summary">{item.summary}</div>}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <CtaSection />
    </>
  )
}
