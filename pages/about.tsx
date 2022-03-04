import PageContainer from 'components/Container/PageContainer'
import Layout from 'components/Layout/Layout'
import { NextSeo } from 'next-seo'

export type AboutProps = {}

export default function About({}: AboutProps) {
  return (
    <Layout>
      <NextSeo title="About" />
      <PageContainer height="screen">
        <div className="flex w-full flex-1 items-center justify-center">
          <h1>About</h1>
        </div>
      </PageContainer>
    </Layout>
  )
}
