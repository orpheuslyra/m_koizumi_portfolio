import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Navigation/Header';
import HeroSection from './components/Hero/HeroSection';
import PhotoGallery from './components/Gallery/PhotoGallery';
import VideoGallery from './components/Gallery/VideoGallery';
import WebSection from './components/Web/WebSection';
import AchievementsSection from './components/Achievements/AchievementsSection';
import Footer from './components/Navigation/Footer';
import ContentDetail from './components/Detail/ContentDetail';
import ProfilePage from './components/Profile/ProfilePage';
import PhotoAlbumPage from './components/Gallery/PhotoAlbumPage';
import { samplePhotos, sampleVideos, sampleWebWorks } from './utils/sampleData';

// Home page component
const HomePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  // /#sectionId でアクセスされた時にスクロール
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.hash]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'photography', 'videography', 'web', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ minHeight: '100vh' }}>
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />
      <HeroSection />
      <PhotoGallery photos={samplePhotos} />
      <VideoGallery videos={sampleVideos} />
      <WebSection webWorks={sampleWebWorks} />
      <AchievementsSection />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/detail/:type/:id" element={<ContentDetail />} />
        <Route path="/photography/:album" element={<PhotoAlbumPage photos={samplePhotos} />} />
      </Routes>
    </Router>
  );
}

export default App
