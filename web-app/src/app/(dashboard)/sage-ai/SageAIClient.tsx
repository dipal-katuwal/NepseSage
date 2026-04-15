"use client";

import { Send, Paperclip, Copy, RefreshCw, ThumbsUp } from "lucide-react";

const messages = [
  {
    type: "user",
    text: "Analyze the current trend for NTC (Nepal Telecom). Is the MACD showing a bullish crossover?",
    time: "10:42 AM",
  },
  {
    type: "ai",
    text: "Analyzing NTC (Nepal Telecom). Current price is Rs. 894.50.",
    time: "",
    chart: true,
    analysis: "Yes, the MACD has just confirmed a Bullish Crossover on the 1D timeframe. The histogram has moved into positive territory, and the signal line is trending upwards. However, observe the resistance at Rs. 915 before increasing exposure.",
  },
  {
    type: "user",
    text: "What is the overall market sentiment today?",
    time: "10:45 AM",
  },
];

const quickActions = [
  "Check Market Sentiment",
  "Analyze My Risk",
  "Dividend History for SHL",
  "Upcoming IPOs",
];

const conversations = [
  { title: "NTC Technical Analysis", time: "2 minutes ago", active: true },
  { title: "Banking Sector Outlook 2024", time: "Yesterday" },
  { title: "How to handle loss", time: "2 days ago" },
  { title: "SHL Dividend Yield calc", time: "4 days ago" },
  { title: "Best Hydro stocks for hold", time: "Oct 12" },
];

export default function SageAIClient() {
  return (
    <div className="flex gap-6 h-[calc(100vh-10rem)]">
      {/* Chat Area */}
      <div className="flex flex-1 flex-col">
        {/* Mode Tabs */}
        <div className="mb-4 flex gap-2">
          {[
            { label: "Analyst", icon: "📊", active: true },
            { label: "Psychologist", icon: "⚙️", active: false },
            { label: "Quick", icon: "⚡", active: false },
          ].map((tab) => (
            <button
              key={tab.label}
              className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition ${
                tab.active
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
              {msg.type === "ai" && (
                <div className="mr-3 mt-1 h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-sm">🤖</span>
                </div>
              )}
              <div className={`max-w-lg ${msg.type === "user" ? "bg-secondary rounded-xl rounded-br-sm px-4 py-3" : "space-y-3"}`}>
                <p className="text-sm leading-relaxed">{msg.text}</p>
                {msg.chart && (
                  <>
                    <div className="rounded-md border border-border p-4 bg-card">
                      <div className="flex items-center justify-between mb-2">
                        <span className="clinical-label">MACD Signal</span>
                        <span className="positive text-xs font-bold">Bullish Indicator</span>
                      </div>
                      <div className="flex items-end gap-1 h-16">
                        {[30, 40, 35, 45, 25, 20, 15, 10, 5, 8, 12, 60].map((h, j) => (
                          <div
                            key={j}
                            className="flex-1 rounded-sm"
                            style={{
                              height: `${h}%`,
                              backgroundColor: j < 6 ? "var(--color-destructive)" : j < 9 ? "var(--color-muted)" : "var(--color-primary)",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{msg.analysis}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <button className="flex items-center gap-1 hover:text-foreground"><Copy className="h-3 w-3" /> Copy</button>
                      <button className="flex items-center gap-1 hover:text-foreground"><RefreshCw className="h-3 w-3" /> Regenerate</button>
                      <button className="hover:text-foreground"><ThumbsUp className="h-3 w-3" /></button>
                    </div>
                  </>
                )}
                {msg.time && <p className="text-xs text-muted-foreground mt-1">{msg.time}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-4 flex gap-2 flex-wrap">
          {quickActions.map((qa) => (
            <button key={qa} className="rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:bg-secondary transition">
              {qa}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="mt-3 flex items-center gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Ask Sage AI anything about NEPSE..."
              className="w-full rounded-lg border border-border bg-input px-4 py-3 pr-20 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
              <button className="text-muted-foreground hover:text-foreground p-1">
                <Paperclip className="h-4 w-4" />
              </button>
              <button className="rounded-lg bg-primary p-2 text-primary-foreground hover:bg-primary/90">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          Sage AI can make mistakes. Check important financial info.
        </p>
      </div>

      {/* Right Panel */}
      <div className="w-72 space-y-6">
        <div className="card-clinical">
          <h3 className="clinical-label mb-3">Recent Conversations</h3>
          <div className="space-y-1">
            {conversations.map((c) => (
              <button
                key={c.title}
                className={`w-full rounded-md px-3 py-2.5 text-left transition ${c.active ? "bg-primary/10 border border-primary/30" : "hover:bg-secondary"}`}
              >
                <span className={`text-sm font-medium ${c.active ? "text-primary" : ""}`}>{c.title}</span>
                <p className="text-xs text-muted-foreground">{c.time}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="card-clinical">
          <h3 className="clinical-label mb-2">Market Pulse</h3>
          <div className="flex justify-between">
            <div>
              <p className="clinical-label">NEPSE</p>
              <span className="positive text-sm font-bold">2,045.2 (+0.4%)</span>
            </div>
            <div className="text-right">
              <p className="clinical-label">Volume</p>
              <span className="text-sm font-bold">4.2B</span>
            </div>
          </div>
        </div>

        <div className="card-clinical">
          <h3 className="clinical-label mb-2">Usage Limit</h3>
          <div className="h-1.5 w-full rounded-full bg-secondary">
            <div className="h-1.5 rounded-full bg-primary" style={{ width: "70%" }} />
          </div>
          <p className="mt-2 text-xs text-muted-foreground">14 / 20 Analysis Queries remaining</p>
        </div>
      </div>
    </div>
  );
}
