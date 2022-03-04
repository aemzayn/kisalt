import { HOME, META_IMAGE } from 'constants/paths'
import { BRAND, BRAND_TAGLINE, BRAND_TAGLINE_LONG } from 'constants/brand'
import { DefaultSeoProps } from 'next-seo'

const nextSeoConfig: DefaultSeoProps = {
  titleTemplate: `%s | ${BRAND}`,
  title: BRAND_TAGLINE,
  defaultTitle: BRAND,
  description: BRAND_TAGLINE_LONG,
  canonical: HOME,
  openGraph: {
    site_name: BRAND,
    images: [
      {
        url: `${HOME}${META_IMAGE}`,
        alt: BRAND,
        height: 1280,
        width: 640,
        type: 'image/jpeg',
        secureUrl: `${HOME}${META_IMAGE}`,
      },
    ],
  },

  defaultOpenGraphImageHeight: 1280,
  defaultOpenGraphImageWidth: 640,
}

export default nextSeoConfig
