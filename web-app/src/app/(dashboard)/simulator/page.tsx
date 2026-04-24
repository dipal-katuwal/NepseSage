import type { Metadata } from "next";
import SimulatorClient from "./SimulatorClient";

export const metadata: Metadata = {
  title: "Simulator — NEPSE Sage AI",
  description: "Practice trading with virtual portfolio",
};

export default function SimulatorPage() {
  return <SimulatorClient />;
}
