import type { Metadata } from "next";
import LeaderboardClient from "./LeaderboardClient";

export const metadata: Metadata = {
  title: "Leaderboard — NEPSE Sage AI",
  description: "Top analyst rankings on NEPSE Sage",
};

export default function LeaderboardPage() {
  return <LeaderboardClient />;
}
