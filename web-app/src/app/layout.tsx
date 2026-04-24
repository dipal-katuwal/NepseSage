import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "NEPSE Sage AI — Clinical Analyst",
  description: "Clinical precision analysis for Nepal Stock Exchange investors",
  authors: [{ name: "NEPSE Sage AI" }],
  openGraph: {
    title: "NEPSE Sage AI",
    description: "Clinical precision analysis for NEPSE investors",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
