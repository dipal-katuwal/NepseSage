"use client";

import { Bell, Info } from "lucide-react";
import { SheetContent, SheetHeader, SheetTitle, SheetTrigger, Sheet } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { notificationGroups } from "@/components/navigation/nav-data";

export function NotificationSheet() {
  return (
    <Sheet modal={false}>
      <SheetTrigger asChild>
        <button className="relative h-8 w-8 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
          <Bell className="h-4 w-4" />
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[9px] font-bold flex items-center justify-center leading-none">
            4
          </span>
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-[420px] p-0 flex flex-col gap-0">
        {/* Header */}
        <SheetHeader className="flex flex-row items-center justify-between px-5 py-4 border-b border-border shrink-0">
          <div className="flex items-center gap-3">
            <SheetTitle className="text-base font-bold font-heading">Notifications</SheetTitle>
            <Badge variant="secondary" className="text-[10px] font-bold text-primary bg-primary/10 border-0 px-2 py-0.5 rounded-full">
              4 NEW
            </Badge>
          </div>
        </SheetHeader>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          {notificationGroups.map((group) => (
            <div key={group.label}>
              {/* Group label */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-border/50 bg-muted/30">
                <group.icon className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  {group.label}
                </span>
              </div>
              {/* Notification items */}
              {group.items.map((item) => (
                <div
                  key={item.id}
                  className={`px-5 py-4 border-b border-border/40 transition-colors hover:bg-muted/20 ${item.unread ? "bg-primary/5" : ""
                    }`}
                >
                  <div className="flex items-start gap-3">
                    {/* Avatar or icon */}
                    {"avatar" in item && item.avatar ? (
                      <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-[10px] font-bold text-primary">
                        {item.avatar}
                      </div>
                    ) : (
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${item.unread ? "bg-primary/15" : "bg-muted"
                        }`}>
                        {item.unread
                          ? <Bell className="h-3.5 w-3.5 text-primary" />
                          : <Info className="h-3.5 w-3.5 text-muted-foreground" />}
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <p className={`text-sm leading-snug ${item.unread ? "font-semibold text-foreground" : "font-medium text-foreground/80"
                          }`}>
                          {item.title}
                        </p>
                        <span className="text-[10px] text-muted-foreground shrink-0 mt-0.5">{item.time}</span>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      {item.actions.length > 0 && (
                        <div className="flex items-center gap-2 mt-3">
                          <button className="text-xs font-semibold px-3 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                            {item.actions[0]}
                          </button>
                          {item.actions[1] && (
                            <button className="text-xs font-medium px-3 py-1.5 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                              {item.actions[1]}
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="shrink-0 border-t border-border p-4">
          <button className="w-full py-2.5 text-sm font-medium text-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
            View All Notifications
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
