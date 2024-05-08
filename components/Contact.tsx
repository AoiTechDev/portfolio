"use client";
import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoMdPin } from "react-icons/io";
const Contact = () => {
  return (
    <div className="w-full h-screen min-h-screen flex  flex-col min-[1400px]:flex-row justify-center gap-12 min-[1400px]:justify-center items-center text-white my-32">
      <div className=" min-[1400px]:flex-1  min-[1400px]:h-screen  flex items-center justify-center ">
        <div className="flex flex-col justify-center gap-12 items-start h-3/4">
          <div className="">
            <h2 className="text-8xl">Contact</h2>
            <div className="flex gap-2 justify-center items-center">
              <div className="h-[3px] w-64 bg-white"></div>
              <h2 className="text-8xl">Me</h2>
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center text-xl">
            <div className=" rounded-full w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 flex justify-center items-center">
              <FaPhone className="text-3xl" />
            </div>
            <span>+48 533 502 111</span>
          </div>
          <div className="flex gap-4 justify-center items-center text-xl">
            <div className=" rounded-full w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 flex justify-center items-center">
              <IoIosMail className="text-3xl" />
            </div>
            <span>pawel.bornikowski@gmail.com</span>
          </div>
          <div className="flex gap-4 justify-center items-center text-xl">
            <div className=" rounded-full w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 flex justify-center items-center">
              <IoMdPin className="text-3xl" />
            </div>

            <span>Poland, Wrocław</span>
          </div>
         
        </div>
      </div>
      <div className=" min-[1400px]:flex-1 text-white flex justify-center items-center  h-screen w-full">
        <form className="w-1/2 space-y-10">
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
          <button className="bg-gradient-to-r from-purple-500 to-indigo-500 w-full py-3 rounded-lg">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
