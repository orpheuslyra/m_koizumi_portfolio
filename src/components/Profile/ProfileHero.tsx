import React from 'react';
import profileImageGrad from '../../assets/images/profile/profileImage_grad.png';

const heroData = {
  label: 'Profile',
  name: '小泉 充男',
  tagline: 'フォトグラファー / 映像制作 / フロントエンドエンジニア',
  bio: [
    '写真でわかるあなたの魅力',
    '特別な一日も、いつもの笑顔も。',
    'その日の空気ごと残せるように撮影しています。',
  ],
};

const ProfileHero: React.FC = () => (
  <section className="profile-hero">
    <div className="profile-hero-image">
      <img src={profileImageGrad} alt={heroData.name} />
    </div>
    <div className="profile-hero-inner">
      <div className="profile-hero-text">
        <span className="section-number">{heroData.label}</span>
        <h1 className="profile-name">{heroData.name}</h1>
        <p className="profile-tagline">{heroData.tagline}</p>
        {heroData.bio.map((line, i) => (
          <p key={i} className="profile-bio">{line}</p>
        ))}
      </div>
    </div>
  </section>
);

export default ProfileHero;
