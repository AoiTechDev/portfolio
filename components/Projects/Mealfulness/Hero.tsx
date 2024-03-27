"use client";
import Image from "next/image";
import React from "react";
import chatMock from "@/assets/chat-mobile.png";
import { motion } from "framer-motion";
import Link from "next/link";
const technologies = ["Next.js", "Typescript", "Tailwind CSS"];
const links = [
  { label: "Github", href: "https://github.com/AoiTechDev" },
  { label: "Live", href: "https://mealfulness.vercel.app/" },
  
];

const MotionComponent = ({
  children,
  delay,
  x = -200,
  y = 0,
}: {
  children: React.ReactNode;
  delay: number;
  x?: number;
  y?: number;
}) => (
  <motion.div
    initial={{
      opacity: 0,
      x,
      y,
    }}
    animate={{
      opacity: 1,
      x: 0,
      y: 0,
    }}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);
const Hero = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-44 sm:mt-64 lg:mt-32 flex gap-20 flex-col lg:flex-row px-4 overflow-hidden">
      <div className="lg:flex-1 flex flex-col gap-8 justify-center items-start">
        <MotionComponent delay={0}>
          <h3 className="text-6xl lg:text-8xl">Mealfulness</h3>
        </MotionComponent>
        <MotionComponent delay={0.1}>
          <span className="h-[1px] w-full opacity-50 bg-white"></span>
        </MotionComponent>
        <MotionComponent delay={0.2}>
          <div className="flex w-full justify-between">
            <ul className="flex gap-4">
              {technologies.map((tech, index) => (
                <React.Fragment key={index}>
                  <li>{tech}</li>
                  {index < technologies.length - 1 && <li>|</li>}
                </React.Fragment>
              ))}
            </ul>
            <span>2024</span>
          </div>
        </MotionComponent>
        <MotionComponent delay={0.3}>
          <p className="text-lg">
            Dynamic meal tracking platform seamlessly integrated with nutrition
            data from external APIs. Enhanced with AI capabilities for
            personalized meal guidance, the platform facilitates effortless
            monitoring of weekly nutrition charts. Designed with streamlined
            efficiency in mind, it offers intuitive tools for effective meal
            management.
          </p>
        </MotionComponent>
        <ul className="flex gap-6">
          {links.map((link, index) => (
            <MotionComponent key={index} delay={0.4 + index * 0.1} y={50}>
              <li className="py-2 px-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-md ">
                <Link href={link.href} target="_blank">{link.label}</Link>
              </li>
            </MotionComponent>
          ))}
        </ul>
      </div>
      <MotionComponent delay={0} x={200}>
        <div className=" h-[700px] lg:flex-1 relative">
          <Image
            fill
            src={chatMock}
            alt="mealfulness mock mobile"
            className="object-contain"
          />
        </div>
      </MotionComponent>
    </div>
  );
};

export default Hero;
