import { NextSeo } from 'next-seo'

import LoginWrapper from 'components/LoginWrapper'
import AuthLayout from 'components/Layout/AuthLayout'

export type LoginPageProps = {}

export default function Login({}: LoginPageProps) {
  return (
    <AuthLayout>
      <NextSeo title="Login to Kisalt" />
      <LoginWrapper />
    </AuthLayout>
  )
}
