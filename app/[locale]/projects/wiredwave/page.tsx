import Hero from "@/components/Projects/Common/Hero";
import { WiredWaveLinks } from "@/constants/links";
import { wiredwaveStack } from "@/constants/stack";
import Image from "next/image";
import React from "react";
import wiredwaveLandpageMock from "@/assets/wiredwave-landpage-portrait.png";
const page = () => {
  return (
    <div className="w-full text-white max-w-7xl mx-auto  flex gap-20 flex-col lg:flex-row px-4 overflow-hidden">
      <Hero 
        title="WiredWave"
        stack={wiredwaveStack}
        year="2023"
        description="WiredWave is a e-commerce platform tailored for headphone. This app seamlessly integrates captivating design with advanced functionality to redefine the online headphone shopping experience."
        links={WiredWaveLinks}
        image={
          <Image
            fill
            src={wiredwaveLandpageMock}
            alt="wired landing page"
            className="object-contain"
          />
        }
        order={1}
      />
    </div>
  );
};

export default page;
