import React, { useState } from 'react';

interface DroneWork {
  id: string;
  title: string;
  description?: string;
  mediaUrl: string;
  mediaType: 'image' | 'video';
  thumbnailUrl?: string;
  location?: string;
  featured?: boolean;
}

interface DroneSectionProps {
  droneWorks: DroneWork[];
}

const DroneSection: React.FC<DroneSectionProps> = ({ droneWorks }) => {
  const [selectedWork, setSelectedWork] = useState<DroneWork | null>(null);

  const featuredWorks = droneWorks.filter(work => work.featured);
  const otherWorks = droneWorks.filter(work => !work.featured);

  return (
    <section id="drone" className="section drone-section">
      <div className="container">
        <div className="section-header">
          <h2>Drone Photography</h2>
          <p>空からの視点で新しい世界を発見。ドローンによる空撮サービス</p>
        </div>

        {/* Featured Works */}
        {featuredWorks.length > 0 && (
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '2rem', textAlign: 'center' }}>Featured Works</h3>
            <div className="featured-works">
              {featuredWorks.map((work) => (
                <div
                  key={work.id}
                  className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer transform hover:scale-105"
                  onClick={() => setSelectedWork(work)}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={work.thumbnailUrl || work.mediaUrl}
                      alt={work.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h4 className="text-2xl font-bold mb-3">{work.title}</h4>
                      {work.description && (
                        <p className="text-lg opacity-90 mb-2">{work.description}</p>
                      )}
                      {work.location && (
                        <p className="text-sm opacity-75 flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {work.location}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Play Button for Videos */}
                  {work.mediaType === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-125 transition-all duration-300">
                        <div className="w-0 h-0 border-l-[12px] border-l-blue-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Works Grid */}
        {otherWorks.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Works</h3>
            <div className="gallery-grid">
              {otherWorks.map((work, index) => (
                <div
                  key={work.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                  onClick={() => setSelectedWork(work)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-w-4 aspect-h-3">
                    <img
                      src={work.thumbnailUrl || work.mediaUrl}
                      alt={work.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h4 className="text-lg font-semibold mb-1">{work.title}</h4>
                      {work.location && (
                        <p className="text-xs opacity-75">{work.location}</p>
                      )}
                    </div>
                  </div>

                  {/* Play Button for Videos */}
                  {work.mediaType === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                        <div className="w-0 h-0 border-l-[8px] border-l-blue-600 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Services Info */}
        <div className="drone-services">
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1.5rem' }}>ドローン撮影サービス</h3>
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon">
                📷
              </div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>空撮写真</h4>
              <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>建物、イベント、自然風景の空撮撮影</p>
            </div>
            <div className="service-item">
              <div className="service-icon">
                🎥
              </div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>空撮動画</h4>
              <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>4K品質でのシネマティック空撮映像</p>
            </div>
            <div className="service-item">
              <div className="service-icon">
                🏢
              </div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>商業利用</h4>
              <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>不動産、建設現場、企業プロモーション</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedWork && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedWork(null)}
        >
          <div className="relative max-w-6xl max-h-full">
            {selectedWork.mediaType === 'video' ? (
              <video
                src={selectedWork.mediaUrl}
                controls
                autoPlay
                className="max-w-full max-h-full rounded-lg"
                onClick={(e) => e.stopPropagation()}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={selectedWork.mediaUrl}
                alt={selectedWork.title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            )}
            <button
              onClick={() => setSelectedWork(null)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors"
            >
              ×
            </button>
            <div className="absolute -bottom-16 left-0 right-0 text-white text-center">
              <h3 className="text-2xl font-semibold mb-2">{selectedWork.title}</h3>
              {selectedWork.description && (
                <p className="text-lg opacity-90 mb-2">{selectedWork.description}</p>
              )}
              {selectedWork.location && (
                <p className="text-sm opacity-75">📍 {selectedWork.location}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DroneSection;