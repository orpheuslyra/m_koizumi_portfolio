export interface Photo {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category: 'portrait' | 'landscape' | 'event' | 'commercial';
}

export interface Video {
  id: string;
  title: string;
  description?: string;
  videoUrl: string;
  thumbnailUrl: string;
  category: 'commercial' | 'event' | 'cinematic' | 'documentary';
}

export interface DroneWork {
  id: string;
  title: string;
  description?: string;
  mediaUrl: string;
  mediaType: 'image' | 'video';
  thumbnailUrl?: string;
  location?: string;
}