import React from 'react';

const PhotoGallerySimple: React.FC = () => {
  return (
    <section style={{ padding: '5rem 0', background: '#f9fafb' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Photography</h2>
          <h3>一瞬を伝わる形に。</h3>
          <p style={{ fontSize: '1.2rem', color: '#6b7280' }}>
          店舗・人物・商品を魅力的に撮影。ドローンによる空撮にも対応しています。
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop" 
              alt="Sample Photo"
              style={{ width: '100%', height: '250px', objectFit: 'cover' }}
            />
            <div style={{ padding: '1rem', background: 'white' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Sample Photo</h3>
              <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>This is a test photo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallerySimple;