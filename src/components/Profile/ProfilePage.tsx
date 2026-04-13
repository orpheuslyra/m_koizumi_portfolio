import React from 'react';
import Header from '../Navigation/Header';
import Footer from '../Navigation/Footer';

const ProfilePage: React.FC = () => {
  const skills = {
    video: ['Adobe Premiere Pro', 'Adobe After Effects', 'DaVinci Resolve', 'ドローン撮影', '商業映像', 'プロモーション動画'],
    photo: ['商品撮影', '店舗撮影', 'ポートレート', 'イベント撮影', 'Adobe Photoshop', 'Adobe Lightroom'],
    web: ['React', 'TypeScript', 'Next.js', 'WordPress', 'HTML/CSS', 'JavaScript', 'Node.js'],
  };

  const experience = [
    { title: '写真撮影', period: '2020年〜現在', desc: '店舗撮影、商品撮影、スクールフォト、プロフィール写真撮影など、クライアントのニーズに合わせた撮影サービスを提供しています。' },
    { title: '映像撮影', period: '2025年〜現在', desc: '株式会社ビデオソニックとの業務委託契約にて結婚式場でのエンドロールカメラマンを担当しています。' },
    { title: '映像制作', period: '2024年〜現在', desc: '地域企業のプロモーション映像、サービス紹介動画、店舗紹介映像など多様な映像制作を手がけています。ドローンを活用した空撮も得意としています。' },
    { title: 'Web開発', period: '2020年〜現在', desc: '企業サイト、ランディングページの制作を中心に、レスポンシブでユーザビリティの高いWebサイトを制作しています。' },
  ];

  const certifications = [
    { title: '応用情報技術者', issuer: '情報処理推進機構（IPA）' },
    { title: '２等無人航空機操縦技能', issuer: '国土交通省認定' },
    { title: '第三種陸上特殊無線技士', issuer: '総務省' },
    { title: '奈良まほろばソムリエ検定1級', issuer: '奈良商工会議所' },
  ];

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh', color: 'var(--color-text)' }}>
      <Header />

      <main className="profile-page">

        {/* ── Hero ── */}
        <section className="profile-hero">
          <div className="profile-hero-inner">
            <span className="section-number">Profile</span>
            <h1 className="profile-name">小泉 充男</h1>
            <p className="profile-tagline"> フォトグラファー /映像制作 / フロントエンドエンジニア</p>
            <p className="profile-bio">
              奈良を拠点に、写真撮影・映像制作・Web開発を行っています。<br />
              ドローンなど最新技術を活用し、クライアントの想いを形にする作品作りを心がけています。<br />
            </p>
          </div>
        </section>

        {/* ── Experience ── */}
        <section className="profile-section">
          <div className="profile-section-inner">
            <h2 className="profile-section-title">経歴・実績</h2>
            <div className="profile-experience">
              {experience.map((item) => (
                <div key={item.title} className="profile-exp-item">
                  <div className="profile-exp-header">
                    <h3 className="profile-exp-title">{item.title}</h3>
                    <span className="profile-exp-period">{item.period}</span>
                  </div>
                  <p className="profile-exp-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section className="profile-section profile-section--alt">
          <div className="profile-section-inner">
            <h2 className="profile-section-title">スキル・技術</h2>
            <div className="profile-skills-grid">
              <div className="profile-skill-group">
                <h3 className="profile-skill-label">映像制作</h3>
                <ul className="profile-skill-list">
                  {skills.video.map(s => <li key={s}>{s}</li>)}
                </ul>
              </div>
              <div className="profile-skill-group">
                <h3 className="profile-skill-label">写真撮影</h3>
                <ul className="profile-skill-list">
                  {skills.photo.map(s => <li key={s}>{s}</li>)}
                </ul>
              </div>
              <div className="profile-skill-group">
                <h3 className="profile-skill-label">Web 開発</h3>
                <ul className="profile-skill-list">
                  {skills.web.map(s => <li key={s}>{s}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Certifications ── */}
        <section className="profile-section">
          <div className="profile-section-inner">
            <h2 className="profile-section-title">資格・認定</h2>
            <div className="profile-cert-grid">
              {certifications.map((cert) => (
                <div key={cert.title} className="profile-cert-item">
                  <h3 className="profile-cert-title">{cert.title}</h3>
                  <p className="profile-cert-issuer">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section className="profile-section profile-section--alt">
          <div className="profile-section-inner">
            <h2 className="profile-section-title">私について</h2>
            <div className="profile-about-grid">
              <div>
                <h3 className="profile-about-subtitle">制作への想い</h3>
                <p className="profile-about-text">
                  映像、写真、Webサイト制作を通じて、クライアントの想いを形にすることを大切にしています。
                  単なる制作物ではなく、ブランド価値の向上や事業成長に貢献できる作品作りを心がけています。
                </p>
                <p className="profile-about-text">
                  地域に根ざした活動を続けながら、最新の技術やトレンドを取り入れ、
                  常にクオリティの高いサービスを提供することを目指しています。
                </p>
              </div>
              <div>
                <h3 className="profile-about-subtitle">基本情報</h3>
                <dl className="profile-info-list">
                  <dt>拠点</dt><dd>奈良県</dd>
                  <dt>専門</dt><dd>映像制作・写真撮影・Web開発</dd>
                  <dt>対応</dt><dd>関西各地・オンライン対応可</dd>
                  <dt>営業</dt><dd>平日 9:00–18:00</dd>
                </dl>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
