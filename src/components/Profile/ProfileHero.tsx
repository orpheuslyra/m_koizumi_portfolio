import React from 'react';

const heroData = {
  label: 'Profile',
  name: '小泉 充男',
  tagline: 'フォトグラファー / 映像制作 / フロントエンドエンジニア',
  bio: [
    '奈良を拠点に、写真撮影・映像制作・Web開発を行っています。',
    'ドローンなど最新技術を活用し、クライアントの想いを形にする作品作りを心がけています。',
  ],
};

const ProfileHero: React.FC = () => (
  <section className="profile-hero">
    <div className="profile-hero-inner">
      <span className="section-number">{heroData.label}</span>
      <h1 className="profile-name">{heroData.name}</h1>
      <p className="profile-tagline">{heroData.tagline}</p>
      {heroData.bio.map((line, i) => (
        <p key={i} className="profile-bio">{line}</p>
      ))}
    </div>
  </section>
);

export default ProfileHero;
