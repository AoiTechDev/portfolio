import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import NavItem from "./common/NavItem";

const Footer = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto mt-16 py-10 flex flex-col justify-center items-center text-white space-y-32">
      <div className="flex w-full flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start space-y-12 lg:space-y-0">
        <div className="space-y-4">
          <div className="flex justify-center lg:justify-start items-center lg:items-start text-4xl gap-8">
            <Link
              href="https://www.linkedin.com/in/pbornikowski/"
              className="hover:opacity-50 duration-200 w-6"
              target="_blank"
            >
              {" "}
              <FaLinkedin />
            </Link>
            <Link
              href="https://github.com/AoiTechDev"
              className="hover:opacity-50 duration-200 w-6"
              target="_blank"
            >
              <FaGithub />
            </Link>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-32 h-[2px]"></div>
          <ul className="flex flex-col justify-center items-center lg:items-start gap-4">
            <NavItem text="Home" />
            <NavItem text="About" />
            <NavItem text="Projects" />
          </ul>
        </div>
        <div className="flex flex-col justify-center lg:justify-end items-center lg:items-end space-y-4">
          <span className="text-2xl text-center  font-bold lg:text-end">
            Contact Me
          </span>
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-32 h-[2px]"></div>
          <ul className="space-y-2  text-center lg:text-end">
            <li>pawel.bornikowski@gmail.com</li>
            <li>+48533502111</li>
          </ul>
        </div>
      </div>
      <div>
        {" "}
        <span className="flex justify-center items-center">
          ⓒ 2024 All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
