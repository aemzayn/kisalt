import React, { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

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
  const [headerOpen, setOpen] = useState(false);

  const toggleMobileHeader = (status: boolean) => {
    const body = document.body;
    const html = document.documentElement;
    const cover = document.getElementById("cover");
    if (status) {
      html.classList.add("no-scroll");
      body.classList.add("no-scroll");
      cover.classList.add("open");
    } else {
      html.classList.remove("no-scroll");
      body.classList.remove("no-scroll");
      cover.classList.remove("open");
    }
    setOpen(status);
  };

  return (
    <div
      id="main-header"
      className={clsx(
        "bg-white sticky top-0 w-full z-50",
        headerOpen ? "shadow-none" : "shadow-lg shadow-violet-300"
      )}
    >
      <div className="container mx-auto max-w-6xl flex items-center justify-between px-8 lg:px-4 py-8 ">
        <Link href="/">
          <a
            onClick={() => {
              if (headerOpen) {
                toggleMobileHeader(false);
              }
            }}
            className="text-2xl font-medium text-violet-900"
          >
            Kisalt.
          </a>
        </Link>

        <Link href="/login">
          <a
            onClick={() => {
              if (headerOpen) {
                toggleMobileHeader(false);
              }
            }}
            className="md:hidden ml-auto mr-2 bg-violet-800 px-5 py-2 text-violet-50 rounded-full hover:bg-opacity-90 duration-75"
          >
            Login
          </a>
        </Link>

        <nav className="hidden md:flex items-center gap-8 ">
          <NavLink href="/">About</NavLink>
          <NavLink href="/">How it works</NavLink>
          <NavLink href="/register">Sign up</NavLink>
          <Link href="/login">
            <a className="bg-violet-800 px-5 py-2 text-violet-50 rounded-full hover:bg-opacity-90 duration-75">
              Login
            </a>
          </Link>
        </nav>

        <button
          onClick={() => toggleMobileHeader(!headerOpen)}
          className="md:hidden p-3 rounded-full bg-violet-200"
        >
          {headerOpen ? (
            <XIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      <nav
        className={clsx(
          "flex-col lg:hidden w-full items-left absolute bg-white  border-t border-gray-300",
          headerOpen ? "flex" : "hidden"
        )}
      >
        <div
          className="mobile-nav-item"
          onClick={() => toggleMobileHeader(false)}
        >
          <NavLink href="/">About</NavLink>
        </div>
        <div
          className="mobile-nav-item"
          onClick={() => toggleMobileHeader(false)}
        >
          <NavLink href="/">How it works</NavLink>
        </div>
        <div
          className="mobile-nav-item"
          onClick={() => toggleMobileHeader(false)}
        >
          <NavLink href="/register">Sign up</NavLink>
        </div>
      </nav>
    </div>
  );
}
