import { useRouter } from 'next/router'
import { dashboard } from 'constants/paths'
import { useAuthContext } from 'context/AuthContext'
import LoadingPage from 'components/Loading/LoadingPage'

export type PublicRouteProps = {
  children: React.ReactNode
  redirectPath?: string
}

export default function PublicRoute({
  children,
  redirectPath = dashboard,
}: PublicRouteProps) {
  const router = useRouter()
  const { isLoading, isLogin } = useAuthContext()

  if (!isLoading) {
    if (!isLogin) {
      return <>{children}</>
    } else {
      router.push(redirectPath)
    }
  }

  return <LoadingPage />
}
