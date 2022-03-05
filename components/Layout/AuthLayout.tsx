import { AuthProvider } from 'context/AuthContext'
import AuthHeader from 'components/Header/AuthHeader'
import Cover from 'components/Cover'
import useHeader from 'hooks/useHeader'

type Props = {
  children: React.ReactNode
}

export default function AuthLayout({ children }: Props) {
  const { isHeaderOpen, toggleMobileHeader, closeHeader } = useHeader()

  return (
    <AuthProvider>
      <div className="min-h-screen">
        <AuthHeader
          isHeaderOpen={isHeaderOpen}
          toggleMobileHeader={toggleMobileHeader}
        />
        <Cover closeHeader={closeHeader} />
        {children}
      </div>
    </AuthProvider>
  )
}
