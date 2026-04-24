"use client";

import { Copy, RefreshCw, ThumbsUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

interface MessageItemProps {
  msg: {
    type: string;
    text: string;
    time: string;
    chart?: boolean;
    analysis?: string;
  };
}

export function MessageItem({ msg }: MessageItemProps) {
  return (
    <div className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"} w-full`}>
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
  );
}
