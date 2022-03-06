import '../style/index.css'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'

import nextSeoConfig from 'config/next-seo.config'
import { AlertProvider } from 'context/AlertContext'
import { isProduction } from 'constants/mode'
import * as gtag from 'lib/gtag'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      if (isProduction) {
        gtag.pageview(url)
      }
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <AlertProvider>
      <DefaultSeo {...nextSeoConfig} />
      <Component {...pageProps} />
    </AlertProvider>
  )
}
