import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
const SectionText = ({
  title,
  text,
  className,
  index,
}: {
  title: string;
  text: string;
  className: string;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-200px",
    once: true,
  });


  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100}}
      animate={
        isInView
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }
      }
      transition={{ duration: 0.3 }}
      viewport={{ once: true, amount: 0.5 }}
      ref={ref}
      className={cn(
        "lg:flex-1 flex flex-col gap-8 justify-center items-start px-4",
        className
      )}
    >
      <h4 className="text-4xl">{title}</h4>
      <span className="h-[1px] w-full opacity-50 bg-white"></span>
      <p className="text-lg">{text}</p>
    </motion.div>
  );
};

export default SectionText;
