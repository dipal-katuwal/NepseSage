import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  TrendingDown,
  Shield,
  AlertTriangle,
  Sparkles,
  Download,
  Filter,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const stats = [
  { label: "Portfolio Value", value: "Rs. 1,248,500", change: "+12.4%", positive: true },
  { label: "Daily P/L", value: "Rs. 14,200", change: "+1.14%", positive: true },
  { label: "Discipline Score", value: "84/100", change: null, positive: true },
  { label: "Risk Rating", value: "Moderate-High", change: null, positive: false, isWarning: true },
];

const holdings = [
  { symbol: "NICA", qty: "1,200", avgCost: "540.00", ltp: "582.40", pl: "+7.85%", value: "Rs. 698,880", positive: true },
  { symbol: "SHL", qty: "500", avgCost: "410.00", ltp: "398.20", pl: "-2.88%", value: "Rs. 199,100", positive: false },
  { symbol: "HDHPC", qty: "2,500", avgCost: "182.50", ltp: "215.00", pl: "+17.81%", value: "Rs. 537,500", positive: true },
];

const watchlist = [
  { symbol: "NTC", sector: "Telecom", price: "844.00", change: "-0.42%", positive: false },
  { symbol: "HRL", sector: "Reinsurance", price: "612.00", change: "+2.15%", positive: true },
  { symbol: "NABBC", sector: "Banking", price: "488.20", change: "+0.12%", positive: true },
  { symbol: "CHCL", sector: "Hydro", price: "214.50", change: "-1.80%", positive: false },
];

const opportunities = [
  { symbol: "UPPER", signal: "Mean Reversion", match: "94%", type: "Sage AI Signal" },
  { symbol: "CIT", signal: "Volume Breakout", match: "72%", type: "Neutral Signal" },
];

