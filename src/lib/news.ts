// お知らせ ( news) content loader = `content/news/*.md` を 読 んで 一覧 / 詳細 に 提供 する。
// SSOT = markdown ファイル ( gray-matter frontmatter + body)、 後 で microCMS 化 する 際 は
// この module の 内 部 だけ 差 し替え れば page 側 は 触 らない ( abstraction 保 つ)。
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import { NEWS_CATEGORIES, type NewsCategory } from './newsMeta'

export { NEWS_CATEGORIES, type NewsCategory }

const NEWS_DIR = path.join(process.cwd(), 'content', 'news')

export type NewsMeta = {
  slug: string
  title: string
  date: string
  category: NewsCategory
  summary?: string
}

export type NewsItem = NewsMeta & {
  contentHtml: string
}

function safeReadDir(dir: string): string[] {
  try {
    return fs.readdirSync(dir).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
  } catch {
    return []
  }
}

function parseFile(filePath: string, slug: string): NewsMeta & { raw: string } {
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const category = (data.category as NewsCategory) || 'info'
  return {
    slug,
    title: String(data.title || slug),
    date: String(data.date || '1970-01-01'),
    category,
    summary: data.summary ? String(data.summary) : undefined,
    raw: content,
  }
}

export function getAllNews(): NewsMeta[] {
  const files = safeReadDir(NEWS_DIR)
  const items = files.map((file) => {
    const slug = file.replace(/\.(md|mdx)$/, '')
    const parsed = parseFile(path.join(NEWS_DIR, file), slug)
    return {
      slug: parsed.slug,
      title: parsed.title,
      date: parsed.date,
      category: parsed.category,
      summary: parsed.summary,
    }
  })
  // 新しい順 = date DESC
  return items.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getNewsBySlug(slug: string): Promise<NewsItem | null> {
  const mdPath = path.join(NEWS_DIR, `${slug}.md`)
  const mdxPath = path.join(NEWS_DIR, `${slug}.mdx`)
  const filePath = fs.existsSync(mdPath) ? mdPath : fs.existsSync(mdxPath) ? mdxPath : null
  if (!filePath) return null
  const parsed = parseFile(filePath, slug)
  const processed = await remark().use(remarkHtml).process(parsed.raw)
  return {
    slug: parsed.slug,
    title: parsed.title,
    date: parsed.date,
    category: parsed.category,
    summary: parsed.summary,
    contentHtml: String(processed),
  }
}

export function getAllNewsSlugs(): string[] {
  return safeReadDir(NEWS_DIR).map((f) => f.replace(/\.(md|mdx)$/, ''))
}

// 日付 表 示 = YYYY.MM.DD の 統 一 format。
export function formatNewsDate(dateStr: string): string {
  const d = new Date(dateStr)
  if (Number.isNaN(d.getTime())) return dateStr
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}.${m}.${day}`
}
