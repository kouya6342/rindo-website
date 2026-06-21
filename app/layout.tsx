import type { Metadata } from 'next';
import { Montserrat, Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['900'],
  variable: '--font-en',
  display: 'swap',
});

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-ja',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://YOUR_DOMAIN'),
  title: '大阪のキッチンカー出店・アパレル企画なら合同会社RINDO | 心斎橋拠点',
  description:
    '合同会社RINDOは大阪・心斎橋を拠点に、どて焼きまぜそばのキッチンカー出店、ストリートアパレル企画、イベントコラボを行うクリエイティブカンパニーです。関西一円のイベント出店依頼に対応。',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: '/',
    siteName: '合同会社RINDO',
    title: '大阪のキッチンカー出店・アパレル企画なら合同会社RINDO',
    description:
      '大阪・心斎橋を拠点に、キッチンカー出店、アパレル企画、イベントコラボを展開。関西一円のイベント出店依頼に対応しています。',
    images: [
      {
        url: '/ogp.jpg',
        width: 1200,
        height: 630,
        alt: '合同会社RINDO OGP画像',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '大阪のキッチンカー出店・アパレル企画なら合同会社RINDO',
    description:
      '大阪・心斎橋を拠点に、キッチンカー出店、アパレル企画、イベントコラボを展開。',
    images: ['/ogp.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${montserrat.variable} ${notoSansJp.variable}`}>
        {children}
      </body>
    </html>
  );
}
