"use client";
import mealfulnessLandpageMock from "@/assets/landpage-mobile-portrait.png";
import aifredMock from "@/assets/mock_aifred.png";
import clearflowMock from "@/assets/mock_clearflow.png";
import wiredwaveLandpageMock from "@/assets/wiredwave-landpage-portrait.png";
import {
  aifredLink,
  clearFlowLink,
  MealfulnessLinks,
  WiredWaveLinks,
} from "@/constants/links";
import {
  aifredStack,
  clearflowStack,
  mealfulnessStack,
  wiredwaveStack,
} from "@/constants/stack";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Glow from "./common/effects/Glow";
import ProjectSection from "./common/ProjectSection/ProjectSection";
import Line from "./svg/line";
import RadialBlur from "./common/effects/radial-blur";
const Projects = () => {
  const [active, setActive] = useState("personal");

  const handleActive = (e: React.MouseEvent<HTMLButtonElement>) => {
    const textContent = e.currentTarget.textContent;
    if (textContent) {
      setActive(textContent.toLowerCase());
    }
  };
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-200px",
    once: true,
  });
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="w-full max-w-7xl relative z-0 min-h-screen mx-auto  sm:pt-24 text-white mt-80"
    >
      <Glow className="sm:left-1/2 sm:top-1/2 left-1/2 top-1/2" />
      <h2
        ref={ref}
        className="text-6xl bg-grid-white/[0.05] relative lg:text-[100px] font-semibold z-0 p-2 gap-4 lg:gap-0"
      >
        <RadialBlur className="z-10"/>
        <div className="absolute  left-1/2  z-20 -translate-x-1/2 w-4/5 md:h-[400px] rounded-[100%]  bg-gradient-to-r from-purple-800 to-indigo-700 opacity-40 blur-[90px] pointer-events-none h-1/2"></div>
        <div className="flex  w-full justify-center items-center  flex-col sm:flex-row gap-2 sm:gap-8">
          <motion.span
            initial={{
              opacity: 0,
              x: -200,
            }}
            animate={
              isInView && {
                opacity: 1,
                x: 0,
              }
            }
            className="text-start z-30 lg:pl-36"
          >
            {t("projects:selected")}
          </motion.span>{" "}
          <motion.span
            initial={{
              opacity: 0,
              x: 200,
            }}
            animate={
              isInView && {
                opacity: 1,
                x: 0,
              }
            }
            className="text-white z-30  1text-end lg:pr-36"
          >
            {t("common:projects")}
          </motion.span>
        </div>
        <Line />
      </h2>

      <div className="flex w-full justify-center items-center gap-6 sm:gap-12 text-2xl sm:text-4xl my-24">
        <button
          onClick={handleActive}
          className={`${
            active === "personal"
              ? "bg-gradient-to-r from-purple-500 to-indigo-500 inline-block text-transparent bg-clip-text text-2xl"
              : "opacity-50 text-lg"
          }  cursor-pointer `}
        >
          Personal
        </button>
        <button
          onClick={handleActive}
          className={`${
            active === "hackathon"
              ? "bg-gradient-to-r from-purple-500 to-indigo-500 inline-block text-transparent bg-clip-text text-2xl"
              : "opacity-50 text-lg"
          }  cursor-pointer `}
        >
          Hackathon
        </button>
      </div>
      {active === "personal" ? (
        <div className="space-y-32 mt-32">
          <ProjectSection
            title="Mealfulness"
            stack={mealfulnessStack}
            year="2024"
            description={t("mealfulness:desc")}
            links={MealfulnessLinks}
            image={
              <Image
                fill
                src={mealfulnessLandpageMock}
                alt="mealfulness landing page"
                className="object-contain"
              />
            }
            order={1}
            details={
              <div className="uppercase ">
                <Link href="/projects/mealfulness">View project details</Link>
              </div>
            }
          />

          <ProjectSection
            title="WiredWave"
            stack={wiredwaveStack}
            year="2023"
            description={t("wiredwave:desc")}
            links={WiredWaveLinks}
            image={
              <Image
                fill
                src={wiredwaveLandpageMock}
                alt="mealfulness landing page"
                className="object-contain"
              />
            }
            order={2}
            details={
              <div className="uppercase ">
                <Link href="/projects/wiredwave">View project details</Link>
              </div>
            }
          />
        </div>
      ) : (
        <div className="space-y-32 mt-32">
          <ProjectSection
            title="ClearFlow"
            stack={clearflowStack}
            year="48h"
            description={t("clearflow:desc")}
            links={clearFlowLink}
            image={
              <Image
                fill
                src={clearflowMock}
                alt="mealfulness landing page"
                className="object-contain"
              />
            }
            order={1}
            details={
              <div className="uppercase ">
                <Link href="/projects/mealfulness">View project details</Link>
              </div>
            }
          />

          <ProjectSection
            title="Aifred"
            stack={aifredStack}
            year="48h"
            description={t("aifred:desc")}
            links={aifredLink}
            image={
              <Image
                fill
                src={aifredMock}
                alt="mealfulness landing page"
                className="object-contain"
              />
            }
            order={2}
            details={
              <div className="uppercase ">
                <Link href="/projects/wiredwave">View project details</Link>
              </div>
            }
          />
        </div>
      )}
    </section>
  );
};

export default Projects;
