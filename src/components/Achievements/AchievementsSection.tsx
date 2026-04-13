import React from 'react';

interface Achievement {
  year: string;
  category: 'photo' | 'video' | 'web';
  client: string;
  description: string;
  url?: string;
}

const achievements: Achievement[] = [
  { year: '2026', category: 'photo', client: 'ひいな節実行委員会', description: 'イベント告知用写真撮影', url: 'https://u0ff1.hp.peraichi.com/' },
  { year: '2025', category: 'video', client: '久留米運送株式会社', description: 'プロモーションビデオ制作', url: 'https://youtu.be/gi_B8BTO0AU' },
  { year: '2025', category: 'video', client: '株式会社仁張工作所', description: 'ドローン空撮映像提供', url: 'https://youtu.be/SiFP5XmatvE?si=Ra0H27R15BWP_4Aj' },
  { year: '2025', category: 'video', client: 'UMゴルフ', description: 'プロモーションビデオ制作', url: 'https://www.youtube.com/watch?v=Q1Er45dh8qQ' },
  { year: '2025', category: 'photo', client: 'UMゴルフ', description: 'コーチプロフィール写真撮影', url: 'https://umgolf68.com/instructor/' },
  { year: '2025', category: 'video', client: 'つりきっぷ', description: 'ドローン空撮映像提供', url: 'https://youtu.be/Z-rHTokh_lI?si=toulUoyc8ZaaMU60' },
  { year: '2025', category: 'video', client: '一般社団法人TOMOSU', description: 'Bonchi シェアオフィス紹介動画制作' },
  { year: '2024', category: 'video', client: 'あわの里', description: 'プロモーションビデオ制作', url: 'https://youtu.be/yt1MMvywEuE' },
  { year: '2024', category: 'photo', client: '家具の川上', description: '店舗外観写真撮影' },
  { year: '2024', category: 'photo', client: '有限会社くるみの木', description: '器・商品撮影' },
  { year: '2024', category: 'photo', client: '株式会社天平楽座', description: '企業PR写真撮影' },
  { year: '2024', category: 'web', client: '株式会社COST STATION', description: 'ホームページ制作', url: 'https://cost-sta.com/' },
];

const ExternalLinkIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="section">
      <div className="section-header">
        <div className="section-title">
          <span className="section-number">04 Works</span>
          <h2>WORKS</h2>
        </div>
      </div>

      <div className="achievements-list">
        {achievements.map((item, index) => (
          <div key={index} className="achievement-item">
            <span className="achievement-year">{item.year}</span>
            <span className={`achievement-category achievement-category--${item.category}`}>
              {item.category === 'photo' ? 'Photo' : 'Video'}
            </span>
            <span className="achievement-client">{item.client}</span>
            <span className="achievement-desc">{item.description}</span>
            <span className="achievement-link-cell">
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="achievement-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLinkIcon />
                </a>
              )}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
