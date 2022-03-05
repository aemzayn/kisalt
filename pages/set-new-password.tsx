import AuthSetNewPassword from 'components/AuthForm/AuthSetNewPassword'
import AuthLayout from 'components/Layout/AuthLayout'
import PublicRoute from 'components/Route/PublicRoute'
import { dashboard } from 'constants/paths'
import { NextSeo } from 'next-seo'

export type SetNewPasswordProps = {}

export default function SetNewPassword({}: SetNewPasswordProps) {
  return (
    <AuthLayout>
      <PublicRoute redirectPath={dashboard}>
        <NextSeo title="Set new password" noindex nofollow />
        <AuthSetNewPassword />
      </PublicRoute>
    </AuthLayout>
  )
}
