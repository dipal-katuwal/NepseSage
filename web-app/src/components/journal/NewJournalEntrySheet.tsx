"use client";

import { Tag } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function NewJournalEntrySheet() {
  return (
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
  );
}
