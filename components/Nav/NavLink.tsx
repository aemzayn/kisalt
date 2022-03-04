import Link from 'next/link'

export type NavLinkProps = {
  readonly label: string
  readonly href: string
}

export default function NavLink({ label, href }: NavLinkProps) {
  return (
    <Link href={href}>
      <a className="duration-75 hover:text-violet-600">{label}</a>
    </Link>
  )
}
