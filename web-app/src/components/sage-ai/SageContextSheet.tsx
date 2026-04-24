"use client";

import { PanelRight } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { conversations } from "./sage-ai-data";

export function SageContextSheet() {
  return (
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
  );
}
