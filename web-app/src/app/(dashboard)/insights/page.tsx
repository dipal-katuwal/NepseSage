import type { Metadata } from "next";
import { ThumbsUp, MessageSquare, Share2, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationNext, PaginationLink, PaginationEllipsis } from "@/components/ui/pagination";
import { Label } from "@/components/ui/label";

export const metadata: Metadata = {
  title: "Insights — NEPSE Sage AI",
  description: "Real-time market insights from verified analysts",
};

const insights = [
  {
    name: "Ankit Sharma",
    tier: "Verified Analyst",
    time: "2h ago",
    sentiment: "bullish" as const,
    symbol: "NICA",
    company: "NIC Asia Bank",
    text: "RSI showing oversold conditions on the daily timeframe. Major support at 480 holding strong. Expecting a bounce...",
    confidence: 85,
    confidenceLabel: "High",
    likes: 42,
    comments: 12,
  },
  {
    name: "Rajesh Hamal",
    tier: "Gold Tier",
    time: "5h ago",
    sentiment: "bearish" as const,
    symbol: "HIDCL",
    company: "Hydro Dev",
    text: "The sector has been over-leveraged for the past quarter. Q3 reports likely to show increased debt-to-equity...",
    confidence: 62,
    confidenceLabel: "Mid",
    likes: 18,
    comments: 8,
  },
  {
    name: "Sita Gurung",
    tier: "AI Mod",
    time: "8h ago",
    sentiment: "bullish" as const,
    symbol: "UPPER",
    company: "Upper Tamakoshi",
    text: "Strong accumulation seen at the lower Bollinger band. Volume profile indicates a shift from retail to institutional hands.",
    confidence: 92,
    confidenceLabel: "Ultra",
    likes: 156,
    comments: 45,
  },
];

export default function InsightsPage() {
  return (
    <>
      {/* Market Pulse Header */}
      <Card className="card-clinical mb-6 p-0 shadow-none">
        <CardContent className="p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
          <div>
            <h1 className="font-heading text-2xl font-bold">Market Pulse</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Real-time aggregate sentiment across NEPSE listed companies.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 md:gap-8 w-full md:w-auto">
            <div className="text-center">
              <p className="clinical-label">Global Sentiment</p>
              <div className="mt-1 flex items-center gap-2 justify-center md:justify-start">
                <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                <span className="font-heading text-lg font-bold">BULLISH</span>
              </div>
            </div>
            <div className="text-center">
              <p className="clinical-label">Avg Confidence</p>
              <span className="font-heading text-lg font-bold positive">78.4%</span>
            </div>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition flex items-center gap-2">
                  <Plus className="h-4 w-4" /> Post Insight
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Post New Insight</DialogTitle>
                  <DialogDescription>
                    Share your market analysis and technical outlook with the community.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="symbol">Symbol</Label>
                    <Input id="symbol" placeholder="e.g. NICA" className="uppercase" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="insight">Insight</Label>
                    <Textarea id="insight" placeholder="Type your analysis here..." className="h-24 resize-none" />
                  </div>
                  <div className="flex items-center space-x-2 pt-2 border-t border-border mt-2">
                    <Switch id="public" defaultChecked />
                    <Label htmlFor="public" className="font-normal cursor-pointer">Post publicly to all tiers</Label>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" className="w-full">Submit Insight</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Tabs defaultValue="sectors" className="w-full sm:w-auto overflow-x-auto">
          <TabsList className="bg-secondary/50 border border-border h-9 min-w-max">
            <TabsTrigger value="sectors" className="text-xs px-4">All Sectors</TabsTrigger>
            <TabsTrigger value="time" className="text-xs px-4">24 Hours</TabsTrigger>
            <TabsTrigger value="sentiment" className="text-xs px-4">All Sentiment</TabsTrigger>
          </TabsList>
        </Tabs>
        <span className="text-sm text-muted-foreground">
          Showing <strong className="text-foreground">128</strong> verified insights
        </span>
      </div>

      {/* Insight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {insights.map((insight) => (
          <Card key={insight.symbol} className="card-clinical flex flex-col justify-between p-0 shadow-none">
            <CardContent className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <Avatar className="h-9 w-9 bg-secondary">
                    <AvatarFallback className="text-sm font-bold">{insight.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">{insight.name}</span>
                      <Badge variant="outline" className={insight.sentiment === "bullish" ? "badge-bullish border-0" : "badge-bearish border-0"}>
                        {insight.sentiment}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {insight.tier} • {insight.time}
                    </p>
                  </div>
                </div>

                <div className="mb-2">
                  <span className="font-heading text-sm font-bold">{insight.symbol}</span>
                  <span className="ml-2 text-xs text-muted-foreground">{insight.company}</span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{insight.text}</p>
              </div>

              <div className="mt-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="clinical-label">Confidence</span>
                  <span className={`text-xs font-bold ${insight.confidence > 80 ? "positive" : insight.confidence > 60 ? "text-warning" : "negative"}`}>
                    {insight.confidence}% {insight.confidenceLabel}
                  </span>
                </div>
                <Progress 
                  value={insight.confidence} 
                  className="h-1 bg-secondary [&>div]:bg-primary" 
                />

                <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="h-6 px-2 flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground">
                      <ThumbsUp className="h-3.5 w-3.5" /> {insight.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="h-6 px-2 flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground">
                      <MessageSquare className="h-3.5 w-3.5" /> {insight.comments}
                    </Button>
                  </div>
                  <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-foreground">
                    <Share2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" className="hover:bg-secondary border border-transparent hover:border-border transition" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="hover:bg-secondary border border-transparent hover:border-border transition">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive className="bg-primary/10 border-primary text-primary hover:bg-primary/20 transition">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="hover:bg-secondary border border-transparent hover:border-border transition">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" className="hover:bg-secondary border border-transparent hover:border-border transition" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}
