"use client";
import React from "react";
import Link from "next/link";
import { SignedOut, UserButton, SignedIn, useSession } from "@clerk/nextjs";
import { checkUserRole } from "../utils/userUtils";

const Navbar = () => {
  const { session } = useSession();
  const userRole = checkUserRole(session);

  const links = [
    { title: "Profile", url: "/profile" },
    { title: "Dashboard", url: "/user" },
    { title: "Admin Dashboard", url: "/admin", role: "admin" },
    // Add more placeholder links as needed
  ];

  return (
    <header className="body-font bg-white text-gray-600 shadow dark:bg-slate-900 dark:text-gray-300">
      <div className="container mx-auto flex flex-col flex-wrap items-center justify-between p-5 md:flex-row">
        <div className="flex items-center">
          <a
            href="/"
            className="title-font flex items-center font-medium text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="24px"
              height="24px"
              strokeWidth="6"
              viewBox="0 0 1024 1024"
              className="h-10 w-10 bg-indigo-500 rounded-full p-2 dark:text-white"
            >
              <path d="M106.544 501.695l385.403-380.262c11.913-11.754 31.079-11.722 42.955.075l382.71 380.14c8.025 7.971 20.992 7.927 28.963-.098s7.927-20.992-.098-28.963l-382.71-380.14c-27.811-27.625-72.687-27.7-100.589-.171L77.775 472.539c-8.051 7.944-8.139 20.911-.194 28.962s20.911 8.139 28.962.194z" />
              <path d="M783.464 362.551v517.12c0 16.962-13.758 30.72-30.72 30.72h-481.28c-16.962 0-30.72-13.758-30.72-30.72v-517.12c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48v517.12c0 39.583 32.097 71.68 71.68 71.68h481.28c39.583 0 71.68-32.097 71.68-71.68v-517.12c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z" />
            </svg>

            <span className="dark:text-gray-400 ml-3 text-xl">MCP Digital</span>
          </a>
        </div>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
          <SignedIn>
            {links.map((link) =>
              (link.role === "admin" && userRole === "admin") || !link.role ? (
                <Link key={link.title} href={link.url}>
                  {/* Use a div instead of an anchor tag */}
                  <div className="mr-5 cursor-pointer hover:text-gray-900 dark:hover:text-gray-100">
                    {link.title}
                  </div>
                </Link>
              ) : null
            )}
          </SignedIn>
        </nav>
        <div className="items-center md:flex">
          <SignedOut>
            <a href="/sign-in">
              <button className="mr-4 rounded border-0 bg-indigo-500 px-4 py-2 text-base text-white hover:bg-indigo-600 focus:outline-none">
                Login
              </button>
            </a>
            <a href="/sign-up">
              <button className="rounded border-0 bg-indigo-500 px-4 py-2 text-base text-white hover:bg-indigo-600 focus:outline-none">
                Sign Up
              </button>
            </a>
          </SignedOut>
          <SignedIn>
            <div className="ml-4">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
