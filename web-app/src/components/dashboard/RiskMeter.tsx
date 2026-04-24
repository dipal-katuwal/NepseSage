"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function RiskMeter() {
  return (
    <Card className="card-clinical p-0 shadow-none">
      <CardHeader className="p-5 pb-0 text-center flex items-center mb-4">
         <CardTitle className="clinical-label">Risk Meter</CardTitle>
      </CardHeader>
      <CardContent className="p-5 pt-0 flex flex-col items-center justify-center">
        <div className="relative h-24 w-48 mb-2">
          <svg viewBox="0 0 200 100" className="h-full w-full">
            <path d="M 20 90 A 80 80 0 0 1 180 90" fill="none" stroke="var(--color-border)" strokeWidth="12" strokeLinecap="round" />
            <path d="M 20 90 A 80 80 0 0 1 140 25" fill="none" stroke="var(--color-primary)" strokeWidth="12" strokeLinecap="round" />
            <path d="M 140 25 A 80 80 0 0 1 160 50" fill="none" stroke="var(--color-warning)" strokeWidth="12" strokeLinecap="round" />
            <path d="M 160 50 A 80 80 0 0 1 180 90" fill="none" stroke="var(--color-destructive)" strokeWidth="12" strokeLinecap="round" />
          </svg>
        </div>
        <span className="stat-value text-2xl">6.2</span>
        <span className="clinical-label mt-1">Portfolio Beta</span>
      </CardContent>
    </Card>
  );
}
