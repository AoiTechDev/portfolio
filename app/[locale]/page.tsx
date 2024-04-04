

import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
   <div className="min-h-screen">
   <Hero/>
   <Projects/>
   {/* <About/> */}
   </div>
  );
}
