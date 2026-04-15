export interface Achievement {
  year: string;
  category: 'photo' | 'video' | 'web';
  client: string;
  description: string;
  url?: string;
}

export const achievements: Achievement[] = [
  { year: '2026', category: 'photo', client: '一般社団法人TOMOSU', description: 'イベント記録撮影' },
  { year: '2026', category: 'photo', client: 'ひいな節実行委員会', description: 'イベント告知用写真撮影', url: 'https://u0ff1.hp.peraichi.com/' },
  { year: '2025', category: 'video', client: 'ジョイパーク', description: 'ゲストハウス紹介動画撮影', url: 'https://joypark-pv.com/2026/03/03/basek49-guesthouse/' },
  { year: '2025', category: 'video', client: '久留米運送株式会社', description: 'プロモーションビデオ制作', url: 'https://youtu.be/gi_B8BTO0AU' },
  { year: '2025', category: 'video', client: '株式会社仁張工作所', description: 'ドローン空撮映像提供', url: 'https://youtu.be/SiFP5XmatvE?si=Ra0H27R15BWP_4Aj' },
  { year: '2025', category: 'video', client: 'UMゴルフ', description: 'プロモーションビデオ制作', url: 'https://www.youtube.com/watch?v=Q1Er45dh8qQ' },
  { year: '2025', category: 'photo', client: 'UMゴルフ', description: 'コーチプロフィール写真撮影', url: 'https://umgolf68.com/instructor/' },
  { year: '2025', category: 'video', client: 'つりきっぷ', description: 'ドローン空撮映像提供', url: 'https://youtu.be/Z-rHTokh_lI?si=toulUoyc8ZaaMU60' },
  { year: '2025', category: 'video', client: 'らんぷの宿', description: 'プロモーションビデオ制作'},
  { year: '2025', category: 'web', client: '株式会社ナコード', description: 'ランディングページ制作', url: 'https://general-bpo.com/' },
  { year: '2025', category: 'video', client: '一般社団法人TOMOSU', description: 'Bonchi シェアオフィス紹介動画制作' },
  { year: '2024', category: 'video', client: 'あわの里', description: 'プロモーションビデオ制作', url: 'https://youtu.be/yt1MMvywEuE' },
  { year: '2024', category: 'photo', client: '家具の川上', description: '店舗外観写真撮影' },
  { year: '2024', category: 'photo', client: '有限会社くるみの木', description: '器・商品撮影' },
  { year: '2024', category: 'photo', client: '株式会社天平楽座', description: '企業PR写真撮影' },
  { year: '2024', category: 'video', client: '株式会社山組', description: 'ドローン空撮映像提供', url: 'https://www.instagram.com/reel/CwtnFydhRQt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
  { year: '2024', category: 'web', client: '株式会社COST STATION', description: 'ホームページ制作', url: 'https://cost-sta.com/' },
];
