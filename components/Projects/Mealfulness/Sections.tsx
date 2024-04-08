'use client'
import ImageSection from "@/components/common/ImageSection";
import SectionText from "@/components/common/SectionText";
import React from "react";
import ingredientSearch from "@/assets/ingredient-search.png";
import stats from "@/assets/stats.png";
import settings from "@/assets/settings.png";
import { cn } from "@/lib/utils";

const Sections = () => {



  return sections.map((section, index) => (
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
  ));
};

export default Sections;

const sections = [
  {
    title: "Ingredient Based Search",
    text: "Ingredient-based search functionality utilizes an external API with nutrition data to retrieve comprehensive nutrition information for any given food. Easily discover nutrition details for any dish by inputting its ingredients, and receive instant, detailed nutrition tables for each component of your meal.",
    image: ingredientSearch,
    imageAlt: "ingredient based search preview",
    imageWidth: 664,
    imageHeight: 461,
  },
  {
    title: "Weekly Statistics",
    text: "For easier tracking user nutrition in time, user can monitor his weekly statistics in a simple and intuitive way. User can change nutrition display and see how they are progressing towards them.",
    image: stats,
    imageAlt: "statistics preview",
    imageWidth: 669,
    imageHeight: 390,
  },
  {
    title: "Settings",
    text: "The Settings panel enables users to manage their accounts, change passwords, email addresses, and names, as well as update their avatars. For image storage, I utilized an AWS S3 bucket.",
    image: settings,
    imageAlt: "settings preview",
    imageWidth: 891,
    imageHeight: 579,
  },
 
];

export const SectionWrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("w-full min-h-[70%] max-w-7xl mx-auto relative  flex gap-4 lg:gap-12 flex-col lg:flex-row  mt-44 lg:mt-0 overflow-hidden", className)}>
    {children}
  </div>
);
