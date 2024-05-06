"use client";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import React, { ReactNode, useRef } from "react";

type TechArrayProp = {
  name: string;
  tech: ReactNode;
};
const TechCard = ({
  title,
  tech,
  className,
  dir,
}: {
  title: string;
  tech: Array<TechArrayProp>;
  className?: string;
  dir?: "left" | "right";
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px",
    once: true,
  });
  return (
    <motion.div
      initial={{ opacity: 0, x: dir === "left" ? -200 : 200 }}
      animate={isInView && { opacity: 1, x: 0 }}
      ref={ref}
      className={cn(
        "flex w-80 flex-col  items-center min-h-80 justify-around  rounded-2xl  bg-gradient-to-r from-purple-600 to-indigo-500 overflow-hidden p-4",
        className
      )}
    >
      <div className="bg-background w-full my-4 rounded-2xl techCardShadow">
        <h3 className="text-2xl text-center my-8">{title}</h3>
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
    </motion.div>
  );
};

export default TechCard;
