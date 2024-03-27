"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
const TechnologyItem = ({ name, index }: { name: string; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50px",
    once: true,
  });
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={
        isInView
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x:  -10  }
      }
      transition={{ delay: index*0.1}}
      viewport={{ once: true, amount: 0.5 }}

      ref={ref}
      className="flex justify-center items-center"
    >
      <span className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg p-2 font-medium">
        {name}
      </span>
    </motion.div>
  );
};

export default TechnologyItem;
