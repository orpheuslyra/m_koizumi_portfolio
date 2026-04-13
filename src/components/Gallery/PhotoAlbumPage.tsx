import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Vite の import.meta.glob で photo フォルダ以下の全画像をビルド時に取得
const allPhotoModules = import.meta.glob(
  '/src/assets/images/photo/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}',
  { eager: true }
) as Record<string, { default: string }>;

interface AlbumPhoto {
  path: string;
  url: string;
  filename: string;
}

interface PhotoData {
  id: string;
  title: string;
  album?: string;
}

interface PhotoAlbumPageProps {
  photos?: PhotoData[];
}

const PhotoAlbumPage: React.FC<PhotoAlbumPageProps> = ({ photos: photoDataList = [] }) => {
  const { album } = useParams<{ album: string }>();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const albumTitle = photoDataList.find(p => p.album === album)?.title ?? album ?? '';

  // キーボード操作
  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedIndex(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedIndex]);

  const photos = useMemo<AlbumPhoto[]>(() => {
    return Object.entries(allPhotoModules)
      .filter(([path]) => {
        const parts = path.split('/');
        // /src/assets/images/photo/<album>/<file> という構造を想定
        const folderName = parts[parts.length - 2];
        return folderName === album;
      })
      .map(([path, mod]) => ({
        path,
        url: mod.default,
        filename: path.split('/').pop() ?? '',
      }));
  }, [album]);

  const handlePrev = () => {
    setSelectedIndex(prev =>
      prev !== null ? (prev > 0 ? prev - 1 : photos.length - 1) : null
    );
  };

  const handleNext = () => {
    setSelectedIndex(prev =>
      prev !== null ? (prev < photos.length - 1 ? prev + 1 : 0) : null
    );
  };

  return (
    <div className="photo-album-page">
      {/* ヘッダー */}
      <div className="photo-album-header">
        <Link to="/#photography" className="photo-album-back">
          ← Photography
        </Link>
        <div className="photo-album-title-block">
          <span className="section-number">Photography</span>
          <h1>{albumTitle}</h1>
          <p className="photo-album-count">{photos.length} photos</p>
        </div>
      </div>

      {/* グリッド */}
      {photos.length === 0 ? (
        <div className="photo-album-empty">
          <p>"{album}" フォルダに画像が見つかりません</p>
          <p className="photo-album-empty-hint">
            src/assets/images/photo/{album}/ に画像を配置してください
          </p>
        </div>
      ) : (
        <div className="photo-album-grid">
          {photos.map((photo, index) => (
            <div
              key={photo.path}
              className="photo-album-item"
              onClick={() => setSelectedIndex(index)}
            >
              <img src={photo.url} alt={photo.filename} loading="lazy" />
            </div>
          ))}
        </div>
      )}

      {/* ライトボックス */}
      {selectedIndex !== null && (
        <div
          className="photo-lightbox"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelectedIndex(null)}
          >
            ×
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={e => { e.stopPropagation(); handlePrev(); }}
          >
            ‹
          </button>

          <div
            className="lightbox-content"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={photos[selectedIndex].url}
              alt={photos[selectedIndex].filename}
            />
          </div>

          <button
            className="lightbox-nav lightbox-next"
            onClick={e => { e.stopPropagation(); handleNext(); }}
          >
            ›
          </button>

          <div className="lightbox-counter">
            {selectedIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoAlbumPage;
