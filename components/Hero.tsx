"use client";
import React from "react";

import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import Image from "next/image";
import programming from "@/assets/programming.svg";
import Glow from "./common/effects/Glow";
import { useMediaQuery } from "@mui/material";
import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";
const Hero = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  const { t } = useTranslation();
  return (
    <main className="w-full max-w-[1600px]  min-h-[60vh] mx-auto   text-white   flex min-[1400px]:flex-row flex-col items-center relative mt-24 mb-48 lg:mt-0 z-0 p-4">
      <Glow className="top-3/4 left-1/2" />
      <div className="min-[1400px]:flex-1 flex justify-center items-center min-[1400px]:justify-start min-[1400px]:items-start flex-col w-full min-[1400px]:max-w-2xl mx-auto  gap-10">
        <motion.p
          initial={{
            opacity: 0,
            transform: "translateY(20px)",
          }}
          animate={{
            opacity: 1,
            transform: "translateY(0)",
          }}
          className="text-center min-[1400px]:text-start text-lg "
        >
         {t("Home:greetings")}
        </motion.p>

        <h1 className="text-6xl text-start flex flex-col font-bold justify-between gap-4 px-4 min-[1400px]:px-0">
          <motion.span
            initial={{
              opacity: 0,
              transform: "translateX(-60px)",
            }}
            animate={{
              opacity: 1,
              transform: "translateY(0)",
            }}
            transition={{
              delay: 0.2,
            }}
            className="w-full text-center min-[1400px]:text-start bg-gradient-to-r from-purple-500 to-indigo-500 inline-block text-transparent bg-clip-text"
          >
            Front-end
          </motion.span>{" "}
          <motion.span
            initial={{
              opacity: 0,
              transform: "translateX(60px)",
            }}
            animate={{
              opacity: 1,
              transform: "translateY(0)",
            }}
            transition={{
              delay: 0.2,
            }}
            className="w-full text-center min-[1400px]:text-start bg-gradient-to-r from-purple-500 to-indigo-500 inline-block text-transparent bg-clip-text"
          >
            Developer
          </motion.span>
        </h1>
        <motion.p
          initial={{
            opacity: 0,
            transform: "translateY(20px)",
          }}
          animate={{
            opacity: 1,
            transform: "translateY(0)",
          }}
          transition={{
            delay: 0.4,
          }}
          className="text-balance text-center w-full max-w-2xl min-[1400px]:text-start"
        >
          Step into my digital universe, where pixels come alive and code paints
          the canvas of innovation, showcasing front-end mastery in every click.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.6,
          }}
          className="flex justify-around w-full max-w-3xl min-[1400px]:justify-start min-[1400px]:gap-32 text-5xl min-[1400px]:text-6xl"
        >
          <FaReact />
          <SiNextdotjs />
          <BiLogoTypescript />
          <SiTailwindcss />
        </motion.div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
          
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay:  isSmallDevice ? 0.8 : 0.6,

        }}
        className="min-[1400px]:flex-1 mt-16 flex justify-center items-center"
      >
        <Image priority src={programming} alt="programming" width={700} />
      </motion.div>
      {/* <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          delay: 0.6,
        }}
        className="h-[150px] min-[1400px]:h-[300px] w-[1px] absolute top-[400px] sm:top-[250px] left-[50%] -translate-x-1/2 bg-gradient-to-b from-purple-500 to-indigo-500"
      ></motion.div> */}
    </main>
  );
};

export default Hero;
