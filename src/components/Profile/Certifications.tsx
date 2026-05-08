import React from 'react';

const certifications = [
    { title: '応用情報技術者', issuer: '情報処理推進機構（IPA）' },
    { title: '２等無人航空機操縦技能', issuer: '国土交通省認定' },
    { title: '第三種陸上特殊無線技士', issuer: '総務省' },
    { title: '奈良まほろばソムリエ検定１級', issuer: '奈良商工会議所' },
];

const Certifications: React.FC = () => (
  <div className="profile-cert-grid">
    {certifications.map((cert) => (
      <div key={cert.title} className="profile-cert-item">
        <h3 className="profile-cert-title">{cert.title}</h3>
        <p className="profile-cert-issuer">{cert.issuer}</p>
      </div>
    ))}
  </div>
);

export default Certifications;
