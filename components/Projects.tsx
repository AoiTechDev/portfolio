"use client";
import React from "react";
import landpageMock from "@/assets/landpage-mobile-portrait.png";
import Image from "next/image";
import Link from "next/link";
import ProjectSection from "./common/ProjectSection/ProjectSection";

const links = [
  { label: "Github", href: "https://github.com/AoiTechDev" },
  { label: "Live", href: "https://mealfulness.vercel.app/" },
];

const Projects = () => {
  return (
    <div className="w-full max-w-7xl  h-screen mx-auto  sm:pt-24 text-white mt-80">
      <h2 className="text-4xl  text-center uppercase">selected Projects</h2>

      {/* <div className="w-full  mt-32 flex gap-20 flex-col lg:flex-row">
        <div className="lg:flex-1 flex flex-col gap-8 justify-center items-start px-4">
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
            Dynamic meal tracking platform integrated with external nutrition
            API and AI capabilities for personalized meal guidance.
          </p>
          <ul className="flex gap-6">
          {links.map((link, index) => (
            <MotionComponent key={index} delay={0.4 + index * 0.1} y={50}>
              <li className="py-2 px-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-md ">
                <Link href={link.href} target="_blank">
                  {link.label}
                </Link>
              </li>
            </MotionComponent>
          ))}
        </ul>
          <div className="uppercase ">
            <Link href="/projects/mealfulness">View project details</Link>
          </div>
        </div>
        <div className="bg- h-[700px] lg:flex-1 relative">
          <Image fill src={landpageMock} alt="mealfulness landing page" className="object-contain"/>
        </div>
      </div> */}

      <ProjectSection
        title="Mealfulness"
        stack={["Next.js", "Typescript", "Tailwind CSS"]}
        year="2024"
        description="Dynamic meal tracking platform integrated with external nutrition API and AI capabilities for personalized meal guidance."
        links={links}
        project="/projects/mealfulness"
        image={
          <Image
            fill
            src={landpageMock}
            alt="mealfulness landing page"
            className="object-contain"
          />
        }
      />
    </div>
  );
};

export default Projects;
