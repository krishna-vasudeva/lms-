'use client'
import React, { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Terminal() {
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [cur, setCur] = useState<string>("");
   const dateOptions: Intl.DateTimeFormatOptions = {
     month: "short",
     day: "numeric",
     year: "numeric",
     timeZone: "UTC",
   };
   const timeOptions: Intl.DateTimeFormatOptions = {
     hour: "numeric",
     minute: "numeric",
     second: "numeric",
     timeZone: "UTC",
     hour12: false,
   };
   useEffect(() => {
    const getcurtime = () => {
        const curDate = new Date();
         const formattedDate = curDate.toLocaleString("en-US", dateOptions).replace(",", "");
         const formattedTime = curDate.toLocaleString("en-US", timeOptions).replace(",", "");
         setCur(formattedDate + " " + formattedTime);
    }
    getcurtime();
   },[])
    //  const formattedDate = curDate.toLocaleString("en-US", dateOptions).replace(",", "");
    //  const formattedTime = curDate
    //    .toLocaleString("en-US", timeOptions)
    //    .replace(",", "");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newHistory = [
        ...commandHistory,
        `$ ${currentCommand}`,
        "Command output would appear here",
      ];
      setCommandHistory(newHistory);
      setCurrentCommand("");
    }
  };

  return (
    <div className="bg-black text-green-500 p-4 rounded-lg font-mono text-sm h-[300px] flex flex-col">
      <div className="mb-2">Welcome to LAB: 5G - Level 1</div>
      <div className="mb-2">
        System information as of {cur} UTC 2024
      </div>
      <ScrollArea className="flex-grow mb-2">
        {commandHistory.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </ScrollArea>
      <div className="flex">
        <span className="mr-2">ubuntu@demo-5g-166453436-4:~$</span>
        <input
          type="text"
          value={currentCommand}
          onChange={(e) => setCurrentCommand(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent flex-grow outline-none"
          autoFocus
        />
      </div>
    </div>
  );
}
