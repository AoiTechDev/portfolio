import React from 'react'

const About = () => {
  return (
    <section className="w-full max-w-7xl  h-screen mx-auto  sm:pt-24 text-white mt-32 relative">
      {/* <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-full h-32 blur-md"></div> */}
      <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0  -z-10 overflow-hidden blur-2xl left-52 "
        >
         <div  className="bg-gradient-to-r from-purple-500 to-indigo-600 w-[250px] h-[600px]"/>
        </div>
       
      <h2 className="text-[140px]  font-bold aboutHeader relative">About</h2>

    </section>
  )
}

export default About