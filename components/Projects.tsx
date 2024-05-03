"use client";
import React, { useRef } from "react";
import mealfulnessLandpageMock from "@/assets/landpage-mobile-portrait.png";
import wiredwaveLandpageMock from "@/assets/wiredwave-landpage-portrait.png";
import Image from "next/image";
import Link from "next/link";
import ProjectSection from "./common/ProjectSection/ProjectSection";
import { MealfulnessLinks, WiredWaveLinks } from "@/constants/links";
import { mealfulnessStack, wiredwaveStack } from "@/constants/stack";
import Line from "./line";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import Glow from "./common/effects/Glow";
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-200px",
    once: true,
  });
  return (
    <div className="w-full max-w-7xl relative z-0 min-h-screen mx-auto  sm:pt-24 text-white mt-80">
      <Glow className="left-1/2 top-1/2"/>
      <h2
        ref={ref}
        className="text-7xl relative lg:text-[140px] flex flex-col  font-semibold z-0 p-2 gap-4 lg:gap-0"
      >
        <div className="absolute left-1/2  -z-10 -translate-x-1/2 w-4/5 md:h-[400px] rounded-[100%]  bg-gradient-to-r from-purple-800 to-indigo-700 opacity-40 blur-[90px] pointer-events-none h-1/2"></div>
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
          className="text-start lg:pl-36"
        >
          Selected
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
          className="text-white text-end lg:pr-36"
        >
          Projects
        </motion.span>
        <Line />
      </h2>

      <div className="space-y-32 mt-32">
        <ProjectSection
          title="Mealfulness"
          stack={mealfulnessStack}
          year="2024"
          description="Dynamic meal tracking platform integrated with external nutrition API and AI capabilities for personalized meal guidance."
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
          description="WiredWave is a e-commerce platform tailored for headphone. This app seamlessly integrates captivating design with advanced functionality to redefine the online headphone shopping experience."
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
    </div>
  );
};

export default Projects;
