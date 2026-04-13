import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { samplePhotos, sampleVideos, sampleWebWorks, sampleDesignWorks } from '../../utils/sampleData';

interface Photo {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category: 'portrait' | 'landscape' | 'event' | 'commercial';
  featured?: boolean;
  article?: {
    content: string;
    client?: string;
    date?: string;
    challenge?: string;
    solution?: string;
    result?: string;
  };
}

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
  article?: {
    content: string;
    client?: string;
    date?: string;
    challenge?: string;
    solution?: string;
    result?: string;
  };
}

interface WebWork {
  id: string;
  title: string;
  description?: string;
  websiteUrl?: string;
  imageUrl: string;
  category: 'website' | 'ecommerce' | 'landing' | 'blog' | 'portfolio';
  technologies?: string[];
  featured?: boolean;
  article?: {
    content: string;
    client?: string;
    date?: string;
    challenge?: string;
    solution?: string;
    result?: string;
  };
}

interface DesignWork {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category: 'web-ad' | 'poster' | 'flyer' | 'brochure' | 'logo' | 'banner';
  mediaType: 'print' | 'digital';
  dimensions?: string;
  featured?: boolean;
  article?: {
    content: string;
    client?: string;
    date?: string;
    challenge?: string;
    solution?: string;
    result?: string;
  };
}

const ContentDetail: React.FC = () => {
  const { type, id } = useParams<{ type: string; id: string }>();
  const navigate = useNavigate();

  // コンテンツを取得
  const getContent = (): (Photo | Video | WebWork | DesignWork) | null => {
    if (type === 'photo') {
      return samplePhotos.find(photo => photo.id === id) || null;
    } else if (type === 'video') {
      return sampleVideos.find(video => video.id === id) || null;
    } else if (type === 'web') {
      return sampleWebWorks.find(work => work.id === id) || null;
    } else if (type === 'design') {
      return sampleDesignWorks.find(work => work.id === id) || null;
    }
    return null;
  };

  const content = getContent();

  if (!content) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <h2>コンテンツが見つかりません</h2>
        <button 
          onClick={() => navigate('/')}
          className="btn btn-primary"
        >
          ホームに戻る
        </button>
      </div>
    );
  }

  const article = content.article;

  return (
    <div style={{ minHeight: '100vh', paddingTop: '80px' }}>
      <div className="container">
        {/* Back button */}
        <button 
          onClick={() => navigate('/')}
          style={{
            background: 'none',
            border: '1px solid #dc2626',
            color: '#dc2626',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            cursor: 'pointer',
            marginBottom: '2rem',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#dc2626';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'none';
            e.currentTarget.style.color = '#dc2626';
          }}
        >
          ← 戻る
        </button>

        {/* Content Header */}
        <div style={{ marginBottom: '3rem' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            marginBottom: '1rem',
            color: '#1f2937'
          }}>
            {content.title}
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#6b7280',
            marginBottom: '1rem'
          }}>
            {content.description}
          </p>
          
          {article?.client && (
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <span style={{ color: '#dc2626', fontWeight: '600' }}>
                クライアント: {article.client}
              </span>
              {article.date && (
                <span style={{ color: '#6b7280' }}>
                  制作時期: {article.date}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Main Content */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Media Section */}
          <div>
            {type === 'photo' ? (
              <img
                src={(content as Photo).imageUrl}
                alt={content.title}
                style={{
                  width: '100%',
                  borderRadius: '10px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                }}
              />
            ) : type === 'video' ? (
              <div style={{
                aspectRatio: '16/9',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
              }}>
                <video
                  src={(content as Video).videoUrl}
                  controls
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            ) : type === 'web' ? (
              // Web Work
              <div>
                <img
                  src={(content as WebWork).imageUrl}
                  alt={content.title}
                  style={{
                    width: '100%',
                    borderRadius: '10px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                    marginBottom: '1rem'
                  }}
                />
                {(content as WebWork).websiteUrl && (
                  <a
                    href={(content as WebWork).websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#667eea',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      fontWeight: '600',
                      padding: '0.75rem 1.5rem',
                      border: '2px solid #667eea',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#667eea';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#667eea';
                    }}
                  >
                    🔗 サイトを見る
                  </a>
                )}
                {(content as WebWork).technologies && (
                  <div style={{ marginTop: '1rem' }}>
                    <h4 style={{ marginBottom: '0.5rem', color: '#4a5568' }}>使用技術</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {(content as WebWork).technologies!.map((tech, index) => (
                        <span
                          key={index}
                          style={{
                            background: '#f7fafc',
                            color: '#4a5568',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '15px',
                            fontSize: '0.8rem',
                            fontWeight: '500',
                            border: '1px solid #e2e8f0'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // Design Work
              <div>
                <img
                  src={(content as DesignWork).imageUrl}
                  alt={content.title}
                  style={{
                    width: '100%',
                    borderRadius: '10px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                    marginBottom: '1rem'
                  }}
                />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                  <span style={{
                    background: (content as DesignWork).mediaType === 'digital' ? '#dbeafe' : '#f3e8ff',
                    color: (content as DesignWork).mediaType === 'digital' ? '#1e40af' : '#7c3aed',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}>
                    {(content as DesignWork).mediaType === 'digital' ? 'デジタル' : '印刷物'}
                  </span>
                  {(content as DesignWork).dimensions && (
                    <span style={{
                      background: '#f3f4f6',
                      color: '#4b5563',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}>
                      {(content as DesignWork).dimensions}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Article Content */}
          <div>
            {article ? (
              <div style={{ color: '#374151', lineHeight: '1.8' }}>
                <h2 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '600', 
                  marginBottom: '1.5rem',
                  color: '#1f2937'
                }}>
                  制作について
                </h2>
                
                <p style={{ 
                  fontSize: '1.1rem', 
                  marginBottom: '2rem',
                  color: '#4b5563'
                }}>
                  {article.content}
                </p>

                {article.challenge && (
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ 
                      fontSize: '1.2rem', 
                      fontWeight: '600', 
                      marginBottom: '0.5rem',
                      color: '#dc2626'
                    }}>
                      課題
                    </h3>
                    <p style={{ color: '#4b5563' }}>{article.challenge}</p>
                  </div>
                )}

                {article.solution && (
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ 
                      fontSize: '1.2rem', 
                      fontWeight: '600', 
                      marginBottom: '0.5rem',
                      color: '#dc2626'
                    }}>
                      解決策
                    </h3>
                    <p style={{ color: '#4b5563' }}>{article.solution}</p>
                  </div>
                )}

                {article.result && (
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ 
                      fontSize: '1.2rem', 
                      fontWeight: '600', 
                      marginBottom: '0.5rem',
                      color: '#dc2626'
                    }}>
                      結果
                    </h3>
                    <p style={{ color: '#4b5563' }}>{article.result}</p>
                  </div>
                )}
              </div>
            ) : (
              <div style={{ 
                padding: '2rem', 
                background: '#f9fafb', 
                borderRadius: '10px',
                textAlign: 'center'
              }}>
                <p style={{ color: '#6b7280' }}>
                  このコンテンツの詳細記事は準備中です。
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Contact CTA */}
        <div style={{
          background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
          color: 'white',
          padding: '3rem',
          borderRadius: '15px',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1rem' }}>
            同様のプロジェクトをお考えですか？
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
            お気軽にお問い合わせください。あなたのビジョンを形にします。
          </p>
          <button 
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            style={{
              background: 'white',
              color: '#dc2626',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '5px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            お問い合わせ
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentDetail;