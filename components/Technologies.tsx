"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { SiPostgresql } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { SiJest } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { PiFigmaLogoBold } from "react-icons/pi";
const Technologies = () => {
  const stackText = "stack";
  const splitStackText = stackText.split("");
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-200px",
    once: true,
  });
  return (
    <div className="w-full max-w-7xl mx-auto  sm:pt-24 text-white mt-32">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        viewport={{ once: true, amount: 0.5 }}
        ref={ref}
        className="flex flex-col lg:flex-row justify-center items-center flex-1 gap-12"
      >
        <h4 className="text-4xl uppercase flex lg:flex-col gap-8 stackText relative ">
          {splitStackText.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </h4>
       
        <div className="text-5xl  w-full  flex gap-12 lg:gap-40 flex-wrap items-center justify-center">
          <BiLogoTypescript />
          <SiNextdotjs />
          <SiTailwindcss />
          <IoLogoCss3 />
          <SiPostgresql />
          <FaSass />
          <DiRedis />
          <SiJest />
          <RiJavascriptFill />
          <FaReact />
          <FaHtml5 />
          <PiFigmaLogoBold />
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;
