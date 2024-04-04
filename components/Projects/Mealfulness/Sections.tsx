'use client'
import ImageSection from "@/components/common/ImageSection";
import SectionText from "@/components/common/SectionText";
import React from "react";
import ingredientSearch from "@/assets/ingredient-search.png";
import stats from "@/assets/stats.png";
import settings from "@/assets/settings.png";
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
  <div className="w-full h-[70%] max-w-7xl mx-auto relative  flex gap-4 lg:gap-12 flex-col lg:flex-row  mt-44 lg:mt-0 overflow-hidden">
    {children}
  </div>
);
