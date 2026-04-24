"use client";

import { AlertTriangle, CheckCircle, MoreVertical, Info, Calendar as CalendarIcon, Tag } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { AuthGuard } from "@/components/AuthGuard";

const journalEntries = [
  { ticker: "NICA", sector: "Commercial Bank", date: "2023-11-24", emotion: "Patient", emotionColor: "positive", discipline: "9.5", notes: "Entry on pivot bounce. Followed setup exactly..." },
  { ticker: "UPPER", sector: "Hydro Power", date: "2023-11-22", emotion: "Fearful", emotionColor: "negative", discipline: "3.2", notes: "Exited early due to minor pull back. Missed 4..." },
  { ticker: "SHL", sector: "Hotels", date: "2023-11-21", emotion: "Neutral", emotionColor: "text-muted-foreground", discipline: "7.0", notes: "Standard sector rotation play. No bias detecte..." },
];

export default function JournalClient() {
  return (
    <AuthGuard
      featureName="Behavior Lab"
      featureDesc="The Behavior Lab uses AI to analyze your trading psychology and discipline. Sign in to log your trades and get clinical feedback on your biases."
    >
      <TooltipProvider delayDuration={300}>
        <h1 className="font-heading text-2xl font-bold">Behavior Lab</h1>
        <p className="mt-1 text-sm text-muted-foreground mb-6">
          Analyze the psychology behind your trades. The Sage AI identifies pattern-matching biases and provides clinical feedback.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Behavioral Engine */}
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

          {/* Sentiment Trend Chart */}
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
        </div>

        {/* Discipline Heat Map */}
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

        {/* Detailed Trade Journal */}
        <Card className="card-clinical p-0 shadow-none overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between p-5 pb-0">
            <CardTitle className="clinical-label">Detailed Trade Journal</CardTitle>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="text-sm text-primary hover:text-primary/80 hover:bg-transparent h-auto p-0">
                  + New Entry
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto sm:max-w-[450px]">
                <SheetHeader>
                  <SheetTitle>Log Trade Emotion</SheetTitle>
                  <SheetDescription>
                    Keep an accurate clinical record of your mindset during entries/exits to improve long-term discipline.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-6 py-6">
                   {/* Calendar Picker Example */}
                   <div className="flex flex-col gap-2">
                      <Label className="clinical-label text-[0.65rem]">Trade Date</Label>
                      <div className="border border-border rounded-md inline-block w-fit">
                        <Calendar mode="single" className="pointer-events-none" />
                      </div>
                   </div>

                   <div className="flex flex-col gap-3">
                     <Label className="clinical-label text-[0.65rem]">Dominant Emotion</Label>
                     <ToggleGroup type="single" className="justify-start flex-wrap gap-2" defaultValue="neutral">
                       <ToggleGroupItem value="confident" aria-label="Confident" className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground text-xs h-7 px-3">Confident</ToggleGroupItem>
                       <ToggleGroupItem value="neutral" aria-label="Neutral" className="bg-secondary text-foreground text-xs h-7 px-3">Neutral</ToggleGroupItem>
                       <ToggleGroupItem value="fearful" aria-label="Fearful" className="bg-destructive/10 text-destructive border border-destructive/20 hover:bg-destructive hover:text-destructive-foreground data-[state=on]:bg-destructive data-[state=on]:text-destructive-foreground text-xs h-7 px-3">Fearful / FOMO</ToggleGroupItem>
                       <ToggleGroupItem value="greedy" aria-label="Greedy" className="bg-warning/10 text-warning border border-warning/20 hover:bg-warning hover:text-warning-foreground data-[state=on]:bg-warning data-[state=on]:text-primary-foreground text-xs h-7 px-3">Greedy</ToggleGroupItem>
                     </ToggleGroup>
                   </div>

                   <div className="flex flex-col gap-4">
                     <Label className="clinical-label text-[0.65rem] flex items-center justify-between">
                       <span>Discipline Adherence</span>
                       <span className="text-xs text-foreground">8 / 10</span>
                     </Label>
                     <Slider defaultValue={[8]} max={10} step={1} className="w-full" />
                   </div>

                   <div className="flex flex-col gap-3">
                     <Label className="clinical-label text-[0.65rem]">Trade Type (Strategy)</Label>
                     <RadioGroup defaultValue="breakout">
                       <div className="flex items-center space-x-2">
                         <RadioGroupItem value="breakout" id="breakout" />
                         <Label htmlFor="breakout" className="text-sm font-normal">Breakout</Label>
                       </div>
                       <div className="flex items-center space-x-2">
                         <RadioGroupItem value="reversion" id="reversion" />
                         <Label htmlFor="reversion" className="text-sm font-normal">Mean Reversion</Label>
                       </div>
                       <div className="flex items-center space-x-2">
                         <RadioGroupItem value="momentum" id="momentum" />
                         <Label htmlFor="momentum" className="text-sm font-normal">Momentum Continuation</Label>
                       </div>
                     </RadioGroup>
                   </div>

                   <div className="flex flex-col gap-2">
                     <Label className="clinical-label text-[0.65rem]">Clinical Tags</Label>
                     <div className="flex flex-col gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="tag-plan" defaultChecked />
                        <Label htmlFor="tag-plan" className="text-sm font-normal text-muted-foreground flex items-center gap-1.5"><Tag className="w-3 h-3"/> Followed Plan Exactly</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="tag-news" />
                        <Label htmlFor="tag-news" className="text-sm font-normal text-muted-foreground flex items-center gap-1.5"><Tag className="w-3 h-3"/> News Driven</Label>
                      </div>
                     </div>
                   </div>
                </div>
                <SheetFooter>
                  <Button type="submit" className="w-full">Save Entry</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>

          </CardHeader>
          <CardContent className="p-0 overflow-x-auto">
            <Table className="w-full min-w-[600px]">
              <TableHeader>
                <TableRow className="border-b border-border hover:bg-transparent">
                  <TableHead className="clinical-label h-auto py-3 text-left">Ticker</TableHead>
                  <TableHead className="clinical-label h-auto py-3 text-left">Date</TableHead>
                  <TableHead className="clinical-label h-auto py-3 text-center">Emotion Tag</TableHead>
                  <TableHead className="clinical-label h-auto py-3 text-center">Discipline Rating</TableHead>
                  <TableHead className="clinical-label h-auto py-3 text-left">Clinical Notes</TableHead>
                  <TableHead className="clinical-label h-auto py-3 text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {journalEntries.map((e) => (
                  <TableRow key={e.ticker + e.date} className="border-b border-border/50 hover:bg-secondary/20">
                    <TableCell className="py-3">
                      <span className="font-heading text-sm font-bold">{e.ticker}</span>
                      <p className="text-xs text-muted-foreground">{e.sector}</p>
                    </TableCell>
                    <TableCell className="py-3 text-sm text-muted-foreground font-mono">{e.date}</TableCell>
                    <TableCell className="py-3 text-center">
                      <Badge variant="outline" className={`border-0 rounded px-2 py-0.5 text-[10px] font-semibold ${e.emotionColor === "positive" ? "badge-bullish" : e.emotionColor === "negative" ? "badge-bearish" : "bg-secondary text-muted-foreground"}`}>
                        {e.emotion}
                      </Badge>
                    </TableCell>
                    <TableCell className={`py-3 text-center text-sm font-bold ${parseFloat(e.discipline) > 7 ? "positive" : parseFloat(e.discipline) < 5 ? "negative" : "text-foreground"}`}>
                      {e.discipline}
                    </TableCell>
                    <TableCell className="py-3 text-sm text-muted-foreground w-1/3 truncate max-w-xs">{e.notes}</TableCell>
                    <TableCell className="py-3 text-right">
                      <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-foreground">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TooltipProvider>
    </AuthGuard>
  );
}
