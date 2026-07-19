'use client'
import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { NEWS_CATEGORIES, type NewsCategory } from '@/lib/newsMeta'

// 新規 / 編集 で 共有 する form。 mode=create は POST、 mode=edit は PUT + 削除 button 追加。
// アイキャッチ = file input で 選 ぶ と /api/admin/upload に multipart POST → public/img/news/*.{ext}
// に GitHub commit → 返って くる path を thumbnail field に格納。
export type AdminNewsFormValues = {
  slug: string
  title: string
  date: string
  category: NewsCategory
  summary: string
  thumbnail: string
  body: string
}

export default function AdminNewsEditor({
  mode,
  initial,
}: {
  mode: 'create' | 'edit'
  initial: AdminNewsFormValues
}) {
  const router = useRouter()
  const [values, setValues] = useState<AdminNewsFormValues>(initial)
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const update = <K extends keyof AdminNewsFormValues>(key: K, v: AdminNewsFormValues[K]) => {
    setValues((prev) => ({ ...prev, [key]: v }))
  }

  const onUpload = async (file: File) => {
    setUploading(true)
    setError('')
    try {
      const form = new FormData()
      form.append('file', file)
      form.append('nameHint', values.slug || 'thumbnail')
      const res = await fetch('/api/admin/upload', { method: 'POST', body: form })
      const data = await res.json().catch(() => ({ error: 'upload 失敗' }))
      if (!res.ok) throw new Error(data.error || 'upload 失敗')
      update('thumbnail', data.path)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'upload 失敗')
    } finally {
      setUploading(false)
      if (fileInputRef.current) fileInputRef.current.value = ''
    }
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    try {
      const url = mode === 'create' ? '/api/admin/news' : `/api/admin/news/${initial.slug}`
      const method = mode === 'create' ? 'POST' : 'PUT'
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({ error: '保存 失敗' }))
        throw new Error(data.error || '保存 失敗')
      }
      router.push('/admin/news')
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : '保存 失敗')
      setSaving(false)
    }
  }

  const onDelete = async () => {
    if (!confirm(`「${initial.title}」 を削除 します。 元 に 戻せ ません が よろしい ですか?`)) return
    setDeleting(true)
    setError('')
    try {
      const res = await fetch(`/api/admin/news/${initial.slug}`, { method: 'DELETE' })
      if (!res.ok) {
        const data = await res.json().catch(() => ({ error: '削除 失敗' }))
        throw new Error(data.error || '削除 失敗')
      }
      router.push('/admin/news')
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : '削除 失敗')
      setDeleting(false)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      {error && <div className="admin_alert admin_alert__error">{error}</div>}

      <div className="admin_card">
        <div className="admin_field">
          <label htmlFor="title">タイトル</label>
          <input
            id="title"
            type="text"
            value={values.title}
            onChange={(e) => update('title', e.target.value)}
            required
          />
        </div>

        <div className="admin_row" style={{ alignItems: 'stretch' }}>
          <div className="admin_field" style={{ flex: 1 }}>
            <label htmlFor="date">日付</label>
            <input
              id="date"
              type="date"
              value={values.date}
              onChange={(e) => update('date', e.target.value)}
              required
            />
          </div>
          <div className="admin_field" style={{ flex: 1 }}>
            <label htmlFor="category">カテゴリ</label>
            <select
              id="category"
              value={values.category}
              onChange={(e) => update('category', e.target.value as NewsCategory)}
            >
              {Object.entries(NEWS_CATEGORIES).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>
        </div>

        {mode === 'create' && (
          <div className="admin_field">
            <label htmlFor="slug">スラッグ ( URL の 末尾)</label>
            <input
              id="slug"
              type="text"
              value={values.slug}
              onChange={(e) => update('slug', e.target.value)}
              placeholder="例) 2026-07-19-website-renewal"
              pattern="[a-z0-9-]+"
              required
            />
            <div className="admin_field_hint">半 角 英 数 と ハイフン のみ、 URL /news/&lt;slug&gt;/ に なります。</div>
          </div>
        )}

        <div className="admin_field">
          <label htmlFor="summary">概要 ( 一覧 に表示)</label>
          <input
            id="summary"
            type="text"
            value={values.summary}
            onChange={(e) => update('summary', e.target.value)}
            placeholder="例) 資金 調達 を実施 しました"
          />
        </div>

        <div className="admin_field">
          <label>アイキャッチ 画像</label>
          {values.thumbnail && (
            <div style={{ marginBottom: 12 }}>
              <img
                src={values.thumbnail}
                alt="thumbnail preview"
                style={{ maxWidth: 320, maxHeight: 180, objectFit: 'cover', border: '1px solid #e5e7eb', borderRadius: 6 }}
              />
              <div style={{ marginTop: 8, display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                <code style={{ fontSize: 12, background: '#f3f4f6', padding: '2px 6px', borderRadius: 4 }}>
                  {values.thumbnail}
                </code>
                <button
                  type="button"
                  onClick={() => update('thumbnail', '')}
                  className="admin_btn admin_btn__secondary"
                  style={{ padding: '4px 10px', fontSize: 13 }}
                >
                  クリア
                </button>
              </div>
            </div>
          )}
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              onChange={(e) => {
                const f = e.target.files?.[0]
                if (f) onUpload(f)
              }}
              disabled={uploading}
            />
            {uploading && <span style={{ fontSize: 13, color: '#6b7280' }}>アップロード中…</span>}
          </div>
          <div className="admin_field_hint">
            jpg / png / webp / gif ( 最大 5 MB)。 未 設定 の 場合 は Seed ロゴ を代 わり に表示。
          </div>
        </div>

        <div className="admin_field">
          <label htmlFor="body">本文 ( Markdown)</label>
          <textarea
            id="body"
            value={values.body}
            onChange={(e) => update('body', e.target.value)}
            placeholder={`本文 を Markdown で 書いて ください。\n\n## 見出し 2\n\n段落。\n\n- 箇条 書き 1\n- 箇条 書き 2`}
          />
          <div className="admin_field_hint">
            見出し ( ## / ###)、 段落、 箇条書き、 リンク、 引用 が使え ます。
          </div>
        </div>
      </div>

      <div className="admin_toolbar" style={{ marginTop: 24 }}>
        <div>
          {mode === 'edit' && (
            <button
              type="button"
              onClick={onDelete}
              disabled={deleting || saving}
              className="admin_btn admin_btn__danger"
            >
              {deleting ? '削除中…' : '削除'}
            </button>
          )}
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <Link href="/admin/news" className="admin_btn admin_btn__secondary">キャンセル</Link>
          <button type="submit" disabled={saving || deleting || uploading} className="admin_btn">
            {saving ? '保存中…' : mode === 'create' ? '投稿する' : '更新 する'}
          </button>
        </div>
      </div>
    </form>
  )
}
