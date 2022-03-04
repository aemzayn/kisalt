import { NextSeo } from 'next-seo'

import AuthLayout from 'components/Layout/AuthLayout'
import RegisterWrapper from 'components/RegisterWrapper'

export type RegisterPageProps = {}

export default function Register({}: RegisterPageProps) {
  return (
    <AuthLayout>
      <NextSeo title="Sign Up to Kisalt" />
      <RegisterWrapper />
    </AuthLayout>
  )
}
