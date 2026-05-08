import React from 'react';

const philosophy = {
  subtitle: '制作への想い',
  paragraphs: [
    '映像、写真、Webサイト制作を通じて、クライアントの想いを形にすることを大切にしています。単なる制作物ではなく、ブランド価値の向上や事業成長に貢献できる作品作りを心がけています。',
    '地域に根ざした活動を続けながら、最新の技術やトレンドを取り入れ、常にクオリティの高いサービスを提供することを目指しています。',
  ],
};

const basicInfo = {
  subtitle: '基本情報',
  items: [
    { label: '拠点', value: '奈良県' },
    { label: '専門', value: '映像制作・写真撮影・Web開発' },
    { label: '対応', value: '関西各地・オンライン対応可' },
    { label: '営業', value: '平日 9:00–18:00' },
  ],
};

const About: React.FC = () => (
  <div className="profile-about-grid">
    <div>
      <h3 className="profile-about-subtitle">{philosophy.subtitle}</h3>
      {philosophy.paragraphs.map((text, i) => (
        <p key={i} className="profile-about-text">{text}</p>
      ))}
    </div>
    <div>
      <h3 className="profile-about-subtitle">{basicInfo.subtitle}</h3>
      <dl className="profile-info-list">
        {basicInfo.items.map(({ label, value }) => (
          <React.Fragment key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </React.Fragment>
        ))}
      </dl>
    </div>
  </div>
);

export default About;
