import About from "@/components/About/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";

export default async function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Hero />
      <About />
      <Projects />
      <Technologies />
      {/* <Contact /> */}
    </div>
  );
}
