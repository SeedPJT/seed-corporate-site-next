import type { Metadata } from 'next'

/**
 * 問い合わせページの canonical。
 *
 * page.tsx は 'use client' ( フォームの状態を持つ) なので metadata を
 * 書けない。 layout に置いて、 どれが正規かを こちらが言う。
 */
export const metadata: Metadata = {
  title: 'お問い合わせ | 株式会社Seed',
  description: '株式会社Seed へのお問い合わせはこちらから承ります。',
  icons: { icon: '/img/favicon.webp' },
  alternates: { canonical: '/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
