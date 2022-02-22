import Link from "next/link";

export type NavLinkProps = {
  children: React.ReactNode;
  href: string;
};

export default function NavLink({ children, href }: NavLinkProps) {
  return (
    <Link href={href}>
      <a className="duration-75 hover:text-violet-600">{children}</a>
    </Link>
  );
}
