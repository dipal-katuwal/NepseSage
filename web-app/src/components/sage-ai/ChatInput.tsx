"use client";

import { Send, Paperclip, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ChatInput() {
  return (
    <div className="flex-shrink-0 bg-gradient-to-t from-background via-background/95 to-transparent pt-3 pb-3">
      <div className="max-w-3xl mx-auto px-4 w-full">
        <div className="relative group">
          <div className="flex items-center bg-secondary/30 border border-border/50 rounded-full px-4 py-2 hover:border-primary/20 transition-all shadow-sm">
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/50">
              <Plus className="h-5 w-5" />
            </Button>

            <Input
              type="text"
              placeholder="Ask Sage AI anything..."
              className="flex-1 bg-transparent border-none focus-visible:ring-0 text-[15px] py-3 shadow-none placeholder:text-muted-foreground/40"
            />

            <div className="flex items-center gap-1 ml-2">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-muted-foreground hover:text-foreground hidden sm:flex">
                <Paperclip className="h-4.5 w-4.5" />
              </Button>
              <Button size="icon" className="h-9 w-9 rounded-full bg-foreground text-background hover:opacity-90 transition-all">
                <Send className="h-4.5 w-4.5" />
              </Button>
            </div>
          </div>
        </div>

        <p className="text-center text-[11px] text-muted-foreground/40 mt-2 font-normal">
          Sage AI can make mistakes. Check important info.
        </p>
      </div>
    </div>
  );
}
