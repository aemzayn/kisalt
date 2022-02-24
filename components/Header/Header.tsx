import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

import { MenuIcon, XIcon } from "@heroicons/react/solid";
import MobileNav from "components/Nav/MobileNav";
import Nav from "components/Nav";

export type HeaderProps = {};

export default function Header({}: HeaderProps) {
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

  const handleCloseOnClick = () => {
    if (headerOpen) toggleMobileHeader(false);
  };

  const toggle = () => {
    toggleMobileHeader(!headerOpen);
  };

  return (
    <div
      id="main-header"
      className={clsx(
        "sticky top-0 z-50 w-full bg-white",
        headerOpen ? "shadow-none" : "shadow-lg shadow-violet-300"
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
          {headerOpen ? (
            <XIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      <MobileNav isOpen={headerOpen} setHeader={toggleMobileHeader} />
    </div>
  );
}
