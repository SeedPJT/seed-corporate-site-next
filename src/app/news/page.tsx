import Link from 'next/link'
import PageHead from '@/components/PageHead'
import CtaSection from '@/components/CtaSection'
import {
  getAllNews,
  NEWS_CATEGORIES,
  formatNewsDate,
  getThumbnailOrDefault,
  isThumbnailFallback,
  type NewsCategory,
} from '@/lib/news'

export const metadata = {
  title: 'お知らせ | 株式会社Seed',
  description: '株式会社Seed のお知らせ一覧。リリース / メディア掲載 / 提携 / 採用等の情報をお届けします。',
}

type Props = { searchParams: Promise<{ category?: string }> }

function isCategory(v: string | undefined): v is NewsCategory {
  return !!v && Object.prototype.hasOwnProperty.call(NEWS_CATEGORIES, v)
}

export default async function NewsIndex({ searchParams }: Props) {
  const params = await searchParams
  const active: NewsCategory | 'all' = isCategory(params.category) ? params.category : 'all'
  const all = getAllNews()
  const items = active === 'all' ? all : all.filter((i) => i.category === active)

  // 該当ゼロの category は絞り込み UI に出さない (件数 0 の filter を並べても押す意味なし)。
  const activeCategories = new Set(all.map((i) => i.category))

  return (
    <>
      <PageHead en="news" ja="お知らせ" />

      <div className="page_contents_wrapper innerbox_1180 archive_contents_wrapper">
        <div className="archive_category_list_wrapper">
          <ul className="archive_category_list">
            <li className={`cat_item${active === 'all' ? ' current' : ''}`}>
              <Link href="/news/" className="flex_center">すべて</Link>
            </li>
            {(Object.keys(NEWS_CATEGORIES) as NewsCategory[])
              .filter((key) => activeCategories.has(key))
              .map((key) => (
                <li key={key} className={`cat_item${active === key ? ' current' : ''}`}>
                  <Link href={`/news/?category=${key}`} className="flex_center">
                    {NEWS_CATEGORIES[key]}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div className="news_contents_wrapper archive_main_contents">
          {items.length === 0 ? (
            <div style={{ width: '100%', textAlign: 'center', padding: '48px 0', opacity: 0.5 }}>
              該当するお知らせはありません。
            </div>
          ) : (
            items.map((item) => (
              <Link key={item.slug} href={`/news/${item.slug}/`} className="co">
                <img
                  src={getThumbnailOrDefault(item)}
                  alt={item.title}
                  className={`co_image${isThumbnailFallback(item) ? ' co_image__fallback' : ''}`}
                />
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
