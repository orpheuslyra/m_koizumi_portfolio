// Assets imports
import kawakami from '../assets/images/photo/kawakami/kawakami.jpg';
import kurumi from '../assets/images/photo/kuruminoki/kurumi_utsuwa.jpg';
import tenpyorakuza from '../assets/images/photo/tenpyorakuza/DSC00474.jpg';
import umgolfcoach from '../assets/images/photo/umgolf/HCZ09320.jpg';
import hiinasetsu from '../assets/images/photo/hinaseku/DSC02022.jpg';

import BonchiShareOffice from '../assets/videos/BonchiShareOffice.mp4';
import heroVideo from '../assets/videos/hero/DJI_0286.mp4';

//写真サムネイル
import umgolfThumbnail from '../assets/videos/thumbnail/umgolf_thumb.jpg';
import awanosatoThumbnail from '../assets/videos/thumbnail/awanosato_thumb.jpg';
import kurumeThumbnail from '../assets/videos/thumbnail/kurume_thumb.jpg';
import BonchiShareOfficeThumbnail from '../assets/videos/thumbnail/BonchiShareOffice.jpg';


//Webサイト
import coststationss from '../assets/images/web/coststationscreenshot.png';
import fivecsss from '../assets/images/web/fivecsss.png';
import general from '../assets/images/web/GeneralBPO.png';

//Webコンテンツ
import umgolfbanner from '../assets/images/design/umgolfwebbanner.png';


// 型定義をエクスポート
export interface Photo {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category: 'portrait' | 'landscape' | 'event' | 'commercial';
  featured?: boolean;
  album?: string; // src/assets/images/photo/<album>/ フォルダ名
  article?: {
    content: string;
    client?: string;
    date?: string;
    challenge?: string;
    solution?: string;
    result?: string;
  };
}

export interface Video {
  id: string;
  title: string;
  description?: string;
  videoUrl: string;
  thumbnailUrl: string;
  category: 'commercial' | 'event' | 'cinematic' | 'documentary';
  featured?: boolean;
  videoType?: 'local' | 'youtube'; // 動画のタイプを指定
  youtubeId?: string; // YouTubeの動画IDを格納
  article?: {
    content: string;
    client?: string;
    date?: string;
    challenge?: string;
    solution?: string;
    result?: string;
  };
}

