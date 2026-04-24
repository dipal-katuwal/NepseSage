"use client";

import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  if (pathname === "/sage-ai") return null;

  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between border-t border-border px-6 py-4 gap-4">
      <div className="flex items-center gap-2">
        <span className="font-heading text-xs font-semibold text-foreground">
          NEPSE Sage AI
        </span>
        <span className="text-xs text-muted-foreground">
          Made for Nepali Investors 🇳🇵
        </span>
      </div>
      <div className="flex items-center gap-4 md:gap-6">
        <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer">About</span>
        <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer">Privacy</span>
        <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer">Terms</span>
      </div>
    </footer>
  );
}
