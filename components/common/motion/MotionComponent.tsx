"use client";
import React, { useRef } from "react";
import {
  AnimationControls,
  motion,
  Target,
  TargetAndTransition,
  useInView,
  VariantLabels,
} from "framer-motion";

const MotionComponent = ({
  children,
  className,
  margin,
  initial,
  animate,
}: {
  children: React.ReactNode;
  className?: string;
  margin?: string;
  initial?: boolean | Target | VariantLabels;
  animate?: AnimationControls | TargetAndTransition | VariantLabels | boolean;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const containerIsInView = useInView(containerRef, {
    margin: margin,
    once: true,
  });
  return (
    <motion.div
      className={className}
      initial={
        initial || {
          opacity: 0,
          y: 200,
        }
      }
      animate={
        animate ||
        (containerIsInView && {
          opacity: 1,
          y: 0,
        })
      }
      ref={containerRef}
    >
      {children}
    </motion.div>
  );
};

export default MotionComponent;
