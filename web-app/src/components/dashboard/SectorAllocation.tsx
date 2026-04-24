"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SectorAllocation() {
  return (
    <Card className="card-clinical p-0 shadow-none">
      <CardHeader className="p-5 pb-4">
        <CardTitle className="clinical-label">Sector Allocation</CardTitle>
      </CardHeader>
      <CardContent className="px-5 pb-5 pt-0">
        <div className="flex items-center justify-center py-2">
          <div className="relative h-32 w-32">
            <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
              <circle cx="50" cy="50" r="40" fill="none" stroke="var(--color-border)" strokeWidth="16" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="var(--color-primary)" strokeWidth="16" strokeDasharray="120.6 251.3" strokeLinecap="round" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="var(--color-warning)" strokeWidth="16" strokeDasharray="50.3 251.3" strokeDashoffset="-120.6" strokeLinecap="round" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="var(--color-destructive)" strokeWidth="16" strokeDasharray="40.2 251.3" strokeDashoffset="-170.9" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="stat-value text-lg">48%</span>
              <span className="clinical-label" style={{ fontSize: "0.55rem" }}>Banking</span>
            </div>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {["Banking", "Hydro", "Hotel", "Other"].map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor: i === 0 ? "var(--color-primary)" : i === 1 ? "var(--color-warning)" : i === 2 ? "var(--color-destructive)" : "var(--color-muted-foreground)",
                }}
              />
              <span className="text-xs text-muted-foreground">{s}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
