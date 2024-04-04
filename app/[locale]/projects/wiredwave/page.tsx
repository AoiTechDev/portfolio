import Hero from "@/components/Projects/Common/Hero";
import { WiredWaveLinks } from "@/constants/links";
import { wiredwaveStack } from "@/constants/stack";
import Image from "next/image";
import React from "react";
import wiredwaveLandpageMock from "@/assets/wiredwave-landpage-portrait.png";
import Mock from "@/components/Projects/Common/Mock";
import wiredwaveDesktopMock from "@/assets/wiredwave-desktop-front.png";
import ProjectLayout from "@/components/Layouts/ProjectLayout";
const page = () => {
  return (
    <ProjectLayout>
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
      <Mock
        image={
          <Image
            fill
            src={wiredwaveDesktopMock}
            alt="wired landing page"
             className="object-contain scale-100"
          />
        }
     className="bg-white"
      />
    </ProjectLayout>
  );
};

export default page;
