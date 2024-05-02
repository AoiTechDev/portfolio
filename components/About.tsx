import Image from "next/image";
import React from "react";
import codding from "@/assets/codding.webp";
import programming from "@/assets/programming.jpg";
import { WobbleCard } from "./ui/wobble-card";

const About = () => {
  return (
    <section className="w-full max-w-[1400px]  min-h-screen mx-auto  sm:pt-24 text-white mt-32 relative">
      {/* <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-full h-32 blur-md"></div> */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0  -z-10 overflow-hidden blur-3xl left-20 top-[150px]"
      >
        {/* <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-[450px] h-[200px] flex justify-center items-center">
        
        </div> */}
      </div>

      <h2 className="text-[160px] uppercase font-  relative">About</h2>
      <div className="w-full flex">
        <div className="flex-1 flex justify-center items-center">
          <p className="text-lg">
            I am codding since tech school. I also have degree in Computer
            Science. After graduadee I came up with this challange idea which
            was programming every single day. It has been 250+ days, and I am
            still going. It is not just my job but true passion.
          </p>
        </div>
        <div className="flex-1 flex justify-end items-end">
          <Image src={codding} alt="" width={600} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-[1400px]  my-64 mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-purple-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              2 Years of Expeirence
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Despite Having tech school and studies in direction of
              programming, I have 1 year of internship as also took part in
              various events, workshops and codding every single day.
            </p>
          </div>
          <Image
            src="/linear.webp"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            10+ Projects
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            I have built multiple different projects.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-r from-indigo-700 to-purple-800 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              True passion for programming and creating interfaces.
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              I am codding on daily basis as also take part in hackathons.
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
