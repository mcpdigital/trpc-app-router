"use client";

import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LinkGenerator from "./LinkGenerator";
import NestedLinkGenerator from "./NestedLinkGenerator";

type NavLink = {
  title: string;
  url: string;
  role: string;
};
type NestedLink = {
  title: string;
  navlinks: NavLink[];
  role: string;
};

type MobileNavProps = {
  navlinks: NavLink[];
  nestedlinks: NestedLink[];
  userRole: string;
};

const MobileNav = ({ navlinks, nestedlinks, userRole }: MobileNavProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  console.log("MobileNav", navlinks);
  const toggleOpen = () => setOpen((prev) => !prev);

  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) toggleOpen();
  }, [pathname]);

  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      toggleOpen();
    }
  };

  return (
    <div className="md:hidden ">
      <Menu
        onClick={toggleOpen}
        className=" z-20 absolute h-6 w-6 hover:text-zinc-200 text-zinc-700 dark:text-slate-400 dark:hover:text-slate-200"
      />

      {isOpen ? (
        <div className=" z-10 fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 w-full">
          <ul className="absolute bg-white border-b dar:text-slate-200 dark:bg-slate-900  border-zinc-200 shadow-xl grid w-full gap-3 px-10 pt-20 pb-8">
            {!userRole ? (
              <>
                <LinkGenerator navlinks={navlinks} userRole={userRole} />
                <NestedLinkGenerator groups={nestedlinks} userRole={userRole} />
              </>
            ) : (
              <>
                <LinkGenerator navlinks={navlinks} userRole={userRole} />
                <NestedLinkGenerator groups={nestedlinks} userRole={userRole} />
              </>
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default MobileNav;
