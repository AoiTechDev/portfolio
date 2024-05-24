"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { IoMdHome } from "react-icons/io";

export const MenuItem = ({
  href,
  item,
}: {
  href: string;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:opacity-[0.9] dark:text-white"
      >
        <Link href={href}>
          <span className="block sm:hidden hover:opacity-60 duration-200">
            {item === "Główna" || item === "Home" ? (
              <IoMdHome className="text-3xl" />
            ) : (
              item
            )}
          </span>
          <span className="hidden sm:block hover:opacity-60 duration-200">{item}</span>
        </Link>
      </motion.p>
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative  rounded-xl  dark:border-white/[0.2] bg-transparent border-[#282828] border-[1px] shadow-input flex items-center justify-center space-x-6 px-2 sm:px-8 py-6 "
    >
      <div className="w-full h-full bg-[#1e1e1e] absolute top-0 rounded-xl opacity-95 "></div>
      {children}
    </nav>
  );
};

