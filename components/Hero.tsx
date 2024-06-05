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

import { useTranslation } from "next-i18next";
import { Spotlight } from "./ui/Spotlight";
import GradientText from "./common/effects/gradient-text";
import MotionComponent from "./common/motion/MotionComponent";
const Hero = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  const { t } = useTranslation();
  return (
    <main
      id="home"
      className="w-full max-w-[1600px] min-h-[100vh]  mx-auto bg-grid-white/[0.05]  text-white   flex min-[1400px]:flex-row flex-col antialiased    items-center relative mt-36 mb-48 min-[1400px]:mt-0 z-0 p-4 sm:p-8"
    >
      <Spotlight
        className="hidden lg:block -top-[600px] -left-[700px] opacity-50"
        fill="white"
      />
      <Spotlight
        className="hidden lg:block  -top-[500px] -left-[1200px] opacity-50"
        fill="white"
      />
      <Spotlight
        className="hidden lg:block  -top-[700px] -right-[900px] rotate-90 opacity-50"
        fill="white"
      />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <Glow className="top-3/4 left-1/2 z-20" />
      <div className="min-[1400px]:flex-1 flex z-0 justify-center items-center min-[1400px]:justify-start min-[1400px]:items-start flex-col w-full min-[1400px]:max-w-2xl mx-auto  gap-10">
        <MotionComponent className="z-10">
          <p className="text-center min-[1400px]:text-start text-lg ">
            {t("home:greetings" || "Home:greetings")}
          </p>
        </MotionComponent>
        <h1 className="text-6xl text-start flex flex-col font-bold justify-between gap-4 px-4 min-[1400px]:px-0">
          <MotionComponent
            transition={{
              delay: 0.1,
            }}
          >
            <span className="w-full text-center min-[1400px]:text-start bg-gradient-to-r ">
              <GradientText text="Front-end" />
            </span>
          </MotionComponent>{" "}
          <MotionComponent
            transition={{
              delay: 0.2,
            }}
          >
            <span className="w-full text-center min-[1400px]:text-start">
              <GradientText text="Developer" />
            </span>
          </MotionComponent>
        </h1>
        <MotionComponent
          transition={{
            delay: 0.3,
          }}
        >
          <p className="text-balance text-center w-full max-w-2xl min-[1400px]:text-start">
            {t("home:subheader" || "Home:subheader")}
          </p>
        </MotionComponent>
        <MotionComponent
          transition={{
            delay: 0.4,
          }}
          className="flex z-40 w-full max-w-3xl justify-around  text-5xl min-[1400px]:text-6xl min-[1400px]:justify-between"
        >
          <FaReact />
          <SiNextdotjs />
          <BiLogoTypescript />
          <SiTailwindcss />
        </MotionComponent>
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
          delay: isSmallDevice ? 0.8 : 0.6,
        }}
        className="min-[1400px]:flex-1 mt-16 flex justify-center items-center z-30"
      >
        <Image priority src={programming} alt="programming" width={700} />
      </motion.div>
    </main>
  );
};

export default Hero;
