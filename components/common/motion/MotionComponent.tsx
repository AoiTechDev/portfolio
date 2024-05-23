"use client";
import React, { useRef } from "react";
import {
  AnimationControls,
  motion,
  Target,
  TargetAndTransition,
  Transition,
  useInView,
  VariantLabels,
} from "framer-motion";

const MotionComponent = ({
  children,
  className,
  margin,
  initial,
  animate,
  transition
}: {
  children: React.ReactNode;
  className?: string;
  margin?: string;
  initial?: boolean | Target | VariantLabels;
  animate?: AnimationControls | TargetAndTransition | VariantLabels | boolean;
  transition?: Transition;
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
          y: 100,
        }
      }
      animate={
        animate ||
        (containerIsInView && {
          opacity: 1,
          y: 0,
        })
      }
      transition={transition}
      ref={containerRef}
    >
      {children}
    </motion.div>
  );
};

export default MotionComponent;
