"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { SiTailwindcss } from "react-icons/si";

import { TracingBeam } from "./ui/tracing-beam";

import TechCard from "./common/TechCard";
import { LogosTestingLibrary } from "./common/Icons/LogosTestingLibrary";
import { SiAdobexd } from "react-icons/si";
import TypeScript from "./common/Icons/Typescript";
import JavaScript from "./common/Icons/Javascript";
import CSS from "./common/Icons/Css3";
import Sass from "./common/Icons/Sass";
import PostgreSQL from "./common/Icons/Postgres";
import Redis from "./common/Icons/Redis";
import Next from "./common/Icons/Next";
import ReactIcon from "./common/Icons/ReactIcon";
import Jest from "./common/Icons/Jest";
import Figma from "./common/Icons/Figma";
import { TFunction } from "i18next";
const Technologies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-200px",
    once: true,
  });
  return (
    <section id="skills" className="w-full max-w-7xl mx-auto flex flex-col justify-center items-start gap-8 relative sm:pt-24 text-white mt-32">
      <h2 className="text-center w-full text-7xl relative lg:text-[140px] mb-36">
        My Skills
      </h2>
      <div className="flex w-full justify-center items-start gap-8 relative">
        <div className="sm:order-1 order-2 flex justify-center flex-col items-center text-6xl">
          {" "}
          <TechCard
            title="Programming Languages"
            dir="left"
            tech={[
              {
                name: "TypeScript",
                tech: <TypeScript />,
              },
              {
                name: "Javascript",
                tech: <JavaScript />,
              },
            ]}
          />
          <TechCard
            className="mt-[448px]  sm:mt-80"
            title="Styling"
            dir="left"
            tech={[
              {
                name: "CSS3",
                tech: <CSS />,
              },
              {
                name: "Sass / Scss",
                tech: <Sass />,
              },
              {
                name: "TailwindCSS",
                tech: <SiTailwindcss className="text-[#19b5ba]" />,
              },
            ]}
          />
          <TechCard
            className="mt-[448px] sm:mt-80"
            title="Database"
            dir="left"
            tech={[
              {
                name: "PostgreSQL",
                tech: <PostgreSQL />,
              },
              {
                name: "Redis",
                tech: <Redis />,
              },
            ]}
          />
        </div>
        <div className="order-1 sm:order-2 w-4 flex justify-center items-center">
          <TracingBeam>
            <div className="max-w-2xl mx-auto antialiased pt-4 relative h-[250vh]"></div>
          </TracingBeam>
        </div>
        <div className="order-3 absolute sm:relative flex justify-center flex-col items-center left-20 text-6xl">
          <TechCard
            className="mt-96 sm:mt-80"
            title="Frameworks"
            dir="right"
            tech={[
              {
                name: "Next.js",
                tech: <Next />,
              },
              {
                name: "React",
                tech: <ReactIcon />,
              },
            ]}
          />
          <TechCard
            className="mt-[468px]   sm:mt-80"
            title="Testing"
            dir="right"

            tech={[
              {
                name: "Jest",
                tech: <Jest />,
              },
              {
                name: "React Testing Library",
                tech: <LogosTestingLibrary />,
              },
            ]}
          />
          <TechCard
            className="mt-[468px] sm:mt-80"
            title="Design"
            dir="right"

            tech={[
              {
                name: "Adobe XD",
                tech: <SiAdobexd />,
              },
              {
                name: "Figma",
                tech: <Figma />,
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
