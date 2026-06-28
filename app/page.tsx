// app/page.tsx (サーバーコンポーネント)
import { Metadata } from 'next';
import { LocalBusiness, WithContext } from 'schema-dts';
import ClientPage from './ClientPage';

// ==========================================
// ⚙️ サイトの基本設定（コンスト化）
// ==========================================
const SITE_CONFIG = {
  title: '合同会社RINDO | FOOD × STREET × CULTURE',
  description: '大阪、関西を拠点に、キッチンカー出店（どて焼きまぜそば）、ストリートアパレル企画（IIIstar’s）、イベントコラボを行うクリエイティブカンパニー。',
  url: 'https://rindo-official.com', // 本番URLが決定したら書き換えてください
  ogpImage: 'https://rindo-official.com/logo1.jpg',
  company: {
    name: '合同会社RINDO',
    tel: '090-7965-9611',
    email: 'rindo2026.0625@gmail.com',
    postalCode: '552-0003',
    region: '大阪府',
    locality: '大阪市港区',
    street: '磯路3-26-3',
  },
  sns: [
    'https://www.instagram.com/iii_stars20240303?igsh=Y29nOXJsdDEzMHZs',
    'https://iiistars20240303.paintory.com/',
  ]
};

// ==========================================
// 1. SEO メタデータの設定
// ==========================================
export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  openGraph: {
    title: '合同会社RINDO',
    description: '大阪、関西を拠点に、キッチンカー出店、ストリートアパレル企画、イベントコラボを行うクリエイティブカンパニー。',
    url: SITE_CONFIG.url,
    images: [
      {
        url: SITE_CONFIG.ogpImage,
        width: 1200,
        height: 630,
        alt: '合同会社RINDO OGP Image',
      },
    ],
  },
};

// ==========================================
// 2. 構造化データ (JSON-LD) の定義
// ==========================================
const localBusinessJsonLd: WithContext<LocalBusiness> = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_CONFIG.company.name,
  url: SITE_CONFIG.url, 
  image: SITE_CONFIG.ogpImage,
  telephone: SITE_CONFIG.company.tel,
  email: SITE_CONFIG.company.email,
  description: '大阪、関西を拠点に、キッチンカー出店、ストリートアパレル企画、イベントコラボを行うクリエイティブカンパニー。', 
  address: {
    '@type': 'PostalAddress',
    postalCode: SITE_CONFIG.company.postalCode,
    addressRegion: SITE_CONFIG.company.region,
    addressLocality: SITE_CONFIG.company.locality,
    streetAddress: SITE_CONFIG.company.street,
    addressCountry: 'JP',
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: '大阪市' },
    { '@type': 'AdministrativeArea', name: '関西' }
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  sameAs: SITE_CONFIG.sns,
};

// ==========================================
// 3. メインページコンポーネント
// ==========================================
export default function Page() {
  return (
    <>
      {/* 構造化データをここで注入 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      {/* メインのUI（状態管理やインタラクションが必要な部分）を呼び出す */}
      <ClientPage />
    </>
  );
}