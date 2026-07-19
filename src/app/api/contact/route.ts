// Contact form receiver = Vercel Serverless。
// field 名 は 元 CF7 と 同 じ ( cf_* prefix)。
// 通知 = Slack incoming webhook ( 主)。 env var `SLACK_CONTACT_WEBHOOK_URL` を Vercel Project Settings で 設定。
// webhook 未 設定 の 場合 = console.log の みで 200 return ( form 動作 自体 は 壊れない)。
// 将来 メール archive 追加 する なら Resend / SendGrid を ここ に差し込む。
import { NextResponse } from 'next/server'

type ContactPayload = {
  name: string
  email: string
  company: string
  whats: string
  details: string
}

async function postToSlack(payload: ContactPayload): Promise<void> {
  const url = process.env.SLACK_CONTACT_WEBHOOK_URL
  if (!url) {
    console.log('[contact] SLACK_CONTACT_WEBHOOK_URL 未設定 = Slack 通知 skip')
    return
  }
  const text = [
    ':envelope_with_arrow: *HP から お問い合わせ が届き ました*',
    `> *お名前*: ${payload.name}`,
    `> *メール*: ${payload.email}`,
    payload.company ? `> *会社*: ${payload.company}` : null,
    `> *項目*: ${payload.whats}`,
    payload.details ? `> *詳細*:\n\`\`\`\n${payload.details}\n\`\`\`` : null,
  ]
    .filter(Boolean)
    .join('\n')

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  })
  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Slack webhook failed: ${res.status} ${body}`)
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const name = String(data.cf_name || '').trim()
    const email = String(data.cf_email || '').trim()
    const company = String(data.cf_company || '').trim()
    const whats = String(data.cf_whats || '').trim()
    const details = String(data.cf_details || '').trim()
    const acceptance = String(data.cf_acceptance || '').trim()

    if (!name || !email || !whats) {
      return NextResponse.json({ error: 'お名前 / メールアドレス / お問い合わせ項目 は必須です' }, { status: 400 })
    }
    if (!acceptance) {
      return NextResponse.json({ error: 'プライバシーポリシーへの同意が必要です' }, { status: 400 })
    }

    const payload: ContactPayload = { name, email, company, whats, details }

    // Slack 通知 = 失敗 しても user への 200 return は継続 ( form 送信 成功 扱い)、
    // 失敗 は log に残 して 後 で 復旧 。
    try {
      await postToSlack(payload)
    } catch (err) {
      console.error('[contact] Slack 通知 失敗:', err)
    }

    console.log('[contact] received:', {
      name,
      email,
      company,
      whats,
      details: details.slice(0, 200),
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] error:', err)
    return NextResponse.json({ error: 'サーバーエラーが発生しました' }, { status: 500 })
  }
}
