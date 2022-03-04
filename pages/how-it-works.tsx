import CommonLayout from 'components/Layout/Layout'
import { NextSeo } from 'next-seo'

export type HowItWorksProps = {}

export default function HowItWorks({}: HowItWorksProps) {
  return (
    <CommonLayout>
      <NextSeo title="How it works" />
    </CommonLayout>
  )
}
