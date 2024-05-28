"use client";
import React from "react";

import { MdArrowOutward } from "react-icons/md";
import { useTranslation } from "react-i18next";
import MotionComponent from "./common/motion/MotionComponent";
import RadialBlur from "./common/effects/radial-blur";
import GradientText from "./common/effects/gradient-text";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="h-[50vh] px-2 max-w-[1600px] w-full mx-auto z-0 relative sm:mt-32 flex justify-center items-center flex-col text-white gap-8">
      <div className="absolute w-full sm:w-1/2 h-full bg-grid-white/[0.05] left-1/2 -translate-x-1/2"></div>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <MotionComponent className="z-10 ">
        <RadialBlur className="hidden sm:block" />
        <h2 className="text-2xl  sm:text-5xl text-balance text-center w-full max-w-3xl">
          {t("contact:ready")}{" "}
          <span className="bg-gradient-to-r from-purple-500 to-indigo-500 inline-block text-transparent bg-clip-text">
            {t("contact:your")}
          </span>{" "}
          {t("contact:digital")}
        </h2>
      </MotionComponent>
      <MotionComponent>
        <p className="opacity-70 text-center text-balance">
          {" "}
          {t("contact:reach")} <GradientText text={t("contact:achive")} />
        </p>
      </MotionComponent>
      <MotionComponent>
        <a href="mailto:pawel.bornikowski@gmail.com" target="_blank">
          <button className="py-4 px-8 rounded-xl bg-transparent flex gap-4 border-[#282828] border-[1px] justify-center relative items-center z-0 ">
            <span className="absolute   opacity-40 top-0 w-full h-full -z-10 bg-gradient-to-r from-[#1e1e1e] to-[#282828] "></span>
            {t("contact:contact")} <MdArrowOutward className="text-xl" />
          </button>
        </a>
      </MotionComponent>
    </section>
  );
};

export default Contact;
