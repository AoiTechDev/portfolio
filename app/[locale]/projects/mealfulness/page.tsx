import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import chatMock from "@/assets/chat-mobile.png";
import dashboardMock from "@/assets/dashboard-desktop-mock.png";
import ingredientSearch from "@/assets/ingredient-search.png";
import stats from "@/assets/stats.png";
import settings from "@/assets/settings.png";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { SiPostgresql } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { SiJest } from "react-icons/si";
import { cn } from "@/lib/utils";
const page = () => {
  const stackText = "stack";
  const splitStackText = stackText.split("");
  return (
    <main className="w-full  h-screen  text-white flex-col ">
      <div className="w-full max-w-7xl mx-auto mt-44 sm:mt-32 flex gap-20 flex-col sm:flex-row px-4">
        <div className="sm:flex-1 flex flex-col gap-8 justify-center items-start">
          <h3 className="text-6xl sm:text-8xl">Mealfulness</h3>
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
          <p className="text-md">
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
        <div className=" h-[700px] sm:flex-1 relative">
          <Image
            fill
            src={chatMock}
            alt="mealfulness mock mobile"
            className="object-contain"
          />
        </div>
      </div>

      <div className="w-full h-[50%] sm:h-full relative my-32 sm:mt-32 flex justify-start items-start bg-gray-800   ">
        <Image
          fill
          src={dashboardMock}
          alt="mealfulness landing page"
          className="object-contain scale-100"
        />
      </div>

      {sections.map((section, index) => (
        <SectionWrapper key={index}>
          <Section
            title={section.title}
            text={section.text}
            className={index % 2 === 0 ? "sm:order-1" : "sm:order-2"}
          />
          <ImageSection
            src={section.image}
            alt={section.imageAlt}
            width={section.imageWidth}
            height={section.imageHeight}
            className={index % 2 === 0 ? "sm:order-2" : "sm:order-1"}
          />
        </SectionWrapper>
      ))}

      <div className="w-full min-h-[60%] max-w-7xl mx-auto relative  flex gap-12 mt-32 flex-col sm:flex-row px-4 pb-32  ">
        <div className="flex justify-start items-start flex-1 gap-12">
          <h4 className="text-4xl uppercase flex flex-col gap-8 stackText relative">
            {splitStackText.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </h4>
          <div className="text-5xl grid grid-cols-2 gap-y-10 gap-x-14 w-full sm:w-1/4 place-items-center sm:place-items-start">
            <BiLogoTypescript />
            <SiNextdotjs />
            <SiTailwindcss />
            <IoLogoVercel />
            <SiPostgresql />
            <FaAws />
            <DiRedis />
            <SiJest />
          </div>
        </div>
        <div className="sm:flex-1 mt-32">
          <h4 className="text-3xl">Other technologies I used</h4>
          <div className=" mt-6 gap-4 flex flex-wrap justify-start items-center w-full sm:w-3/4">
            {technologies.map((tech) => (
              <TechnologyItem key={tech} name={tech} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;

const technologies = [
  "Zod",
  "Shadcn",
  "Next-Auth",
  "React Query",
  "React Hook Form",
  "React Testing Library",
];
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
const TechnologyItem = ({ name }: { name: string }) => (
  <div className="flex justify-center items-center">
    <span className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-md p-2 font-medium">
      {name}
    </span>
  </div>
);

const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full h-[70%] max-w-7xl mx-auto relative  flex gap-4 sm:gap-12 flex-col sm:flex-row  mt-44 sm:mt-0">
    {children}
  </div>
);
const Section = ({
  title,
  text,
  className,
}: {
  title: string;
  text: string;
  className: string;
}) => (
  <div
    className={cn(
      "sm:flex-1 flex flex-col gap-8 justify-center items-start px-4",
      className
    )}
  >
    <h4 className="text-4xl">{title}</h4>
    <span className="h-[1px] w-full opacity-50 bg-white"></span>
    <p className="text-md">{text}</p>
  </div>
);

const ImageSection = ({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
  className: string;
}) => (
  <div
    className={cn(
      "sm:flex-1 px-6 lg:px-8 flex justify-center items-center ",
      className
    )}
  >
    <div className="mt-16 flow-root sm:mt-24">
      <div className="-m-2 rounded-xl bg-slate-50/5 p-2 ring-1 ring-inset ring-slate-50/10 lg:-m-4 lg:rounded-2xl lg:p-4">
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          quality={100}
          className="rounded-md bg-white p-2 sm:p-8  shadow-2xl ring-1 ring-gray-900/10"
        />
      </div>
    </div>
  </div>
);
