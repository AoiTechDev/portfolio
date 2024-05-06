"use client";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import { CiMenuFries } from "react-icons/ci";
import NavItem from "./common/NavItem";

import Menu from "./Menu";
import LanguageChanger from "./LanguageChanger";
import Socials from "./Socials";

const Navbar = () => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <nav className="w-full flex justify-end sm:justify-between items-start text-white p-4 sm:pt-16 sm:px-16 z-40 fixed sm:relative glass top-0">
        <div className="sm:flex flex-col gap-5 hidden">
        {/* <div className="space-x-5 ">
          <span>ENG</span>
          <span>PL</span>
        </div> */}
        <LanguageChanger/>
        <span className="h-[1px] w-4 bg-white opacity-50"></span>
       <Socials/>
      </div>


      <ul className="hidden sm:flex flex-col items-end gap-3 ">
        {/* <NavItem text="Home" link="/"/> */}
        <NavItem text="About" link="#about" />
        <NavItem text="Projects" link="#projects"/>
        <NavItem text="Skills" link="#skills"/>
        {/* <NavItem text="Contact" /> */}
      </ul>

      <CiMenuFries
        className="text-3xl  text-white block sm:hidden"
        onClick={() => setIsActive((prev) => !prev)}
      />

      {isActive ? <Menu setIsActive={setIsActive} /> : null}
    </nav>
  );
};

export default Navbar;
