import React, { useState, useRef } from 'react';
import { heroVideoSrc } from '../../utils/sampleData';

const HeroSection: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section id="home" className="hero">
      {/* Loading Overlay */}
      {!videoLoaded && (
        <div className="hero-loading">
          <div className="hero-loading-spinner" />
        </div>
      )}

      {/* Background Video */}
      <div className="hero-bg">
        {heroVideoSrc && (
          <video
            ref={videoRef}
            src={heroVideoSrc}
            autoPlay
            muted
            loop
            playsInline
            onCanPlay={() => setVideoLoaded(true)}
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