"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group icon-ring w-10 h-10"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Moon className="w-[18px] h-[18px] text-glow-lavender transition-colors duration-300 group-hover:text-ink" />
      ) : (
        <Sun className="w-[18px] h-[18px] text-glow-violet transition-colors duration-300 group-hover:text-glow-pink" />
      )}
    </button>
  );
}
