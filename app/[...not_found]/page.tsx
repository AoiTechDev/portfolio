import Glow from "@/components/common/effects/Glow";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center relative z-0 w-screen h-screen bg-background flex-col overflow-hidden">
        <Glow className="sm:left-[1800px] sm:top-[600px]"/>
        <Glow className="sm:-left-32 sm:-top-32"/>
      <div className=" flex text-[200px] sm:text-[300px] lg:text-[400px] font-semibold">
        <h1 className="text-purple-500">4</h1>
        <h1 className="text-indigo-500">0</h1>
        <h1 className="text-purple-500">4</h1>
      </div>
      <h2 className="text-white text-2xl md:text-3xl">It seems that you have lost.</h2>
      <div className="flex mt-6">
        <Link
          href="/"
          className="py-2 px-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-md text-white "
        >
          Main Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
