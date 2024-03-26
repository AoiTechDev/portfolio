"use client";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import NavItem from "./common/NavItem";
import { createPortal } from "react-dom";
import Menu from "./Menu";
import { motion } from "framer-motion";
const Navbar = () => {
  const [isActive, setIsActive] = React.useState(false);
  const [scrollDir, setScrollDir] = React.useState("up");

  const navRef = React.useRef(null);

  React.useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  return (
    <nav className="w-full flex justify-end sm:justify-between items-start text-white p-6 sm:pt-20 sm:px-16 z-40 fixed top-0">
      <motion.div
        animate={{ x: scrollDir === "down" ? "-250%" : "0" }}
        className="sm:flex flex-col gap-5 hidden"
      >
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
      </motion.div>
      {/* <div className="">PBCode</div> */}

      <motion.ul
        animate={{ x: scrollDir === "down" ? "250%" : "0" }}
        className="hidden sm:flex flex-col items-end gap-3 "
      >
        <NavItem text="Home" />
        <NavItem text="About" />
        <NavItem text="Projects" />
        <NavItem text="Contact" />
      </motion.ul>

      <CiMenuFries
        className="text-3xl  text-white block sm:hidden"
        onClick={() => setIsActive((prev) => !prev)}
      />

      {isActive ? <Menu setIsActive={setIsActive} /> : null}
    </nav>
  );
};

export default Navbar;
