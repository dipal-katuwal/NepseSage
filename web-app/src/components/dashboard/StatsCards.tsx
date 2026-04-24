"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle } from "lucide-react";
import { stats } from "./dashboard-data";

export function StatsCards() {
  return (
    <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s) => (
        <Card key={s.label} className="card-clinical p-0 shadow-none">
          <CardContent className="p-5 pb-5">
            <p className="clinical-label">{s.label}</p>
            <div className="mt-2 flex items-end justify-between">
              <span className="stat-value text-xl">{s.value}</span>
              {s.change && (
                <span className={`text-sm font-semibold ${s.positive ? "positive" : "negative"}`}>
                  {s.change}
                </span>
              )}
              {s.isWarning && (
                <AlertTriangle className="h-4 w-4 text-warning" />
              )}
            </div>
            {s.label === "Discipline Score" && (
              <Progress value={84} className="h-1.5 mt-2 bg-secondary" />
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
