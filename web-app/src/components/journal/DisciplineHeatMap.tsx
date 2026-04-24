"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";

export function DisciplineHeatMap() {
  return (
    <Card className="card-clinical mb-6 p-0 shadow-none">
      <CardContent className="p-5 flex items-center justify-between flex-wrap gap-4">
        <div className="w-full flex items-center justify-between mb-2 border-b border-border pb-4">
          <CardTitle className="clinical-label">Discipline Heat Map (30 Day Activity)</CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Less Disciplined</span>
            {["bg-destructive", "bg-warning", "bg-primary/50", "bg-primary/70", "bg-primary"].map((c, i) => (
              <div key={i} className={`h-3 w-3 rounded-sm ${c}`} />
            ))}
            <span className="text-xs text-muted-foreground">Mastery</span>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1.5 w-fit">
          {Array.from({ length: 35 }).map((_, i) => {
            const colors = ["bg-primary", "bg-primary/70", "bg-primary/50", "bg-warning", "bg-destructive", "bg-secondary"];
            return (
              <div key={i} className={`h-6 w-6 rounded-sm ${colors[Math.floor(Math.random() * colors.length)]}`} />
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