export interface WebWork {
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

export interface DesignWork {
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

// YouTube URL helper function
export const getYouTubeVideoId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

// Hero video for HeroSection (disabled - file not available)
export const heroVideoSrc = heroVideo

export const samplePhotos: Photo[] = [
  {
    id: '3',
    title: 'ひいな節',
    description: 'ひいな節告知用写真撮影',
    imageUrl: hiinasetsu,
    category: 'event',
    album: 'hinaseku',
    article: {
      content: 'ひいな節様の告知用写真撮影を担当させていただきました。伝統的な日本の音楽と文化を表現するため、和装の美しさと自然光を活かした撮影手法を採用しました。',
      client: 'ひいな節',
      date: '2025年3月',
      challenge: '店舗の雰囲気と商品の魅力を同時に表現すること',
      solution: '自然光を活かし、お客様の笑顔と家具の質感を両立させる撮影手法を採用',
      result: '店舗の温かい雰囲気が伝わる写真で、お客様にも大変満足いただけました'
    }
  },
  {
    id: '4',
    title: '天平楽座　天平衣装',
    description: '天平楽座さま企業PR写真撮影',
    imageUrl: tenpyorakuza,
    category: 'commercial',
    album: 'tenpyorakuza',
    article: {
      content: '天平楽座様の企業PR写真撮影を担当させていただきました。',
      client: '天平楽座',
      date: '2025年6月',
      challenge: '店舗の雰囲気と商品の魅力を同時に表現すること',
      solution: '自然光を活かし、お客様の笑顔と家具の質感を両立させる撮影手法を採用',
      result: '店舗の温かい雰囲気が伝わる写真で、お客様にも大変満足いただけました'
    }
  },
  {
    id: '1',
    title: '家具の川上　店舗リニューアル', 
    description: '家具の川上さま店舗撮影',
    imageUrl: kawakami,
    category: 'commercial',
    featured: false,
    album: 'kawakami',
    article: {
      content: '家具の川上様の店舗撮影を担当させていただきました。お客様の温かい接客と上質な家具が調和する空間を写真に収めることができました。',
      client: '家具の川上',
      date: '2024年4月',
      challenge: '店舗の雰囲気と商品の魅力を同時に表現すること',
      solution: '自然光を活かし、お客様の笑顔と家具の質感を両立させる撮影手法を採用',
      result: '店舗の温かい雰囲気が伝わる写真で、お客様にも大変満足いただけました'
    }
  },
  {
    id: '2',
    title: 'くるみの木　器',
    description: 'くるみの木さま商品写真',
    imageUrl: kurumi,
    category: 'commercial',
    featured: true,
    album: 'kuruminoki',
    article: {
      content: 'くるみの木様の器の撮影をさせていただきました。手作りの温もりと職人の技術が感じられる美しい器を、その魅力が最大限に伝わるよう撮影いたしました。',
      client: 'くるみの木',
      date: '2024年3月',
      challenge: '手作り器の質感と温もりを写真で表現すること',
      solution: 'ソフトライティングと背景選択で器の素材感を際立たせる撮影',
      result: '器の魅力が十分に伝わる写真で、オンライン販売でも好評をいただいています'
    }
  },
  {
    id: '5',
    title: '',
    description: 'UMゴルフさまコーチプロフィール写真',
    imageUrl: umgolfcoach,
    category: 'commercial'
  },
];

// サンプル動画データ
export const sampleVideos: Video[] = [
    {
    id: '1',
    title: '久留米運送株式会社',
    description: '久留米運送株式会社プロモーションビデオ制作',
    videoUrl: 'https://youtu.be/gi_B8BTO0AU?si=3QhNQlgIwmd-lHpW',
    thumbnailUrl: kurumeThumbnail,
    category: 'commercial',
    featured: true,
    article: {
      content: '久留米運送様のプロモーションビデオを制作させていただきました。地域の魅力と安全な運送サービスを映像で表現し、観客に安心感と信頼感を届けることを目指しました。',
      client: '久留米運送',
      date: '2025年10月',
      challenge: '地域の魅力と自然の美しさを短時間で効果的に伝えること',
      solution: 'ドローン撮影と地上撮影を組み合わせ、四季の変化と地域の温かさを表現',
      result: 'YouTube再生回数が大幅に増加し、観光客誘致に貢献できました'
    }
  },
  {
    id: '2',
    title: 'あわの里',
    description: 'あわの里プロモーションビデオ制作',
    videoUrl: 'https://youtu.be/yt1MMvywEuE?si=m1Y-vhrxkBImozbD',
    thumbnailUrl: awanosatoThumbnail,
    category: 'commercial',
    featured: true,
    article: {
      content: 'あわの里様のプロモーションビデオを制作させていただきました。阿波の自然豊かな環境と地域の魅力を映像で表現し、観光客の皆様に訪れたくなるような動画を目指しました。',
      client: 'あわの里',
      date: '2024年5月',
      challenge: '地域の魅力と自然の美しさを短時間で効果的に伝えること',
      solution: 'ドローン撮影と地上撮影を組み合わせ、四季の変化と地域の温かさを表現',
      result: 'YouTube再生回数が大幅に増加し、観光客誘致に貢献できました'
    }
  },
  {
    id: '3',
    title: 'UM Golf',
    description: 'UMゴルフプロモーションビデオ制作',
    videoUrl: 'https://www.youtube.com/watch?v=Q1Er45dh8qQ',
    thumbnailUrl: umgolfThumbnail,
    category: 'commercial',
    featured: true,
    article: {
      content: 'UMゴルフ様のプロモーションビデオを制作させていただきました。ゴルフの楽しさと施設の魅力を伝える動画で、新規顧客獲得を目指しました。',
      client: 'UMゴルフ',
      date: '2024年6月',
      challenge: 'ゴルフ初心者にも親しみやすい施設の魅力を伝えること',
      solution: '実際のプレイ風景と施設紹介を織り交ぜた構成で親近感を演出',
      result: '新規会員登録数が30%増加し、施設利用者拡大に貢献しました'
    }
  },
  {
    id: '4',
    title: 'Bonchi シェアオフィス',
    description: 'Bonchiのシェアオフィス紹介ビデオ制作',
    videoUrl: BonchiShareOffice,
    thumbnailUrl: BonchiShareOfficeThumbnail,
    category: 'commercial',
    videoType: 'local',
    article: {
      content: '奈良市のコワーキングスペース Bonchi のシェアオフィス紹介動画を制作させていただきました。施設の魅力と利用者の声を通じて、働きやすい環境を伝えることを目指しました。',
      client: 'Bonchi',
      date: '2025年3月',
      challenge: '風の強い海岸でのドローン撮影の安全性と映像品質の両立',
      solution: '気象条件を慎重に選び、複数回の撮影で最高のシーンを収集',
      result: '観光地の魅力を最大限に伝える印象的な空撮映像を制作'
    }
  }

];

// サンプルWeb制作データ
export const sampleWebWorks: WebWork[] = [
  {
    id: '1',
    title: 'Cost Station',
    description: 'コストコ再販店コストステーション店舗紹介サイト制作',
    websiteUrl: 'https://cost-sta.com/',
    imageUrl: coststationss,
    category: 'ecommerce',
    technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    featured: true,
    article: {
      content: 'コストコ再販店の店舗紹介用サイトを構築しました。Wordpressをベースに、店舗情報の管理とオンラインでの問い合わせ機能を実装し、ユーザーが簡単に情報を取得できるようにしました。',
      client: 'ローカルショップ',
      date: '2024年４月',
      challenge: '小規模事業者でも運用しやすいシンプルな管理システムの構築',
      solution: '直感的な操作が可能な管理画面と自動化機能の実装',
      result: 'プレスリリースに合わせて手早く構築を行い、スムーズなサイト公開を実現'
    }
  },
  {
    id: '2',
    title: 'Five Cs',
    description: '株式会社ファイブ・シーズのサイト改修',
    websiteUrl: 'https://www.fivecs.co.jp/',
    imageUrl: fivecsss,
    category: 'website',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: true,
    article: {
      content: '株式会社ファイブ・シーズ様のコーポレートサイトをWordPressの独自テーマからメンテナンス性の高いテーマを使用する形にリニューアルしました。最新のWeb技術を活用し、企業イメージの向上と情報発信力の強化を図りました。',
      client: 'IT企業',
      date: '2024年7月',
      challenge: '複雑な企業情報を分かりやすく整理して表現すること',
      solution: '情報アーキテクチャを見直し、ユーザー目線のナビゲーション設計',
      result: '問い合わせ数が40%増加し、採用応募も大幅に向上'
    }
  },
  {
    id: '3',
    title: 'General BPO',
    description: '株式会社ゼネラル　ランディングページ',
    websiteUrl: 'https://general-bpo.com/',
    imageUrl: general,
    category: 'landing',
    technologies: ['Astro', 'Custom CSS', 'Google Analytics'],
    article: {
      content: 'レストランの魅力を伝える集客特化のランディングページを制作しました。美味しそうな料理写真とお店の雰囲気を効果的に表現し、予約率向上を実現しています。',
      client: 'イタリアンレストラン',
      date: '2024年4月',
      challenge: '料理の魅力を写真と文章で効果的に伝えること',
      solution: 'プロの料理撮影と感情に訴えるコピーライティング',
      result: 'Web経由の予約が3倍に増加し、新規顧客獲得に大きく貢献'
    }
  }
];

// サンプルデザイン制作データ
export const sampleDesignWorks: DesignWork[] = [
  {
    id: '1',
    title: 'Meta広告バナー制作',
    description: 'UMゴルフ様のWeb広告バナーを制作しました。',
    imageUrl: umgolfbanner,
    category: 'web-ad',
    mediaType: 'digital',
    dimensions: '728x90px, 300x250px',
    featured: true,
    article: {
      content: 'UMゴルフ様のWeb広告バナーを制作しました。ターゲット層に響くビジュアルとキャッチコピーで、クリック率向上を目指したデザインです。',
      client: 'UMゴルフ',
      date: '2025年9月',
      challenge: '限られたスペースでゴルフ教室の魅力を効果的に伝えること',
      solution: '視覚的にインパクトのあるデザインと明確なCTAを配置',
      result: '未進出であったMeta広告にて新規顧客の開拓に成功'
    }
  },
  {
    id: '2', 
    title: 'イベント告知ポスター',
    description: '地域文化祭のイベント告知ポスター',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
    category: 'poster',
    mediaType: 'print',
    dimensions: 'A2サイズ (420×594mm)',
    featured: true,
    article: {
      content: '地域の文化祭イベント告知ポスターを制作しました。幅広い年齢層に親しまれるよう、親しみやすいデザインと読みやすいレイアウトを心がけました。',
      client: '○○市文化祭実行委員会',
      date: '2024年7月',
      challenge: '多くの情報を分かりやすく整理し、視認性の高いデザインにすること',
      solution: '情報の階層化とカラーゾーニングで見やすさを重視したレイアウト設計',
      result: '前年比30%増の来場者数を記録し、地域の活性化に貢献'
    }
  },
  {
    id: '3',
    title: '美容院リーフレット',
    description: '新規開店美容院の紹介リーフレット',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop',
    category: 'flyer',
    mediaType: 'print',
    dimensions: 'A4三つ折り',
    article: {
      content: '新規開店する美容院様の紹介リーフレットを制作しました。お店のコンセプトである「ナチュラル&エレガント」を表現し、ターゲット層に響くデザインを目指しました。',
      client: 'ヘアサロン ナチュラ',
      date: '2024年6月',
      challenge: '上品さと親しみやすさを両立したブランドイメージの表現',
      solution: 'ソフトなカラーパレットと洗練されたタイポグラフィでブランド価値を演出',
      result: '開店から3ヶ月で目標顧客数を達成し、リピート率80%を実現'
    }
  },
  {
    id: '4',
    title: '企業ロゴデザイン',
    description: 'IT企業のコーポレートロゴ',
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    category: 'logo',
    mediaType: 'digital',
    featured: true,
    article: {
      content: 'スタートアップIT企業様のコーポレートロゴをデザインしました。革新性と信頼性を表現し、様々な媒体で使用できるシンプルで印象的なロゴを制作しました。',
      client: 'テックイノベーション株式会社',
      date: '2024年5月',
      challenge: '革新性と信頼性を同時に表現する視覚的アイデンティティの創造',
      solution: 'モダンな幾何学形状と安定感のある配色で企業価値を表現',
      result: '名刺交換時の印象が向上し、新規取引先獲得率が25%アップ'
    }
  },
  {
    id: '5',
    title: '会社案内パンフレット',
    description: '製造業企業の会社案内パンフレット',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    category: 'brochure',
    mediaType: 'print',
    dimensions: 'A4 16ページ',
    article: {
      content: '老舗製造業企業様の会社案内パンフレットを制作しました。長年の歴史と技術力を表現しながら、現代的で親しみやすいデザインで企業イメージを刷新しました。',
      client: '○○製作所',
      date: '2024年4月',
      challenge: '伝統と革新を両立した企業イメージの表現',
      solution: '歴史を感じさせる写真と現代的なレイアウトの調和',
      result: '展示会での問い合わせが前年比50%増加し、企業認知度が向上'
    }
  },
  {
    id: '6',
    title: 'ECサイトバナー',
    description: 'オンラインショップのプロモーションバナー',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    category: 'banner',
    mediaType: 'digital',
    dimensions: '複数サイズ対応',
    article: {
      content: 'オンラインアパレルショップ様のシーズンプロモーションバナーを制作しました。ターゲット層に響くビジュアルでブランドの世界観を表現し、購買意欲を促進するデザインです。',
      client: 'ファッションブランド StyleCo',
      date: '2024年9月',
      challenge: 'ブランドの世界観を保ちながら販促効果を最大化すること',
      solution: 'ブランドカラーを活かした統一感のあるビジュアルデザイン',
      result: 'プロモーション期間中の売上が前年同期比60%増加'
    }
  }
];