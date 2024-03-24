"use client";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <main className="w-full max-w-7xl  h-screen mx-auto pt-24 text-white relative">
      <div className="flex flex-col w-full max-w-2xl mx-auto  gap-4">
        <p className="text-center font-thin">Hey! I am</p>
        <h1 className="text-7xl text-center font-thin">Paweł</h1>
        <h1 className="text-6xl text-center mt-12 flex flex-col sm:flex-row font-bold justify-between gap-4 px-4 sm:px-0">
          <span className="w-full flex sm:items-end sm:justify-end">Front-end</span>{" "}
          <span className="w-full flex items-end justify-end sm:items-start sm:justify-start">Developer</span>
        </h1>
        <div className="flex justify-around mt-16 text-6xl">
          <motion.div
            initial={{
              transform: "translateY(-20px)",
            }}
            animate={{
              transform: "translateY(20px)",
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <FaReact />
          </motion.div>
          <motion.div
            initial={{
              transform: "translateY(20px)",
            }}
            animate={{
              transform: "translateY(-20px)",
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <SiNextdotjs />
          </motion.div>
          <motion.div
            initial={{
              transform: "translateY(-20px)",
            }}
            animate={{
              transform: "translateY(20px)",
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <BiLogoTypescript />
          </motion.div>
          <motion.div
            initial={{
              transform: "translateY(20px)",
            }}
            animate={{
              transform: "translateY(-20px)",
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <SiTailwindcss />
          </motion.div>
        </div>
      </div>

      <div className="h-[300px] w-[1px] absolute top-[450px] sm:top-60 left-[50%] -translate-x-1/2 bg-gradient-to-b from-purple-500 to-indigo-500"></div>
    </main>
  );
}
