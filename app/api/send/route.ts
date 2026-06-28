// app/api/send/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// 画面から送られてくる英語の値を、分かりやすい日本語に変換するマップ
const SUBJECT_MAP: Record<string, string> = {
  request: '出店依頼',
  collaboration: 'コラボレーションについて',
  media: '取材・メディア関連',
  apparel: '商品・アパレルについて',
  other: 'その他',
};

export async function POST(request: Request) {
  try {
    // 画面のフォームからデータを受け取る
    const { name, email, message, subject } = await request.json();

    // 英語の値をきれいな日本語に変換（見つからなければそのままの文字）
    const readableSubject = SUBJECT_MAP[subject] || subject || '未選択';

    // メール送信（htmlではなく、色や装飾のつかないプレーンテキスト「text」で送信します）
    const data = await resend.emails.send({
      from: 'RINDO Form <onboarding@resend.dev>',
      to: 'rindo2026.0625@gmail.com',
      subject: `【RINDO】お問い合わせ［${readableSubject}］`,
      text: `WEBサイトから新しいお問い合わせがありました。

■お問い合わせ内容（選択項目）
${readableSubject}

■お名前 / 会社名
${name}

■メールアドレス
${email}

■メッセージ本文
${message}
`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'メール送信に失敗しました' }, { status: 500 });
  }
}