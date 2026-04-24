"use client";

import { Send, Paperclip, Copy, RefreshCw, ThumbsUp, ChevronDown, PanelRight, Plus } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

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
    <div className="flex flex-col h-[calc(100vh-3.5rem)] w-full overflow-hidden">
      {/* Top Header - Kept very minimal like the screenshot */}
      <div className="flex items-center justify-between px-4 py-1 bg-background/50 backdrop-blur-sm sticky top-0 z-20">
        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest opacity-50">Sage AI Assistant</span>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary rounded-full">
              <PanelRight className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto sm:max-w-sm w-full">
            <SheetHeader className="mb-6">
              <SheetTitle>Sage Context</SheetTitle>
            </SheetHeader>
            <div className="space-y-6">
              <Card className="card-clinical p-0 shadow-none border-primary/10">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="clinical-label text-[10px] uppercase">Recent</CardTitle>
                </CardHeader>
                <CardContent className="p-2 pt-0 space-y-1">
                  {conversations.map((c) => (
                    <Button
                      key={c.title}
                      variant={c.active ? "secondary" : "ghost"}
                      className={`w-full justify-start px-3 py-2 text-left h-auto flex flex-col items-start gap-0.5 ${c.active ? "bg-primary/10 text-primary" : ""}`}
                    >
                      <span className="text-sm font-medium">{c.title}</span>
                      <span className="text-[10px] opacity-60">{c.time}</span>
                    </Button>
                  ))}
                </CardContent>
              </Card>

              <Card className="card-clinical p-0 shadow-none">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="clinical-label text-[10px] uppercase">Market Pulse</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 flex justify-between">
                  <div>
                    <p className="clinical-label text-[10px]">NEPSE</p>
                    <span className="positive text-sm font-bold">2,045.2 (+0.4%)</span>
                  </div>
                  <div className="text-right">
                    <p className="clinical-label text-[10px]">Volume</p>
                    <span className="text-sm font-bold">4.2B</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-clinical p-0 shadow-none">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="clinical-label text-[10px] uppercase">Usage</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <Progress value={70} className="h-1.5" />
                  <p className="mt-2 text-[10px] text-muted-foreground text-right">14 / 20 remaining</p>
                </CardContent>
              </Card>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Conversation Area - Clean, Standard Scrollbar on right */}
      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden px-4 py-4">
        <div className="max-w-3xl mx-auto space-y-6">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"} w-full`}>
              {msg.type === "ai" && (
                <div className="mr-4 mt-1 flex-shrink-0">
                  <div className="h-9 w-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="text-primary text-xs">🤖</span>
                  </div>
                </div>
              )}
              <div className={`max-w-[85%] ${msg.type === "user" ? "bg-secondary/40 rounded-3xl px-5 py-3 shadow-sm border border-border/10" : "flex-1 space-y-3"}`}>
                <p className="text-[15px] leading-[1.65] text-foreground/90 font-normal">{msg.text}</p>
                
                {msg.chart && (
                  <Collapsible defaultOpen className="space-y-2">
                    <CollapsibleTrigger asChild>
                      <Button variant="outline" size="sm" className="h-8 text-[11px] w-full justify-between hover:bg-secondary/50 border-primary/20 text-muted-foreground tracking-widest uppercase font-bold rounded-xl">
                        <span>Analysis Insights</span>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <Card className="rounded-2xl border border-border/50 bg-card/10 backdrop-blur-sm shadow-none overflow-hidden">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[11px] clinical-label uppercase tracking-widest font-black">Clinical Indicators</span>
                            <span className="positive text-[11px] font-black px-3 py-1 bg-emerald-500/10 rounded-full">Bullish Momentum</span>
                          </div>
                          <div className="flex items-end gap-1.5 h-16 mb-3">
                            {[30, 40, 35, 45, 25, 20, 15, 10, 5, 8, 12, 60].map((h, j) => (
                              <div
                                key={j}
                                className="flex-1 rounded-sm transition-all"
                                style={{
                                  height: `${h}%`,
                                  backgroundColor: j < 6 ? "var(--color-destructive)" : j < 9 ? "var(--color-muted)" : "var(--color-primary)",
                                }}
                              />
                            ))}
                          </div>
                          <p className="text-[13px] text-foreground/70 pt-3 border-t border-border/20 font-light leading-relaxed">
                            {msg.analysis}
                          </p>
                        </CardContent>
                      </Card>
                    </CollapsibleContent>
                  </Collapsible>
                )}

                {msg.type === "ai" && (
                  <div className="flex items-center gap-5 mt-2">
                    <button className="text-[11px] text-muted-foreground/50 hover:text-primary transition-colors flex items-center gap-1.5">
                      <Copy className="h-3.5 w-3.5" /> Copy
                    </button>
                    <button className="text-[11px] text-muted-foreground/50 hover:text-primary transition-colors flex items-center gap-1.5">
                      <RefreshCw className="h-3.5 w-3.5" /> Retry
                    </button>
                    <button className="text-[11px] text-muted-foreground/50 hover:text-primary transition-colors">
                      <ThumbsUp className="h-3.5 w-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Footer Area - Shaped like ChatGPT */}
      <div className="flex-shrink-0 bg-gradient-to-t from-background via-background/95 to-transparent pt-3 pb-3">
        <div className="max-w-3xl mx-auto px-4 w-full">
          {/* Scroll to bottom arrow could go here if needed, but keeping it simple */}
          
          <div className="relative group">
            {/* Pill shaped input box */}
            <div className="flex items-center bg-secondary/30 border border-border/50 rounded-full px-4 py-2 hover:border-primary/20 transition-all shadow-sm">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/50">
                <Plus className="h-5 w-5" />
              </Button>
              
              <Input
                type="text"
                placeholder="Ask Sage AI anything..."
                className="flex-1 bg-transparent border-none focus-visible:ring-0 text-[15px] py-3 shadow-none placeholder:text-muted-foreground/40"
              />
              
              <div className="flex items-center gap-1 ml-2">
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-muted-foreground hover:text-foreground hidden sm:flex">
                  <Paperclip className="h-4.5 w-4.5" />
                </Button>
                <Button size="icon" className="h-9 w-9 rounded-full bg-foreground text-background hover:opacity-90 transition-all">
                  <Send className="h-4.5 w-4.5" />
                </Button>
              </div>
            </div>
          </div>
          
          <p className="text-center text-[11px] text-muted-foreground/40 mt-2 font-normal">
            Sage AI can make mistakes. Check important info.
          </p>
        </div>
      </div>
    </div>
  );
}
