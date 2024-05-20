"use client";
import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoMdPin } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
const Contact = () => {
  return (
    <section className="h-[50vh] max-w-[1600px] w-full mx-auto z-0 relative sm:mt-32 flex justify-center items-center flex-col text-white gap-8">
      <div className="absolute w-full sm:w-1/2 h-full bg-grid-white/[0.05] left-1/2 -translate-x-1/2"></div>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <h2 className="text-3xl sm:text-5xl text-balance text-center w-full max-w-2xl">
        Ready to take{" "}
        <span className="bg-gradient-to-r from-purple-500 to-indigo-500 inline-block text-transparent bg-clip-text">
          your
        </span>{" "}
        digital presence to the next level?
      </h2>

      <p className="opacity-60 text-center">{`Reach out to me today and let's discuss how I can help you achieve your goals.`}</p>
      <button className="py-4 px-8 rounded-xl bg-transparent flex gap-4 border-[#282828] border-[1px] justify-center relative items-center z-0 ">
        <span className="absolute   opacity-40 top-0 w-full h-full -z-10 bg-gradient-to-r from-[#1e1e1e] to-[#282828] "></span>
        Contact Me Now <MdArrowOutward className="text-xl" />
      </button>
    </section>
  );
};

export default Contact;
