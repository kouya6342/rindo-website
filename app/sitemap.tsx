import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rindo-official.vercel.app/'; // ※本番ドメインに書き換えてください

  return [
    {
      url: `${baseUrl}/`,
      // 静的ビルド時（npm run build）の日時で固定したい場合は new Date() で問題ありません。
      // もしリアルタイムに更新したい場合は、ISO 8601形式の文字列（string）にするか、
      // データベース等の更新日時と連動させるのが理想です。
      lastModified: new Date().toISOString(), 
      changeFrequency: 'weekly',
      priority: 1.0, // 小数点表記（1.0）にしておくとXML上の記述としてより明示的になります
    },
  ];
}