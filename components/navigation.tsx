"use client";

import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Home, BookOpen, Menu } from "lucide-react";

export function Navigation() {
  const [open, setOpen] = useState(false);

  const NavContent = () => (
    <>
      <div className="p-4 border-b">
        <h2 className="font-semibold">Learning Platform</h2>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-4">
          <Button variant="ghost" className="w-full justify-start">
            <Home className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <div className="space-y-1">
            <h3 className="font-medium ml-4 mb-2">Chapters</h3>
            <Button variant="ghost" className="w-full justify-start">
              <BookOpen className="mr-2 h-4 w-4" />
              OpenRAN - Level 1
            </Button>
            <Button variant="ghost" className="w-full justify-start pl-8">
              Introduction
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start pl-8 bg-accent"
            >
              Getting Started
            </Button>
          </div>
        </div>
      </ScrollArea>
    </>
  );

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden fixed left-4 top-4 z-40"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <NavContent />
        </SheetContent>
      </Sheet>
      <div className="hidden lg:flex w-64 border-r bg-muted/40 flex-col">
        <NavContent />
      </div>
    </>
  );
}
