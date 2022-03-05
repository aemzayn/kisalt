import { useMemo } from 'react'
import clsx from 'clsx'

import NavLink from 'components/Nav/NavLink'
import { headerLinks } from 'constants/paths'

export type MobileNavProps = {
  isHeaderOpen: boolean
  closeHeader: (status: boolean) => void
}

export default function MobileNav({
  isHeaderOpen,
  closeHeader,
}: MobileNavProps) {
  const links = useMemo(() => {
    return headerLinks.filter((link) => link.type === 'link')
  }, [])

  return (
    <nav
      className={clsx(
        'items-left absolute w-full flex-col border-t border-gray-300  bg-white lg:hidden',
        isHeaderOpen ? 'flex' : 'hidden'
      )}
    >
      {links.map((link) => (
        <div
          key={link.route}
          className="mobile-nav-item"
          onClick={() => closeHeader(false)}
        >
          <NavLink href={link.route} label={link.label} />
        </div>
      ))}
    </nav>
  )
}