export default function DashboardPage() {
  return (
    <>
      {/* Stats Row */}
      <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="card-clinical">
            <p className="clinical-label">{s.label}</p>
            <div className="mt-2 flex items-end justify-between">
              <span className="stat-value text-xl">{s.value}</span>
              {s.change && (
                <span className={`text-sm font-semibold ${s.positive ? "positive" : "negative"}`}>
                  {s.change}
                </span>
              )}
              {s.isWarning && (
                <AlertTriangle className="h-4 w-4 text-warning" />
              )}
            </div>
            {s.label === "Discipline Score" && (
              <div className="mt-2 h-1.5 w-full rounded-full bg-secondary">
                <div className="h-1.5 rounded-full bg-primary" style={{ width: "84%" }} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - 2 cols on lg */}
        <div className="lg:col-span-2 space-y-6">
          {/* Sage Intelligence */}
          <div className="card-clinical">
            <div className="mb-3 flex items-center justify-between">
              <span className="badge-bullish flex items-center gap-1.5">
                <Sparkles className="h-3 w-3" /> Sage Intelligence
              </span>
              <span className="text-xs text-muted-foreground">Updated 4m ago</span>
            </div>
            <h2 className="font-heading text-xl font-bold text-foreground">
              Market Sentiment: Selective Accumulation
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              NEPSE shows strong support at the 2,050 level. Volume in the commercial banking
              sector is diverging positively from price action. Sage AI recommends focusing on
              high-dividend yield stocks currently trading at a 15% discount to their 200-day EMA.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button variant="clinical" size="sm">
                Execute Rebalance
              </Button>
              <Button variant="outline" size="sm">
                Full Report
              </Button>
            </div>
          </div>

          {/* Core Holdings */}
          <div className="card-clinical overflow-hidden">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="clinical-label text-sm">Core Holdings</h3>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-foreground">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-foreground">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="clinical-label pb-3 text-left">Symbol</th>
                    <th className="clinical-label pb-3 text-right">Qty</th>
                    <th className="clinical-label pb-3 text-right">Avg Cost</th>
                    <th className="clinical-label pb-3 text-right">LTP</th>
                    <th className="clinical-label pb-3 text-right">P/L %</th>
                    <th className="clinical-label pb-3 text-right">Market Value</th>
                  </tr>
                </thead>
                <tbody>
                  {holdings.map((h) => (
                    <tr key={h.symbol} className="border-b border-border/50">
                      <td className="py-3 font-heading text-sm font-bold">{h.symbol}</td>
                      <td className="py-3 text-right text-sm text-muted-foreground">{h.qty}</td>
                      <td className="py-3 text-right text-sm text-muted-foreground">{h.avgCost}</td>
                      <td className="py-3 text-right text-sm">{h.ltp}</td>
                      <td className={`py-3 text-right text-sm font-semibold ${h.positive ? "positive" : "negative"}`}>
                        {h.pl}
                      </td>
                      <td className="py-3 text-right text-sm">{h.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Opportunity Radar + Risk Meter */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card-clinical">
              <h3 className="clinical-label mb-4">Opportunity Radar</h3>
              {opportunities.map((o) => (
                <div key={o.symbol} className="mb-3 flex items-center justify-between rounded-md bg-secondary p-3">
                  <div>
                    <span className="font-heading text-sm font-bold">{o.symbol}</span>
                    <p className="text-xs text-muted-foreground">{o.signal}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold positive">{o.match} Match</span>
                    <p className="text-xs text-muted-foreground">{o.type}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="card-clinical">
              <h3 className="clinical-label mb-4">Risk Meter</h3>
              <div className="flex flex-col items-center justify-center py-4">
                {/* Gauge visualization */}
                <div className="relative h-24 w-48">
                  <svg viewBox="0 0 200 100" className="h-full w-full">
                    <path d="M 20 90 A 80 80 0 0 1 180 90" fill="none" stroke="var(--color-border)" strokeWidth="12" strokeLinecap="round" />
                    <path d="M 20 90 A 80 80 0 0 1 140 25" fill="none" stroke="var(--color-primary)" strokeWidth="12" strokeLinecap="round" />
                    <path d="M 140 25 A 80 80 0 0 1 160 50" fill="none" stroke="var(--color-warning)" strokeWidth="12" strokeLinecap="round" />
                    <path d="M 160 50 A 80 80 0 0 1 180 90" fill="none" stroke="var(--color-destructive)" strokeWidth="12" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="stat-value text-2xl">6.2</span>
                <span className="clinical-label mt-1">Portfolio Beta</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Watchlist */}
          <div className="card-clinical">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="clinical-label text-sm">Watchlist</h3>
              <button className="text-muted-foreground hover:text-foreground">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-3">
              {watchlist.map((w) => (
                <div key={w.symbol} className="flex items-center justify-between">
                  <div>
                    <span className="font-heading text-sm font-bold">{w.symbol}</span>
                    <p className="text-xs text-muted-foreground">{w.sector}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm">{w.price}</span>
                    <p className={`text-xs font-semibold ${w.positive ? "positive" : "negative"}`}>
                      {w.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full text-center text-xs text-muted-foreground hover:text-foreground">
              View All (24)
            </button>
          </div>

          {/* Sector Allocation */}
          <div className="card-clinical">
            <h3 className="clinical-label mb-4">Sector Allocation</h3>
            <div className="flex items-center justify-center py-2">
              <div className="relative h-32 w-32">
                <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="var(--color-border)" strokeWidth="16" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="var(--color-primary)" strokeWidth="16" strokeDasharray="120.6 251.3" strokeLinecap="round" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="var(--color-chart-2)" strokeWidth="16" strokeDasharray="50.3 251.3" strokeDashoffset="-120.6" strokeLinecap="round" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="var(--color-chart-4)" strokeWidth="16" strokeDasharray="40.2 251.3" strokeDashoffset="-170.9" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="stat-value text-lg">48%</span>
                  <span className="clinical-label" style={{ fontSize: "0.55rem" }}>Banking</span>
                </div>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {["Banking", "Hydro", "Hotel", "Other"].map((s, i) => (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className="h-2 w-2 rounded-full"
                    style={{
                      backgroundColor: i === 0 ? "var(--color-primary)" : i === 1 ? "var(--color-chart-2)" : i === 2 ? "var(--color-chart-4)" : "var(--color-muted-foreground)",
                    }}
                  />
                  <span className="text-xs text-muted-foreground">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Community Buzz */}
          <div className="card-clinical">
            <h3 className="clinical-label mb-4">Community Buzz</h3>
            <div className="space-y-3">
              <div className="rounded-md bg-secondary p-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs">B</div>
                  <span className="text-xs font-semibold">BullishRider</span>
                  <span className="text-xs text-muted-foreground">in #hydro-sector</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  AKJCL might breakout tomorrow. Accumulation detected by whale trackers.
                </p>
              </div>
              <div className="rounded-md bg-secondary p-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs">S</div>
                  <span className="text-xs font-semibold">Sage_Bot</span>
                  <span className="text-xs positive">System Alert</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Multiple Insider trades reported for NLIC in the last 48 hours.
                </p>
              </div>
            </div>
            <button className="mt-3 w-full rounded-md border border-border py-2 text-xs text-muted-foreground hover:text-foreground transition">
              Join Discussion
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
