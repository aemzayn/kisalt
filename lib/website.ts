import { HOME, META_ICON, META_IMAGE } from 'constants/paths'
import { BRAND, BRAND_TAGLINE_LONG } from 'constants/brand'

export function makeWebsiteSchema() {
  return {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    url: `${HOME}`,
    description: BRAND_TAGLINE_LONG,
    image: META_ICON,
    thumbnailUrl: META_IMAGE,
    name: BRAND,
    sameAs: [
      'https://www.facebook.com/ahmadmuslihzain',
      'https://instagram.com/aemzayn',
      'https://www.linkedin.com/in/ahmad-muslih-zain/',
      'https://github.com/aemzayn',
    ],
  }
}
