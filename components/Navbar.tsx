import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import NavItem from "./NavItem";
const Navbar = () => {
  return (
    <nav className="w-full bg-background flex justify-between items-start text-white pt-20 px-32">
      <div className="sm:flex flex-col gap-5 hidden">
        <div className="space-x-5 ">
          <span>ENG</span>
          <span>PL</span>
        </div>
        <span className="h-[1px] w-4 bg-white opacity-50"></span>
        <div className="flex flex-col text-2xl gap-3">
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
      </div>
      {/* <div className="">PBCode</div> */}
      <div>
        <ul className="hidden sm:flex flex-col items-end gap-3 ">
          <NavItem text="Home" />
          <NavItem text="About" />
          <NavItem text="Projects" />
          <NavItem text="Contact" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
