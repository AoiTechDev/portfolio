"use client";
import React from "react";
import mealfulnessLandpageMock from "@/assets/landpage-mobile-portrait.png";
import wiredwaveLandpageMock from "@/assets/wiredwave-landpage-portrait.png";
import Image from "next/image";
import Link from "next/link";
import ProjectSection from "./common/ProjectSection/ProjectSection";
import { MealfulnessLinks, WiredWaveLinks } from "@/constants/links";
import { mealfulnessStack, wiredwaveStack } from "@/constants/stack";

const Projects = () => {
  return (
    <div className="w-full max-w-7xl  min-h-screen mx-auto  sm:pt-24 text-white mt-80">
      <h2 className="text-7xl lg:text-[140px] flex flex-col text-center font-bold  p-2 gap-4 lg:gap-0">
        <span className="text-start text-background drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">Selected</span> <span className="text-white text-end">Projects</span>
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
