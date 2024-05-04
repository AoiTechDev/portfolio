"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Header = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px",
    once: true,
  });
  return (
    <motion.h2
      initial={{
        opacity: 0,
        x: -200,
      }}
      animate={
        isInView && {
          opacity: 1,
          x: 0,
        }
      }
      ref={ref}
      className="text-[100px] font-semibold  lg:text-[190px]  text-center lg:text-left relative "
    >
      About
    </motion.h2>
  );
};

export default Header;
