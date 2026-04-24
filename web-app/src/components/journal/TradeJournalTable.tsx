"use client";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreVertical } from "lucide-react";
import { journalEntries } from "./journal-data";
import { NewJournalEntrySheet } from "./NewJournalEntrySheet";

export function TradeJournalTable() {
  return (
    <Card className="card-clinical p-0 shadow-none overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between p-5 pb-0">
        <CardTitle className="clinical-label">Detailed Trade Journal</CardTitle>
        <NewJournalEntrySheet />
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
  );
}
