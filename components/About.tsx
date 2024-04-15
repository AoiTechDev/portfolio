import React from "react";

const About = () => {
  return (
    <section className="w-full max-w-7xl  h-screen mx-auto  sm:pt-24 text-white mt-32 relative">
      {/* <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-full h-32 blur-md"></div> */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0  -z-10 overflow-hidden blur-3xl left-20 top-[150px]"
      >
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-[450px] h-[200px] flex justify-center items-center">
        
        </div>
      </div>

      <h2 className="text-[140px]  font-bold aboutHeader relative">About</h2>
      <div className="w-full flex">
        <div className="flex-1"></div>
        <div className="flex-1">
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default About;
