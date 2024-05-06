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
import { useTranslation } from "react-i18next";
const Technologies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px",
    once: true,
  });
  const { t } = useTranslation();
  return (
    <section
      id="skills"
      className="w-full max-w-7xl min-h-[300vh] mx-auto flex flex-col justify-center items-start gap-8 relative sm:pt-24 text-white mt-32"
    >
      <motion.h2
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={
          isInView && {
            opacity: 1,
            y: 0,
          }
        }
        ref={ref}
        className="text-center w-full text-7xl relative lg:text-[140px] mb-36"
      >
        {t("skills:header")}
      </motion.h2>
      <div className="flex w-full justify-center items-start gap-8 relative">
        <div className="sm:order-1 order-2 flex justify-center flex-col items-center text-6xl pr-4">
          {" "}
          <TechCard
            title={t("skills:programming_languages")}
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
            title={t("skills:styling")}
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
            title={t("skills:database")}
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
        <div className="order-1 sm:order-2 w-4 flex justify-end sm:justify-center items-end sm:items-center">
          <TracingBeam>
            <div className="max-w-2xl mx-auto antialiased pt-4 relative min-h-[300vh] sm:min-h-[250vh]"></div>
          </TracingBeam>
        </div>
        <div className="order-3 absolute sm:relative flex justify-center flex-col items-center left-[calc(48px+2px)] sm:left-4 text-6xl">
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
            title={t("skills:testing")}
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
            title={t("skills:design")}
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
