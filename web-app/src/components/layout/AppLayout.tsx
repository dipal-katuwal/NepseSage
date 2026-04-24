"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/navigation/Sidebar";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />

        {/* Main Content Area */}
        <div className="flex flex-1 flex-col min-w-0">
          <Navbar />

          <main className={`flex-1 ${pathname === "/sage-ai" ? "overflow-hidden p-0" : "overflow-y-auto p-4 md:p-6"}`}>
            {pathname === "/sage-ai" ? children : <div className="mx-auto max-w-7xl">{children}</div>}
          </main>

          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
}
