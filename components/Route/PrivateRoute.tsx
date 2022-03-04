import { useRouter } from 'next/router'

import { useAuthContext } from 'context/AuthContext'
import LoadingPage from 'components/Loading/LoadingPage'
import { dashboard } from 'constants/paths'

export type PrivateRouteProps = {
  children: React.ReactNode
  redirectPath: string
}

export default function PrivateRoute({
  children,
  redirectPath = dashboard,
}: PrivateRouteProps) {
  const router = useRouter()
  const { isLoading, isLogin } = useAuthContext()

  if (!isLoading) {
    if (isLogin) {
      return <>{children}</>
    } else {
      router.push(redirectPath)
    }
  }

  return <LoadingPage />
}
