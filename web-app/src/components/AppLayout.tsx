"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Sparkles,
  BookOpen,
  Bot,
  LineChart,
  Trophy,
  Settings,
  Search,
  Bell,
  Moon,
  HelpCircle,
  LogOut,
  Zap,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/" },
  { label: "Insights", icon: Sparkles, to: "/insights" },
  { label: "Journal", icon: BookOpen, to: "/journal" },
  { label: "Sage AI", icon: Bot, to: "/sage-ai" },
  { label: "Simulator", icon: LineChart, to: "/simulator" },
  { label: "Leaderboard", icon: Trophy, to: "/leaderboard" },
  { label: "Settings", icon: Settings, to: "/settings" },
];

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 flex h-screen w-52 flex-col border-r border-border bg-sidebar">
        <div className="px-5 py-5">
          <h1 className="font-heading text-lg font-bold text-primary">
            NEPSE Sage
          </h1>
          <p className="clinical-label mt-0.5" style={{ fontSize: "0.6rem" }}>
            Clinical Analyst
          </p>
        </div>

        <nav className="flex-1 space-y-0.5 px-3 py-2">
          {navItems.map((item) => {
            const isActive =
              pathname === item.to ||
              (item.to !== "/" && pathname.startsWith(item.to));
            return (
              <Link
                key={item.to}
                href={item.to}
                className={`nav-item ${isActive ? "nav-item-active" : ""}`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="px-3 pb-3">
          <div className="card-clinical mb-3 p-3">
            <p className="clinical-label mb-2">Pro Account</p>
            <button className="w-full rounded-md bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              <Zap className="mr-1.5 inline h-3 w-3" />
              Upgrade to Pro
            </button>
          </div>
          <button className="nav-item w-full">
            <HelpCircle className="h-4 w-4" />
            <span>Support</span>
          </button>
          <button className="nav-item w-full">
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="ml-52 flex flex-1 flex-col">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-border bg-background/80 px-6 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <span className="font-heading text-sm font-semibold text-muted-foreground">
              NEPSE Sage AI
            </span>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search Symbols, News, Analysis..."
                className="h-8 w-72 rounded-md border border-border bg-input pl-9 pr-3 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className={`rounded px-3 py-1.5 text-xs font-medium transition hover:text-foreground ${pathname === "/" ? "text-primary" : "text-muted-foreground"}`}
            >
              Market
            </Link>
            <span className="rounded px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:text-foreground cursor-pointer">
              Sectors
            </span>
            <Link
              href="/insights"
              className={`rounded px-3 py-1.5 text-xs font-medium transition hover:text-foreground ${pathname === "/insights" ? "text-primary underline underline-offset-4" : "text-muted-foreground"}`}
            >
              Analysis
            </Link>
            <div className="ml-4 flex items-center gap-3">
              <button className="text-muted-foreground hover:text-foreground">
                <Bell className="h-4 w-4" />
              </button>
              <button className="text-muted-foreground hover:text-foreground">
                <Moon className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-foreground">
                  A
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6">{children}</main>

        {/* Footer */}
        <footer className="flex items-center justify-between border-t border-border px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="font-heading text-xs font-semibold text-foreground">
              NEPSE Sage AI
            </span>
            <span className="text-xs text-muted-foreground">
              Made for Nepali Investors 🇳🇵
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer">About</span>
            <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer">Privacy</span>
            <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer">Terms</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

