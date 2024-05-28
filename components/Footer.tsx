"use client";
import { useTranslation } from "react-i18next";
import Socials from "./Socials";
import NavItem from "./common/NavItem";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="w-full max-w-5xl mx-auto mt-16 py-10 flex flex-col justify-center items-center text-white space-y-32 px-6">
      <div className="flex w-full flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start space-y-12 lg:space-y-0">
        <div className="space-y-4">
          <Socials className="flex justify-center lg:justify-start items-center lg:items-start text-4xl gap-8 flex-row" />
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-32 h-[2px]"></div>
          <ul className="flex flex-col justify-center items-center lg:items-start gap-4">
            <NavItem text={t("common:home")} link="/" />
            <NavItem text={t("common:about")} link="#about" />
            <NavItem text={t("common:projects")} link="#projects" />
            <NavItem text={t("common:skills")} link="#skills" />
          </ul>
        </div>
        <div className="flex flex-col justify-center lg:justify-end items-center lg:items-end space-y-4">
          <span className="text-2xl text-center  font-bold lg:text-end">
            {t("common:contact_me")}
          </span>
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-32 h-[2px]"></div>
          <ul className="space-y-2  text-center lg:text-end">
            <li>pawel.bornikowski@gmail.com</li>
            <li>+48533502111</li>
          </ul>
        </div>
      </div>
      <div>
        {" "}
        <span className="flex justify-center items-center">
          ⓒ 2024 {t("footer:rights")}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
