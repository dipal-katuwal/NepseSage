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
  TrendingUp,
  AlertCircle,
  Info,
  Users,
  RefreshCw,
  X,
  Check,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Command,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const notificationGroups = [
  {
    label: "AI Insights",
    icon: TrendingUp,
    items: [
      {
        id: 1,
        title: "Unusual Volume detected in HDL",
        desc: "Himalayan Distillery is showing a 300% increase in volume relative to its 20-day average. Potential trend reversal imminent.",
        time: "2m ago",
        unread: true,
        actions: ["Analyze Symbol", "Dismiss"],
      },
    ],
  },
  {
    label: "Market Alerts",
    icon: AlertCircle,
    items: [
      {
        id: 2,
        title: "Price Alert: NICA reached Rs. 750",
        desc: "Your alert for NIC Asia Bank has been triggered. Target price hit at 13:42:00.",
        time: "14m ago",
        unread: true,
        actions: [],
      },
      {
        id: 3,
        title: "Quarterly Report: SHL",
        desc: "Soaltee Hotel Limited has published its Q1 report. Net profit increased by 12% YoY.",
        time: "2h ago",
        unread: false,
        actions: [],
      },
    ],
  },
  {
    label: "Community",
    icon: Users,
    items: [
      {
        id: 4,
        title: "Binod K. mentioned you in a comment",
        desc: '"I think your analysis on the banking sector bull run is spot on. What do you think about ADBL?"',
        time: "5h ago",
        unread: false,
        actions: [],
        avatar: "BK",
      },
    ],
  },
  {
    label: "System Updates",
    icon: RefreshCw,
    items: [
      {
        id: 5,
        title: "New Feature: Simulator V2",
        desc: "The trading simulator now supports real-time market depth and stop-loss orders.",
        time: "Yesterday",
        unread: false,
        actions: [],
      },
    ],
  },
];

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
  const { isAuthenticated, user, logout } = useAuth();

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
            
            const isGated = ["/journal", "/sage-ai", "/simulator", "/settings"].includes(item.to);
            const showLock = isGated && !isAuthenticated;

            return (
              <SidebarMenuItem key={item.to}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  tooltip={item.label}
                  className={`nav-item ${isActive ? "nav-item-active" : ""} border-none h-10`}
                >
                  <Link href={item.to} className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <item.icon className="h-4 w-4 shrink-0" />
                      <span>{item.label}</span>
                    </div>
                    {showLock && <Lock className="h-3 w-3 text-muted-foreground/50" />}
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
            <p className="clinical-label mb-2">{isAuthenticated ? "Sage Insight" : "Pro Account"}</p>
            <Button variant="clinical" size="sm" className="w-full">
              <Zap className="mr-1.5 h-3 w-3" />
              {isAuthenticated ? "Upgrade Plan" : "Upgrade to Pro"}
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
          {isAuthenticated && (
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Sign Out" onClick={logout} className="nav-item border-none h-10">
                <LogOut className="h-4 w-4 shrink-0" />
                <span>Sign Out</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const { isAuthenticated, user, logout } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const router = useRouter();

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpenSearch((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
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
              <div className="relative flex items-center">
                <Popover open={openSearch} onOpenChange={setOpenSearch}>
                  <PopoverTrigger asChild>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search Symbols..."
                        className="h-8 w-40 md:w-72 rounded-md border border-border bg-input pl-9 pr-9 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                        onFocus={() => setOpenSearch(true)}
                      />
                      <kbd className="absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none inline-flex h-4 select-none items-center gap-1 rounded border border-border bg-muted px-1 font-mono text-[9px] font-medium text-muted-foreground opacity-100">
                        <span>⌘K</span>
                      </kbd>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-40 md:w-72 p-0"
                    align="start"
                    onOpenAutoFocus={(e) => e.preventDefault()}
                  >
                    <Command>
                      <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Stocks">
                          <CommandItem onSelect={() => setOpenSearch(false)}>
                            <LineChart className="mr-2 h-4 w-4" /> NICA
                            <span className="ml-auto text-xs text-muted-foreground">Commercial Banks</span>
                          </CommandItem>
                          <CommandItem onSelect={() => setOpenSearch(false)}>
                            <LineChart className="mr-2 h-4 w-4" /> NABIL
                            <span className="ml-auto text-xs text-muted-foreground">Commercial Banks</span>
                          </CommandItem>
                          <CommandItem onSelect={() => setOpenSearch(false)}>
                            <LineChart className="mr-2 h-4 w-4" /> SHL
                            <span className="ml-auto text-xs text-muted-foreground">Hotels</span>
                          </CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading="Shortcuts">
                          <CommandItem onSelect={() => setOpenSearch(false)}>
                            <LayoutDashboard className="mr-2 h-4 w-4" />
                            <span>Dashboard</span>
                          </CommandItem>
                          <CommandItem onSelect={() => setOpenSearch(false)}>
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Settings</span>
                          </CommandItem>
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
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
                {isAuthenticated && (
                  <Button variant="ghost" size="icon" className="text-muted-foreground h-8 w-8" asChild>
                    <Sheet modal={false}>
                      <SheetTrigger asChild>
                        <button className="relative h-8 w-8 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
                          <Bell className="h-4 w-4" />
                          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[9px] font-bold flex items-center justify-center leading-none">
                            4
                          </span>
                        </button>
                      </SheetTrigger>
                      <SheetContent side="right" className="w-full sm:w-[420px] p-0 flex flex-col gap-0">
                        {/* Header */}
                        <SheetHeader className="flex flex-row items-center justify-between px-5 py-4 border-b border-border shrink-0">
                          <div className="flex items-center gap-3">
                            <SheetTitle className="text-base font-bold font-heading">Notifications</SheetTitle>
                            <Badge variant="secondary" className="text-[10px] font-bold text-primary bg-primary/10 border-0 px-2 py-0.5 rounded-full">
                              4 NEW
                            </Badge>
                          </div>

                        </SheetHeader>

                        {/* Scrollable content */}
                        <div className="flex-1 overflow-y-auto">
                          {notificationGroups.map((group) => (
                            <div key={group.label}>
                              {/* Group label */}
                              <div className="flex items-center gap-2 px-5 py-3 border-b border-border/50 bg-muted/30">
                                <group.icon className="h-3.5 w-3.5 text-muted-foreground" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                                  {group.label}
                                </span>
                              </div>
                              {/* Notification items */}
                              {group.items.map((item) => (
                                <div
                                  key={item.id}
                                  className={`px-5 py-4 border-b border-border/40 transition-colors hover:bg-muted/20 ${item.unread ? "bg-primary/5" : ""
                                    }`}
                                >
                                  <div className="flex items-start gap-3">
                                    {/* Avatar or icon */}
                                    {"avatar" in item && item.avatar ? (
                                      <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-[10px] font-bold text-primary">
                                        {item.avatar}
                                      </div>
                                    ) : (
                                      <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${item.unread ? "bg-primary/15" : "bg-muted"
                                        }`}>
                                        {item.unread
                                          ? <Bell className="h-3.5 w-3.5 text-primary" />
                                          : <Info className="h-3.5 w-3.5 text-muted-foreground" />}
                                      </div>
                                    )}
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-start justify-between gap-2">
                                        <p className={`text-sm leading-snug ${item.unread ? "font-semibold text-foreground" : "font-medium text-foreground/80"
                                          }`}>
                                          {item.title}
                                        </p>
                                        <span className="text-[10px] text-muted-foreground shrink-0 mt-0.5">{item.time}</span>
                                      </div>
                                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                                      {item.actions.length > 0 && (
                                        <div className="flex items-center gap-2 mt-3">
                                          <button className="text-xs font-semibold px-3 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                                            {item.actions[0]}
                                          </button>
                                          {item.actions[1] && (
                                            <button className="text-xs font-medium px-3 py-1.5 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                                              {item.actions[1]}
                                            </button>
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>

                        {/* Footer */}
                        <div className="shrink-0 border-t border-border p-4">
                          <button className="w-full py-2.5 text-sm font-medium text-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                            View All Notifications
                          </button>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="text-muted-foreground h-8 w-8"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>

                {isAuthenticated ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="relative h-8 w-8 rounded-full ml-1 border border-primary/20 p-0">
                        <Avatar className="h-8 w-8 transition-transform hover:scale-105">
                          <AvatarFallback className="bg-primary/10 text-[10px] font-bold text-primary">
                            {user?.avatarInitials || "U"}
                          </AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                      <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-bold leading-none font-heading">{user?.name}</p>
                          <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem onClick={() => router.push("/settings")}>
                          <Users className="mr-2 h-4 w-4" />
                          <span>My Profile</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => router.push("/settings")}>
                          <Settings className="mr-2 h-4 w-4" />
                          <span>Settings</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Zap className="mr-2 h-4 w-4 text-primary" />
                          <span className="text-primary font-semibold">Pro Plan</span>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={logout} className="text-destructive focus:bg-destructive/10 focus:text-destructive cursor-pointer">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Sign out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <div className="flex items-center gap-2 ml-2">
                    <Link href="/login">
                      <Button variant="ghost" size="sm" className="text-xs font-semibold hover:bg-accent h-8">
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/signup">
                      <Button size="sm" className="text-xs font-bold bg-primary text-primary-foreground hover:bg-primary/90 h-8">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </header>

          <main className={`flex-1 ${pathname === "/sage-ai" ? "overflow-hidden p-0" : "overflow-y-auto p-4 md:p-6"}`}>
            {pathname === "/sage-ai" ? children : <div className="mx-auto max-w-7xl">{children}</div>}
          </main>

          {/* Footer */}
          {pathname !== "/sage-ai" && (
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
          )}
        </div>
      </div>

    </SidebarProvider>
  );
}

