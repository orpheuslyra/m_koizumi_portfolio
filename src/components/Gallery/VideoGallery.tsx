import React, { useState, useRef } from 'react';
import { getYouTubeVideoId } from '../../utils/sampleData';

interface Video {
  id: string;
  title: string;
  description?: string;
  videoUrl: string;
  thumbnailUrl: string;
  category: 'commercial' | 'event' | 'cinematic' | 'documentary';
  featured?: boolean;
  videoType?: 'local' | 'youtube';
  youtubeId?: string;
}

interface VideoGalleryProps {
  videos: Video[];
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = (index: number) => {
    if (galleryRef.current) {
      const slideWidth = galleryRef.current.offsetWidth;
      galleryRef.current.scrollTo({ left: slideWidth * index, behavior: 'smooth' });
      setCurrentIndex(index);
    }
  };

  const handlePrev = () => scrollToSlide(currentIndex > 0 ? currentIndex - 1 : videos.length - 1);
  const handleNext = () => scrollToSlide(currentIndex < videos.length - 1 ? currentIndex + 1 : 0);

  const handleScroll = () => {
    if (galleryRef.current) {
      const slideWidth = galleryRef.current.offsetWidth;
      const newIndex = Math.round(galleryRef.current.scrollLeft / slideWidth);
      if (newIndex !== currentIndex) setCurrentIndex(newIndex);
    }
  };

  const getYouTubeEmbedUrl = (video: Video): string => {
    if (video.videoType === 'youtube' && video.youtubeId) {
      return `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`;
    }
    const youtubeId = getYouTubeVideoId(video.videoUrl);
    if (youtubeId) return `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;
    return '';
  };

  const isYouTubeVideo = (video: Video): boolean =>
    video.videoType === 'youtube' ||
    video.youtubeId !== undefined ||
    video.videoUrl.includes('youtube.com') ||
    video.videoUrl.includes('youtu.be');

  return (
    <section id="videography" className="section">
      {/* Section Header */}
      <div className="section-header">
        <div className="section-title">
          <span className="section-number">02 Videography</span>
          <h2>Videography</h2>
        </div>
        <div className="section-nav">
          <button onClick={handlePrev} aria-label="Previous">
            <span style={{ transform: 'rotate(180deg)', display: 'inline-block' }}>&#10140;</span>
          </button>
          <button onClick={handleNext} aria-label="Next">
            &#10140;
          </button>
        </div>
      </div>

      {/* Horizontal Gallery */}
      <div
        ref={galleryRef}
        className="horizontal-gallery"
        onScroll={handleScroll}
      >
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`gallery-slide ${index % 2 === 0 ? 'layout-full' : 'layout-split'}`}
            onClick={() => setSelectedVideo(video)}
          >
            <div className="slide-image">
              <img src={video.thumbnailUrl} alt={video.title} />
              <div className="play-button" />
              {index % 2 === 0 && (
                <div className="slide-content">
                  <span className="slide-category">{video.category}</span>
                  <h3 className="slide-title">{video.title}</h3>
                  {video.description && (
                    <p className="slide-description">{video.description}</p>
                  )}
                </div>
              )}
            </div>
            {index % 2 !== 0 && (
              <div className="slide-content" style={{ position: 'relative', background: '#0a0a0a' }}>
                <span className="slide-category">{video.category}</span>
                <h3 className="slide-title">{video.title}</h3>
                {video.description && (
                  <p className="slide-description">{video.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Controls: nav + counter */}
      <div className="gallery-controls">
        <div className="gallery-controls-nav">
          <button onClick={handlePrev} aria-label="Previous">
            <span style={{ transform: 'rotate(180deg)', display: 'inline-block' }}>&#10140;</span>
          </button>
          <button onClick={handleNext} aria-label="Next">
            &#10140;
          </button>
        </div>
        <div className="gallery-controls-counter">
          <span className="current">{String(currentIndex + 1).padStart(2, '0')}</span>
          <span> / {String(videos.length).padStart(2, '0')}</span>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="modal"
          onClick={() => setSelectedVideo(null)}
          style={{ background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(10px)' }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ width: '90vw', maxWidth: '1000px', aspectRatio: '16/9', background: '#000' }}
          >
            {isYouTubeVideo(selectedVideo) ? (
              <iframe
                src={getYouTubeEmbedUrl(selectedVideo)}
                style={{ width: '100%', height: '100%', border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={selectedVideo.title}
              />
            ) : (
              <video
                src={selectedVideo.videoUrl}
                controls
                autoPlay
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            )}
          </div>

          <div style={{
            position: 'absolute', bottom: '2rem', left: '50%',
            transform: 'translateX(-50%)', textAlign: 'center', color: 'white'
          }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.5rem', fontWeight: '300', marginBottom: '0.5rem' }}>
              {selectedVideo.title}
            </h3>
            {selectedVideo.description && (
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>
                {selectedVideo.description}
              </p>
            )}
          </div>

          <button
            onClick={() => setSelectedVideo(null)}
            style={{
              position: 'absolute', top: '2rem', right: '2rem',
              width: '48px', height: '48px', background: 'transparent',
              border: '1px solid rgba(255,255,255,0.3)', color: 'white',
              fontSize: '1.5rem', cursor: 'pointer', display: 'flex',
              alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#c4946a'; e.currentTarget.style.borderColor = '#c4946a'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
};

export default VideoGallery;
