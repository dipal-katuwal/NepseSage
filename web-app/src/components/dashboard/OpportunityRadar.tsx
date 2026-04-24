"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { opportunities } from "./dashboard-data";

export function OpportunityRadar() {
  return (
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
  );
}
