import React from 'react';

interface WebWork {
  id: string;
  title: string;
  description?: string;
  websiteUrl?: string;
  imageUrl: string;
  category: 'website' | 'ecommerce' | 'landing' | 'blog' | 'portfolio';
  technologies?: string[];
  featured?: boolean;
}

interface WebSectionProps {
  webWorks: WebWork[];
}

const WebSection: React.FC<WebSectionProps> = ({ webWorks }) => {
  return (
    <section id="web" className="section">
      <div className="section-header">
        <div className="section-title">
          <span className="section-number">03 Web</span>
          <h2>Web Development</h2>
        </div>
      </div>

      <div className="web-grid">
        {webWorks.map((work) => (
          <a
            key={work.id}
            className="web-card"
            href={work.websiteUrl || undefined}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit', cursor: work.websiteUrl ? 'pointer' : 'default' }}
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
          </a>
        ))}
      </div>
    </section>
  );
};

export default WebSection;
