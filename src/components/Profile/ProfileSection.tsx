import React from 'react';

interface ProfileSectionProps {
  title: string;
  alt?: boolean;
  children: React.ReactNode;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ title, alt = false, children }) => (
  <section className={`profile-section${alt ? ' profile-section--alt' : ''}`}>
    <div className="profile-section-inner">
      <h2 className="profile-section-title">{title}</h2>
      {children}
    </div>
  </section>
);

export default ProfileSection;
