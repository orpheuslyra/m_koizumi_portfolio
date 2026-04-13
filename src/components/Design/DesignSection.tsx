import React from 'react';
import { useNavigate } from 'react-router-dom';

interface DesignWork {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category: 'web-ad' | 'poster' | 'flyer' | 'brochure' | 'logo' | 'banner';
  mediaType: 'print' | 'digital';
  dimensions?: string;
  featured?: boolean;
}

interface DesignSectionProps {
  designWorks: DesignWork[];
}

const DesignSection: React.FC<DesignSectionProps> = ({ designWorks }) => {
  const navigate = useNavigate();

  return (
    <section id="design" className="section">
      <div className="section-header">
        <div className="section-title">
          <span className="section-number">04 Design</span>
          <h2>Design</h2>
        </div>
      </div>

      <div className="web-grid">
        {designWorks.map((work) => (
          <div
            key={work.id}
            className="web-card"
            onClick={() => navigate(`/detail/design/${work.id}`)}
          >
            <div className="web-card-thumb">
              <img src={work.imageUrl} alt={work.title} />
              <div className="masonry-overlay">
                <span className="masonry-category">{work.category}</span>
              </div>
            </div>
            <div className="web-card-info">
              <h3 className="web-card-title">{work.title}</h3>
              {work.description && (
                <p className="web-card-desc">{work.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesignSection;
