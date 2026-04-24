import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

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
  MoreVertical,
  ChevronDown
} from "lucide-react";

const stats = [
  { label: "Portfolio Value", value: "Rs. 1,248,500", change: "+12.4%", positive: true },
  { label: "Daily P/L", value: "Rs. 14,200", change: "+1.14%", positive: true },
  { label: "Discipline Score", value: "84/100", change: null, positive: true },
  { label: "Risk Rating", value: "Moderate-High", change: null, positive: false, isWarning: true },
];

const holdings = [
  { symbol: "NICA", qty: "1,200", avgCost: "540.00", ltp: "582.40", pl: "+7.85%", value: "Rs. 698,880", positive: true, sector: "Banking" },
  { symbol: "SHL", qty: "500", avgCost: "410.00", ltp: "398.20", pl: "-2.88%", value: "Rs. 199,100", positive: false, sector: "Hotels" },
  { symbol: "HDHPC", qty: "2,500", avgCost: "182.50", ltp: "215.00", pl: "+17.81%", value: "Rs. 537,500", positive: true, sector: "Hydro" },
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
          <Card key={s.label} className="card-clinical p-0 shadow-none">
            <CardContent className="p-5 pb-5">
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
                <Progress value={84} className="h-1.5 mt-2 bg-secondary" />
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - 2 cols on lg */}
        <div className="lg:col-span-2 space-y-6">
          {/* Sage Intelligence */}
          <Card className="card-clinical p-0 shadow-none">
            <CardContent className="p-5">
              <div className="mb-3 flex items-center justify-between">
                <Badge className="badge-bullish flex border-0 items-center gap-1.5 hover:bg-transparent">
                  <Sparkles className="h-3 w-3" /> Sage Intelligence
                </Badge>
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
                <Button variant="outline" size="sm" className="bg-primary hover:bg-primary/90 hover:text-white text-white border-0 text-xs">
                  Execute Rebalance
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  Full Report
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Core Holdings */}
          <Card className="card-clinical p-0 shadow-none overflow-hidden">
            <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 pb-0 gap-3 sm:gap-0">
              <CardTitle className="clinical-label text-sm">Core Holdings</CardTitle>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-foreground">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-foreground">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0 overflow-x-auto">
              <Table className="w-full min-w-[600px]">
                <TableHeader>
                  <TableRow className="border-b border-border hover:bg-transparent">
                    <TableHead className="clinical-label h-auto py-3">Symbol</TableHead>
                    <TableHead className="clinical-label h-auto py-3 text-right">Qty</TableHead>
                    <TableHead className="clinical-label h-auto py-3 text-right">Avg Cost</TableHead>
                    <TableHead className="clinical-label h-auto py-3 text-right">LTP</TableHead>
                    <TableHead className="clinical-label h-auto py-3 text-right">P/L %</TableHead>
                    <TableHead className="clinical-label h-auto py-3 text-right">Market Value</TableHead>
                    <TableHead className="h-auto w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {holdings.map((h) => (
                    <TableRow key={h.symbol} className="border-b border-border/50 hover:bg-secondary/20">
                      <TableCell className="py-3 font-heading text-sm font-bold">
                        {h.symbol}
                        <div className="text-[10px] text-muted-foreground font-sans font-normal">{h.sector}</div>
                      </TableCell>
                      <TableCell className="py-3 text-right text-sm text-muted-foreground">{h.qty}</TableCell>
                      <TableCell className="py-3 text-right text-sm text-muted-foreground">{h.avgCost}</TableCell>
                      <TableCell className="py-3 text-right text-sm">{h.ltp}</TableCell>
                      <TableCell className={`py-3 text-right text-sm font-semibold ${h.positive ? "positive" : "negative"}`}>
                        {h.pl}
                      </TableCell>
                      <TableCell className="py-3 text-right text-sm">{h.value}</TableCell>
                      <TableCell className="py-3 text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Buy More</DropdownMenuItem>
                            <DropdownMenuItem>Sell Position</DropdownMenuItem>
                            <DropdownMenuItem>View Chart</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Opportunity Radar + Risk Meter */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="card-clinical p-0 shadow-none">
              <CardHeader className="p-5 pb-4">
                <CardTitle className="clinical-label">Opportunity Radar</CardTitle>
              </CardHeader>
              <CardContent className="px-5 pb-5 pt-0 space-y-3">
                {opportunities.map((o) => (
                  <div key={o.symbol} className="flex items-center justify-between rounded-md bg-secondary p-3">
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
              </CardContent>
            </Card>
            <Card className="card-clinical p-0 shadow-none">
              <CardHeader className="p-5 pb-0 text-center flex items-center mb-4">
                 <CardTitle className="clinical-label">Risk Meter</CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0 flex flex-col items-center justify-center">
                {/* Gauge visualization using Progress is tricky, keeping SVG but wrapped properly */}
                <div className="relative h-24 w-48 mb-2">
                  <svg viewBox="0 0 200 100" className="h-full w-full">
                    <path d="M 20 90 A 80 80 0 0 1 180 90" fill="none" stroke="var(--color-border)" strokeWidth="12" strokeLinecap="round" />
                    <path d="M 20 90 A 80 80 0 0 1 140 25" fill="none" stroke="var(--color-primary)" strokeWidth="12" strokeLinecap="round" />
                    <path d="M 140 25 A 80 80 0 0 1 160 50" fill="none" stroke="var(--color-warning)" strokeWidth="12" strokeLinecap="round" />
                    <path d="M 160 50 A 80 80 0 0 1 180 90" fill="none" stroke="var(--color-destructive)" strokeWidth="12" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="stat-value text-2xl">6.2</span>
                <span className="clinical-label mt-1">Portfolio Beta</span>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Watchlist */}
          <Card className="card-clinical p-0 shadow-none">
            <CardHeader className="flex flex-row items-center justify-between p-5 pb-4">
              <CardTitle className="clinical-label text-sm mt-1">Watchlist</CardTitle>
              <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-foreground">
                <Plus className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="px-5 pb-5 pt-0 space-y-3">
              {watchlist.map((w) => (
                <HoverCard key={w.symbol} openDelay={200}>
                  <HoverCardTrigger asChild>
                    <div className="flex items-center justify-between cursor-pointer group">
                      <div>
                        <span className="font-heading text-sm font-bold group-hover:text-primary transition">{w.symbol}</span>
                        <p className="text-xs text-muted-foreground group-hover:text-foreground transition">{w.sector}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm">{w.price}</span>
                        <p className={`text-xs font-semibold ${w.positive ? "positive" : "negative"}`}>
                          {w.change}
                        </p>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-64" side="left">
                    <div className="flex justify-between space-x-4">
                      <Avatar>
                        <AvatarFallback className="font-heading">{w.symbol[0]}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1 w-full">
                        <h4 className="text-sm font-semibold">{w.symbol} Overview</h4>
                        <p className="text-xs text-muted-foreground">Volume is up 12% from average. Sage indicates strong support at current levels.</p>
                        <div className="flex items-center pt-2 gap-2">
                           <span className="text-xs text-muted-foreground">Target: {(parseFloat(w.price) * 1.05).toFixed(2)}</span>
                           <Separator orientation="vertical" className="h-3" />
                           <span className="text-xs">RSI: 48</span>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
              <Button variant="ghost" className="mt-4 w-full text-xs text-muted-foreground hover:text-foreground">
                View All (24)
              </Button>
            </CardContent>
          </Card>

          {/* Sector Allocation */}
          <Card className="card-clinical p-0 shadow-none">
            <CardHeader className="p-5 pb-4">
              <CardTitle className="clinical-label">Sector Allocation</CardTitle>
            </CardHeader>
            <CardContent className="px-5 pb-5 pt-0">
              <div className="flex items-center justify-center py-2">
                <div className="relative h-32 w-32">
                  <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="var(--color-border)" strokeWidth="16" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="var(--color-primary)" strokeWidth="16" strokeDasharray="120.6 251.3" strokeLinecap="round" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="var(--color-warning)" strokeWidth="16" strokeDasharray="50.3 251.3" strokeDashoffset="-120.6" strokeLinecap="round" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="var(--color-destructive)" strokeWidth="16" strokeDasharray="40.2 251.3" strokeDashoffset="-170.9" strokeLinecap="round" />
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
                        backgroundColor: i === 0 ? "var(--color-primary)" : i === 1 ? "var(--color-warning)" : i === 2 ? "var(--color-destructive)" : "var(--color-muted-foreground)",
                      }}
                    />
                    <span className="text-xs text-muted-foreground">{s}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Community Buzz */}
          <Card className="card-clinical p-0 shadow-none">
             <CardHeader className="p-5 pb-4">
              <CardTitle className="clinical-label">Community Buzz</CardTitle>
            </CardHeader>
            <CardContent className="px-5 pb-5 pt-0 space-y-3">
              <div className="rounded-md bg-secondary p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback className="text-[10px]">B</AvatarFallback>
                  </Avatar>
                  <span className="text-xs font-semibold">BullishRider</span>
                  <span className="text-xs text-muted-foreground">in #hydro</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  AKJCL might breakout tomorrow. Accumulation detected by whale trackers.
                </p>
              </div>
              <div className="rounded-md bg-secondary p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback className="text-[10px] bg-primary/20 text-primary">S</AvatarFallback>
                  </Avatar>
                  <span className="text-xs font-semibold">Sage_Bot</span>
                  <Badge variant="outline" className="text-[10px] py-0 px-1.5 h-4 border-primary/30 text-primary">System</Badge>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Multiple Insider trades reported for NLIC in the last 48 hours.
                </p>
              </div>
              <Button variant="outline" className="w-full text-xs mt-3 h-8">
                Join Discussion
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

