"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function SageIntelligenceCard() {
  return (
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
  );
}
