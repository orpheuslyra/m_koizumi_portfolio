import React, { useState } from 'react';
import { achievements } from '../../utils/achievementsData';

const PAGE_SIZE = 10;

const ExternalLinkIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const AchievementsSection: React.FC = () => {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(achievements.length / PAGE_SIZE);
  const pageItems = achievements.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  const handlePrev = () => setPage(p => (p > 0 ? p - 1 : totalPages - 1));
  const handleNext = () => setPage(p => (p < totalPages - 1 ? p + 1 : 0));

  return (
    <section id="achievements" className="section">
      <div className="section-header">
        <div className="section-title">
          <span className="section-number">04 Works</span>
          <h2>WORKS</h2>
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

      <div className="achievements-list">
        {pageItems.map((item, index) => (
          <div key={index} className="achievement-item">
            <span className="achievement-year">{item.year}</span>
            <span className={`achievement-category achievement-category--${item.category}`}>
              {item.category === 'photo' ? 'Photo' : item.category === 'video' ? 'Video' : 'Web'}
            </span>
            <span className="achievement-client">{item.client}</span>
            <span className="achievement-desc">{item.description}</span>
            <span className="achievement-link-cell">
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="achievement-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLinkIcon />
                </a>
              )}
            </span>
          </div>
        ))}
      </div>

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
          <span className="current">{String(page + 1).padStart(2, '0')}</span>
          <span> / {String(totalPages).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
