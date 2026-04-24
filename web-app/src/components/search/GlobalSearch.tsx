"use client";

import { useState, useEffect } from "react";
import { Search, X, LineChart, LayoutDashboard, Settings } from "lucide-react";
import {
  Command,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

interface GlobalSearchProps {
  isExpanded?: boolean;
  onExpandChange?: (expanded: boolean) => void;
}

export function GlobalSearch({ isExpanded: controlledExpanded, onExpandChange }: GlobalSearchProps) {
  const [openSearch, setOpenSearch] = useState(false);
  const [internalExpanded, setInternalExpanded] = useState(false);

  const isSearchExpanded = controlledExpanded ?? internalExpanded;
  const setIsSearchExpanded = (val: boolean) => {
    setInternalExpanded(val);
    onExpandChange?.(val);
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpenSearch((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className={`relative flex items-center ${isSearchExpanded ? "flex-1" : ""}`}>
      <Popover open={openSearch} onOpenChange={setOpenSearch}>
        <PopoverTrigger asChild>
          <div className={`group relative flex items-center ${isSearchExpanded ? "w-full" : ""}`}>
            <Search className={`absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary ${isSearchExpanded ? "z-10 block" : "hidden md:block"}`} />
            <input
              type="text"
              placeholder="Search Symbols..."
              className={`h-8 rounded-md border border-border bg-input pl-9 pr-9 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300 ${isSearchExpanded
                  ? "w-full focus:ring-2"
                  : "w-0 md:w-72 focus:w-40 md:focus:w-72 opacity-0 md:opacity-100"
                }`}
              onFocus={() => {
                setOpenSearch(true);
                if (window.innerWidth < 768) setIsSearchExpanded(true);
              }}
            />
            {!isSearchExpanded && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 md:hidden absolute left-0"
                onClick={() => setIsSearchExpanded(true)}
              >
                <Search className="h-4 w-4" />
              </Button>
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent
          className={`${isSearchExpanded ? "w-[calc(100vw-2rem)]" : "w-72"} p-0`}
          align={isSearchExpanded ? "center" : "start"}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <Command>
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Stocks">
                <CommandItem onSelect={() => { setOpenSearch(false); setIsSearchExpanded(false); }}>
                  <LineChart className="mr-2 h-4 w-4" /> NICA
                  <span className="ml-auto text-xs text-muted-foreground">Commercial Banks</span>
                </CommandItem>
                <CommandItem onSelect={() => { setOpenSearch(false); setIsSearchExpanded(false); }}>
                  <LineChart className="mr-2 h-4 w-4" /> NABIL
                  <span className="ml-auto text-xs text-muted-foreground">Commercial Banks</span>
                </CommandItem>
                <CommandItem onSelect={() => { setOpenSearch(false); setIsSearchExpanded(false); }}>
                  <LineChart className="mr-2 h-4 w-4" /> SHL
                  <span className="ml-auto text-xs text-muted-foreground">Hotels</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Shortcuts">
                <CommandItem onSelect={() => { setOpenSearch(false); setIsSearchExpanded(false); }}>
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  <span>Dashboard</span>
                </CommandItem>
                <CommandItem onSelect={() => { setOpenSearch(false); setIsSearchExpanded(false); }}>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {isSearchExpanded && (
        <Button
          variant="ghost"
          size="icon"
          className="ml-2 h-8 w-8 shrink-0 md:hidden"
          onClick={() => setIsSearchExpanded(false)}
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
