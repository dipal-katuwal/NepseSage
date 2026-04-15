import type { Metadata } from "next";
import { Play, Pause, RotateCcw } from "lucide-react";

export const metadata: Metadata = {
  title: "Simulator — NEPSE Sage AI",
  description: "Practice trading with virtual portfolio",
};

export default function SimulatorPage() {
  return (
    <>
      <h1 className="font-heading text-2xl font-bold">Trading Simulator</h1>
      <p className="mt-1 text-sm text-muted-foreground mb-6">
        Practice your strategies with virtual capital. No risk, real market data.
      </p>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: "Virtual Balance", value: "Rs. 500,000" },
          { label: "Unrealized P/L", value: "+Rs. 12,400", positive: true },
          { label: "Win Rate", value: "68%" },
          { label: "Trades Today", value: "5" },
        ].map((s) => (
          <div key={s.label} className="card-clinical">
            <p className="clinical-label">{s.label}</p>
            <span className={`stat-value text-xl mt-2 block ${s.positive ? "positive" : ""}`}>{s.value}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 card-clinical">
          <div className="flex items-center justify-between mb-4">
            <h3 className="clinical-label text-sm">Market Simulation</h3>
            <div className="flex gap-2">
              <button className="rounded-md bg-primary p-2 text-primary-foreground hover:bg-primary/90">
                <Play className="h-4 w-4" />
              </button>
              <button className="rounded-md bg-secondary p-2 text-muted-foreground hover:text-foreground">
                <Pause className="h-4 w-4" />
              </button>
              <button className="rounded-md bg-secondary p-2 text-muted-foreground hover:text-foreground">
                <RotateCcw className="h-4 w-4" />
              </button>
            </div>
          </div>
          {/* Chart placeholder */}
          <div className="h-64 rounded-md bg-secondary/50 flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted-foreground text-sm">Live Simulation Chart</p>
              <p className="text-xs text-muted-foreground mt-1">Select a symbol to begin trading</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="card-clinical">
            <h3 className="clinical-label mb-3">Quick Trade</h3>
            <div className="space-y-3">
              <input placeholder="Symbol (e.g. NICA)" className="w-full rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
              <div className="grid grid-cols-2 gap-2">
                <input placeholder="Qty" type="number" className="rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
                <input placeholder="Price" type="number" className="rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button className="rounded-md bg-primary py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Buy</button>
                <button className="rounded-md bg-destructive py-2 text-sm font-semibold text-destructive-foreground hover:bg-destructive/90">Sell</button>
              </div>
            </div>
          </div>

          <div className="card-clinical">
            <h3 className="clinical-label mb-3">Open Positions</h3>
            <div className="space-y-2">
              {[
                { symbol: "NICA", qty: 100, pnl: "+2.4%", positive: true },
                { symbol: "SHL", qty: 50, pnl: "-1.2%", positive: false },
              ].map((p) => (
                <div key={p.symbol} className="flex items-center justify-between rounded-md bg-secondary p-2.5">
                  <div>
                    <span className="font-heading text-sm font-bold">{p.symbol}</span>
                    <span className="text-xs text-muted-foreground ml-2">{p.qty} units</span>
                  </div>
                  <span className={`text-sm font-semibold ${p.positive ? "positive" : "negative"}`}>{p.pnl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
