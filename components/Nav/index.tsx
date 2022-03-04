import Link from 'next/link'

import NavLink from 'components/Nav/NavLink'
import { headerLinks } from 'constants/paths'

export type NavProps = {}

export interface ButtonLinkProps {
  label: React.ReactNode
  href: string
}

export const ButtonLink = ({ label, href }: ButtonLinkProps) => {
  return (
    <Link href={href}>
      <a className="rounded-full bg-violet-800 px-5 py-2 text-violet-50 duration-75 hover:bg-opacity-90">
        {label}
      </a>
    </Link>
  )
}

export default function Nav({}: NavProps) {
  return (
    <nav className="hidden items-center gap-8 md:flex ">
      {headerLinks.map((link, idx) => {
        const L = link.type === 'link' ? NavLink : ButtonLink
        return <L key={idx} href={link.route} label={link.label} />
      })}
    </nav>
  )
}
