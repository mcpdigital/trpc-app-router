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
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-10 w-10 rounded-full bg-indigo-500 p-2 text-white"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">SecureClerk</span>
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
              ) : null,
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
