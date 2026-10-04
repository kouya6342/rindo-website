'use client';

import { useEffect, useState } from 'react';
import { SITE_CONFIG, SECTIONS } from './constants';
import ContactForm from './ContactForm';

const newsItems = [
  {
    id: 'osaka-yatai-fes-2026',
    date: '2026-10-04',
    label: '2026.10.04更新',
    category: '【出店レポート】',
    title: '「屋台フェス2026」に初出店しました！',
    summary: 'テレビ大阪主催の「屋台フェス2026」に初出店。6日間で約700食の「どて焼きまぜそば」をお届けしました。',
    body: [
      '先日開催された、テレビ大阪主催の「屋台フェス2026」に、弊社キッチンカー【RINDO FOOD STREET】が初出店させていただきました。',
      '暑い中での開催となりましたが、たくさんのお客様にお越しいただき、6日間で約700食の「どて焼きまぜそば」をお召し上がりいただくことができました。',
      '初めての「屋台フェス」への出店ということで、私たちにとっても大きな挑戦となりましたが、多くのお客様から「美味しい！」という嬉しいお声をいただき、改めて「どて焼きまぜそば」の魅力と、皆様に喜んでいただけることの嬉しさを実感した6日間となりました。',
      'ご来場いただき、RINDO FOOD STREETの「どて焼きまぜそば」をお選びくださった皆様、本当にありがとうございました。',
      '今後は、看板商品の「どて焼きまぜそば」に加え、【どて焼き丼】をはじめとした新たな商品も順次開発・展開していく予定です。',
      'より多くのお客様に「どて焼き」の美味しさを楽しんでいただけるよう、商品ラインナップを充実させ、キッチンカーを通じてさまざまな場所へお届けしてまいります。',
      'そして、私たちが自信を持ってお届けする【どて焼きまぜそば】を全国へ。',
      'これからも新しい挑戦を続け、より多くの皆様に愛される商品・ブランドを目指してまいります。',
      '今後のRINDO FOOD STREETにも、ぜひご期待ください。',
    ],
    overview: null,
    image: null,
  },
  {
    id: 'osaka-yatai-fes-2026-announcement',
    date: '2026-08-22',
    label: '2026.08.22更新',
    category: '【出店のお知らせ】',
    title: '# 大阪YATAIフェス2026',
    summary: 'RINDOがプロデュースするフードブランドが、大阪YATAIフェス2026に出店いたします！',
    body: [
      '大阪名物「どて焼き」を現代的なストリートフードとして再構築し、濃厚な牛すじの旨味と麺が絡み合う、ここでしか味わえない唯一無二の一杯をお届けします。',
      '地域イベントや企業催事、フェスティバルなど、さまざまな場所で出店を行い、多くのお客様にブランドの魅力をお楽しみいただいています。',
      'この機会に、ぜひ会場へお越しください！',
    ],
    overview: {
      items: [
        ['開催期間', '2026年9月18日（金）～9月23日（水・祝）'],
        ['営業時間', '11:00～21:00'],
        ['備考', '9月18日（金）は17:00〜\n9月23日（水・祝）は18:00までの営業となります。'],
        ['会場', '大阪YATAIフェス2026', 'https://maps.app.goo.gl/XW9QATKch7sNEA1YA'],
      ],
    },
    image: {
      src: '/fes1.jpg',
      alt: '大阪YATAIフェス2026の告知ポスター',
    },
  },
];
const galleryItems = [];
const heroSlides = [
  '/food1.jpg',
  '/fasion2.jpg',
  '/fasion3.jpg',
  '/fes1-report.jpg',
];
const NEWS_TOAST = {
  startDate: '2026-08-22T00:00:00+09:00',
  endDate: '2026-09-24T00:00:00+09:00',
  endedLabel: '終了しました',
};
const LATEST_NEWS_ID = newsItems[0].id;
const NEW_BADGE_DURATION_MS = 30 * 24 * 60 * 60 * 1000;
const NEWS_TOAST_DURATION_MS = 8000;

const getCurrentDate = () => {
  return new Date();
};

const getToastState = (startDate: string, endDate: string) => {
  const now = getCurrentDate();
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (now < start) return 'upcoming';
  if (now < end) return 'active';
  return 'ended';
};

