import Link from "next/link";
import { MenuIcon } from "@heroicons/react/solid";
import React from "react";

type Props = {};

interface NavLink {
  children: React.ReactNode;
  href: string;
}

function NavLink({ children, href }: NavLink) {
  return (
    <Link href={href}>
      <a className="hover:text-violet-600 duration-75">{children}</a>
    </Link>
  );
}

export default function Header({}: Props) {
  return (
    <div
      id="main-header"
      className="bg-white shadow-lg shadow-violet-300 sticky top-0 w-full z-50"
    >
      <div className="container mx-auto max-w-6xl flex items-center justify-between px-8 lg:px-4 py-8 ">
        <Link href="/">
          <a className="text-2xl font-medium text-violet-900">Kisalt.</a>
        </Link>

        <nav className="hidden md:flex items-center gap-8 ">
          <NavLink href="/">About</NavLink>
          <NavLink href="/">How it works</NavLink>
          <NavLink href="/">Sign up</NavLink>
          <button className="bg-violet-800 px-5 py-2 text-violet-50 rounded-full hover:bg-opacity-90 duration-75">
            Login
          </button>
        </nav>

        <button className="md:hidden p-2 rounded-full bg-violet-200">
          <MenuIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
