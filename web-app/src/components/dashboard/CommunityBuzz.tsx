"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function CommunityBuzz() {
  return (
    <Card className="card-clinical p-0 shadow-none">
       <CardHeader className="p-5 pb-4">
        <CardTitle className="clinical-label">Community Buzz</CardTitle>
      </CardHeader>
      <CardContent className="px-5 pb-5 pt-0 space-y-3">
        <div className="rounded-md bg-secondary p-3">
          <div className="flex items-center gap-2 mb-2">
            <Avatar className="h-6 w-6">
              <AvatarFallback className="text-[10px]">B</AvatarFallback>
            </Avatar>
            <span className="text-xs font-semibold">BullishRider</span>
            <span className="text-xs text-muted-foreground">in #hydro</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            AKJCL might breakout tomorrow. Accumulation detected by whale trackers.
          </p>
        </div>
        <div className="rounded-md bg-secondary p-3">
          <div className="flex items-center gap-2 mb-2">
            <Avatar className="h-6 w-6">
              <AvatarFallback className="text-[10px] bg-primary/20 text-primary">S</AvatarFallback>
            </Avatar>
            <span className="text-xs font-semibold">Sage_Bot</span>
            <Badge variant="outline" className="text-[10px] py-0 px-1.5 h-4 border-primary/30 text-primary">System</Badge>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Multiple Insider trades reported for NLIC in the last 48 hours.
          </p>
        </div>
        <Button variant="outline" className="w-full text-xs mt-3 h-8">
          Join Discussion
        </Button>
      </CardContent>
    </Card>
  );
}
