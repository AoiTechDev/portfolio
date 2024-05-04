"use client";
import React, { useRef } from "react";
import { WobbleCard } from "../ui/wobble-card";
import Image from "next/image";
import programming from "@/assets/programming.jpg";
import { motion, useInView } from "framer-motion";

const Cards = () => {
  const firstRef = useRef(null);
  const secRef = useRef(null);
  const thirdRef = useRef(null);

  const firstIsInView = useInView(firstRef, {
    margin: "200px",
    once: true,
  });
  const sectIsInView = useInView(secRef, {
    margin: "200px",
    once: true,
  });
  const thirdIsInView = useInView(thirdRef, {
    margin: "200px",
    once: true,
  });
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-[1400px]   mx-auto w-full ">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-purple-800 min-h-[300px] sm:min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 200,
          }}
          animate={
            firstIsInView && {
              opacity: 1,
              y: 0,
            }
          }
          ref={firstRef}
          className="max-w-md"
        >
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            2 Years of Experience
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            With a foundation in technology and programming studies, I offer one
            year of internship experience along with consistent engagement in
            events, workshops, and daily coding activities.{" "}
          </p>
        </motion.div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <motion.div
          initial={{
            opacity: 0,
            y: 200,
          }}
          animate={
            sectIsInView && {
              opacity: 1,
              y: 0,
            }
          }
          ref={secRef}
        >
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            10+ Projects
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            I have worked on many projects, both on my own and with teams during
            hackathons.{" "}
          </p>
        </motion.div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-r from-indigo-700 to-purple-800 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <motion.div
          initial={{
            opacity: 0,
            y: 200,
          }}
          animate={
            thirdIsInView && {
              opacity: 1,
              y: 0,
            }
          }
          ref={thirdRef}
          className="max-w-sm"
        >
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            True passion for creating interfaces
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Beeing a front-end developer gives me
          </p>
        </motion.div>
        <Image
          src={programming}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute    -right-8 -bottom-10  object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
};

export default Cards;
