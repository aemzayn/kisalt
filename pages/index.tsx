import { NextSeo } from 'next-seo'

import Layout from '../components/Layout/Layout'
import HeroWrapper from 'components/Home/HeroWrapper'
import HomeInfo from 'components/Home/HomeInfo'

export default function HomePage() {
  return (
    <Layout>
      <NextSeo title="Home" />
      <div className="bg-violet-100">
        <HeroWrapper />
        <HomeInfo />
      </div>
    </Layout>
  )
}
