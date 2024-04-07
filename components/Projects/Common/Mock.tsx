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
        "w-full relative my-32 lg:mt-32 flex justify-start items-start bg-white  ",
        className
      )}
    >
      {image}
    </div>
  );
};

export default Mock;
