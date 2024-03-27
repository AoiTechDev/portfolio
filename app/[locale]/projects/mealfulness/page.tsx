import Image, { StaticImageData } from "next/image";

import React from "react";
import chatMock from "@/assets/chat-mobile.png";
import dashboardMock from "@/assets/dashboard-desktop-mock.png";
import ingredientSearch from "@/assets/ingredient-search.png";
import stats from "@/assets/stats.png";
import settings from "@/assets/settings.png";

import { cn } from "@/lib/utils";
import SectionText from "@/components/common/SectionText";
import ImageSection from "@/components/common/ImageSection";
import TechnologyItem from "@/components/common/TechnologyItem";
import Stack from "@/components/Projects/Mealfulness/Stack";
const page = () => {

  return (
    <main className="w-full  h-screen  text-white flex-col ">
      <div className="w-full max-w-7xl mx-auto mt-44 sm:mt-64 lg:mt-32 flex gap-20 flex-col lg:flex-row px-4">
        <div className="lg:flex-1 flex flex-col gap-8 justify-center items-start">
          <h3 className="text-6xl lg:text-8xl">Mealfulness</h3>
          <span className="h-[1px] w-full opacity-50 bg-white"></span>
          <div className="flex w-full justify-between">
            <ul className="flex gap-4">
              <li>Next.js</li>
              <li>|</li>
              <li>Typescript</li>
              <li>|</li>
              <li>Tailwind CSS</li>
            </ul>
            <span>2024</span>
          </div>
          <p className="text-lg">
            Dynamic meal tracking platform seamlessly integrated with nutrition
            data from external APIs. Enhanced with AI capabilities for
            personalized meal guidance, the platform facilitates effortless
            monitoring of weekly nutrition charts. Designed with streamlined
            efficiency in mind, it offers intuitive tools for effective meal
            management.
          </p>
          <ul className="flex gap-6">
            <li>Github</li>
            <li>Live</li>
          </ul>
        </div>
        <div className=" h-[700px] lg:flex-1 relative">
          <Image
            fill
            src={chatMock}
            alt="mealfulness mock mobile"
            className="object-contain"
          />
        </div>
      </div>

      <div className="w-full h-[50%] lg:h-full relative my-32 lg:mt-32 flex justify-start items-start bg-gray-800   ">
        <Image
          fill
          src={dashboardMock}
          alt="mealfulness landing page"
          className="object-contain scale-100"
        />
      </div>

      {sections.map((section, index) => (
        <SectionWrapper key={index}>
          <SectionText
            title={section.title}
            text={section.text}
            className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}
            index={index}
          />
          <ImageSection
            src={section.image}
            alt={section.imageAlt}
            width={section.imageWidth}
            height={section.imageHeight}
            className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"}
            index={index}
          />
        </SectionWrapper>
      ))}

      <Stack/>
    </main>
  );
};

export default page;


const sections = [
  {
    title: "Ingredient Based Search",
    text: "Discover our new ingredient-based search! Easily find nutrition details for any food by entering its ingredients. Get instant, detailed nutrition tables for each component of your dish. No more guesswork—just accurate data for better meal tracking.",
    image: ingredientSearch,
    imageAlt: "dashboard preview",
    imageWidth: 664,
    imageHeight: 461,
  },
  {
    title: "Weekly Statistics",
    text: "Discover our new ingredient-based search! Easily find nutrition details for any food by entering its ingredients. Get instant, detailed nutrition tables for each component of your dish. No more guesswork—just accurate data for better meal tracking.",
    image: stats,
    imageAlt: "dashboard preview",
    imageWidth: 669,
    imageHeight: 390,
  },
  {
    title: "Settings",
    text: "Discover our new ingredient-based search! Easily find nutrition details for any food by entering its ingredients. Get instant, detailed nutrition tables for each component of your dish. No more guesswork—just accurate data for better meal tracking.",
    image: settings,
    imageAlt: "dashboard preview",
    imageWidth: 891,
    imageHeight: 579,
  },
];

const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full h-[70%] max-w-7xl mx-auto relative  flex gap-4 lg:gap-12 flex-col lg:flex-row  mt-44 lg:mt-0">
    {children}
  </div>
);


