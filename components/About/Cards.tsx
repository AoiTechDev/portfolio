"use client";
import React, { useRef } from "react";
import { WobbleCard } from "../ui/wobble-card";
import Image from "next/image";
import programming from "@/assets/programming.jpg";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import Glow from "../common/effects/Glow";
import RadialBlur from "../common/effects/radial-blur";
import MotionComponent from "../common/motion/MotionComponent";

const Cards = () => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-[1400px]  relative  z-0 mx-auto w-full ">
      {/* <Glow className="sm:left-0 sm:-top-[200px] opacity-55 z-10 " /> */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black -z-10 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>

      <WobbleCard
        containerClassName="col-span-1  bg-grid-white/[0.03] lg:col-span-2 h-full  z-20 min-h-[300px] lg:min-h-[300px]"
        className=""
      >
        <MotionComponent className="max-w-md pl-4 sm:pl-6">
          <h2 className="text-left text-balance text-2xl sm:text-3xl font-semibold tracking-[-0.015em] text-white">
            {t("about:exp_header")}
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            {t("about:exp_desc")}
          </p>
        </MotionComponent>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 relative bg-grid-white/[0.03] z-20 min-h-[300px]">
        <MotionComponent className="max-w-md pl-4 sm:pl-6">
          <h2 className="max-w-80  text-left text-balance   text-2xl sm:text-3xl font-semibold tracking-[-0.015em] text-white">
            {t("about:projects_header")}
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            {t("about:projects_desc")}
          </p>
        </MotionComponent>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 z-20 relative lg:col-span-3 min-h-[500px] bg-grid-white/[0.03] lg:min-h-[600px] xl:min-h-[300px]">
        <MotionComponent className="max-w-md pl-4 sm:pl-6">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance  text-2xl sm:text-3xl font-semibold tracking-[-0.015em] text-white">
            {t("about:passion_header")}
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            {t("about:passion_desc")}
          </p>
        </MotionComponent>
        <Image
          src={programming}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute    -right-8 -bottom-10  object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
};

export default Cards;
