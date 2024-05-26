import { cn } from "@/lib/utils";
import React from "react";

const RadialBlur = ({
  precent = "10",
  className,
}: {
  precent?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `absolute pointer-events-none inset-0 flex items-center opacity-80 justify-center dark:bg-black bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_${precent}%,black)]`,
        className
      )}
    ></div>
  );
};

export default RadialBlur;
