"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { CiMenuFries } from "react-icons/ci";
import NavItem from "./common/NavItem";

import LanguageChanger from "./LanguageChanger";
import Socials from "./Socials";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const { t } = useTranslation();
  return (
   
    <div
      className={cn(
        "fixed top-6 inset-x-6 lg:inset-x-0 max-w-xl mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <LanguageChanger className="absolute top-3  left-2 flex justify-center items-center flex-col text-white" />
        <MenuItem setActive={setActive} active={null} item={t('common:about')} />

        <MenuItem setActive={setActive} active={null} item={t('common:projects')} />
        {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Mealfulness</HoveredLink>
            <HoveredLink href="/hobby">WiredWave</HoveredLink>
          </div> */}

        <MenuItem setActive={setActive} active={null} item={t('common:skills')} />
      </Menu>
    </div>
  );
};

export default Navbar;
