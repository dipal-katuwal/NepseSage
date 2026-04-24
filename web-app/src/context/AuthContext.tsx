"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  avatarInitials: string;
  plan: "free" | "pro";
  joinedAt: string;
  onboarded: boolean;
  profile?: {
    experience: "beginner" | "intermediate" | "expert";
    sectors: string[];
    watchlist: string[];
  };
}

interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signup: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  completeOnboarding: (profile: AuthUser["profile"]) => void;
  updateUser: (updates: Partial<AuthUser>) => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

const STORAGE_KEY = "nepsesage_auth";
const USERS_KEY = "nepsesage_users";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function loadUsers(): Record<string, { passwordHash: string; user: AuthUser }> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveUsers(users: Record<string, { passwordHash: string; user: AuthUser }>) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function loadSession(): AuthUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveSession(user: AuthUser | null) {
  if (user) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const session = loadSession();
    setUser(session);
    setIsLoading(false);
  }, []);

  const login = useCallback(
    async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
      await new Promise((r) => setTimeout(r, 600)); // Simulate network
      const users = loadUsers();
      const entry = users[email.toLowerCase()];
      if (!entry) {
        return { success: false, error: "No account found with this email." };
      }
      // Simple hash check (in prod, use bcrypt on server)
      if (entry.passwordHash !== btoa(password)) {
        return { success: false, error: "Incorrect password." };
      }
      saveSession(entry.user);
      setUser(entry.user);
      return { success: true };
    },
    []
  );

  const signup = useCallback(
    async (name: string, email: string, password: string): Promise<{ success: boolean; error?: string }> => {
      await new Promise((r) => setTimeout(r, 700)); // Simulate network
      const users = loadUsers();
      if (users[email.toLowerCase()]) {
        return { success: false, error: "An account with this email already exists." };
      }
      const newUser: AuthUser = {
        id: crypto.randomUUID(),
        name: name.trim(),
        email: email.toLowerCase().trim(),
        avatarInitials: getInitials(name),
        plan: "free",
        joinedAt: new Date().toISOString(),
        onboarded: false,
      };
      users[email.toLowerCase()] = { passwordHash: btoa(password), user: newUser };
      saveUsers(users);
      saveSession(newUser);
      setUser(newUser);
      return { success: true };
    },
    []
  );

  const logout = useCallback(() => {
    saveSession(null);
    setUser(null);
    router.push("/login");
  }, [router]);

  const completeOnboarding = useCallback(
    (profile: AuthUser["profile"]) => {
      if (!user) return;
      const updated = { ...user, onboarded: true, profile };
      // Update in users store too
      const users = loadUsers();
      if (users[user.email]) {
        users[user.email].user = updated;
        saveUsers(users);
      }
      saveSession(updated);
      setUser(updated);
    },
    [user]
  );

  const updateUser = useCallback(
    (updates: Partial<AuthUser>) => {
      if (!user) return;
      const updated = { ...user, ...updates };
      const users = loadUsers();
      if (users[user.email]) {
        users[user.email].user = updated;
        saveUsers(users);
      }
      saveSession(updated);
      setUser(updated);
    },
    [user]
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        signup,
        logout,
        completeOnboarding,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
