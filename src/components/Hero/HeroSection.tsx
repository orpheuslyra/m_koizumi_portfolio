import React from 'react';
import { heroVideoSrc } from '../../utils/sampleData';

const HeroSection: React.FC = () => {

  return (
    <section id="home" className="hero">
      {/* Background Video */}
      <div className="hero-bg">
        {heroVideoSrc && (
          <video
            src={heroVideoSrc}
            autoPlay
            muted
            loop
            playsInline
          />
        )}
      </div>

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <h1 style={{ whiteSpace: 'nowrap' }}>Discover a <em>New</em> Perspective</h1>
        <div className="hero-buttons">
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        Scroll
      </div>
    </section>
  );
};

export default HeroSection;