export default function ClientPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showNewsToast, setShowNewsToast] = useState(false);
  const [isNewsEnded, setIsNewsEnded] = useState(false);
  const [isLatestNewsNew, setIsLatestNewsNew] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsNewsEnded(getToastState(NEWS_TOAST.startDate, NEWS_TOAST.endDate) === 'ended');
    const latestNews = newsItems[0];
    const publishedAt = new Date(`${latestNews.date}T00:00:00+09:00`).getTime();
    const isNew = Date.now() >= publishedAt && Date.now() < publishedAt + NEW_BADGE_DURATION_MS;
    setIsLatestNewsNew(isNew);

    if (!isNew) {
      setShowNewsToast(false);
      return;
    }

    setShowNewsToast(true);

    const timer = window.setTimeout(() => {
      setShowNewsToast(false);
    }, NEWS_TOAST_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, []);

  const handleLatestNewsClick = () => {
    setShowNewsToast(false);
    setExpandedId(LATEST_NEWS_ID);
    const newsSection = document.getElementById(SECTIONS.news.id);
    if (newsSection) {
      newsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {showNewsToast && isLatestNewsNew && (
        <aside className="news-toast" role="status" aria-label="新着ニュース">
          <a className="news-toast-link" href={`#${SECTIONS.news.id}`} onClick={handleLatestNewsClick}>
            <span className="news-toast-badge">NEW</span>
            <span className="news-toast-text">{newsItems[0].title}</span>
          </a>
          <button
            type="button"
            className="news-toast-close"
            aria-label="新着ニュースのお知らせを閉じる"
            onClick={() => setShowNewsToast(false)}
          >
            ×
          </button>
        </aside>
      )}

      <header>
        <div className="header-inner">
          <button
            type="button"
            className="mobile-menu-button"
            aria-label={isMobileMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="mobile-menu-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
          <div className="logo">RINDO</div>
          <nav className={`nav-links${isMobileMenuOpen ? ' is-open' : ''}`} aria-label="グローバルナビゲーション">
            {SITE_CONFIG.navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={item.id === SECTIONS.news.id && isLatestNewsNew ? 'nav-news-link' : undefined}
                onClick={(event) => {
                  setIsMobileMenuOpen(false);
                  if (item.id === SECTIONS.news.id && isLatestNewsNew) {
                    event.preventDefault();
                    handleLatestNewsClick();
                  }
                }}
              >
                {item.label}
                {item.id === SECTIONS.news.id && isLatestNewsNew && (
                  <span className="nav-news-alert" aria-label="新着ニュースあり">!</span>
                )}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="hero">
          <div className="hero-slideshow" aria-hidden="true">
            {heroSlides.map((src, index) => (
              <img
                key={src}
                src={src}
                alt=""
                className="hero-slide"
                style={{ animationDelay: `${index * 10}s` }}
              />
            ))}
          </div>
          <div className="hero-content">
            <h1 className="hero-title">{SITE_CONFIG.hero.title}</h1>
            <p className="hero-subtitle">{SITE_CONFIG.hero.subtitle}</p>
            <p className="hero-description">{SITE_CONFIG.hero.description}</p>
            <div className="hero-buttons">
              <a href={`#${SECTIONS.contact.id}`} className="btn btn-accent">
                {SECTIONS.contact.label}
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id={SECTIONS.about.id} className="section-padding about-section-theme">
          <div className="container" style={{ maxWidth: '900px' }}>
            <div className="text-center mb-4">
              <h2 className="section-title">{SECTIONS.about.label}</h2>
              <p className="hero-kicker">{SECTIONS.about.kicker}</p>
            </div>

            <div className="text-center mb-4">
              <h3 className="about-lead-text">
                大阪、関西を拠点に、<br />
                人・ブランド・カルチャーをつなぐ。
              </h3>
              
              <div className="about-body-text">
                <p className="mb-4">
                  {SITE_CONFIG.companyName}は、大阪・関西を拠点に、「食」「{SECTIONS.apparel.label}」「カルチャー」を軸としたブランドプロデュース・クリエイティブ事業を展開しています。
                  飲食ブランドの企画・運営支援、ストリートアパレルのプロデュース、イベントコラボレーションを通じて、人と街をつなぐ新しい価値の創造に挑戦しています。
                </p>
                <p className="mb-4">
                  私たちは、単に商品やサービスを提供するのではなく、一つひとつのブランドに想いを込め、その魅力を最大限に引き出すことを大切にしています。
                </p>
                <p className="about-highlight-box">
                  ストリートは常に挑戦と表現の場。<br />
                  <span className="about-highlight-sub">
                    現場で生まれる熱量や文化を形にし、大阪から新たなカルチャーを発信していきます。
                  </span>
                </p>
              </div>
            </div>

            <div className="about-tag-container">
              {/* 定数からタグを自動生成 */}
              {SITE_CONFIG.aboutTags.map((tag) => (
                <span key={tag} className="about-tag-inline">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* MESSAGE */}
        <section id={SECTIONS.message.id} className="section-padding business-section">
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 className="section-title text-center">{SECTIONS.message.label}</h2>
            
            <div className="about-text">
              <p className="mb-4">{SITE_CONFIG.companyName}のホームページをご覧いただき、誠にありがとうございます。</p>
              <p className="mb-4">私たちは、「愛する・寄り添う・勝利へ導く」を理念に掲げ、事業を通じて人の挑戦を支え、価値を創造することを使命としています。</p>
              <p className="mb-4">人生には、多くの挑戦や選択があります。うまくいくことばかりではなく、悩みや壁にぶつかることもあります。だからこそ私たちは、人と人とのつながりを大切にし、相手に寄り添いながら共に前へ進む存在でありたいと考えています。</p>
              <p className="mb-4">RINDOは、飲食事業、ブランドプロデュース、イベント企画、アパレル事業など、さまざまな分野に挑戦しています。しかし私たちが本当に提供したいものは、商品やサービスそのものではありません。</p>
              <p className="mb-4">それは、人の可能性を信じ、挑戦する勇気を後押しし、未来への一歩を創り出すことです。</p>
              <p className="mb-4">関わるすべての人が、自分らしく挑戦し、成長し、人生の勝利へと進んでいけるように。</p>
              <p className="mb-4">私たちはこれからも挑戦を続け、価値を生み出し、人と社会に必要とされる企業を目指してまいります。</p>
              <p className="mb-4" style={{ fontWeight: 'bold' }}>挑戦するすべての人に、きっかけと可能性を。</p>
              <p className="mb-4">{SITE_CONFIG.companyName}は、これからも人と人とのつながりを大切にしながら、一人ひとりの想いに寄り添い、新たな価値を創造し続けます。</p>
              <p className="mb-4">そして、関わるすべての方が自分らしく挑戦し、それぞれの人生の勝利へと歩んでいけるよう、共に成長し続ける存在でありたいと考えています。</p>
              <p className="mb-3">今後とも{SITE_CONFIG.companyName}をよろしくお願い申し上げます。</p>
              
              <div className="company-representative-box">
                <p style={{ fontSize: '0.9rem', margin: '0' }}>{SITE_CONFIG.companyName}</p>
                <p style={{ fontSize: '1.3rem', fontWeight: 'bold', margin: '0.5rem 0 0 0', letterSpacing: '0.1em' }}>
                  代表社員 田尻 亮平
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* KITCHEN CAR */}
        <section id={SECTIONS.kitchenCar.id} className="business-section section-padding">
          <div className="container">
            <div className="business-grid">
              <div className="business-info">
                <span className="brand-name">{SECTIONS.kitchenCar.label}</span>
                <h2 className="business-title">どて焼きまぜそば</h2>
                <p className="business-desc">
                  RINDOがプロデュースするフードブランド。
                  大阪名物「どて焼き」を現代的なストリートフードとして再構築し、
                  濃厚な牛すじの旨味と麺が絡み合う唯一無二の一杯を提供しています。
                  地域イベント、企業催事、フェスティバルなど、さまざまな出店を通じて多くのお客様へブランドの魅力を届けています。
                </p>
                <ul className="service-points">
                  {/* 定数から箇条書きを自動生成 */}
                  {SITE_CONFIG.servicePoints.kitchenCar.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="flex-buttons" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <a href={`#${SECTIONS.contact.id}`} className="btn btn-accent">
                    出店依頼はこちら
                  </a>
                  <a href={SITE_CONFIG.links.kitchenCar} target="_blank" rel="noopener noreferrer" className="btn btn-instagram">
                    RINDO FOOD STREET
                  </a>
                </div>
              </div>
              <div className="business-images">
                <img 
                    src="/food1.jpg" 
                    alt="どて焼きまぜそば" 
                  className="business-img"
                />
                </div>
            </div>
          </div>
        </section>

        {/* APPAREL */}
        <section id={SECTIONS.apparel.id} className="business-section section-padding">
          <div className="container">
            <div className="business-grid reverse">
              <div className="business-info">
                <span className="brand-name">STREET WEAR</span>
                <h2 className="business-title">IIIstar’s</h2>
                <p className="business-desc">
                  RINDOがプロデュースするストリートアパレルブランド「IIIstar’s（スリースターズ）」。
                  音楽、スケートボード、グラフィティカルチャーからインスパイアされたルーズなシルエットと、
                  エッジの効いたグラフィックを展開。大阪発のリアルクローズとして、街に溶け込みながらも確かな存在感を放つブランドを目指しています。
                </p>
                <ul className="service-points">
                  {/* 定数から箇条書きを自動生成 */}
                  {SITE_CONFIG.servicePoints.apparel.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                
                <div className="flex-buttons mt-2">
                  <a href={SITE_CONFIG.links.onlineStore} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                    ONLINE STORE
                  </a>
                  <a href={SITE_CONFIG.links.apparel} target="_blank" rel="noopener noreferrer" className="btn btn-instagram">
                    IIIstar's公式
                  </a>
                </div>
              </div>
              <div className="business-images2">
                <img 
                    src="/fasion2.jpg" 
                    alt="サンプル" 
                    className="business-img"
                    style={{ width: '80%', borderRadius: '8px', objectFit: 'cover' }}
                />
                <img 
                    src="/fasion1.jpg" 
                    alt="サンプル" 
                    className="business-img"
                    style={{ width: '80%', borderRadius: '8px', objectFit: 'cover' }}
                />
                <img 
                    src="/fasion4.jpg" 
                    alt="サンプル" 
                    className="business-img"
                    style={{ width: '80%', borderRadius: '8px', objectFit: 'cover' }}
                />
                <img 
                    src="/fasion3.jpg" 
                    alt="サンプル" 
                    className="business-img"
                    style={{ width: '80%', borderRadius: '8px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id={SECTIONS.gallery.id} className="section-padding">
          <div className="container">
            <h2 className="section-title">{SECTIONS.gallery.label}</h2>
            <div className="gallery-grid">
              <figure className="gallery-photo col-8">
                <img
                  src="/fes1-report.jpg"
                  alt="屋台フェス2026に出店したRINDO FOOD STREETのキッチンカー"
                />
                <figcaption>屋台フェス2026に出店</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* NEWS */}
        <section id={SECTIONS.news.id} className="section-padding">
          <div className="container">
            <h2 className="section-title">{SECTIONS.news.label}</h2>
            <div className="news-list">
              {newsItems.length > 0 ? (
                newsItems.map((item) => {
                  const isExpanded = expandedId === item.id;

                  return (
                    <article
                      className={[
                        'news-item',
                        item.id === LATEST_NEWS_ID && isLatestNewsNew ? 'news-item-new' : '',
                        item.id === 'osaka-yatai-fes-2026-announcement' && isNewsEnded ? 'news-item-ended' : '',
                      ].filter(Boolean).join(' ')}
                      key={item.id}
                    >
                      <div className="news-meta">
                        <time className="news-date" dateTime={item.date}>{item.label}</time>
                        <span className={`news-category${item.id === LATEST_NEWS_ID && isLatestNewsNew ? ' new-badge' : ''}`}>
                          {item.id === LATEST_NEWS_ID && isLatestNewsNew
                            ? 'NEW'
                            : isNewsEnded && item.id === 'osaka-yatai-fes-2026-announcement'
                              ? '終了しました'
                              : item.category}
                        </span>
                      </div>

                      <div className="news-content">
                        <h3 className="news-title">
                          {item.title}
                        </h3>
                        <p className="news-summary">{item.summary}</p>

                        <div className="news-detail-toggle">
                          <button
                            type="button"
                            className="news-toggle-button"
                            aria-expanded={isExpanded}
                            onClick={() => setExpandedId(isExpanded ? null : item.id)}
                          >
                            {isExpanded ? '閉じる' : '詳細'}
                          </button>
                        </div>

                        {isExpanded && (
                          <div className="news-detail">
                            {item.body.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}

                            {item.overview && (
                              <div className="news-overview">
                                <div className={`news-overview-layout${item.image ? '' : ' news-overview-layout-no-image'}`}>
                                <dl className="news-overview-list">
                                  {item.overview.items.map((entry) => {
                                    const [label, value, mapUrl] = entry as [string, string, string?];

                                    return (
                                      <div className="news-overview-row" key={label}>
                                        <dt>{label}</dt>
                                        <dd>
                                          {mapUrl ? (
                                            <a
                                              href={mapUrl}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="news-map-link"
                                            >
                                              {value}
                                            </a>
                                          ) : (
                                            value.split('\n').map((line, index) => (
                                              <span key={`${label}-${index}`}>
                                                {index > 0 && <br />}
                                                {line}
                                              </span>
                                            ))
                                          )}
                                        </dd>
                                      </div>
                                    );
                                  })}
                                  <div className="news-overview-row">
                                    <dt>Instagram</dt>
                                    <dd>
                                      <a
                                        href={SITE_CONFIG.links.kitchenCar}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="news-map-link news-instagram-link"
                                      >
                                        RINDO FOOD STREET
                                      </a>
                                    </dd>
                                  </div>
                                </dl>

                                {item.image && (
                                  <div className="news-overview-image-wrap">
                                    <img
                                      src={item.image.src}
                                      alt={item.image.alt}
                                      className="news-overview-image"
                                    />
                                  </div>
                                )}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })
              ) : (
                <p style={{ color: '#888', textAlign: 'center' }}>現在、新しいお知らせはありません。</p>
              )}
            </div>
          </div>
        </section>

        {/* ACCESS / COMPANY */}
        <section id={SECTIONS.access.id} className="section-padding business-section company-section-theme">
          <div className="container" style={{ maxWidth: '800px' }}>
            <div className="text-center mb-4">
              <h2 className="section-title">COMPANY</h2>
              <p className="hero-kicker">{SECTIONS.access.kicker}</p>
            </div>

            <div className="access-card company-card-custom">
              <ul className="access-list">
                {[
                  { label: '会社名', value: SITE_CONFIG.companyName },
                  { label: '住所', value: SITE_CONFIG.fullAddress },
                  { label: '電話番号', value: <a href={SITE_CONFIG.telUrl} style={{ color: '#fff' }}>{SITE_CONFIG.tel}</a> },
                  { label: 'メール', value: <a href={SITE_CONFIG.emailUrl} style={{ color: '#fff' }}>{SITE_CONFIG.email}</a> },
                  { label: '営業時間', value: SITE_CONFIG.businessHours },
                  { label: '対応エリア', value: SITE_CONFIG.area },
                ].map((item, index) => (
                  <li key={index}>
                    <strong>{item.label}</strong>
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id={SECTIONS.contact.id} className="section-padding">
          <div className="container">
            <div className="contact-wrapper">
              <div className="contact-lead">
                <h2 className="section-title">{SECTIONS.contact.label}</h2>
                <h3>プロジェクトを<br />共に動かす。</h3>
                <p>キッチンカーの出店依頼、アパレルやイベントでのコラボレーション、取材のご相談など、熱量のあるお問い合わせをお待ちしております。以下のフォームよりお気軽にご連絡ください。</p>

                <div className="contact-subinfo">
                  <p><strong>拠点：</strong>{SITE_CONFIG.address}</p>
                  <p><strong>対応：</strong>{SITE_CONFIG.area}</p>
                  <p><strong>電話：</strong><a href={SITE_CONFIG.telUrl}>{SITE_CONFIG.tel}</a></p>
                </div>
              </div>

              <div>
                <ContactForm />
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
                <p>{SITE_CONFIG.companyName}</p>
                <p>{SITE_CONFIG.fullAddress}</p>
                <p>Tel: <a href={SITE_CONFIG.telUrl}>{SITE_CONFIG.tel}</a></p>
                <p>Mail: <a href={SITE_CONFIG.emailUrl}>{SITE_CONFIG.email}</a></p>
                <p>営業時間: {SITE_CONFIG.businessHours}</p>
              </div>
            </div>

            <div>
              <h4 className="footer-title">NAVIGATION</h4>
              <div className="footer-links">
                {SITE_CONFIG.navigation.slice(0, 5).map((item) => (
                  <p key={item.id}>
                    <a href={`#${item.id}`}>{item.label}</a>
                  </p>
                ))}
                <p><a href={`#${SECTIONS.access.id}`}>{SECTIONS.access.label}</a></p>
              </div>
            </div>

            <div>
              <h4 className="footer-title">SNS / LINK</h4>
              <div className="footer-links">
                <p><a href={SITE_CONFIG.links.kitchenCar} target="_blank" rel="noopener noreferrer">RINDO FOOD STREET公式</a></p>
                <p><a href={SITE_CONFIG.links.apparel} target="_blank" rel="noopener noreferrer">IIIstar's公式</a></p>
                <p><a href={SITE_CONFIG.links.onlineStore} target="_blank" rel="noopener noreferrer">ONLINESTORE</a></p>               
                <p><a href={`#${SECTIONS.news.id}`}>{SECTIONS.news.label}</a></p>
                <p><a href={`#${SECTIONS.contact.id}`}>{SECTIONS.contact.label}</a></p>
              </div>
            </div>
          </div>
          <div className="copyright">&copy; 2026 LLC RINDO. ALL RIGHTS RESERVED.</div>
        </div>
      </footer>
    </>
  );
}