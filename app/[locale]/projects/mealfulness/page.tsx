import React from "react";

import Stack from "@/components/Projects/Mealfulness/Stack";
import DashboardMock from "@/components/Projects/Mealfulness/DashboardMock";
import Hero from "@/components/Projects/Mealfulness/Hero";
import Sections from "@/components/Projects/Mealfulness/Sections";
const page = () => {
  return (
    <main className="w-full  h-screen  text-white flex-col ">

      <Hero />
      <DashboardMock />

      <Sections />

      <Stack />
    </main>
  );
};

export default page;
