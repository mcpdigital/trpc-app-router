"use client";
import React from "react";
import Link from "next/link";
import { SignedOut, UserButton, SignedIn, useSession } from "@clerk/nextjs";
import { checkUserRole } from "../utils/userUtils";
import { GRAD_GOTHAN_TB, GRAD_GUNMETAL } from "@/tw_gradients";
import { ModeToggle } from "@/components/appui/ModeToggle";
import ThemeSwitcher from "@/components/appui/ThemeSwitcher";
import MobileNav from "./MobileNav";
import { Menu } from "lucide-react";
import { navlinks, groupedLinks } from "@/constants/links";
const Navbar = () => {
  const { session } = useSession();
  const userRole = checkUserRole(session);
  const theuser = session?.user;
  console.log("User", theuser?.firstName, theuser?.lastName, userRole);
  return (
    <header
      className={
        "bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600  body-font  text-gray-300 shadow bg-slate-400 dark:text-gray-300  dark:bg-gradient-to-b dark:from-gray-800 dark:via-gray-900 dark:to-black "
      }
    >
      <div className=" container md:mx-auto flex text-gray-900 dark:text-gray-200 flex-wrap md:items-center justify-between p-5 md:flex-wrap md:items-left md:justify-between md:p-5 md:flex-row">
        <div className="md:flex md:items-center">
          <a
            href="/"
            className="title-font flex items-center font-medium text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="24px"
              height="24px"
              strokeWidth="6"
              viewBox="0 0 24 24"
              className="h-10 w-10 bg-indigo-500 rounded-full p-2 dark:text-white"
            >
              <path
                d="M19.3697 4.89109L13.5097 2.28109C12.6497 1.90109 11.3497 1.90109 10.4897 2.28109L4.62969 4.89109C3.14969 5.55109 2.92969 6.45109 2.92969 6.93109C2.92969 7.41109 3.14969 8.31109 4.62969 8.97109L10.4897 11.5811C10.9197 11.7711 11.4597 11.8711 11.9997 11.8711C12.5397 11.8711 13.0797 11.7711 13.5097 11.5811L19.3697 8.97109C20.8497 8.31109 21.0697 7.41109 21.0697 6.93109C21.0697 6.45109 20.8597 5.55109 19.3697 4.89109Z"
                fill=" #333377"
              />

              <path
                d="M12.0003 17.04C11.6203 17.04 11.2403 16.96 10.8903 16.81L4.15031 13.81C3.12031 13.35 2.32031 12.12 2.32031 10.99C2.32031 10.58 2.65031 10.25 3.06031 10.25C3.47031 10.25 3.80031 10.58 3.80031 10.99C3.80031 11.53 4.25031 12.23 4.75031 12.45L11.4903 15.45C11.8103 15.59 12.1803 15.59 12.5003 15.45L19.2403 12.45C19.7403 12.23 20.1903 11.54 20.1903 10.99C20.1903 10.58 20.5203 10.25 20.9303 10.25C21.3403 10.25 21.6703 10.58 21.6703 10.99C21.6703 12.11 20.8703 13.35 19.8403 13.81L13.1003 16.81C12.7603 16.96 12.3803 17.04 12.0003 17.04Z"
                fill="#333377"
              />

              <path
                d="M12.0003 22.0009C11.6203 22.0009 11.2403 21.9209 10.8903 21.7709L4.15031 18.7709C3.04031 18.2809 2.32031 17.1709 2.32031 15.9509C2.32031 15.5409 2.65031 15.2109 3.06031 15.2109C3.47031 15.2109 3.80031 15.5409 3.80031 15.9509C3.80031 16.5809 4.17031 17.1509 4.75031 17.4109L11.4903 20.4109C11.8103 20.5509 12.1803 20.5509 12.5003 20.4109L19.2403 17.4109C19.8103 17.1609 20.1903 16.5809 20.1903 15.9509C20.1903 15.5409 20.5203 15.2109 20.9303 15.2109C21.3403 15.2109 21.6703 15.5409 21.6703 15.9509C21.6703 17.1709 20.9503 18.2709 19.8403 18.7709L13.1003 21.7709C12.7603 21.9209 12.3803 22.0009 12.0003 22.0009Z"
                fill="#333377"
              />
            </svg>

            <span className="dark:text-gray-400 text-gray-700 ml-3 text-xl">
              MCP Digital
            </span>
          </a>
        </div>

        <nav
          id="nav"
          className=" z-10 flex-col md:flex-row  md:items-start text-base md:ml-auto md:mr-auto hidden md:flex "
        >
          {navlinks.map(
            (link) =>
              (link.role.includes(userRole) ||
                userRole?.includes("org:admin") ||
                !link.role.length) && (
                <Link key={link.title} href={link.url}>
                  {/* Use a div instead of an anchor tag */}
                  <div className=" mr-5 cursor-pointer  dark:hover:text-gray-100 hover:text-gray-100">
                    {link.title}
                  </div>
                </Link>
              )
          )}
          {groupedLinks.map(
            (group) =>
              group.navlinks.some(
                (link) =>
                  link.role.includes(userRole) ||
                  (link.role.includes("org:member") &&
                    userRole?.includes("org:ai")) ||
                  userRole?.includes("org:admin") ||
                  !link.role.length
              ) && (
                <div key={group.title} className="relative group">
                  <p className="mr-5 cursor-pointer hover:text-gray-100 dark:hover:text-gray-100">
                    {group.title}
                  </p>
                  <ul className="absolute hidden w-[160px] mt--1 text-sm space-y-2 bg-gray-800 rounded-md shadow-lg dark:bg-gray-800 dark:text-gray-300 text-gray-300 group-hover:block ">
                    {group.navlinks.map(
                      (link) =>
                        (link.role.includes(userRole) ||
                          (link.role.includes("org:member") &&
                            userRole.includes("org:ai")) ||
                          userRole?.includes("org:admin") ||
                          !link.role.length) && (
                          <li
                            key={link.title}
                            className="px-4 py-2  dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-200 dark:text-gray-200 rounded-md "
                          >
                            <Link
                              className="hover:text-blue-400 text-gray-200 dark:hover:text-gray-100 w-full h-full transition duration-150 ease-in-out rounded-md dark:text-gray-300"
                              href={link.url}
                            >
                              {link.title}
                            </Link>
                          </li>
                        )
                    )}
                  </ul>
                </div>
              )
          )}
        </nav>
        <div className="items-center  md:flex">
          <div className="hidden md:flex">
            <ModeToggle />

            <SignedOut>
              <a href="/sign-in">
                <button className="mx-4 w-[90px] rounded border-0 bg-indigo-500 px-4 py-2 text-base text-white hover:bg-indigo-600 focus:outline-none">
                  Login
                </button>
              </a>
              <a href="/sign-up">
                <button className="w-[90px] rounded border-0 bg-indigo-500 px-4 py-2 text-base text-white hover:bg-indigo-600 focus:outline-none">
                  Sign Up
                </button>
              </a>
            </SignedOut>
          </div>

          <SignedIn>
            <div className="md:mr-4 md:ml-2 mr-8 md:flex flex-col hidden items-center text-[10px]">
              <UserButton afterSignOutUrl="/" />
              <p className="mt-1">{userRole}</p>
            </div>
          </SignedIn>
          {/* Hamburger Menu */}
          <div className=" md:hidden mr-6">
            <MobileNav
              navlinks={navlinks}
              nestedlinks={groupedLinks}
              userRole={userRole}
            />
            {/* <path d="M4 6h16M4 12h16m-7 6h7"></path> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
