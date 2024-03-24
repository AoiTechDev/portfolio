import React from 'react'
import { FaLinkedin, FaGithub  } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="w-full bg-background flex justify-between items-start text-white pt-20 px-32">
        <div className="sm:flex flex-col gap-5 hidden">
            <div className="space-x-5 ">
                <span>ENG</span>
                <span>PL</span>
            </div>
            <span  className="h-[1px] w-4 bg-white opacity-50"></span>
            <div className="flex flex-col text-2xl gap-3">
            <FaLinkedin />
            <FaGithub />
            </div>
        </div>
        {/* <div className="">PBCode</div> */}
        <div>
            <ul className="hidden sm:flex flex-col items-end gap-3 opacity-50">
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>

        
    </nav>
  )
}

export default Navbar