"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import { CiMenuFries } from "react-icons/ci";
import NavItem from "./common/NavItem";

import LanguageChanger from "./LanguageChanger";
import Socials from "./Socials";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    // <nav className="w-full flex justify-end sm:justify-between items-start text-white p-4 sm:pt-16 sm:px-16 z-40 fixed sm:relative glass top-0">
    //     <div className="sm:flex flex-col gap-5 hidden">
    //     {/* <div className="space-x-5 ">
    //       <span>ENG</span>
    //       <span>PL</span>
    //     </div> */}
    //     <LanguageChanger/>
    //     <span className="h-[1px] w-4 bg-white opacity-50"></span>
    //    <Socials/>
    //   </div>

    //   <ul className="hidden sm:flex flex-col items-end gap-3 ">
    //     {/* <NavItem text="Home" link="/"/> */}
    //     <NavItem text="About" link="#about" />
    //     <NavItem text="Projects" link="#projects"/>
    //     <NavItem text="Skills" link="#skills"/>
    //     {/* <NavItem text="Contact" /> */}
    //   </ul>

    //   <CiMenuFries
    //     className="text-3xl  text-white block sm:hidden"
    //     onClick={() => setIsActive((prev) => !prev)}
    //   />

    //   {isActive ? <Menu setIsActive={setIsActive} /> : null}
    // </nav>
    <div
      className={cn("fixed top-6 inset-x-6 lg:inset-x-0 max-w-xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={null} item="About" />

        <MenuItem setActive={setActive} active={null} item="Projects"/>
          {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Mealfulness</HoveredLink>
            <HoveredLink href="/hobby">WiredWave</HoveredLink>
          </div> */}
      
        <MenuItem setActive={setActive} active={null} item="Skills" />
      </Menu>
    </div>
  );
};

export default Navbar;
