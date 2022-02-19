import Link from "next/link";
import SunIcon from "@heroicons/react/solid/SunIcon";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="flex py-8">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-2xl font-bold">Kisalt</h1>
        <div className="flex gap-2">
          <nav className="flex gap-2">
            <Link href="/">
              <a className="hover:text-blue-400">Home</a>
            </Link>
            <Link href="/dashboard">
              <a className="hover:text-blue-400">Dashboard</a>
            </Link>
          </nav>
          |
          <button className="flex items-center">
            Light
            <SunIcon className="ml-1 h-5 w-5 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
