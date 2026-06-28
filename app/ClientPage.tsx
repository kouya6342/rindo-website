'use client';

import { SITE_CONFIG, SECTIONS } from './constants';
import ContactForm from './ContactForm';

const newsItems = [];
const galleryItems = [];

export default function ClientPage() {
  return (
    <>
      <header>
        <div className="header-inner">
          <div className="logo">RINDO</div>
          <nav className="nav-links" aria-label="グローバルナビゲーション">
            {SITE_CONFIG.navigation.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="hero">
          <div className="hero-content">
            <h1 className="hero-title">{SITE_CONFIG.hero.title}</h1>
            <p className="hero-subtitle">{SITE_CONFIG.hero.subtitle}</p>
            <p className="hero-description">{SITE_CONFIG.hero.description}</p>
            <div className="hero-buttons">
              <a href={`#${SECTIONS.contact.id}`} className="btn btn-accent">
                {SECTIONS.contact.label}
              </a>
              <a
                href={SITE_CONFIG.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-instagram"
              >
                INSTAGRAM
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
                <div>
                  <a href={`#${SECTIONS.contact.id}`} className="btn">
                    出店依頼はこちら
                  </a>
                </div>
              </div>
              <div className="business-images">
                <img 
                    src="/food1.jpg" 
                    alt="どて焼きまぜそば" 
                    className="business-img"
                    style={{ width: '80%', borderRadius: '8px', objectFit: 'cover' }}
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
                
                <div className="hero-buttons mt-2">
                  <a href={SITE_CONFIG.links.onlineStore} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                    ONLINE STORE
                  </a>
                  <a href={SITE_CONFIG.links.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-instagram">
                    INSTAGRAM
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
            <p style={{ color: "#888", textAlign: "center" }}>
                現在、ギャラリーのコンテンツは準備中です。
                </p>
        </div>
        </section>

        {/* NEWS */}
        <section id={SECTIONS.news.id} className="section-padding">
          <div className="container">
            <h2 className="section-title">{SECTIONS.news.label}</h2>
            <div className="news-list">
              {newsItems.length > 0 ? (
                newsItems.map((item) => (
                  <article className="news-item" key={item.id}>
                    <div className="news-meta">
                      <time className="news-date" dateTime={item.date}>{item.label}</time>
                      <span className="news-category">{item.category}</span>
                    </div>
                    <h3 className="news-title">{item.title}</h3>
                  </article>
                ))
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
                <p><a href={SITE_CONFIG.links.onlineStore} target="_blank" rel="noopener noreferrer">ONLINESTORE</a></p>
                <p><a href={SITE_CONFIG.links.instagram} target="_blank" rel="noopener noreferrer">INSTAGRAM</a></p>
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