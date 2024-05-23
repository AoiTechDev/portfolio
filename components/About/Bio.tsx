"use client";
import Image from "next/image";
import React, { useRef } from "react";
import codding from "@/assets/codding.png";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Noise, WobbleCard } from "../ui/wobble-card";
import RadialBlur from "../common/effects/radial-blur";
import GradientText from "../common/effects/gradient-text";

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
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center gap-10 items-center">
      <div className="order-2 lg:order-1  flex-1 gap-10 flex h-full flex-col">
        <WobbleCard className=" h-full min-h-[180px] sm:min-h-[250px] bg-grid-white/[0.05]  flex justify-center items-center     rounded-2xl">
          <RadialBlur />
          <p className="text-2xl sm:text-3xl font-semibold text-balance text-start">
            Tech <GradientText text="enthusiast" /> with a passion for
            development
          </p>
        </WobbleCard>
        <WobbleCard className=" h-full min-h-[180px] sm:min-h-[250px] rounded-2xl relative bg-grid-white/[0.05]">
          <RadialBlur />
          <p className="uppercase font-mono">the inside scoop</p>
          <p className="text-2xl sm:text-3xl  font-semibold  text-start bottom-4 left-4 text-balance">
            Currently building a matchmaking platform for <GradientText text="hackathons enjoyers"/>
          </p>
        </WobbleCard>
      </div>
      <div className="order-1 rounded-2xl overflow-hidden relative lg:order-2   flex justify-center items-center">
        <RadialBlur />
        <p className="text-2xl sm:text-3xl absolute font-semibold  text-start bottom-4 sm:bottom-10 left-4 sm:left-6 text-balance">
          I prioritize client <GradientText text="collaboration" /> fostering
          open <GradientText text="communication" />
        </p>
        <Image src={codding} alt="" className=" " />
      </div>
    </div>
  );
};

export default Bio;
