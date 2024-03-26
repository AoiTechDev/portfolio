import Image from "next/image";
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
const page = () => {
  const stackText = "stack";
  const splitStackText = stackText.split("");
  return (
    <main className="w-full  h-screen  text-white flex-col ">
      <div className="w-full max-w-7xl mx-auto mt-32 flex gap-20 ">
        <div className="flex-1 flex flex-col gap-8 justify-center items-start">
          <h3 className="text-8xl">Mealfulness</h3>
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
        <div className=" h-[700px] flex-1 relative">
          <Image
            fill
            src={chatMock}
            alt="mealfulness mock mobile"
            className="object-contain"
          />
        </div>
      </div>

      <div className="w-full h-full relative mt-32 flex justify-start items-start">
        <Image
          fill
          src={dashboardMock}
          alt="mealfulness landing page"
          className="object-contain scale-100"
        />
      </div>

      <div className="w-full h-[70%] max-w-7xl mx-auto relative  flex gap-12">
        <div className="flex-1 flex flex-col gap-8 justify-center items-start">
          <h4 className="text-6xl">Ingredient Based Search</h4>
          <span className="h-[1px] w-full opacity-50 bg-white"></span>

          <p className="text-md">
            Discover our new ingredient-based search! Easily find nutrition
            details for any food by entering its ingredients. Get instant,
            detailed nutrition tables for each component of your dish. No more
            guesswork—just accurate data for better meal tracking.
          </p>
        </div>
        <div className="flex-1 px-6 lg:px-8 flex justify-center items-center ">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-slate-50/5 p-2 ring-1 ring-inset ring-slate-50/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src={ingredientSearch}
                width={664}
                height={461}
                alt="dashboard preview"
                quality={100}
                className="rounded-md bg-white p-2 sm:p-8  shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[70%] max-w-7xl mx-auto relative  flex gap-12">
        <div className="flex-1 px-6 lg:px-8 flex justify-center items-center ">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-slate-50/5 p-2 ring-1 ring-inset ring-slate-50/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src={stats}
                width={669}
                height={390}
                alt="dashboard preview"
                quality={100}
                className="rounded-md bg-white p-2 sm:p-8  shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-8 justify-center items-start">
          <h4 className="text-6xl">Weekly Statistics</h4>
          <span className="h-[1px] w-full opacity-50 bg-white"></span>

          <p className="text-md">
            Track your consumption of key nutrients like calories, protein,
            carbs, fat, and sugar over time. With just a click, switch between
            different metrics to gain valuable insights into your dietary habits
            and make informed decisions for a healthier lifestyle.
          </p>
        </div>
      </div>
      <div className="w-full h-[70%] max-w-7xl mx-auto relative  flex gap-12">
        <div className="flex-1 flex flex-col gap-8 justify-center items-start">
          <h4 className="text-6xl">Settings</h4>
          <span className="h-[1px] w-full opacity-50 bg-white"></span>

          <p className="text-md">
            Not as much valuable as meal tracking functionality but also
            important. Personalize your profile with ease using settings page!
            Update your name and avatar to reflect your identity throughout the
            app. Simply adjust your email or password hassle-free.
          </p>
        </div>
        <div className="flex-1 px-6 lg:px-8 flex justify-center items-center ">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-slate-50/5 p-2 ring-1 ring-inset ring-slate-50/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src={settings}
                width={891}
                height={579}
                alt="dashboard preview"
                quality={100}
                className="rounded-md bg-white p-2 sm:p-8  shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[60%] max-w-7xl mx-auto relative  flex gap-12 mt-32">
        <div className="flex justify-start items-start flex-1 gap-12">
          <h4 className="text-4xl uppercase flex flex-col gap-8 stackText relative">
            {splitStackText.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </h4>
          <div className="text-5xl grid grid-cols-2 gap-y-10 gap-x-14">
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
        <div className="flex-1">
          <h4 className="text-3xl">Other technologies I used</h4>
          <div className=" mt-6 gap-4 flex flex-wrap justify-start items-center w-3/4" >
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

const TechnologyItem = ({ name }: { name: string }) => (
  <div className="flex justify-center items-center">
    <span className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-md p-2 font-medium">{name}</span>
  </div>
);
