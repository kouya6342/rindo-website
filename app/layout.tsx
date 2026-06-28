import type { Metadata } from 'next';
import { Montserrat, Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['900'],
  variable: '--font-en',
  display: 'swap',
});

// 日本語フォントの場合、subsetsに 'latin' だけでなく 'google' の最適化を活かすため
// もしくはサブセットを外す（Next.jsが自動で日本語用に最適化します）
const notoSansJp = Noto_Sans_JP({
  weight: ['400', '700', '900'],
  variable: '--font-ja',
  display: 'swap',
  preload: false, // ← これが重要
});

export const metadata: Metadata = {
  // ※ 本番ドメインが決まったら必ず書き換えてください
  metadataBase: new URL('https://rindo-official.vercel.app/'), 
  title: '大阪のキッチンカー出店・アパレル企画なら合同会社RINDO | 心斎橋拠点',
  description:
    '合同会社RINDOは大阪、関西を拠点に、どて焼きまぜそばのキッチンカー出店、ストリートアパレル企画、イベントコラボを行うクリエイティブカンパニーです。関西一円のイベント出店依頼に対応。',
  alternates: {
    canonical: '/',
  },
  // ▼ インスタやLINE、リンクシェアの時に一番大事な設定（OGP）
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: '/',
    siteName: '合同会社RINDO',
    title: '大阪のキッチンカー出店・アパレル企画なら合同会社RINDO',
    description:
      '大阪、関西を拠点に、キッチンカー出店、アパレル企画、イベントコラボを展開。関西一円のイベント出店依頼に対応しています。',
    images: [
      {
        url: '/ogp.jpg', // 自動で絶対パスに補完されます
        width: 1200,
        height: 630,
        alt: '合同会社RINDO OGP画像',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      {/* bodyタグに antialiased（TailwindCSS）などを付与すると、
        フォントのレンダリングがより綺麗になるのでおすすめです
      */}
      <body className={`${montserrat.variable} ${notoSansJp.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}