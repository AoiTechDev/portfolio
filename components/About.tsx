import Image from "next/image";
import React from "react";
import codding from "@/assets/codding.webp";
import programming from "@/assets/programming.jpg";
import { WobbleCard } from "./ui/wobble-card";

const About = () => {
  return (
    <section className="w-full max-w-[1400px]  min-h-screen mx-auto  sm:pt-24 text-white mt-48 relative">
      {/* <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-full h-32 blur-md"></div> */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0  -z-10 overflow-hidden blur-3xl left-20 top-[150px]"
      >
        {/* <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-[450px] h-[200px] flex justify-center items-center">
        
        </div> */}
      </div>

      <h2 className="text-[100px] font-semibold aboutHeader lg:text-[190px] uppercase text-center lg:text-left relative ">
        About
      </h2>
      <div className="w-full flex flex-col lg:flex-row justify-center gap-10 items-center">
        <div className="order-2 lg:order-1 flex-1 flex justify-center items-center">
          <p className="text-lg p-4 ">
            I have been coding since my time in tech school and have a degree in
            Computer Science. After graduating, I initiated a personal challenge
            to code every day. It is been over 250 days now, and I am still
            committed. Coding is not just a job for me; it is a genuine passion.
          </p>
        </div>
        <div className="order-1 lg:order-2 w-[400px] lg:w-[600px] flex-1 flex justify-end items-end">
          <Image src={codding} alt="" className="rounded-xl" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-[1400px]  my-64 mx-auto w-full p-4">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-purple-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-md">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              2 Years of Expeirence
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
            className="absolute    -right-5 -bottom-5  object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </section>
  );
};

export default About;
