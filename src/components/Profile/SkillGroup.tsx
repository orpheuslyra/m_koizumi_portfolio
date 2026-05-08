import React from 'react';

const skills = [
  {
    label: '映像制作',
    items: ['Adobe Premiere Pro', 'Adobe After Effects', 'ドローン撮影', '商業映像', 'プロモーション動画'],
  },
  {
    label: '写真撮影',
    items: ['商品撮影', '店舗撮影', 'ポートレート', 'イベント撮影', 'Adobe Photoshop', 'Adobe Lightroom'],
  },
  {
    label: 'Web 開発',
    items: ['React', 'TypeScript', 'Next.js', 'WordPress', 'HTML/CSS', 'JavaScript', 'Node.js'],
  },
];

const SkillGroup: React.FC = () => (
  <div className="profile-skills-grid">
    {skills.map(({ label, items }) => (
      <div key={label} className="profile-skill-group">
        <h3 className="profile-skill-label">{label}</h3>
        <ul className="profile-skill-list">
          {items.map(s => <li key={s}>{s}</li>)}
        </ul>
      </div>
    ))}
  </div>
);

export default SkillGroup;
