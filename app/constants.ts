// app/constants.ts

export const SITE_CONFIG = {
  companyName: '合同会社RINDO',
  zipCode: '〒552-0003',
  address: '大阪府大阪市港区磯路3-26-3',
  fullAddress: '〒552-0003 大阪府大阪市港区磯路3-26-3',
  tel: '090-7965-9611',
  telUrl: 'tel:09079659611',
  email: 'rindo2026.0625@gmail.com',
  emailUrl: 'mailto:rindo2026.0625@gmail.com',
  businessHours: '平日 09:00 - 19:00',
  area: '大阪市内 / 心斎橋 / 難波 / 関西一円',
  
  // ヒーローエリアのテキスト
  hero: {
    title: 'LLC RINDO',
    subtitle: 'FOOD × STREET × CULTURE',
    description: '大阪、関西を拠点に、キッチンカー出店、ストリートアパレル企画、イベントコラボレーションを展開するクリエイティブカンパニー。',
  },

  // SNS・外部ストアURL
  links: {
    instagram: 'https://www.instagram.com/iii_stars20240303?igsh=Y29nOXJsdDEzMHZs',
    onlineStore: 'https://iiistars20240303.paintory.com/',
  },

  // ナビゲーション・セクション定義
  navigation: [
    { id: 'about', label: '事業紹介', kicker: '私たちについて' },
    { id: 'message', label: '代表挨拶'},
    { id: 'kitchen-car', label: 'キッチンカー'},
    { id: 'apparel', label: 'ファッション', kicker: 'STREET WEAR' },
    { id: 'gallery', label: 'GALLERY', kicker: 'ギャラリー' },
    { id: 'news', label: 'NEWS', kicker: 'お知らせ' },
    { id: 'access', label: 'アクセス', kicker: '会社概要 / 拠点情報' },
    { id: 'contact', label: 'お問い合わせ', kicker: 'コンタクト' },
  ],

  // 各ブランドの箇条書き（サービスポイント）
  servicePoints: {
    kitchenCar: [
      '企業イベント・地域催事・フェス出店',
      '関西一円への出店相談可能',
      'ブランドコラボレーション対応',
      'フード提供だけでなく空間演出にも対応'
    ],
    apparel: [
      'ブランド企画・デザイン制作',
      'ポップアップ・コラボ展開対応',
      'オンライン販売'
    ]
  },

  // アバウトセクションのタグ
  aboutTags: ['#大阪キッチンカー', '#アパレルデザイン', '#イベント出店'],

  // お問い合わせフォームの用件セレクトボックス
  contactSubjects: [
    { value: 'stall', label: '出店依頼' },
    { value: 'collaboration', label: 'コラボレーションについて' },
    { value: 'media', label: '取材・メディア関連' },
    { value: 'apparel', label: '商品・アパレルについて' },
    { value: 'other', label: 'その他' }
  ]
} as const;

export const SECTIONS = {
  about: SITE_CONFIG.navigation[0],
  message: SITE_CONFIG.navigation[1],
  kitchenCar: SITE_CONFIG.navigation[2],
  apparel: SITE_CONFIG.navigation[3],
  gallery: SITE_CONFIG.navigation[4],
  news: SITE_CONFIG.navigation[5],
  access: SITE_CONFIG.navigation[6],
  contact: SITE_CONFIG.navigation[7],
} as const;