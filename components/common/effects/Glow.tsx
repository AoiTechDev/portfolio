import { cn } from "@/lib/utils";
import React from "react";

const Glow = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute sm:left-[1400px] sm:top-[300px]  -z-10 -translate-x-1/2 w-4/5 md:h-[800px] rounded-[100%]  bg-gradient-to-r from-purple-800 to-indigo-700 opacity-30 blur-[90px] pointer-events-none h-1/2",
        className
      )}
    ></div>
  );
};

export default Glow;
