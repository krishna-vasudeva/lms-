import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2, Circle } from "lucide-react";

export function Progress() {
  return (
    <div className="lg:w-64 border-t lg:border-t-0 lg:border-l">
      <div className="p-4 border-b">
        <h2 className="font-semibold">Chapters</h2>
      </div>
      <ScrollArea className="h-[200px] lg:h-[calc(100vh-60px)]">
        <div className="p-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>5G - Level 1</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 ml-4">
                  <div className="flex items-center text-sm">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    Perequisites & Objectives
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    5G registration
                  </div>

                  <div className="flex items-center text-sm">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    5G registration-solution
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    5G registration call flow
                  </div>
                  <div className="flex items-center text-sm font-medium">
                    <Circle className="mr-2 h-4 w-4 text-blue-500 fill-current" />
                    Virtualized Components
                  </div>
                  <div className="flex items-center text-sm opacity-50">
                    <Circle className="mr-2 h-4 w-4" />
                    Network Interfaces
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>5G - Level 2</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 ml-4">
                  <div className="flex items-center text-sm opacity-50">
                    <Circle className="mr-2 h-4 w-4" />
                    Advanced Configurations
                  </div>
                  <div className="flex items-center text-sm opacity-50">
                    <Circle className="mr-2 h-4 w-4" />
                    Performance Optimization
                  </div>
                  <div className="flex items-center text-sm opacity-50">
                    <Circle className="mr-2 h-4 w-4" />
                    Troubleshooting
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </ScrollArea>
    </div>
  );
}
