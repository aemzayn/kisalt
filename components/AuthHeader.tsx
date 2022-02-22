import { useState } from "react";
import { LogoutIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import Link from "next/link";

export type AuthHeaderProps = {};

export default function AuthHeader({}: AuthHeaderProps) {
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
        "sticky top-0 z-50 w-full bg-white",
        headerOpen ? "shadow-none" : "shadow-lg shadow-violet-300"
      )}
    >
      <div className="container mx-auto flex max-w-6xl items-center justify-between px-8 py-8 lg:px-4 ">
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

        <button
          onClick={() => {
            if (headerOpen) {
              toggleMobileHeader(false);
            }
          }}
          className="ml-auto mr-2 rounded-full bg-violet-800 px-5 py-2 text-violet-50 duration-75 hover:bg-opacity-90 md:hidden"
        >
          Log out
        </button>

        <button className="group flex items-center gap-2 rounded-full bg-gray-200 px-5 py-2 text-violet-800 duration-150 hover:bg-gray-300">
          Log Out{" "}
          <LogoutIcon className="h-5 w-5 text-gray-400 duration-150 group-hover:text-violet-500" />
        </button>
      </div>
    </div>
  );
}
