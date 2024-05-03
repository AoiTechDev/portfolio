"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { SiPostgresql } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { SiJest } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { PiFigmaLogoBold } from "react-icons/pi";
import { TracingBeam } from "./ui/tracing-beam";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import TechCard from "./common/TechCard";
import { LogosTestingLibrary } from "./common/Icons/LogosTestingLibrary";
import { SiAdobexd } from "react-icons/si";
const Technologies = () => {
  const stackText = "stack";
  const splitStackText = stackText.split("");
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-200px",
    once: true,
  });
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col justify-center items-start gap-8 relative sm:pt-24 text-white mt-32">
      <h2   className="text-center w-full text-7xl relative lg:text-[140px] mb-36">My Skills</h2>
      <div className="flex w-full justify-center items-start gap-8 relative">
        <div className="sm:order-1 order-2 flex justify-center flex-col items-center text-6xl">
          {" "}
          <TechCard
            title="Programming Languages"
            tech={[
              {
                name: "TypeScript",
                tech: <BiLogoTypescript />,
              },
              {
                name: "Javascript",
                tech: <RiJavascriptFill />,
              },
            ]}
          />
          <TechCard
            className="mt-[448px]  sm:mt-80"
            title="Styling"
            tech={[
              {
                name: "CSS3",
                tech: <IoLogoCss3 />,
              },
              {
                name: "Sass / Scss",
                tech: <FaSass />,
              },
              {
                name: "TailwindCSS",
                tech: <SiTailwindcss />,
              },
            ]}
          />
          <TechCard
            className="mt-[448px] sm:mt-80"
            title="Database"
            tech={[
              {
                name: "PostgreSQL",
                tech: <SiPostgresql />,
              },
              {
                name: "Redis",
                tech: <DiRedis />,
              },
            ]}
          />
        </div>
        <div className="order-1 sm:order-2 w-4 flex justify-center items-center">
          <TracingBeam className=" ">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative h-[270vh]"></div>
          </TracingBeam>
        </div>
        <div className="order-3 absolute sm:relative flex justify-center flex-col items-center left-20 text-6xl">
          <TechCard
            className="mt-96 sm:mt-80"
            title="Frameworks"
            tech={[
              {
                name: "Next.js",
                tech: <SiNextdotjs />,
              },
              {
                name: "React",
                tech: <FaReact />,
              },
            ]}
          />
          <TechCard
            className="mt-[468px]   sm:mt-80"
            title="Testing"
            tech={[
              {
                name: "Jest",
                tech: <SiJest />,
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
            tech={[
              {
                name: "Adobe XD",
                tech: <SiAdobexd />,
              },
              {
                name: "Figma",
                tech: <PiFigmaLogoBold />,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
