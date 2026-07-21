'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import PageHead from '@/components/PageHead'
import CtaSection from '@/components/CtaSection'

// Contact form = WP CF7 の忠実移植。 field 構造と class 名は元 CF7 と完全一致
// (form_contents / form_item / form_item__label / form_item__input / acceptance_wrapper /
// submit_btn_wrapper / wpcf7-* 系) = SCSS の既存 style がそのまま効く。
const WHATS_OPTIONS = [
  'サービスについて',
  '導入のご相談',
  '取材・メディア関連',
  'その他',
]

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
          ※通常 2～3営業日以内 に担当者よりご連絡いたします。
        </div>

        <div className="contact_form_wrapper page_inner">
          <form onSubmit={onSubmit} className="wpcf7-form">
            <div className="form_contents">
              <div className="form_item">
                <div className="form_item__label">
                  お名前 <span className="required">必須</span>
                </div>
                <div className="form_item__input">
                  <span className="wpcf7-form-control-wrap" data-name="cf_name">
                    <input
                      type="text"
                      name="cf_name"
                      required
                      placeholder="例）山田　太郎"
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                      aria-required="true"
                    />
                  </span>
                </div>
              </div>

              <div className="form_item">
                <div className="form_item__label">
                  メールアドレス <span className="required">必須</span>
                </div>
                <div className="form_item__input">
                  <span className="wpcf7-form-control-wrap" data-name="cf_email">
                    <input
                      type="email"
                      name="cf_email"
                      required
                      placeholder="例）example@sample.co.jp"
                      className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                      aria-required="true"
                    />
                  </span>
                </div>
              </div>

              <div className="form_item">
                <div className="form_item__label">会社名・団体名</div>
                <div className="form_item__input">
                  <span className="wpcf7-form-control-wrap" data-name="cf_company">
                    <input
                      type="text"
                      name="cf_company"
                      placeholder="例）〇〇株式会社"
                      className="wpcf7-form-control wpcf7-text"
                    />
                  </span>
                </div>
              </div>

              <div className="form_item">
                <div className="form_item__label">
                  お問い合わせ項目 <span className="required">必須</span>
                </div>
                <div className="form_item__input radiobtn_container">
                  <span className="wpcf7-form-control-wrap" data-name="cf_whats">
                    <span className="wpcf7-form-control wpcf7-radio">
                      {WHATS_OPTIONS.map((opt) => (
                        <span key={opt} className="wpcf7-list-item">
                          <label>
                            <input type="radio" name="cf_whats" value={opt} required />
                            <span className="wpcf7-list-item-label">{opt}</span>
                          </label>
                        </span>
                      ))}
                    </span>
                  </span>
                </div>
              </div>

              <div className="form_item">
                <div className="form_item__label">お問い合わせ内容</div>
                <div className="form_item__input">
                  <span className="wpcf7-form-control-wrap" data-name="cf_details">
                    <textarea
                      name="cf_details"
                      rows={8}
                      placeholder="具体的なお問い合わせ内容をご記入ください。"
                      className="wpcf7-form-control wpcf7-textarea"
                    />
                  </span>
                </div>
              </div>
            </div>

            <div className="acceptance_wrapper">
              <span className="wpcf7-form-control-wrap" data-name="cf_acceptance">
                <span className="wpcf7-form-control wpcf7-acceptance">
                  <span className="wpcf7-list-item">
                    <label>
                      <input type="checkbox" name="cf_acceptance" value="1" required />
                      <span className="wpcf7-list-item-label">
                        <Link href="/privacy-policy/">プライバシーポリシー</Link> に同意する
                      </span>
                    </label>
                  </span>
                </span>
              </span>
            </div>

            <div className="submit_btn_wrapper">
              <input
                type="submit"
                value={status === 'sending' ? '送信中…' : 'この内容で送信する'}
                disabled={status === 'sending'}
                className="wpcf7-form-control wpcf7-submit has-spinner btn submit_btn green_btn"
              />
            </div>

            {status === 'error' && (
              <div className="wpcf7-response-output" role="alert">
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
