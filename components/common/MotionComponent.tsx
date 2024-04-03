import React from 'react'
import { motion } from "framer-motion";
const MotionComponent = ({
    children,
    delay,
    x = -100,
    y = 0,
  }: {
    children: React.ReactNode;
    delay: number;
    x?: number;
    y?: number;
  }) => {
  return (
    <motion.div
    initial={{
      opacity: 0,
      x,
      y,
    }}
    animate={{
      opacity: 1,
      x: 0,
      y: 0,
    }}
    transition={{ delay }}
    className="w-full"
  >
    {children}
  </motion.div>
  )
}

export default MotionComponent