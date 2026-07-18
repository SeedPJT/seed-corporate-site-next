// Contact form receiver = Vercel Serverless。
// 現状 = 受信 内容 を console.log + 200 で return する placeholder。
// 本番 化 する とき に SendGrid / Resend / Nodemailer 等 の 実 送信 を 差し込む。
// user から の 送信 先 メール アドレス が 決まり 次第、 CONTACT_TO 環境変数 で 設定。
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const name = String(data.name || '').trim()
    const email = String(data.email || '').trim()
    const message = String(data.message || '').trim()
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'name / email / message は必須です' }, { status: 400 })
    }

    // TODO: 実 送信 = SendGrid / Resend 等 で 差し込む。
    // 例:
    //   await resend.emails.send({
    //     from: 'noreply@seed-tech.co.jp',
    //     to: process.env.CONTACT_TO || 'inoue.shunnosuke@seed-tech.co.jp',
    //     subject: `[HP問い合わせ] ${name} 様`,
    //     text: `お名前: ${name}\n会社: ${data.company || ''}\nメール: ${email}\n電話: ${data.phone || ''}\n\n${message}`,
    //   })

    console.log('[contact] received:', { name, email, company: data.company, phone: data.phone, message: message.slice(0, 200) })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] error:', err)
    return NextResponse.json({ error: 'サーバーエラーが発生しました' }, { status: 500 })
  }
}
