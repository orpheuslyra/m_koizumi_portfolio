import React from 'react';
import Header from '../Navigation/Header';
import Footer from '../Navigation/Footer';
import SkillGroup from './SkillGroup';
import Certifications from './Certifications';
import Experience from './Experience';
import About from './About';
import ProfileSection from './ProfileSection';
import ProfileHero from './ProfileHero';


const ProfilePage: React.FC = () => (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh', color: 'var(--color-text)' }}>
      <Header />

      <main className="profile-page">
        <ProfileHero />
        <ProfileSection title="経歴・実績">
          <Experience />
        </ProfileSection>
        <ProfileSection title="スキル・技術" alt>
          <SkillGroup />
        </ProfileSection>
        <ProfileSection title="資格・認定">
          <Certifications />
        </ProfileSection>
        <ProfileSection title="私について" alt>
          <About />
        </ProfileSection>
      </main>
      <Footer />
    </div>
);

export default ProfilePage;
