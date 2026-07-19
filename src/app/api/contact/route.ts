// Contact form receiver = Vercel Serverless。
// field 名 は 元 CF7 と 同 じ ( cf_* prefix)。 現状 = 受信 内容 を console.log + 200 で return する placeholder。
// 本番 化 する とき に SendGrid / Resend / Nodemailer 等 の 実 送信 を 差し込む。
// user から の 送信 先 メール アドレス が 決まり 次第、 CONTACT_TO 環境変数 で 設定。
import { NextResponse } from 'next/server'

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

    // TODO: 実 送信 = SendGrid / Resend 等 で 差し込む。
    // 例:
    //   await resend.emails.send({
    //     from: 'noreply@seed-tech.co.jp',
    //     to: process.env.CONTACT_TO || 'inoue.shunnosuke@seed-tech.co.jp',
    //     subject: `[HP問い合わせ] ${name} 様 (${whats})`,
    //     text: `お名前: ${name}\n会社: ${company}\nメール: ${email}\n項目: ${whats}\n\n${details}`,
    //   })

    console.log('[contact] received:', { name, email, company, whats, details: details.slice(0, 200) })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] error:', err)
    return NextResponse.json({ error: 'サーバーエラーが発生しました' }, { status: 500 })
  }
}
