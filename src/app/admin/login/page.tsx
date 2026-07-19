'use client'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import '../admin.css'
// login は shell の 外 = admin.css を 自分 で import する

export default function AdminLogin() {
  const router = useRouter()
  const params = useSearchParams()
  const from = params.get('from') || '/admin/news'
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({ error: 'ログイン失敗' }))
        throw new Error(data.error || 'ログイン失敗')
      }
      router.push(from)
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'ログイン失敗')
      setLoading(false)
    }
  }

  return (
    <div className="admin_login_shell">
      <div className="admin_login_card">
        <h1 className="admin_login_title">Seed 管理 ログイン</h1>
        <form onSubmit={onSubmit}>
          {error && <div className="admin_alert admin_alert__error">{error}</div>}
          <div className="admin_field">
            <label htmlFor="password">パスワード</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              required
            />
          </div>
          <button type="submit" className="admin_btn admin_login_btn" disabled={loading}>
            {loading ? 'ログイン中…' : 'ログイン'}
          </button>
        </form>
      </div>
    </div>
  )
}
