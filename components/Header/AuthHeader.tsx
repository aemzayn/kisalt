import Link from 'next/link'
import { LogoutIcon } from '@heroicons/react/outline'

import { logOut } from 'lib/supabaseClient'
import NeutralHeader from './NeutralHeader'
import Header from './Header'
import { useAuthContext } from 'context/AuthContext'

export type AuthHeaderProps = {}

export default function AuthHeader({}: AuthHeaderProps) {
  const { isLogin, isLoading } = useAuthContext()

  if (!isLoading) {
    if (isLogin) {
      return (
        <div
          id="main-header"
          className="sticky top-0 z-50 w-full bg-white shadow-lg shadow-violet-300"
        >
          <div className="container mx-auto flex max-w-6xl items-center justify-between px-8 py-8 lg:px-4 ">
            <Link href="/">
              <a className="text-2xl font-medium text-violet-900">Kisalt.</a>
            </Link>

            <button
              onClick={logOut}
              className="group flex items-center gap-2 rounded-full bg-gray-200 px-5 py-2 text-violet-800 duration-150 hover:bg-gray-300"
            >
              Log Out{' '}
              <LogoutIcon className="h-5 w-5 text-gray-400 duration-150 group-hover:text-violet-500" />
            </button>
          </div>
        </div>
      )
    } else {
      return <Header />
    }
  }

  return <NeutralHeader />
}
