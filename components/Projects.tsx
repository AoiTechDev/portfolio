import React from "react";
import chatMock from "@/assets/chat-mobile.png";
import Image from "next/image";
import Link from "next/link";
const Projects = () => {
  return (
    <div className="w-full max-w-7xl  h-screen mx-auto  sm:pt-24 text-white mt-64">
      <h2 className="text-4xl  text-center uppercase">selected Projects</h2>
      <div className="w-full  mt-32 flex gap-20 ">
        <div className="flex-1 flex flex-col gap-8 justify-center items-start">
          <h3 className="text-8xl">Mealfulness</h3>
          <span className="h-[1px] w-full opacity-50 bg-white"></span>
          <div className="flex w-full justify-between">
            <ul className="flex gap-4">
              <li>Next.js</li>
              <li>|</li>
              <li>Typescript</li>
              <li>|</li>
              <li>Tailwind CSS</li>
            </ul>
            <span>2024</span>
          </div>
          <p className="text-lg">
            Dynamic meal tracking platform integrated with external nutrition
            API and AI capabilities for personalized meal guidance.
          </p>
          <ul className="flex gap-6">
            <li>Github</li>
            <li>Live</li>
          </ul>
          <div className="uppercase ">
            <Link href="/projects/mealfulness">View project details</Link>
          </div>
        </div>
        <div className="bg- h-[700px] flex-1 relative">
          <Image fill src={chatMock} alt="mealfulness landing page" className="object-contain"/>
        </div>
      </div>
      
    </div>
  );
};

export default Projects;
