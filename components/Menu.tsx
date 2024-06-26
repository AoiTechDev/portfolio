
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { IoMdClose } from "react-icons/io";
import NavItem from "./common/NavItem";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import LanguageChanger from "./LanguageChanger";
import { useTranslation } from "react-i18next";
const Menu = ({
  setIsActive,
}: {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isClient, setClient] = useState(false);
  const { t } = useTranslation();

  const handleClick = () => {
    setIsActive((prev) => !prev)
  }
  useEffect(() => {
    setClient(true);
  }, []);


  if (!isClient) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="fixed top-0 h-[100dvh] w-full bg-background z-40 flex justify-center items-center">
      <IoMdClose
        className="text-3xl text-white top-6 right-6 absolute"
        onClick={handleClick}
      />

      <div className=" w-full max-w-3xl mx-auto">
        <ul className="flex flex-col items-center text-3xl gap-10 text-white">
          <NavItem text={t("common:home")} link="/" onClick={handleClick} />
          <NavItem text={t("common:about")} link="#about" onClick={handleClick}/>
          <NavItem text={t("common:projects")} link="#projects" onClick={handleClick}/>
          <NavItem text={t("common:skills")} link="#skills" onClick={handleClick}/>
        </ul>
      </div>

      <div className="absolute bottom-5 text-white w-full flex justify-around">
        <LanguageChanger />
        <span className="h-6 w-[1px] bg-white opacity-50"></span>
        <div className="space-x-5 text-2xl flex">
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
    </div>,
    document.getElementById("menu")!
  );
};

export default Menu;
