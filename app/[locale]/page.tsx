

import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
   <div className="min-h-screen">
   <Hero/>
   <Projects/>
   <Technologies/>
   {/* <About/> */}
   </div>
  );
}
