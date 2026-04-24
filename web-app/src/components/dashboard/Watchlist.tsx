"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { watchlist } from "./dashboard-data";

export function Watchlist() {
  return (
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
  );
}
