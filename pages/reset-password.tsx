import { NextSeo } from 'next-seo'
import Layout from 'components/Layout/Layout'
import AuthResetPassword from 'components/AuthForm/AuthResetPassword'

export type ResetPasswordProps = {}

export default function ResetPassword({}: ResetPasswordProps) {
  return (
    <Layout>
      <NextSeo title="Reset Password" />
      <AuthResetPassword />
    </Layout>
  )
}
