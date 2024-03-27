"use client";
import React, { useRef } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { SiPostgresql } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { SiJest } from "react-icons/si";
import { motion, useInView } from "framer-motion";
import TechnologyItem from "@/components/common/TechnologyItem";
const technologies = [
  "Zod",
  "Shadcn",
  "Next-Auth",
  "React Query",
  "React Hook Form",
  "React Testing Library",
];
const Stack = () => {
  const stackText = "stack";
  const splitStackText = stackText.split("");

  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-200px",
    once: true,
  });

  const TechRef = useRef(null);
  const TechIsInView = useInView(ref, {
    margin: "-100px",
    once: true,
  });
  return (
    <div className="w-full min-h-[60%] max-w-7xl mx-auto relative  flex gap-12 mt-32 sm:mt-64 lg:mt-32 flex-col lg:flex-row px-4 pb-32  ">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        viewport={{ once: true, amount: 0.5 }}
        ref={ref}
        className="flex justify-start items-start flex-1 gap-12"
      >
        <h4 className="text-4xl uppercase flex flex-col gap-8 stackText relative">
          {splitStackText.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </h4>
        <div className="text-5xl grid grid-cols-2 gap-y-10 gap-x-14 w-full lg:w-1/4 place-items-center lg:place-items-start">
          <BiLogoTypescript />
          <SiNextdotjs />
          <SiTailwindcss />
          <IoLogoVercel />
          <SiPostgresql />
          <FaAws />
          <DiRedis />
          <SiJest />
        </div>
      </motion.div>
      <div className="lg:flex-1 mt-32 lg:mt-0">
        <motion.h4
          ref={TechRef}
          initial={{ opacity: 0, x: -50 }}
          animate={
            TechIsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
          }
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl"
        >
          Other technologies I used
        </motion.h4>
        <div className=" mt-6 gap-4 flex flex-wrap justify-start items-center w-full lg:w-3/4">
          {technologies.map((tech, index) => (
            <TechnologyItem key={tech} name={tech} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stack;
