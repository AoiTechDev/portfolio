"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
const MotionTextUp = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const containerIsInView = useInView(containerRef, {
    margin: "-100px",
    once: true,
  });
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 200,
      }}
      animate={
        containerIsInView && {
          opacity: 1,
          y: 0,
        }
      }
      ref={containerRef}
    >
      {children}
    </motion.div>
  );
};

export default MotionTextUp;
