import React from 'react';
import type { Achievement } from '../../utils/achievementsData';

const categoryLabel: Record<Achievement['category'], string> = {
  photo: 'Photo',
  video: 'Video',
  web: 'Web',
};

const ExternalLinkIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const AchievementItem: React.FC<Achievement> = ({ year, category, client, description, url }) => (
  <div className="achievement-item">
    <span className="achievement-year">{year}</span>
    <span className={`achievement-category achievement-category--${category}`}>
      {categoryLabel[category]}
    </span>
    <span className="achievement-client">{client}</span>
    <span className="achievement-desc">{description}</span>
    <span className="achievement-link-cell">
      {url && (
        <a
          href={url}
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
);

export default AchievementItem;
