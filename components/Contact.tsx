"use client";
import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="w-full h-screen min-h-screen flex  flex-col min-[1400px]:flex-row justify-center gap-12 min-[1400px]:justify-center items-center text-white my-32">
      <div className=" min-[1400px]:flex-1 flex-col min-[1400px]:h-screen  flex items-center  justify-around ">
        <div className="">
          <h2 className="text-8xl">Contact</h2>
          <div className="flex gap-2 justify-center items-center">
            <div className="h-[3px] w-64 bg-white"></div>
            <h2 className="text-8xl">Me</h2>
          </div>
        </div>
        <div className=" space-y-4 min-[1400px]:flex flex-col justify-center items-center hidden">
          <h3 className="text-2xl">You can also find me here.</h3>

          <FaLinkedin className="text-5xl" />
        </div>
      </div>
      <div className=" min-[1400px]:flex-1 text-white flex justify-center items-center  h-screen w-full">
        <div className="w-1/2 space-y-6">
          <div>
            <Label>Your Name</Label>
            <Input />
          </div>
          <div>
            <Label>Your Email</Label>
            <Input />
          </div>
          <div>
            <Label>Subject</Label>
            <Input />
          </div>
          <div>
            <Label>Leave me a message</Label>
            <Textarea />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
