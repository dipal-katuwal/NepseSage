"use client";

import { AlertTriangle, CheckCircle, Info } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function BehavioralEngine() {
  return (
    <Card className="card-clinical p-0 shadow-none">
      <CardHeader className="flex flex-row items-center justify-between p-5 pb-4">
        <CardTitle className="clinical-label text-primary">Sage Behavioral Engine</CardTitle>
        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="text-primary text-xs">⚙️</span>
        </div>
      </CardHeader>
      <CardContent className="px-5 pb-5 pt-0 space-y-4">
        <Alert variant="destructive" className="bg-destructive/10 border-destructive/20 text-destructive">
          <AlertTriangle className="h-4 w-4" color="currentColor" />
          <AlertTitle className="text-sm font-semibold mb-1">Detected Bias: FOMO (Fear of Missing Out)</AlertTitle>
          <AlertDescription className="text-xs opacity-90 leading-relaxed">
            System noted 3 entries near intraday highs in sectors with &gt;5% daily gain. AI suggests wait-period of 15m post-rally before entry execution.
          </AlertDescription>
        </Alert>
        
        <Alert className="bg-primary/10 border-primary/20 text-primary">
          <CheckCircle className="h-4 w-4" color="currentColor" />
          <AlertTitle className="text-sm font-semibold mb-1">Strength: Loss Aversion Control</AlertTitle>
          <AlertDescription className="text-xs opacity-90 leading-relaxed text-foreground">
            Discipline rating remains high (8.4/10) on stop-loss execution. You exited 90% of losing positions within your defined 2% risk threshold.
          </AlertDescription>
        </Alert>

        <div className="mt-4 flex gap-8 border-t border-border pt-4">
          <div>
            <p className="clinical-label flex items-center gap-1">
              Emotion Score
              <Tooltip>
                <TooltipTrigger><Info className="h-3 w-3" /></TooltipTrigger>
                <TooltipContent><p className="text-xs">Based on linguistic analysis of your recent journal entries.</p></TooltipContent>
              </Tooltip>
            </p>
            <span className="stat-value text-xl">72</span>
            <span className="text-xs text-muted-foreground"> /100</span>
          </div>
          <div>
            <p className="clinical-label flex items-center gap-1">
              Mental Fatigue
              <Tooltip>
                <TooltipTrigger><Info className="h-3 w-3" /></TooltipTrigger>
                <TooltipContent><p className="text-xs">Derived from trade frequency relative to your historical baseline.</p></TooltipContent>
              </Tooltip>
            </p>
            <span className="stat-value text-xl">Low</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
