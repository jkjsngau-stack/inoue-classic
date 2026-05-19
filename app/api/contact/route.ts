import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  const { name, email, phone, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: "必須項目が不足しています" }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Inoue.Co.ltd Website" <${process.env.MAIL_USER}>`,
      to: "inoue.co.ltd@live.jp",
      replyTo: email,
      subject: `【お問い合わせ】${name}様より`,
      text: `
お名前: ${name}
メールアドレス: ${email}
電話番号: ${phone || "未入力"}

メッセージ:
${message}
      `.trim(),
      html: `
<table style="font-family:sans-serif;font-size:14px;line-height:1.8;">
  <tr><td><strong>お名前</strong></td><td>${name}</td></tr>
  <tr><td><strong>メールアドレス</strong></td><td>${email}</td></tr>
  <tr><td><strong>電話番号</strong></td><td>${phone || "未入力"}</td></tr>
</table>
<hr/>
<p><strong>メッセージ</strong></p>
<p style="white-space:pre-wrap;">${message}</p>
      `.trim(),
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Mail error:", error)
    return NextResponse.json({ error: "送信に失敗しました" }, { status: 500 })
  }
}
