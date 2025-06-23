export const DEFAULT_IMAGES = {
  default: '/images/defaults/default-artist.jpg',
  singers: '/images/defaults/default-singer.jpg',
  dancers: '/images/defaults/default-dancer.jpg',
  djs: '/images/defaults/default-dj.jpg',
  speakers: '/images/defaults/default-speaker.jpeg',
} as const

export type ArtistCategory = keyof typeof DEFAULT_IMAGES

export function getDefaultImageForCategory(category: string): string {
  const key = category.toLowerCase() as ArtistCategory
  return DEFAULT_IMAGES[key] || DEFAULT_IMAGES.default
} 