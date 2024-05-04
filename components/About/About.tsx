import Image from "next/image";
import React from "react";

import programming from "@/assets/programming.jpg";
import { WobbleCard } from "../ui/wobble-card";
import Glow from "../common/effects/Glow";
import Header from "./Header";
import Bio from "./Bio";

const About = () => {
  return (
    <section className="w-full max-w-[1400px] z-0 space-y-12 min-h-screen mx-auto my-32 sm:pt-24 gap-12 text-white p-4  relative">
      <Glow className="sm:left-0 sm:top-[700px] opacity-55" />
    <Header/>
      
    <Bio/>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-[1400px]   mx-auto w-full ">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-purple-800 min-h-[300px] sm:min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-md">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              2 Years of Experience
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              With a foundation in technology and programming studies, I offer
              one year of internship experience along with consistent engagement
              in events, workshops, and daily coding activities.{" "}
            </p>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            10+ Projects
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            I have worked on many projects, both on my own and with teams during
            hackathons.{" "}
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-r from-indigo-700 to-purple-800 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              True passion for creating interfaces
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Beeing a front-end developer gives me
            </p>
          </div>
          <Image
            src={programming}
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute    -right-8 -bottom-10  object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </section>
  );
};

export default About;
