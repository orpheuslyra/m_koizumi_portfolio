import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface Photo {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category: 'portrait' | 'landscape' | 'event' | 'commercial';
  featured?: boolean;
  album?: string;
  article?: {
    content: string;
    client?: string;
    date?: string;
    challenge?: string;
    solution?: string;
    result?: string;
  };
}

interface PhotoGalleryProps {
  photos: Photo[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollToSlide = (index: number) => {
    if (galleryRef.current) {
      const slideWidth = galleryRef.current.offsetWidth;
      galleryRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1;
    scrollToSlide(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0;
    scrollToSlide(newIndex);
  };

  const handleScroll = () => {
    if (galleryRef.current) {
      const slideWidth = galleryRef.current.offsetWidth;
      const newIndex = Math.round(galleryRef.current.scrollLeft / slideWidth);
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    }
  };

  return (
    <section id="photography" className="section">
      {/* Section Header */}
      <div className="section-header">
        <div className="section-title">
          <span className="section-number">01 Photography</span>
          <h2>Photography</h2>
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
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className={`gallery-slide ${index % 2 === 0 ? 'layout-full' : 'layout-split'}`}
            onClick={() => photo.album ? navigate(`/photography/${photo.album}`) : setSelectedPhoto(photo)}
          >
            <div className="slide-image">
              <img src={photo.imageUrl} alt={photo.title} />
              {index % 2 === 0 && (
                <div className="slide-content">
                  <span className="slide-category">{photo.category}</span>
                  <h3 className="slide-title">{photo.title}</h3>
                  {photo.description && (
                    <p className="slide-description">{photo.description}</p>
                  )}
                </div>
              )}
            </div>
            {index % 2 !== 0 && (
              <div className="slide-content" style={{ position: 'relative', background: '#0a0a0a' }}>
                <span className="slide-category">{photo.category}</span>
                <h3 className="slide-title">{photo.title}</h3>
                {photo.description && (
                  <p className="slide-description">{photo.description}</p>
                )}
                {photo.album && (
                  <Link
                    to={`/photography/${photo.album}`}
                    style={{
                      marginTop: '2rem',
                      color: '#c4946a',
                      textDecoration: 'none',
                      fontSize: '0.7rem',
                      fontWeight: '500',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase'
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Album
                  </Link>
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
          <span> / {String(photos.length).padStart(2, '0')}</span>
        </div>
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <div className="modal" onClick={() => setSelectedPhoto(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedPhoto.imageUrl} alt={selectedPhoto.title} />
            <button
              className="modal-close"
              onClick={() => setSelectedPhoto(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
