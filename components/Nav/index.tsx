import Link from "next/link";
import NavLink from "components/Header/NavLink";

export type NavProps = {};

export default function Nav({}: NavProps) {
  return (
    <nav className="hidden items-center gap-8 md:flex ">
      <NavLink href="/">About</NavLink>
      <NavLink href="/">How it works</NavLink>
      <NavLink href="/register">Sign up</NavLink>
      <Link href="/login">
        <a className="rounded-full bg-violet-800 px-5 py-2 text-violet-50 duration-75 hover:bg-opacity-90">
          Login
        </a>
      </Link>
    </nav>
  );
}
