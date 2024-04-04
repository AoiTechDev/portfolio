"use client";
import React from "react";

import Stack from "@/components/Projects/Mealfulness/Stack";
import Sections from "@/components/Projects/Mealfulness/Sections";
import Hero from "@/components/Projects/Common/Hero";
import { mealfulnessStack } from "@/constants/stack";
import { MealfulnessLinks } from "@/constants/links";
import { motion } from "framer-motion";
import Image from "next/image";
import mealfulnessLandpageMock from "@/assets/landpage-mobile-portrait.png";
import ProjectLayout from "@/components/Layouts/ProjectLayout";
import Mock from "@/components/Projects/Common/Mock";
import dashboardMock from "@/assets/dashboard-desktop-mock.png";
const page = () => {
  return (
    <ProjectLayout>
      <Hero
        title="Mealfulness"
        stack={mealfulnessStack}
        year="2024"
        description=" Dynamic meal tracking platform seamlessly integrated with nutrition
        data from external APIs. Enhanced with AI capabilities for
        personalized meal guidance, the platform facilitates effortless
        monitoring of weekly nutrition charts. Designed with streamlined
        efficiency in mind, it offers intuitive tools for effective meal
        management."
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
      />

      {/* <DashboardMock /> */}
      <Mock
        image={
          <Image
            fill
            src={dashboardMock}
            alt="wired landing page"
            className="object-contain scale-100"
          />
        }
        className="bg-white"
      />
      <Sections />

      <Stack />
    </ProjectLayout>
  );
};

export default page;
