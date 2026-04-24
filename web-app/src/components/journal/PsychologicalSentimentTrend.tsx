"use client";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export function PsychologicalSentimentTrend() {
  return (
    <Card className="card-clinical p-0 shadow-none">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 pb-4 gap-3 sm:gap-0">
        <CardTitle className="clinical-label">Psychological Sentiment Trend</CardTitle>
        <div className="flex flex-wrap items-center gap-3">
          <span className="flex items-center gap-1 text-xs text-muted-foreground"><span className="h-2 w-2 rounded-full bg-primary inline-block" /> Confidence</span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground"><span className="h-2 w-2 rounded-full bg-destructive inline-block" /> Anxiety</span>
        </div>
      </CardHeader>
      <CardContent className="px-5 pb-5 pt-0 flex items-end gap-2 h-40">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => {
          const conf = [65, 70, 60, 75, 80, 85, 55][i];
          const anx = [15, 20, 25, 10, 8, 5, 30][i];
          return (
            <div key={day} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full flex flex-col gap-0.5" style={{ height: "120px" }}>
                <div className="w-full rounded-sm bg-primary/80 mt-auto" style={{ height: `${conf}%` }} />
                <div className="w-full rounded-sm bg-destructive/60" style={{ height: `${anx}%` }} />
              </div>
              <span className="text-xs text-muted-foreground">{day}</span>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
