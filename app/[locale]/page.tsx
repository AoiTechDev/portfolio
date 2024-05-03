

import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import { getStats } from "../_actions/actions";
import Contact from "@/components/Contact";

export default async function Home() {
  const stats = await getStats()
  return (
   <div className="min-h-screen overflow-hidden">
   <Hero/>
   <About/>
   <Projects/>
   <Technologies/>
   <Contact />
   </div>
  );
}
