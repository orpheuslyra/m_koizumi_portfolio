import React from 'react';

const philosophy = {
  subtitle: '制作への想い',
  paragraphs: [
    '写真を撮る時に大切にしているのは、「うまく写ること」よりも、その人らしさが自然に残ることです。',
    'カメラを向けられると緊張してしまう方や、写真が少し苦手だと感じている方も少なくありません。',
    'だからこそ、無理に笑顔を作るのではなく、会話をしたり、その場の空気を感じながら、自然にこぼれる表情や仕草を大切にしています。',
    '何年後かに写真を見返した時、「こんな時間だったな」と、その日の空気まで思い出せるような写真を残したい。',
    '一枚の写真を通して、その人自身の魅力や、大切な時間をそっと写し出せるように撮影しています。',
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
