"use client";
import React, { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import Link from "next/link";

import { ProjectSectionType } from "@/types/types";
const MotionComponent = ({
  children,
  delay,
  x = -100,
  y = 0,
  inView,
}: {
  children: React.ReactNode;
  delay: number;
  x?: number;
  y?: number;
  inView: boolean;
}) => (
  <motion.div
    initial={{
      opacity: 0,
      x,
      y,
    }}
    animate={
      inView && {
        opacity: 1,
        x: 0,
        y: 0,
      }
    }
    transition={{ delay }}
    className="w-full"
  >
    {children}
  </motion.div>
);
const ProjectSection = ({
  title,
  stack,
  year,
  description,
  links,
  image,
  order,
  back,
  details,
}: ProjectSectionType) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-200px",
    once: true,
  });
  return (
    <div ref={ref} className="w-full   flex gap-20 flex-col lg:flex-row">
      <div
        className={`lg:flex-1 flex flex-col max-w-2xl mx-auto gap-8 justify-center items-start px-4 ${
          order === 1 ? "lg:order-1" : "lg:order-2"
        }`}
      >
        {back}
        <MotionComponent inView={isInView} delay={0}>
          <h3 className="text-5xl lg:text-8xl">{title}</h3>
        </MotionComponent>
        <motion.span
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={
            isInView && {
              opacity: 0.5,
              x: 0,
            }
          }
          transition={{ delay: 0.1 }}
          className="h-[1px] w-full opacity-50 bg-white"
        ></motion.span>

        <MotionComponent inView={isInView} delay={0.2}>
          <div className="flex w-full justify-between items-center">
            {/* {stack.map((icon, index) => (
              <span key={index}>{icon}</span>
            ))} */}
            <ul className="flex gap-2 text-sm sm:text-md">
              {stack
                .join(" | ")
                .split(" ")
                .map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
            <span>{year}</span>
          </div>
        </MotionComponent>

        <MotionComponent inView={isInView} delay={0.3}>
          <p className="text-lg">{description}</p>
        </MotionComponent>

        <div className="flex gap-6">
          {links.map((link, index) => (
            <MotionComponent
              inView={isInView}
              key={index}
              delay={0.4 + index * 0.1}
              y={50}
            >
              <Link href={link.href} target="_blank">
                <span className="py-2 px-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-md ">
                  {link.label}
                </span>
              </Link>
            </MotionComponent>
          ))}
        </div>

        {/* <MotionComponent delay={0.5}>{details}</MotionComponent> */}
      </div>

      <motion.div
        initial={{
          opacity: 0,
          x: order === 1 ? 100 : -100,
        }}
        animate={
          isInView && {
            opacity: 1,
            x: 0,
          }
        }
        className={`h-[700px] lg:flex-1 relative  ${
          order === 1 ? "lg:order-2" : "lg:order-1"
        }`}
      >
        {image}
      </motion.div>
    </div>
  );
};

export default ProjectSection;
