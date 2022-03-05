import Link from 'next/link'
import clsx from 'clsx'
import { MenuIcon, XIcon } from '@heroicons/react/solid'

import MobileNav from 'components/Nav/MobileNav'
import Nav from 'components/Nav'

export type HeaderProps = {
  isHeaderOpen: boolean
  toggleMobileHeader: (status: boolean) => void
}

export default function Header({
  isHeaderOpen,
  toggleMobileHeader,
}: HeaderProps) {
  const handleCloseOnClick = () => {
    if (isHeaderOpen) toggleMobileHeader(false)
  }

  const toggle = () => {
    toggleMobileHeader(!isHeaderOpen)
  }

  return (
    <div
      id="main-header"
      className={clsx(
        'sticky top-0 z-20 w-full bg-white',
        isHeaderOpen ? 'shadow-none' : 'shadow-sm shadow-violet-300'
      )}
    >
      <div className="container mx-auto flex max-w-6xl items-center justify-between px-8 py-8 lg:px-4 ">
        <Link href="/">
          <a
            onClick={handleCloseOnClick}
            className="text-2xl font-medium text-violet-900"
          >
            Kisalt.
          </a>
        </Link>

        <Link href="/login">
          <a
            onClick={handleCloseOnClick}
            className="ml-auto mr-2 rounded-full bg-violet-800 px-5 py-2 text-violet-50 duration-75 hover:bg-opacity-90 md:hidden"
          >
            Login
          </a>
        </Link>

        <Nav />

        <button
          onClick={toggle}
          className="rounded-full bg-violet-200 p-3 md:hidden"
        >
          {isHeaderOpen ? (
            <XIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      <MobileNav isHeaderOpen={isHeaderOpen} closeHeader={toggleMobileHeader} />
    </div>
  )
}
