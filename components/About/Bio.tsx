"use client";
import Image from "next/image";
import React, { useRef } from "react";
import codding from "@/assets/codding.webp";
import { motion, useInView } from "framer-motion";

const Bio = () => {
  const imgRef = useRef(null);
  const imgIsInView = useInView(imgRef, {
    margin: "-100px",
    once: true,
  });
  const pRef = useRef(null);
  const pIsInView = useInView(pRef, {
    margin: "-100px",
    once: true,
  });

  
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center gap-10 items-center">
      <div className="order-2 lg:order-1 flex-1 flex justify-center items-center">
        <motion.p
        ref={pRef}
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={
            pIsInView && {
              opacity: 1,
              y: 0,
            }
          }
          className="text-lg p-4 "
        >
          I have been coding since my time in tech school and have a degree in
          Computer Science. After graduating, I initiated a personal challenge
          to code every day. It is been over 250 days now, and I am still
          committed. Coding is not just a job for me; it is a genuine passion.
        </motion.p>
      </div>
      <motion.div
        ref={imgRef}
        initial={{ opacity: 0, scale: 0 }}
        animate={
          imgIsInView && {
            opacity: 1,
            scale: 1,
          }
        }
        className="order-1 lg:order-2 w-[400px] lg:w-[600px] flex-1 flex justify-end items-end"
      >
        <Image src={codding} alt="" className="rounded-xl" />
      </motion.div>
    </div>
  );
};

export default Bio;
