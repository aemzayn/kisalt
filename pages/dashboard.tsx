import { NextSeo } from 'next-seo'

import AuthLayout from 'components/Layout/AuthLayout'
import DashboardWrapper from 'components/Dashboard/DashboardWrapper'

export type DashboardPageProps = {}

export const Dashboard = ({}: DashboardPageProps) => {
  return (
    <AuthLayout>
      <NextSeo title="Dashboard" />
      <DashboardWrapper />
    </AuthLayout>
  )
}

export default Dashboard
