import Image from "next/image";
import React from "react";

import { WobbleCard } from "../ui/wobble-card";
import Glow from "../common/effects/Glow";
import Header from "./Header";
import Bio from "./Bio";
import Cards from "./Cards";
import { TFunction } from "i18next";

const About = () => {
  return (
    <section
      id="about"
      className="w-full max-w-[1400px] z-0 space-y-12 min-h-screen mx-auto my-32 sm:pt-24 gap-12 text-white p-4  relative"
    >
      <Glow className="sm:left-0 sm:top-[700px] opacity-55" />
      <Header />

      <Bio />
      <Cards />
    </section>
  );
};

export default About;
