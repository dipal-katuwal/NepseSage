import type { Metadata } from "next";
import JournalClient from "./JournalClient";

export const metadata: Metadata = {
  title: "Behavior Lab — NEPSE Sage AI",
  description: "Analyze the psychology behind your trades",
};

export default function JournalPage() {
  return <JournalClient />;
}
