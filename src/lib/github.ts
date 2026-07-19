// GitHub Contents API 経由で content/news/*.md を CRUD する wrapper。
// admin UI 側はこれを呼ぶだけで記事の追加 / 更新 / 削除が git commit として記録され、
// Vercel が自動 deploy して site に反映する ( WP の投稿 → 公開と同じ UX)。
//
// 必要 env vars:
//   GITHUB_TOKEN = fine-grained PAT ( Contents: Read and write scope)
//   GITHUB_REPO  = "owner/repo" ( 未設定の場合は VERCEL_GIT_REPO_OWNER/VERCEL_GIT_REPO_SLUG から derive)
//   GITHUB_BRANCH = 対象 branch ( 未設定は "main")

const API_BASE = 'https://api.github.com'

function getRepo(): { owner: string; repo: string } {
  const raw = process.env.GITHUB_REPO
  if (raw && raw.includes('/')) {
    const [owner, repo] = raw.split('/')
    return { owner, repo }
  }
  const owner = process.env.VERCEL_GIT_REPO_OWNER
  const repo = process.env.VERCEL_GIT_REPO_SLUG
  if (owner && repo) return { owner, repo }
  throw new Error('GITHUB_REPO env 未設定かつ Vercel Git env も未取得')
}

function getBranch(): string {
  return process.env.GITHUB_BRANCH || 'main'
}

function getToken(): string {
  const t = process.env.GITHUB_TOKEN
  if (!t) throw new Error('GITHUB_TOKEN env が設定されていません')
  return t
}

async function gh(path: string, init?: RequestInit): Promise<Response> {
  const url = `${API_BASE}${path}`
  const res = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      ...(init?.headers || {}),
    },
  })
  return res
}

export type FileInfo = { path: string; sha: string; contentBase64: string }

// ファイル取得 = sha も返す ( 更新 / 削除に必要)。 存在しない場合は null。
export async function getFile(filePath: string): Promise<FileInfo | null> {
  const { owner, repo } = getRepo()
  const branch = getBranch()
  const res = await gh(
    `/repos/${owner}/${repo}/contents/${encodeURIComponent(filePath)}?ref=${encodeURIComponent(branch)}`,
  )
  if (res.status === 404) return null
  if (!res.ok) throw new Error(`GitHub getFile ${filePath} 失敗: ${res.status} ${await res.text()}`)
  const data = (await res.json()) as { path: string; sha: string; content: string; encoding: string }
  return { path: data.path, sha: data.sha, contentBase64: data.content }
}

function toBase64(str: string): string {
  if (typeof Buffer !== 'undefined') return Buffer.from(str, 'utf-8').toString('base64')
  return btoa(unescape(encodeURIComponent(str)))
}

export function fromBase64(b64: string): string {
  if (typeof Buffer !== 'undefined') return Buffer.from(b64, 'base64').toString('utf-8')
  return decodeURIComponent(escape(atob(b64.replace(/\s/g, ''))))
}

export async function upsertFile(params: {
  path: string
  content: string
  message: string
  sha?: string
}): Promise<void> {
  const { owner, repo } = getRepo()
  const branch = getBranch()
  const res = await gh(`/repos/${owner}/${repo}/contents/${encodeURIComponent(params.path)}`, {
    method: 'PUT',
    body: JSON.stringify({
      message: params.message,
      content: toBase64(params.content),
      branch,
      sha: params.sha,
    }),
  })
  if (!res.ok) throw new Error(`GitHub upsertFile ${params.path} 失敗: ${res.status} ${await res.text()}`)
}

export async function deleteFile(params: { path: string; sha: string; message: string }): Promise<void> {
  const { owner, repo } = getRepo()
  const branch = getBranch()
  const res = await gh(`/repos/${owner}/${repo}/contents/${encodeURIComponent(params.path)}`, {
    method: 'DELETE',
    body: JSON.stringify({
      message: params.message,
      sha: params.sha,
      branch,
    }),
  })
  if (!res.ok) throw new Error(`GitHub deleteFile ${params.path} 失敗: ${res.status} ${await res.text()}`)
}
