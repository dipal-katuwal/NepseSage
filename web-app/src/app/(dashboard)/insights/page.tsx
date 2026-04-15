import type { Metadata } from "next";
import { ThumbsUp, MessageSquare, Share2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights — NEPSE Sage AI",
  description: "Real-time market insights from verified analysts",
};

const insights = [
  {
    name: "Ankit Sharma",
    tier: "Verified Analyst",
    time: "2h ago",
    sentiment: "bullish" as const,
    symbol: "NICA",
    company: "NIC Asia Bank",
    text: "RSI showing oversold conditions on the daily timeframe. Major support at 480 holding strong. Expecting a bounce...",
    confidence: 85,
    confidenceLabel: "High",
    likes: 42,
    comments: 12,
  },
  {
    name: "Rajesh Hamal",
    tier: "Gold Tier",
    time: "5h ago",
    sentiment: "bearish" as const,
    symbol: "HIDCL",
    company: "Hydro Dev",
    text: "The sector has been over-leveraged for the past quarter. Q3 reports likely to show increased debt-to-equity...",
    confidence: 62,
    confidenceLabel: "Mid",
    likes: 18,
    comments: 8,
  },
  {
    name: "Sita Gurung",
    tier: "AI Mod",
    time: "8h ago",
    sentiment: "bullish" as const,
    symbol: "UPPER",
    company: "Upper Tamakoshi",
    text: "Strong accumulation seen at the lower Bollinger band. Volume profile indicates a shift from retail to institutional hands.",
    confidence: 92,
    confidenceLabel: "Ultra",
    likes: 156,
    comments: 45,
  },
];

export default function InsightsPage() {
  return (
    <>
      {/* Market Pulse Header */}
      <div className="card-clinical mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-heading text-2xl font-bold">Market Pulse</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Real-time aggregate sentiment across NEPSE listed companies.
            </p>
          </div>
          <div className="flex items-center gap-8">
            <div className="text-center">
              <p className="clinical-label">Global Sentiment</p>
              <div className="mt-1 flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                <span className="font-heading text-lg font-bold">BULLISH</span>
              </div>
            </div>
            <div className="text-center">
              <p className="clinical-label">Avg Confidence</p>
              <span className="font-heading text-lg font-bold positive">78.4%</span>
            </div>
            <button className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition flex items-center gap-2">
              <span>+</span> Post Insight
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex gap-3">
          {["All Sectors", "24 Hours", "All"].map((f, i) => (
            <span
              key={f}
              className="rounded-md bg-secondary px-4 py-1.5 text-xs font-medium text-foreground"
            >
              <span className="text-muted-foreground mr-1.5">
                {i === 0 ? "Sector:" : i === 1 ? "Time:" : "Sentiment:"}
              </span>
              {f}
            </span>
          ))}
        </div>
        <span className="text-sm text-muted-foreground">
          Showing <strong className="text-foreground">128</strong> verified insights
        </span>
      </div>

      {/* Insight Cards */}
      <div className="grid grid-cols-3 gap-5">
        {insights.map((insight) => (
          <div key={insight.symbol} className="card-clinical flex flex-col justify-between">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center text-sm font-bold">
                  {insight.name[0]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">{insight.name}</span>
                    <span className={insight.sentiment === "bullish" ? "badge-bullish" : "badge-bearish"}>
                      {insight.sentiment}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {insight.tier} • {insight.time}
                  </p>
                </div>
              </div>

              <div className="mb-2">
                <span className="font-heading text-sm font-bold">{insight.symbol}</span>
                <span className="ml-2 text-xs text-muted-foreground">{insight.company}</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{insight.text}</p>
            </div>

            <div className="mt-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="clinical-label">Confidence</span>
                <span className={`text-xs font-bold ${insight.confidence > 80 ? "positive" : insight.confidence > 60 ? "text-warning" : "negative"}`}>
                  {insight.confidence}% {insight.confidenceLabel}
                </span>
              </div>
              <div className="h-1 w-full rounded-full bg-secondary">
                <div
                  className="h-1 rounded-full"
                  style={{
                    width: `${insight.confidence}%`,
                    backgroundColor: insight.confidence > 80 ? "var(--color-primary)" : insight.confidence > 60 ? "var(--color-destructive)" : "var(--color-muted-foreground)",
                  }}
                />
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground">
                    <ThumbsUp className="h-3.5 w-3.5" /> {insight.likes}
                  </button>
                  <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground">
                    <MessageSquare className="h-3.5 w-3.5" /> {insight.comments}
                  </button>
                </div>
                <button className="text-muted-foreground hover:text-foreground">
                  <Share2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button className="rounded-md border border-border px-8 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition">
          Load More Insights
        </button>
      </div>
    </>
  );
}
