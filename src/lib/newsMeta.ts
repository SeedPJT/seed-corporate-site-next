// client / server 両方 で 使う 型 と定数 = fs 依存 なし の 純 粋 な module。
// src/lib/news.ts は 中 で これ を再 export する。
export const NEWS_CATEGORIES = {
  release: 'リリース',
  press: 'メディア掲載',
  partnership: '提携',
  hire: '採用',
  event: 'イベント',
  info: 'お知らせ',
} as const

export type NewsCategory = keyof typeof NEWS_CATEGORIES

// アイキャッチ 未設定 の時 の fallback 画像 = デザイン 崩れ 防止。
export const DEFAULT_THUMBNAIL = '/img/common/logo.webp'
