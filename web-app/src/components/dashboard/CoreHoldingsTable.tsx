"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Filter, Download, MoreVertical } from "lucide-react";
import { holdings } from "./dashboard-data";

export function CoreHoldingsTable() {
  return (
    <Card className="card-clinical p-0 shadow-none overflow-hidden">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 pb-0 gap-3 sm:gap-0">
        <CardTitle className="clinical-label text-sm">Core Holdings</CardTitle>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-foreground">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-foreground">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0 overflow-x-auto">
        <Table className="w-full min-w-[600px]">
          <TableHeader>
            <TableRow className="border-b border-border hover:bg-transparent">
              <TableHead className="clinical-label h-auto py-3">Symbol</TableHead>
              <TableHead className="clinical-label h-auto py-3 text-right">Qty</TableHead>
              <TableHead className="clinical-label h-auto py-3 text-right">Avg Cost</TableHead>
              <TableHead className="clinical-label h-auto py-3 text-right">LTP</TableHead>
              <TableHead className="clinical-label h-auto py-3 text-right">P/L %</TableHead>
              <TableHead className="clinical-label h-auto py-3 text-right">Market Value</TableHead>
              <TableHead className="h-auto w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {holdings.map((h) => (
              <TableRow key={h.symbol} className="border-b border-border/50 hover:bg-secondary/20">
                <TableCell className="py-3 font-heading text-sm font-bold">
                  {h.symbol}
                  <div className="text-[10px] text-muted-foreground font-sans font-normal">{h.sector}</div>
                </TableCell>
                <TableCell className="py-3 text-right text-sm text-muted-foreground">{h.qty}</TableCell>
                <TableCell className="py-3 text-right text-sm text-muted-foreground">{h.avgCost}</TableCell>
                <TableCell className="py-3 text-right text-sm">{h.ltp}</TableCell>
                <TableCell className={`py-3 text-right text-sm font-semibold ${h.positive ? "positive" : "negative"}`}>
                  {h.pl}
                </TableCell>
                <TableCell className="py-3 text-right text-sm">{h.value}</TableCell>
                <TableCell className="py-3 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Buy More</DropdownMenuItem>
                      <DropdownMenuItem>Sell Position</DropdownMenuItem>
                      <DropdownMenuItem>View Chart</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
