"use client";

import { Trophy } from "lucide-react";
import { useState } from "react";

const topAnalysts = [
  { rank: "2nd", name: "Anish Shrestha", title: "Silver Sage", returnPct: "+42.8%", reputation: "8,940" },
  { rank: "1st", name: "Prabin Karki", title: "Master Portfolio Strategist", returnPct: "+114.2%", reputation: "24,501", isTop: true },
  { rank: "3rd", name: "Sarita Tamang", title: "Bronze Catalyst", returnPct: "+38.5%", reputation: "7,120" },
];

const rankings = [
  { rank: 4, name: "Rohan Gurung", subtitle: "Active Daily", reputation: "6,842", returnPct: "+29.4%", badges: ["Trend Seeker", "10x Win"], trend: "up" },
  { rank: 5, name: "Nisha Rai", subtitle: "Bluechip Specialist", reputation: "5,910", returnPct: "+24.1%", badges: ["Safe Hands"], trend: "down" },
  { rank: 6, name: "Deepak Malla", subtitle: "Risk Manager", reputation: "5,200", returnPct: "+18.2%", badges: ["Consistent", "Dividend Hunter"], trend: "same" },
];

export default function LeaderboardClient() {
  const [period, setPeriod] = useState("Monthly");

  return (
    <>
      {/* Podium */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
        {topAnalysts.map((a) => (
          <div key={a.name} className={`card-clinical text-center ${a.isTop ? "border-primary/40 pb-6 pt-8 order-first md:order-none" : "pb-5 pt-6"}`}>
            {a.isTop && (
              <span className="badge-bullish mb-3 inline-block">⭐ Sage Supreme</span>
            )}
            <div className={`mx-auto mb-3 flex items-center justify-center rounded-full bg-secondary ${a.isTop ? "h-16 w-16" : "h-12 w-12"}`}>
              <span className={`font-heading font-bold ${a.isTop ? "text-lg" : "text-sm"}`}>{a.name[0]}</span>
            </div>
            <h3 className={`font-heading font-bold ${a.isTop ? "text-lg" : "text-sm"}`}>{a.name}</h3>
            <p className="text-xs text-primary font-medium">{a.title}</p>
            <div className="mt-3 flex justify-center gap-6">
              <div>
                <p className="clinical-label">Total Return</p>
                <span className="positive font-heading text-sm font-bold">{a.returnPct}</span>
              </div>
              <div>
                <p className="clinical-label">Reputation</p>
                <span className="font-heading text-sm font-bold">{a.reputation}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ranking Directory */}
      <div className="card-clinical overflow-hidden">
        <div className="mb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="font-heading text-lg font-bold">Ranking Directory</h2>
            <p className="text-xs text-muted-foreground">Based on clinical analysis and market performance data.</p>
          </div>
          <div className="flex flex-wrap gap-1">
            {["Weekly", "Monthly", "All-Time"].map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`rounded-md px-4 py-1.5 text-xs font-medium transition ${period === p ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"}`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-border">
                <th className="clinical-label pb-3 text-left">Rank</th>
                <th className="clinical-label pb-3 text-left">Analyst</th>
                <th className="clinical-label pb-3 text-right">Reputation</th>
                <th className="clinical-label pb-3 text-right">% Return</th>
                <th className="clinical-label pb-3 text-left pl-6">Achievements</th>
              </tr>
            </thead>
            <tbody>
              {rankings.map((r) => (
                <tr key={r.rank} className="border-b border-border/50">
                  <td className="py-4">
                    <span className="font-heading text-lg font-bold">{String(r.rank).padStart(2, "0")}</span>
                    <span className={`ml-1 text-xs ${r.trend === "up" ? "positive" : r.trend === "down" ? "negative" : "text-muted-foreground"}`}>
                      {r.trend === "up" ? "↑" : r.trend === "down" ? "↓" : "—"}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold">{r.name[0]}</div>
                      <div>
                        <span className="text-sm font-semibold">{r.name}</span>
                        <p className="text-xs text-muted-foreground">{r.subtitle}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-right text-sm">{r.reputation}</td>
                  <td className="py-4 text-right text-sm font-semibold positive">{r.returnPct}</td>
                  <td className="py-4 pl-6">
                    <div className="flex gap-2">
                      {r.badges.map((b) => (
                        <span key={b} className="badge-bullish">{b}</span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="mt-4 w-full text-center text-sm text-muted-foreground hover:text-foreground">
          View Complete Rankings ↓
        </button>
      </div>

      {/* Bottom Row */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card-clinical">
          <h3 className="font-heading text-lg font-bold">Analyst Comparison</h3>
          <p className="text-xs text-muted-foreground mb-4">Compare your metrics against top performers.</p>
          {["Profitability Factor", "Accuracy Rate", "Risk-Adjusted Return"].map((metric) => (
            <div key={metric} className="mb-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-1">
                <span className="clinical-label">{metric}</span>
                <span className="text-xs text-muted-foreground">You vs Prabin Karki</span>
              </div>
              <div className="flex gap-1 h-2">
                <div className="rounded-full bg-primary" style={{ width: `${40 + Math.random() * 30}%` }} />
                <div className="rounded-full bg-primary/40" style={{ width: `${20 + Math.random() * 20}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="card-clinical text-center">
          <p className="clinical-label">Your Current Rank</p>
          <span className="stat-value text-4xl mt-2 block">#142</span>
          <span className="positive text-sm font-semibold">↑ +12 spots this week</span>
          <div className="mt-4 rounded-md bg-secondary p-3">
            <p className="clinical-label mb-1">To Reach Top 100</p>
            <span className="text-sm font-bold">+8.4% Return needed</span>
          </div>
          <button className="mt-4 w-full rounded-md bg-primary py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition">
            Boost Your Score
          </button>
        </div>
      </div>
    </>
  );
}
