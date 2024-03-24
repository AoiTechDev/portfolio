import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const NavItem = ({ text }: { text: string }) => {
  return (
    
    <li className="flex items-center justify-center  group duration-200 opacity-50 hover:opacity-100 cursor-pointer">
    
      <span className="group-hover:-translate-x-4 duration-200 ">{text}</span>{" "}
      <IoIosArrowForward className="hidden group-hover:block duration-200" />
    
    </li>
  );
};

export default NavItem;
