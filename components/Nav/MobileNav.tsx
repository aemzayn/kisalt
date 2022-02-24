import clsx from "clsx";
import NavLink from "components/Header/NavLink";

export type MobileNavProps = {
  isOpen: boolean;
  setHeader(status: boolean): void;
};

export default function MobileNav({ isOpen, setHeader }: MobileNavProps) {
  const closeHeader = () => setHeader(false);
  return (
    <nav
      className={clsx(
        "items-left absolute w-full flex-col border-t border-gray-300  bg-white lg:hidden",
        isOpen ? "flex" : "hidden"
      )}
    >
      <div className="mobile-nav-item" onClick={closeHeader}>
        <NavLink href="/">About</NavLink>
      </div>
      <div className="mobile-nav-item" onClick={closeHeader}>
        <NavLink href="/">How it works</NavLink>
      </div>
      <div className="mobile-nav-item" onClick={closeHeader}>
        <NavLink href="/register">Sign up</NavLink>
      </div>
    </nav>
  );
}
