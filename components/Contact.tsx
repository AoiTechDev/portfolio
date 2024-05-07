"use client";
import React from "react";

import { FaLinkedin } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import Blob from "./svg/blob";
import { InputLabel, TextareaAutosize } from "@mui/material";

const Contact = () => {
  return (
    <div className="w-full max-w-[1800px] min-h-screen flex  flex-col min-[1400px]:flex-row justify-center gap-12 min-[1400px]:justify-center items-center text-white my-32">
      <div className=" order-2 min-[1400px]:order-1 min-[1400px]:flex-1 text-white flex justify-center items-center relative w-full">
        <Blob />
        <div className="absolute flex flex-col gap-6 lg:w-[300px]">
          <TextField id="standard-basic" label="Your Name" variant="standard" />
          <TextField
            id="standard-basic"
            label="Your Email"
            variant="standard"
          />
          <TextField
            id="standard-multiline-flexible"
            label="Share your thoughts"
            multiline
            maxRows={20}
            variant="standard"
          />
        </div>
      </div>
      <div className="order-1 min-[1400px]:order-2 min-[1400px]:flex-1 flex-col min-[1400px]:h-screen  flex items-center  justify-around ">
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
    </div>
  );
};

export default Contact;
