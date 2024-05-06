import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Socials = ({className}: {className?: string}) => {
  return (
    <div className={cn("flex flex-col text-2xl gap-3", className)}>
      <Link
        href="https://www.linkedin.com/in/pbornikowski/"
        className="hover:opacity-50 duration-200 w-6"
        target="_blank"
        aria-label="Read more about me on my linkedin"
      >
        {" "}
        <FaLinkedin />
      </Link>
      <Link
        href="https://github.com/AoiTechDev"
        className="hover:opacity-50 duration-200 w-6"
        target="_blank"
        aria-label="Check my github to see more my projects"
      >
        <FaGithub />
      </Link>
    </div>
  );
};

export default Socials;
