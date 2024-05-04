
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const NavItem = ({ text, link }: { text: string, link: string }) => {
  return (
    <li className="flex items-center justify-center  group duration-200 opacity-50 hover:opacity-100 cursor-pointer">
      <Link href={link} className="">{text}</Link>{" "}
      <IoIosArrowForward className="opacity-0 group-hover:opacity-100 group-hover:translate-x-4 duration-200 hidden lg:block" />
    </li>
  );
};

export default NavItem;
