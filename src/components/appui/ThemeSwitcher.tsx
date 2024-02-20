"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="pr-4 flex gap-2">
      {theme === "light" ? (
        <span role="img" aria-label="sun">
          ☀️
        </span>
      ) : (
        <span role="img" aria-label="moon">
          🌙
        </span>
      )}

      <Switch
        checked={theme === "light"}
        onCheckedChange={() => setTheme(theme === "light" ? "dark" : "light")}
        className="relative md:mt-1 mt-0 md:mb-0 h-5  rounded-full w-10 dark:bg-gray-600 bg-gray-400 transition duration-150 ease-in-out   "
      />
    </div>
  );
};

export default ThemeSwitcher;
