"use client";
import React from "react";

import Stack from "@/components/Projects/Mealfulness/Stack";
import Sections, {
  SectionWrapper,
} from "@/components/Projects/Mealfulness/Sections";
import Hero from "@/components/Projects/Common/Hero";
import { mealfulnessStack } from "@/constants/stack";
import { MealfulnessLinks } from "@/constants/links";
import chat from "@/assets/chat-mobile.png";
import Image from "next/image";
import mealfulnessLandpageMock from "@/assets/landpage-mobile-portrait.png";
import ProjectLayout from "@/components/Layouts/ProjectLayout";
import Mock from "@/components/Projects/Common/Mock";
import dashboardMock from "@/assets/dashboard-desktop-mock.png";
import SectionText from "@/components/common/SectionText";
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
            src={dashboardMock}
            alt="mealfulness dashboard"
            className="lg:scale-[60%] "
          />
        }
      />
      <Sections />

      <div className="mt-44 lg:my-16 w-full min-h-[70%] max-w-7xl mx-auto flex gap-4 lg:gap-12 flex-col lg:flex-row justify-center items-center">
        <Image src={chat} alt="mobile chat" height={720} className="flex-1 scale-75 order-2 lg:order-1"/>
        <SectionText
          title="Chat assistant"
          text="The chat assistant is a feature that allows users to interact with the platform in a more conversational manner. Users can ask questions about nutrition, meal planning, or any other topic, and the chat assistant will provide helpful responses. The chat assistant is designed to be user-friendly and easy to use, making it a valuable tool for users who want to learn more about nutrition and meal planning."
          className="lg:order-1 flex-1"
          index={4}
        />
      </div>

      <Stack />
    </ProjectLayout>
  );
};

export default page;
