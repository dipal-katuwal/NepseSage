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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/" },
  { label: "Insights", icon: Sparkles, to: "/insights" },
  { label: "Journal", icon: BookOpen, to: "/journal" },
  { label: "Sage AI", icon: Bot, to: "/sage-ai" },
  { label: "Simulator", icon: LineChart, to: "/simulator" },
  { label: "Leaderboard", icon: Trophy, to: "/leaderboard" },
  { label: "Settings", icon: Settings, to: "/settings" },
];

function AppSidebar() {
  const pathname = usePathname();
  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon" className="border-r border-border bg-sidebar">
      <SidebarHeader className="h-16 flex flex-row items-center justify-between px-4">
        {state === "expanded" && (
          <div className="flex flex-col">
            <h1 className="font-heading text-lg font-bold text-primary">
              NEPSE Sage
            </h1>
            <p className="clinical-label mt-0.5" style={{ fontSize: "0.6rem" }}>
              Clinical Analyst
            </p>
          </div>
        )}
        <SidebarTrigger className="ml-auto" />
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarMenu>
          {navItems.map((item) => {
            const isActive =
              pathname === item.to ||
              (item.to !== "/" && pathname.startsWith(item.to));
            return (
              <SidebarMenuItem key={item.to}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  tooltip={item.label}
                  className={`nav-item ${isActive ? "nav-item-active" : ""} border-none h-10`}
                >
                  <Link href={item.to}>
                    <item.icon className="h-4 w-4 shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-2">
        {state === "expanded" && (
          <div className="card-clinical mb-3 p-3">
            <p className="clinical-label mb-2">Pro Account</p>
            <Button variant="clinical" size="sm" className="w-full">
              <Zap className="mr-1.5 h-3 w-3" />
              Upgrade to Pro
            </Button>
          </div>
        )}
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Support" className="nav-item border-none h-10">
              <HelpCircle className="h-4 w-4 shrink-0" />
              <span>Support</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Sign Out" className="nav-item border-none h-10">
              <LogOut className="h-4 w-4 shrink-0" />
              <span>Sign Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

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
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />

        {/* Main Content Area */}
        <div className="flex flex-1 flex-col min-w-0">
          {/* Top Bar */}
          <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-border bg-background/80 px-4 md:px-6 backdrop-blur-sm">
            <div className="flex items-center gap-2 md:gap-4">
              <SidebarTrigger className="lg:hidden" />
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
                <Button variant="ghost" size="icon" className="text-muted-foreground h-8 w-8">
                  <Bell className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="text-muted-foreground h-8 w-8"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
                <div className="ml-1 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <span className="text-[10px] font-bold text-primary">JD</span>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <div className="mx-auto max-w-7xl">{children}</div>
          </main>

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
    </SidebarProvider>
  );
}

