import { AuthProvider, useAuthContext } from 'context/AuthContext'
import HomeHero from './HomeHero'

export type HeroWrapperProps = {}

export default function HeroWrapper({}: HeroWrapperProps) {
  const { isLogin, user } = useAuthContext()

  return (
    <AuthProvider>
      <HomeHero isLogin={isLogin} user={user} />
    </AuthProvider>
  )
}
