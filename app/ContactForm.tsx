// app/ContactForm.tsx
'use client';

import { SITE_CONFIG } from './constants'; // 定数ファイルのパスに合わせて調整してください

export default function ContactForm() {
  return (
    <form onSubmit={async (e) => {
      e.preventDefault();
      
      // ボタンの文字を「送信中...」に変えたり連打を防ぐための準備
      const button = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
      if (button) {
        button.disabled = true;
        button.innerText = 'SENDING...';
      }

      // フォームに入力されたデータを集める
      const formData = new FormData(e.currentTarget);
      const payload = {
        subject: formData.get('subject'),
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      };

      try {
        // 裏方（/api/send）にデータを送信する
        const response = await fetch('/api/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        const result = await response.json();

        if (response.ok && result.success) {
          alert('お問い合わせが送信されました！内容を確認のうえ、担当者よりご連絡いたします。');
          (e.target as HTMLFormElement).reset(); // 入力欄を空っぽにする
        } else {
          alert('送信に失敗しました。時間をおいて再度お試しいただくか、お電話でお問い合わせください。');
        }
      } catch (error) {
        alert('通信エラーが発生しました。インターネット接続を確認してください。');
      } finally {
        // ボタンを元の状態に戻す
        if (button) {
          button.disabled = false;
          button.innerText = 'SEND MESSAGE';
        }
      }
    }}>
      <div className="form-group">
        <label htmlFor="subject">お問い合わせ内容</label>
        <select id="subject" className="form-control" name="subject" required defaultValue="">
          <option value="" disabled>選択してください</option>
          {/* 定数からセレクトボックスの選択肢を自動生成 */}
          {SITE_CONFIG.contactSubjects.map((sub) => (
            <option key={sub.value} value={sub.value}>{sub.label}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="name">お名前 / 会社名</label>
        <input type="text" id="name" name="name" className="form-control" placeholder="例: 山田 太郎（株式会社〇〇）" required />
      </div>

      <div className="form-group">
        <label htmlFor="email">メールアドレス</label>
        <input type="email" id="email" name="email" className="form-control" placeholder="info@example.jp" required />
      </div>

      <div className="form-group">
        <label htmlFor="message">メッセージ本文</label>
        <textarea id="message" name="message" className="form-control" placeholder="具体的な内容をご記入ください。" required />
      </div>

      <div style={{ textAlign: 'right' }}>
        <button type="submit" className="btn btn-accent">SEND MESSAGE</button>
      </div>
    </form>
  );
}