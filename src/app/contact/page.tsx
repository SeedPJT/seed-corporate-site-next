'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import PageHead from '@/components/PageHead'
import CtaSection from '@/components/CtaSection'

// Contact form = WP CF7 の 代替。 POST /api/contact に 送信 → 成功で /contact/thanks/ に redirect。
// 送信 内容 は SendGrid / Resend 等 で メール 化 (別途 API 側 で 設定)。
export default function Contact() {
  const router = useRouter()
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const text = await res.text()
        throw new Error(text || `送信に失敗しました (${res.status})`)
      }
      router.push('/contact/thanks/')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : '送信に失敗しました')
    }
  }

  return (
    <>
      <PageHead en="contact" ja="お問い合わせ" />

      <div className="page_contents_wrapper innerbox_980">
        <div className="contact_page_explain">
          以下のフォームに必要事項をご記入のうえ、送信してください。<br />
          ※通常 2〜3営業日以内 に担当者よりご連絡いたします。
        </div>

        <div className="contact_form_wrapper page_inner">
          <form onSubmit={onSubmit} className="wpcf7-form">
            <p>
              <label>お名前 <span className="wpcf7-required">*</span></label>
              <span className="wpcf7-form-control-wrap">
                <input type="text" name="name" required className="wpcf7-form-control wpcf7-text" />
              </span>
            </p>
            <p>
              <label>会社名 / 団体名</label>
              <span className="wpcf7-form-control-wrap">
                <input type="text" name="company" className="wpcf7-form-control wpcf7-text" />
              </span>
            </p>
            <p>
              <label>メールアドレス <span className="wpcf7-required">*</span></label>
              <span className="wpcf7-form-control-wrap">
                <input type="email" name="email" required className="wpcf7-form-control wpcf7-text" />
              </span>
            </p>
            <p>
              <label>電話番号</label>
              <span className="wpcf7-form-control-wrap">
                <input type="tel" name="phone" className="wpcf7-form-control wpcf7-text" />
              </span>
            </p>
            <p>
              <label>お問い合わせ内容 <span className="wpcf7-required">*</span></label>
              <span className="wpcf7-form-control-wrap">
                <textarea name="message" rows={8} required className="wpcf7-form-control wpcf7-textarea" />
              </span>
            </p>
            <p>
              <button type="submit" disabled={status === 'sending'} className="wpcf7-form-control wpcf7-submit btn">
                {status === 'sending' ? '送信中…' : '送信する'}
              </button>
            </p>
            {status === 'error' && (
              <div className="wpcf7-response-output" role="alert" style={{ color: '#c00', marginTop: 8 }}>
                {errorMsg}
              </div>
            )}
          </form>
        </div>
      </div>

      <CtaSection />
    </>
  )
}
