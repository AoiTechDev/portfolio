"use client";
import React from "react";

import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <main className="w-full max-w-7xl  h-[60vh] mx-auto   text-white relative overflow-hidden flex justify-center items-center mt-24 lg:mt-0">
      <div className="flex flex-col w-full max-w-2xl mx-auto  gap-4">
        <motion.p
          initial={{
            opacity: 0,
            transform: "translateY(20px)",
          }}
          animate={{
            opacity: 1,
            transform: "translateY(0)",
          }}
          className="text-center text-lg font-thin"
        >
          Hey! I am
        </motion.p>
        <motion.h1
          initial={{
            opacity: 0,
            transform: "translateY(20px)",
          }}
          animate={{
            opacity: 1,
            transform: "translateY(0)",
          }}
          transition={{
            delay: 0.2,
          }}
          className="text-7xl text-center font-thin"
        >
          Paweł
        </motion.h1>
        <h1 className="text-6xl text-center mt-12 flex flex-col sm:flex-row font-bold justify-between gap-4 px-4 sm:px-0">
          <motion.span
            initial={{
              opacity: 0,
              transform: "translateX(-60px)",
            }}
            animate={{
              opacity: 1,
              transform: "translateY(0)",
            }}
            transition={{
              delay: 0.4,
            }}
            className="w-full flex sm:items-end sm:justify-end"
          >
            Front-end
          </motion.span>{" "}
          <motion.span
            initial={{
              opacity: 0,
              transform: "translateX(60px)",
            }}
            animate={{
              opacity: 1,
              transform: "translateY(0)",
            }}
            transition={{
              delay: 0.4,
            }}
            className="w-full flex items-end justify-end sm:items-start sm:justify-start"
          >
            Developer
          </motion.span>
        </h1>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.6,
          }}
          className="flex justify-around mt-16 text-6xl"
        >
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
        </motion.div>
      </div>

      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          delay: 0.6,
        }}
        className="h-[150px] sm:h-[300px] w-[1px] absolute top-[400px] sm:top-[250px] left-[50%] -translate-x-1/2 bg-gradient-to-b from-purple-500 to-indigo-500"
      ></motion.div>
    </main>
  );
};

export default Hero;
