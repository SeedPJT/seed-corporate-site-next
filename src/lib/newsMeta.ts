// client / server 両方で使う型と定数 = fs 依存なしの純粋な module。
// src/lib/news.ts は中でこれを再 export する。
export const NEWS_CATEGORIES = {
  release: 'リリース',
  press: 'メディア掲載',
  partnership: '提携',
  hire: '採用',
  event: 'イベント',
  info: 'お知らせ',
} as const

export type NewsCategory = keyof typeof NEWS_CATEGORIES

// アイキャッチ未設定時の fallback = Seed 用の no_image placeholder。
export const DEFAULT_THUMBNAIL = '/img/common/no_image.webp'
