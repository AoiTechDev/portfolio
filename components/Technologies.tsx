"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { SiTailwindcss } from "react-icons/si";

import { TracingBeam } from "./ui/tracing-beam";

import { useTranslation } from "react-i18next";
import { SiAdobexd } from "react-icons/si";
import CSS from "./common/Icons/Css3";
import Figma from "./common/Icons/Figma";
import JavaScript from "./common/Icons/Javascript";
import Jest from "./common/Icons/Jest";
import { LogosTestingLibrary } from "./common/Icons/LogosTestingLibrary";
import Next from "./common/Icons/Next";
import PostgreSQL from "./common/Icons/Postgres";
import ReactIcon from "./common/Icons/ReactIcon";
import Redis from "./common/Icons/Redis";
import Sass from "./common/Icons/Sass";
import TypeScript from "./common/Icons/Typescript";
import TechCard from "./common/TechCard";
import Arrow from "./svg/arrow";
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
      className="w-full max-w-7xl min-h-screen mx-auto flex flex-col justify-center items-start gap-8 relative sm:pt-24 text-white mt-32"
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
        className="text-center w-full font-semibold text-6xl relative lg:text-[120px] "
      >
        {t("skills:header")}
        <Arrow />
      </motion.h2>

      <p className="text-balance text-center w-full max-w-3xl mx-auto">
        I use various technologies to build my projects. Some of the my favorite
        popular ones are:
      </p>

      {/* <div className="flex w-full justify-center items-start gap-8 relative">
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
      </div> */}
    </section>
  );
};

export default Technologies;
