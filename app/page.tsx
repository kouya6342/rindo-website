const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: '合同会社RINDO',
  url: 'https://YOUR_DOMAIN/',
  image: 'https://YOUR_DOMAIN/ogp.jpg',
  telephone: '+81-6-XXXX-XXXX',
  email: 'info@YOUR_DOMAIN',
  description:
    '大阪・心斎橋を拠点に、キッチンカー出店、ストリートアパレル企画、イベントコラボを行うクリエイティブカンパニー。',
  address: {
    '@type': 'PostalAddress',
    postalCode: '542-0086',
    addressRegion: '大阪府',
    addressLocality: '大阪市中央区',
    streetAddress: '西心斎橋X-X-X',
    addressCountry: 'JP',
  },
  areaServed: ['大阪市', '心斎橋', '難波', '関西'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://instagram.com/YOUR_INSTAGRAM',
    'https://tiktok.com/@YOUR_TIKTOK',
  ],
};

const newsItems = [
  {
    date: '2026-06-01',
    label: '2026.06.01',
    category: '出店情報',
    title: '今週末開催の「OSAKA STREET FESTIVAL 2026」にキッチンカー出店決定！',
  },
  {
    date: '2026-05-20',
    label: '2026.05.20',
    category: '新作リリース',
    title: 'IIIstar’s 2026 Summer Collection オンライン先行予約開始。',
  },
  {
    date: '2026-05-10',
    label: '2026.05.10',
    category: 'POPUP',
    title: '心斎橋BIGSTEPにて期間限定ポップアップストアをオープン。',
  },
  {
    date: '2026-04-25',
    label: '2026.04.25',
    category: 'コラボ情報',
    title: 'ローカルアーティストとの限定コラボレーションTシャツが発売。',
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <header>
        <div className="header-inner">
          <div className="logo">RINDO</div>
          <nav className="nav-links" aria-label="グローバルナビゲーション">
            <a href="#about">ABOUT</a>
            <a href="#kitchen-car">KITCHEN CAR</a>
            <a href="#apparel">APPAREL</a>
            <a href="#gallery">GALLERY</a>
            <a href="#news">NEWS</a>
            <a href="#access">ACCESS</a>
            <a href="#contact">CONTACT</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero">
          <div className="hero-content">
            <p className="hero-kicker">OSAKA / SHINSAIBASHI</p>
            <h1 className="hero-title">LLC RINDO</h1>
            <p className="hero-subtitle">FOOD × STREET × CULTURE</p>
            <p className="hero-description">
              大阪・心斎橋を拠点に、キッチンカー出店、ストリートアパレル企画、
              イベントコラボレーションを展開するクリエイティブカンパニー。
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-accent">
                CONTACT
              </a>
              <a
                href="https://instagram.com/YOUR_INSTAGRAM"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                INSTAGRAM
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section-padding">
          <div className="container">
            <div className="about-grid">
              <div>
                <h2 className="section-title">ABOUT</h2>
                <div className="about-text">
                  <h3>
                    大阪・心斎橋を拠点に
                    <br />
                    街のカルチャーを創る。
                  </h3>
                  <p>
                    合同会社RINDOは、大阪・心斎橋を拠点に「食」「ファッション」「カルチャー」をクロスオーバーさせたクリエイティブカンパニーです。
                    キッチンカー出店、ストリートアパレル企画、イベントコラボレーションを通じて、関西一円の街と人をつなぐ新しい価値を提案します。
                  </p>
                  <p>
                    ストリートは常に実験場であり、表現の場。私たちは現場の熱量をそのままカタチにし、
                    大阪発のリアルなカルチャーを発信しています。
                  </p>
                </div>
                <div className="about-tags">
                  <span className="about-tag">#大阪キッチンカー</span>
                  <span className="about-tag">#アパレルデザイン</span>
                  <span className="about-tag">#イベント出店</span>
                  <span className="about-tag">#心斎橋カルチャー</span>
                </div>

                <div className="local-summary">
                  <h3 className="local-summary-title">LOCAL INFO</h3>
                  <ul className="local-summary-list">
                    <li>
                      <strong>拠点</strong>：大阪府大阪市中央区西心斎橋
                    </li>
                    <li>
                      <strong>対応エリア</strong>：大阪市内 / 心斎橋 / 難波 / 関西一円
                    </li>
                    <li>
                      <strong>主な事業</strong>：キッチンカー出店 / アパレル企画 / イベントコラボ
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="img-placeholder"
                style={{ minHeight: '450px' }}
                role="img"
                aria-label="合同会社RINDOのクリエイティブクルーイメージ"
              >
                [ ABOUT IMAGE / CREATIVE CREW ]
              </div>
            </div>
          </div>
        </section>

        <section id="kitchen-car" className="business-section section-padding">
          <div className="container">
            <div className="business-grid">
              <div className="business-info">
                <span className="brand-name">01 / FOOD TRUCK</span>
                <h2 className="business-title">どて焼きまぜそば</h2>
                <p className="business-desc">
                  大阪名物「どて焼き」を、現代的なストリートフード「まぜそば」へ昇華。
                  濃厚な牛すじの旨味と太麺が絡み合う、唯一無二のジャンクフードを提供しています。
                  大阪・心斎橋を拠点に、関西一円のイベント、フェス、企業催事、地域イベントへキッチンカー出店中です。
                </p>
                <ul className="service-points">
                  <li>企業イベント・地域催事・フェス出店対応</li>
                  <li>大阪市内・関西一円へ出店相談可能</li>
                  <li>フード提供だけでなく空間演出も対応</li>
                </ul>
                <div>
                  <a href="#contact" className="btn">
                    出店依頼はこちら
                  </a>
                </div>
              </div>
              <div className="business-images">
                <div
                  className="img-placeholder"
                  role="img"
                  aria-label="牛すじとどて焼きまぜそばの調理イメージ"
                >
                  [ 牛すじ・調理イメージ ]
                </div>
                <div
                  className="img-placeholder"
                  role="img"
                  aria-label="合同会社RINDOのキッチンカー外観イメージ"
                >
                  [ キッチンカー 外観 ]
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="apparel" className="business-section section-padding">
          <div className="container">
            <div className="business-grid reverse">
              <div className="business-info">
                <span className="brand-name">02 / STREET WEAR</span>
                <h2 className="business-title">IIIstar’s</h2>
                <p className="business-desc">
                  RINDOがプロデュースするストリートアパレルブランド「IIIstar’s（スリースターズ）」。
                  音楽、スケートボード、グラフィティカルチャーからインスパイアされたルーズなシルエットと、
                  エッジの効いたグラフィックを展開。大阪発のリアルクローズとして、街に溶け込みながら存在感を放ちます。
                </p>
                <ul className="service-points">
                  <li>ブランド企画・デザイン制作</li>
                  <li>ポップアップ・コラボ展開対応</li>
                  <li>オンライン販売導線とSNS発信を連携</li>
                </ul>
                <div>
                  <a
                    href="https://instagram.com/YOUR_INSTAGRAM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-accent"
                  >
                    ONLINE STORE
                  </a>
                </div>
              </div>
              <div className="business-images">
                <div className="img-placeholder" role="img" aria-label="IIIstar’sのブランドロゴイメージ">
                  [ BRAND LOGO ]
                </div>
                <div className="img-placeholder" role="img" aria-label="IIIstar’sのルックブックと着用写真イメージ">
                  [ LOOKBOOK / 着用写真 ]
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="section-padding">
          <div className="container">
            <h2 className="section-title">GALLERY</h2>
            <div className="gallery-grid">
              <div className="img-placeholder gallery-item col-4" role="img" aria-label="キッチンカー出店風景">
                [ KITCHEN CAR ]
              </div>
              <div className="img-placeholder gallery-item col-8" role="img" aria-label="大阪のストリートカルチャー風景">
                [ STREET CULTURE ]
              </div>
              <div className="img-placeholder gallery-item col-6" role="img" aria-label="IIIstar’sのアパレルイメージ">
                [ APPAREL / IIIstar’s ]
              </div>
              <div className="img-placeholder gallery-item col-6" role="img" aria-label="イベント会場の雰囲気">
                [ EVENT SCENE ]
              </div>
              <div className="img-placeholder gallery-item col-8" role="img" aria-label="クルーや仲間たちの集合イメージ">
                [ CREW / 仲間達 ]
              </div>
              <div className="img-placeholder gallery-item col-4" role="img" aria-label="大阪の街並みスポット">
                [ OSAKA SPOT ]
              </div>
            </div>
          </div>
        </section>

        <section id="news" className="section-padding">
          <div className="container">
            <h2 className="section-title">NEWS</h2>
            <div className="news-list">
              {newsItems.map((item) => (
                <article className="news-item" key={`${item.date}-${item.category}`}>
                  <div className="news-meta">
                    <time className="news-date" dateTime={item.date}>
                      {item.label}
                    </time>
                    <span className="news-category">{item.category}</span>
                  </div>
                  <div className="news-title">{item.title}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="access" className="section-padding business-section">
          <div className="container">
            <div className="access-grid">
              <div>
                <h2 className="section-title">ACCESS</h2>
                <div className="access-card">
                  <h3>会社情報 / 拠点情報</h3>
                  <ul className="access-list">
                    <li>
                      <strong>会社名</strong>
                      <span>合同会社RINDO</span>
                    </li>
                    <li>
                      <strong>住所</strong>
                      <span>〒542-0086 大阪府大阪市中央区西心斎橋 X-X-X</span>
                    </li>
                    <li>
                      <strong>電話番号</strong>
                      <span>
                        <a href="tel:+816XXXXXXXX">06-XXXX-XXXX</a>
                      </span>
                    </li>
                    <li>
                      <strong>メール</strong>
                      <span>
                        <a href="mailto:info@YOUR_DOMAIN">info@YOUR_DOMAIN</a>
                      </span>
                    </li>
                    <li>
                      <strong>営業時間</strong>
                      <span>平日 10:00 - 18:00</span>
                    </li>
                    <li>
                      <strong>対応エリア</strong>
                      <span>大阪市内 / 心斎橋 / 難波 / 関西一円</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <div
                  className="img-placeholder access-map"
                  role="img"
                  aria-label="大阪市中央区西心斎橋のアクセスマップ設置エリア"
                >
                  [ GOOGLE MAP / ACCESS MAP ]
                </div>
                <p className="access-note">
                  ※ 実運用時はここにGoogleマップ埋め込み、または店舗・拠点写真を設置してください。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-padding">
          <div className="container">
            <div className="contact-wrapper">
              <div className="contact-lead">
                <h2 className="section-title">CONTACT</h2>
                <h3>
                  プロジェクトを
                  <br />
                  共に動かす。
                </h3>
                <p>
                  キッチンカーの出店依頼、アパレルやイベントでのコラボレーション、
                  取材のご相談など、熱量のあるお問い合わせをお待ちしております。
                  以下のフォームよりお気軽にご連絡ください。
                </p>

                <div className="contact-subinfo">
                  <p>
                    <strong>拠点：</strong>大阪府大阪市中央区西心斎橋
                  </p>
                  <p>
                    <strong>対応：</strong>大阪 / 心斎橋 / 難波 / 関西一円
                  </p>
                  <p>
                    <strong>電話：</strong>
                    <a href="tel:+816XXXXXXXX">06-XXXX-XXXX</a>
                  </p>
                </div>
              </div>

              <div>
                <form action="#" method="POST">
                  <div className="form-group">
                    <label htmlFor="subject">お問い合わせ内容</label>
                    <select id="subject" className="form-control" name="subject" required defaultValue="">
                      <option value="" disabled>
                        選択してください
                      </option>
                      <option value="stall">出店依頼</option>
                      <option value="collaboration">コラボレーションについて</option>
                      <option value="media">取材・メディア関連</option>
                      <option value="apparel">商品・アパレルについて</option>
                      <option value="other">その他</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">お名前 / 会社名</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="例: 山田 太郎（株式会社〇〇）"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">メールアドレス</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="info@example.jp"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">メッセージ本文</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      placeholder="具体的な内容をご記入ください。"
                      required
                    />
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <button type="submit" className="btn btn-accent">
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">RINDO</div>
              <div className="footer-info">
                <p>合同会社RINDO</p>
                <p>〒542-0086 大阪府大阪市中央区西心斎橋 X-X-X</p>
                <p>
                  Tel: <a href="tel:+816XXXXXXXX">06-XXXX-XXXX</a>
                </p>
                <p>
                  Mail: <a href="mailto:info@YOUR_DOMAIN">info@YOUR_DOMAIN</a>
                </p>
                <p>営業時間: 平日 10:00 - 18:00</p>
              </div>
            </div>

            <div>
              <h4 className="footer-title">NAVIGATION</h4>
              <div className="footer-links">
                <p>
                  <a href="#about">ABOUT</a>
                </p>
                <p>
                  <a href="#kitchen-car">KITCHEN CAR</a>
                </p>
                <p>
                  <a href="#apparel">APPAREL</a>
                </p>
                <p>
                  <a href="#gallery">GALLERY</a>
                </p>
                <p>
                  <a href="#access">ACCESS</a>
                </p>
              </div>
            </div>

            <div>
              <h4 className="footer-title">SNS / LINK</h4>
              <div className="footer-links">
                <p>
                  <a href="https://instagram.com/YOUR_INSTAGRAM" target="_blank" rel="noopener noreferrer">
                    INSTAGRAM
                  </a>
                </p>
                <p>
                  <a href="https://tiktok.com/@YOUR_TIKTOK" target="_blank" rel="noopener noreferrer">
                    TIKTOK
                  </a>
                </p>
                <p>
                  <a href="#news">NEWS</a>
                </p>
                <p>
                  <a href="#contact">CONTACT</a>
                </p>
              </div>
            </div>
          </div>
          <div className="copyright">&copy; 2026 LLC RINDO. ALL RIGHTS RESERVED.</div>
        </div>
      </footer>
    </>
  );
}
