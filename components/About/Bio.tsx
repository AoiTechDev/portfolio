"use client";
import Image from "next/image";
import React, { useRef } from "react";
import codding from "@/assets/codding.webp";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Noise, WobbleCard } from "../ui/wobble-card";
import RadialBlur from "../common/effects/radial-blur";

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
        <WobbleCard className=" h-full min-h-[280px] bg-grid-white/[0.05]  flex justify-center items-center     rounded-2xl">
          <RadialBlur />
          <p className="text-3xl font-semibold text-center">
            Tech enthusiast with a passion for development
          </p>
        </WobbleCard>
        <WobbleCard className=" h-full min-h-[280px] rounded-2xl relative flex justify-center items-center bg-grid-white/[0.05]">
          <RadialBlur />
          <p className="text-3xl font-semibold text-center">
            Tech enthusiast with a passion for development
          </p>
        </WobbleCard>
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
        className="order-1 rounded-2xl overflow-hidden relative lg:order-2 w-[400px] lg:w-[800px] h-[600px]  flex justify-center bg-gradient-to-r from-purple-600 to-indigo-500 items-center"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
        <Noise />
        <Image src={codding} alt="" className=" " />
      </motion.div>
    </div>
  );
};

export default Bio;
