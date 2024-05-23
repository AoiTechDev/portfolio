"use client";
import Image from "next/image";
import React, { useRef } from "react";
import codding from "@/assets/codding.png";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Noise, WobbleCard } from "../ui/wobble-card";
import RadialBlur from "../common/effects/radial-blur";
import GradientText from "../common/effects/gradient-text";
import { GetLocaleFromStorage } from "@/hooks/getLocaleFromStorage";

const Bio = () => {
  const { t } = useTranslation();

  const locale = GetLocaleFromStorage();
  console.log(locale)
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center gap-10 items-center">
      <div className="order-2 lg:order-1  flex-1 gap-10 flex h-full flex-col">
        <WobbleCard className=" h-full min-h-[180px] sm:min-h-[250px] bg-grid-white/[0.05]  flex justify-center items-center     rounded-2xl">
          <RadialBlur />
          <p className="text-2xl sm:text-3xl font-semibold text-balance text-start">
            <GradientText text={t("about:enthusiast")} /> {t("about:tech")}{" "}
            {t("about:tect_passion")}
          </p>
        </WobbleCard>
        <WobbleCard className=" h-full min-h-[180px] sm:min-h-[250px] rounded-2xl relative bg-grid-white/[0.05]">
          <RadialBlur />
          <p className="uppercase font-mono">{t("about:scoop")}</p>
          <p className="text-2xl sm:text-3xl  font-semibold  text-start bottom-4 left-4 text-balance">
            {t("about:matchmaking")}{" "}
            <GradientText text={t("about:hackathon")} />
          </p>
        </WobbleCard>
      </div>
      <div className="order-1 rounded-2xl overflow-hidden relative lg:order-2   flex justify-center items-center">
        <RadialBlur />
        <p className="text-2xl sm:text-3xl absolute font-semibold  text-start bottom-4 sm:bottom-10 left-4 sm:left-6 text-balance">
          {t("about:priority1")} <GradientText text={t("about:colab")} />{" "}
          {t("about:priority2")}{" "}
          <GradientText text={t("about:communication")} />
        </p>
        <Image src={codding} alt="" className=" " />
      </div>
    </div>
  );
};

export default Bio;
