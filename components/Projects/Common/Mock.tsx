import { cn } from "@/lib/utils";
import React from "react";

const Mock = ({
  image,
  className,
}: {
  image: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "w-full h-[50%] lg:h-full relative my-32 lg:mt-32 flex justify-start items-start bg-gray-800   ",
        className
      )}
    >
      {image}
    </div>
  );
};

export default Mock;
