import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://rindo-official.vercel.app/'; // ※本番ドメインに書き換えてください

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    // host プロパティはNext.jsの最新仕様では非推奨（または無視）とされるため、削除しても問題ありません
  };
}