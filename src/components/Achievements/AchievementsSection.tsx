import React, { useState } from 'react';
import { achievements } from '../../utils/achievementsData';
import './AchievementsSection.scss';
import SectionHeader from '../../utils/SectionHeader';
import NavButtons from '../../utils/NavButtons';
import AchievementItem from './AchievementItem';

const PAGE_SIZE = 10;

const AchievementsSection: React.FC = () => {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(achievements.length / PAGE_SIZE);
  const pageItems = achievements.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  const handlePrev = () => setPage(p => (p > 0 ? p - 1 : totalPages - 1));
  const handleNext = () => setPage(p => (p < totalPages - 1 ? p + 1 : 0));

  return (
    <section id="achievements" className="section">
      <SectionHeader title="WORKS" label="04 Works" onPrev={handlePrev} onNext={handleNext} />

      <div className="achievements-list">
        {pageItems.map((item, index) => (
          <AchievementItem key={index} {...item} />
        ))}
      </div>

      <div className="gallery-controls">
        <div className="gallery-controls-nav">
          <NavButtons onPrev={handlePrev} onNext={handleNext} />
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
