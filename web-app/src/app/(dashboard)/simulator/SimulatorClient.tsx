"use client";

import { Play, Pause, RotateCcw, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog";
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuShortcut } from "@/components/ui/context-menu";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AuthGuard } from "@/components/AuthGuard";

export default function SimulatorClient() {
  return (
    <AuthGuard
      featureName="Trading Simulator"
      featureDesc="The Trading Simulator allows you to practice your strategies with Rs. 5,00,000 in virtual capital. Sign in to start your paper trading journey without risk."
    >
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Trading Simulator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4 sm:gap-0">
        <div>
          <h1 className="font-heading text-2xl font-bold">Trading Simulator</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Practice your strategies with virtual capital. No risk, real market data.
          </p>
        </div>
        
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Lock className="w-4 h-4" /> Reset Simulation Auth
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action will delete your current simulation history and reset your virtual balance. Verify your action with a secure pin.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <div className="py-4 flex justify-center">
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Reset Simulator</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Virtual Balance", value: "Rs. 500,000" },
          { label: "Unrealized P/L", value: "+Rs. 12,400", positive: true },
          { label: "Win Rate", value: "68%" },
          { label: "Trades Today", value: "5" },
        ].map((s) => (
          <Card key={s.label} className="card-clinical p-0 shadow-none">
            <CardContent className="p-5">
              <p className="clinical-label text-[10px] uppercase">{s.label}</p>
              <span className={`stat-value text-xl mt-2 block ${s.positive ? "positive" : ""}`}>{s.value}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="h-[500px]">
        {/* @ts-ignore */}
        <ResizablePanelGroup direction="horizontal" className="min-h-full w-full rounded-lg border border-border">
          <ResizablePanel defaultSize={65} minSize={40}>
            <div className="h-full flex flex-col bg-card p-4">
              <div className="flex items-center justify-between mb-4 border-b border-border pb-4">
                <h3 className="clinical-label text-sm">Market Simulation</h3>
                <div className="flex gap-2">
                  <Button size="icon" variant="default" className="h-8 w-8">
                    <Play className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                    <Pause className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex-1 rounded-md bg-secondary/50 flex items-center justify-center border border-border mt-2">
                <div className="text-center">
                  <p className="text-muted-foreground text-sm font-semibold">Live Simulation Chart</p>
                  <p className="text-xs text-muted-foreground mt-1">Select a symbol to begin trading</p>
                </div>
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle className="bg-border" />
          <ResizablePanel defaultSize={35} minSize={25}>
            <div className="h-full flex flex-col gap-4 bg-muted/20 p-4">
              
              <Card className="card-clinical p-0 shadow-none">
                <CardHeader className="p-4 pb-2 border-b border-border">
                  <CardTitle className="clinical-label text-xs">Quick Trade</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <Input placeholder="Symbol (e.g. NICA)" className="w-full text-sm uppercase font-heading bg-background" />
                    <div className="grid grid-cols-2 gap-2">
                      <Input placeholder="Qty" type="number" className="text-sm bg-background font-mono" />
                      <Input placeholder="Price" type="number" className="text-sm bg-background font-mono" />
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <Button className="w-full font-semibold">Buy</Button>
                      <Button variant="destructive" className="w-full font-semibold">Sell</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-clinical p-0 shadow-none flex-1 overflow-hidden flex flex-col">
                <CardHeader className="p-4 pb-2 border-b border-border shrink-0">
                  <CardTitle className="clinical-label text-xs">Open Positions (Right Click)</CardTitle>
                </CardHeader>
                <CardContent className="p-4 flex-1 overflow-y-auto space-y-2">
                  {[
                    { symbol: "NICA", qty: 100, pnl: "+2.4%", positive: true },
                    { symbol: "SHL", qty: 50, pnl: "-1.2%", positive: false },
                  ].map((p) => (
                    <ContextMenu key={p.symbol}>
                      <ContextMenuTrigger>
                        <div className="flex items-center justify-between rounded-md bg-background border border-border p-3 transition hover:bg-secondary/50 cursor-context-menu">
                          <div>
                            <span className="font-heading text-sm font-bold">{p.symbol}</span>
                            <span className="text-xs text-muted-foreground ml-2 font-mono">{p.qty} units</span>
                          </div>
                          <span className={`text-sm font-semibold ${p.positive ? "positive" : "negative"}`}>{p.pnl}</span>
                        </div>
                      </ContextMenuTrigger>
                      <ContextMenuContent className="w-48">
                        <ContextMenuItem>Close Position <ContextMenuShortcut>⌘C</ContextMenuShortcut></ContextMenuItem>
                        <ContextMenuItem>Add to Position</ContextMenuItem>
                        <ContextMenuSeparator />
                        <ContextMenuItem>View Chart analysis</ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  ))}
                </CardContent>
              </Card>

            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </AuthGuard>
  );
}
