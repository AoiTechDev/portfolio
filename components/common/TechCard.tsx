import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { WobbleCard } from "../ui/wobble-card";

type TechArrayProp = {
  name: string;
  tech: ReactNode;
};
const TechCard = ({
  title,
  tech,
  className,
}: {
  title: string;
  tech: Array<TechArrayProp>;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex w-80 flex-col  items-center min-h-80 justify-around  rounded-2xl  bg-gradient-to-r from-purple-600 to-indigo-500 overflow-hidden p-4",
        className
      )}
    >
      <div className="bg-background w-full my-4 rounded-2xl techCardShadow">
        <h4 className="text-2xl text-center my-8">{title}</h4>
      </div>

    
        {tech.map((item) => (
          <div
            className="grid w-full grid-cols-2 gap-4 items-center px-6"
            key={item.name}
          >
            {item.tech}
            <p className="text-lg ">{item.name}</p>
          </div>
        ))}
   
    </div>
  );
};

export default TechCard;
