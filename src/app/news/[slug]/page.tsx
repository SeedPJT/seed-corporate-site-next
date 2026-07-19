import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHead from '@/components/PageHead'
import CtaSection from '@/components/CtaSection'
import { getNewsBySlug, getAllNewsSlugs, NEWS_CATEGORIES, formatNewsDate } from '@/lib/news'

export async function generateStaticParams() {
  return getAllNewsSlugs().map((slug) => ({ slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const item = await getNewsBySlug(slug)
  if (!item) return { title: 'お知らせ | 株式会社Seed' }
  return {
    title: `${item.title} | 株式会社Seed`,
    description: item.summary || item.title,
  }
}

export default async function NewsDetail({ params }: Props) {
  const { slug } = await params
  const item = await getNewsBySlug(slug)
  if (!item) notFound()

  return (
    <>
      <PageHead en="news" ja="お知らせ" />

      <div className="page_contents_wrapper innerbox_980">
        <article className="news_detail page_inner">
          <header className="news_detail_header">
            <div className="news_meta">
              <time className="news_date" dateTime={item.date}>{formatNewsDate(item.date)}</time>
              <span className={`news_category news_category__${item.category}`}>
                {NEWS_CATEGORIES[item.category]}
              </span>
            </div>
            <h1 className="news_detail_title">{item.title}</h1>
          </header>

          <div className="news_detail_body" dangerouslySetInnerHTML={{ __html: item.contentHtml }} />

          <div className="news_detail_footer">
            <Link href="/news/" className="btn arrow_btn back_btn">
              <img src="/img/common/icon_arrow.webp" alt="←" className="arrow" />
              <span className="text">お知らせ一覧に戻る</span>
            </Link>
          </div>
        </article>
      </div>

      <CtaSection />
    </>
  )
}
