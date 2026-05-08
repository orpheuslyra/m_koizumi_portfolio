import React from 'react';

const experience = [
    { title: '写真撮影', period: '2020年〜', desc: '店舗撮影、商品撮影、スクールフォト、プロフィール写真撮影など、クライアントのニーズに合わせた撮影サービスを提供しています。' },
    { title: '映像撮影', period: '2025年〜', desc: '株式会社ビデオソニックとの業務委託にて結婚式場でのエンドロールカメラマンを担当しています。' },
    { title: '映像制作', period: '2024年〜', desc: '地域企業のプロモーション映像、サービス紹介動画、店舗紹介映像など多様な映像制作を手がけています。ドローンを活用した空撮も得意としています。' },
    { title: 'Web開発', period: '2020年〜', desc: '企業サイト、ランディングページの制作を中心に、レスポンシブでユーザビリティの高いWebサイトを制作しています。' },
];

const Experience: React.FC= () => (
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
);

export default Experience;
