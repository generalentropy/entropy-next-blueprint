"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent reading the theme until the component is mounted (CSR only)
  useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-pressed={isDark}
        aria-label="Toggle theme"
        className="bg-background/60 supports-[backdrop-filter]:bg-background/40 cursor-pointer rounded-full border backdrop-blur transition will-change-transform hover:scale-105"
      >
        <AnimatePresence initial={false} mode="wait">
          {isDark ? (
            <motion.span
              key="moon"
              initial={{ rotate: 90, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <Moon className="h-5 w-5" />
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ rotate: -90, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <Sun className="h-5 w-5" />
            </motion.span>
          )}
        </AnimatePresence>
      </Button>
    </div>
  );
}
