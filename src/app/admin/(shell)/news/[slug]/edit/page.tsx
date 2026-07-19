import { notFound } from 'next/navigation'
import AdminNewsEditor from '@/components/AdminNewsEditor'
import { getNewsBySlug } from '@/lib/news'
import matter from 'gray-matter'
import fs from 'node:fs'
import path from 'node:path'

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ slug: string }> }

// Edit 画面 は remark 変換 前 の 生 markdown が欲しい ので、 gray-matter で 再パース する。
async function loadRawBody(slug: string): Promise<string | null> {
  const dir = path.join(process.cwd(), 'content', 'news')
  const mdPath = path.join(dir, `${slug}.md`)
  const mdxPath = path.join(dir, `${slug}.mdx`)
  const filePath = fs.existsSync(mdPath) ? mdPath : fs.existsSync(mdxPath) ? mdxPath : null
  if (!filePath) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { content } = matter(raw)
  return content
}

export default async function AdminNewsEdit({ params }: Props) {
  const { slug } = await params
  const meta = await getNewsBySlug(slug)
  const body = await loadRawBody(slug)
  if (!meta || body === null) notFound()

  return (
    <>
      <h1 className="admin_h1">記事 を編集</h1>
      <AdminNewsEditor
        mode="edit"
        initial={{
          slug: meta.slug,
          title: meta.title,
          date: meta.date,
          category: meta.category,
          summary: meta.summary || '',
          body: body.trim(),
        }}
      />
    </>
  )
}
