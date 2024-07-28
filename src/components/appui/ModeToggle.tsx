"use client";

import React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"; // Importing icons from Radix UI
import { useTheme } from "next-themes"; // Importing the theme context from Next.js
import { Button } from "@/components/ui/button"; // Importing the Button component

export function ModeToggle() {
  const { theme, setTheme } = useTheme(); // Accessing the current theme and setTheme function from the context

  // Toggle the theme between light and dark
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      onClick={toggleTheme} // Calling the toggle function on click
      className="dark:bg-slate-800/5 hover:bg-gray-700/20 dark:hover:bg-slate-800 rounded-full bg-slate-600/5"
      size="icon"
    >
      {theme === "dark" ? (
        <SunIcon className="h-[1.2rem] w-[1.2rem]" /> // Show the Sun icon if the theme is dark
      ) : (
        <MoonIcon className="h-[1.2rem] w-[1.2rem]" /> // Show the Moon icon if the theme is light
      )}
      <span className="sr-only">Toggle theme</span>{" "}
      {/* Screen reader accessibility */}
    </Button>
  );
}
