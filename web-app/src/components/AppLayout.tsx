"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
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
  Sun,
  HelpCircle,
  LogOut,
  Zap,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
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
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar Desktop */}
      <aside
        className={`fixed left-0 top-0 z-40 hidden h-screen flex-col border-r border-border bg-sidebar transition-all duration-300 lg:flex ${
          isCollapsed ? "w-16" : "w-52"
        }`}
      >
        <div className={`flex items-center px-5 py-5 ${isCollapsed ? "justify-center" : "justify-between"}`}>
          {!isCollapsed && (
            <div>
              <h1 className="font-heading text-lg font-bold text-primary">
                NEPSE Sage
              </h1>
              <p className="clinical-label mt-0.5" style={{ fontSize: "0.6rem" }}>
                Clinical Analyst
              </p>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="rounded-md p-1 hover:bg-sidebar-accent text-sidebar-foreground"
          >
            {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
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
                className={`nav-item ${isActive ? "nav-item-active" : ""} ${
                  isCollapsed ? "justify-center px-2" : ""
                }`}
                title={isCollapsed ? item.label : ""}
              >
                <item.icon className="h-4 w-4 shrink-0" />
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="px-3 pb-3">
          {!isCollapsed && (
            <div className="card-clinical mb-3 p-3">
              <p className="clinical-label mb-2">Pro Account</p>
              <button className="w-full rounded-md bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                <Zap className="mr-1.5 inline h-3 w-3" />
                Upgrade to Pro
              </button>
            </div>
          )}
          <button className={`nav-item w-full ${isCollapsed ? "justify-center px-2" : ""}`} title={isCollapsed ? "Support" : ""}>
            <HelpCircle className="h-4 w-4 shrink-0" />
            {!isCollapsed && <span>Support</span>}
          </button>
          <button className={`nav-item w-full ${isCollapsed ? "justify-center px-2" : ""}`} title={isCollapsed ? "Sign Out" : ""}>
            <LogOut className="h-4 w-4 shrink-0" />
            {!isCollapsed && <span>Sign Out</span>}
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-border bg-sidebar transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <div>
            <h1 className="font-heading text-lg font-bold text-primary">
              NEPSE Sage
            </h1>
            <p className="clinical-label mt-0.5" style={{ fontSize: "0.6rem" }}>
              Clinical Analyst
            </p>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="rounded-md p-1 hover:bg-sidebar-accent text-sidebar-foreground"
          >
            <X size={20} />
          </button>
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
                onClick={() => setIsMobileMenuOpen(false)}
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

      {/* Main Content Area */}
      <div
        className={`flex flex-1 flex-col transition-all duration-300 ${
          isCollapsed ? "lg:ml-16" : "lg:ml-52"
        }`}
      >
        {/* Top Bar */}
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-border bg-background/80 px-4 md:px-6 backdrop-blur-sm">
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden rounded-md p-1.5 hover:bg-secondary text-muted-foreground"
            >
              <Menu size={20} />
            </button>
            <span className="hidden font-heading text-sm font-semibold text-muted-foreground sm:inline-block">
              NEPSE Sage AI
            </span>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search Symbols..."
                className="h-8 w-40 md:w-72 rounded-md border border-border bg-input pl-9 pr-3 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <nav className="hidden items-center gap-1 md:flex">
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
            </nav>
            <div className="ml-2 flex items-center gap-2 md:gap-3">
              <button className="text-muted-foreground hover:text-foreground p-1.5">
                <Bell className="h-4 w-4" />
              </button>
              <button
                onClick={toggleTheme}
                className="text-muted-foreground hover:text-foreground p-1.5 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-foreground">
                  A
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6">{children}</main>

        {/* Footer */}
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
      </div>
    </div>
  );
}

