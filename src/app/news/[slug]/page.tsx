import Link from 'next/link'
import { notFound } from 'next/navigation'
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
    openGraph: item.thumbnail
      ? {
          title: item.title,
          description: item.summary || item.title,
          images: [item.thumbnail],
        }
      : undefined,
  }
}

export default async function NewsDetail({ params }: Props) {
  const { slug } = await params
  const item = await getNewsBySlug(slug)
  if (!item) notFound()

  return (
    <>
      <div className="single_contents_wrapper page_contents_wrapper innerbox_1180">
        <div className="single_head">
          <h2 className="single_title">{item.title}</h2>
          <div className="single_date">{formatNewsDate(item.date)}</div>
          <div className="single_cats_wrapper category_wrapper">
            <span className="single_cat_item cat_item">{NEWS_CATEGORIES[item.category]}</span>
          </div>
        </div>

        {item.thumbnail && (
          <div className="single_thumbnail">
            <img src={item.thumbnail} alt={item.title} />
          </div>
        )}

        <div className="single_contents" dangerouslySetInnerHTML={{ __html: item.contentHtml }} />

        <div className="single_return">
          <Link href="/news/" className="link green">記事一覧へ戻る</Link>
        </div>
      </div>

      <CtaSection />
    </>
  )
}
