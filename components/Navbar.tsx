"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { CiMenuFries } from "react-icons/ci";
import NavItem from "./common/NavItem";

import LanguageChanger from "./LanguageChanger";

import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { useDetectScroll } from "@/hooks/useDetectScroll";
import { m } from "framer-motion";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const { t } = useTranslation();
  const navRef = useRef<HTMLDivElement | null>(null);
  const { scrollDirection } = useDetectScroll();

  useEffect(() => {
    if (scrollDirection === "down") {
      navRef.current?.classList.add("-translate-y-28");
    } else {
      navRef.current?.classList.remove("-translate-y-28");
    }
  }, [scrollDirection]);

  const navLinks = [
    {
      id: 1,
      item: t("common:home"),
      href: "/#home",
    },
    {
      id: 2,
      item: t("common:about"),
      href: "/#about",
    },
    {
      id: 3,
      item: t("common:projects"),
      href: "/#projects",
    },
    {
      id: 4,
      item: t("common:skills"),
      href: "/#skills",
    },
  ];
  return (
    <div
      ref={navRef}
      className={cn(
        "fixed top-6 inset-x-8 lg:inset-x-0 max-w-xl mx-auto z-50 duration-300",
        className
      )}
    >
      <Menu setActive={setActive}>
        <LanguageChanger className="absolute top-3  left-2 flex justify-center items-center flex-col text-white" />
        {navLinks.map((link) => (
          <MenuItem key={link.id} href={link.href} item={link.item} />
        ))}
        {/* <MenuItem
          setActive={setActive}
          active={null}
          item={t("common:home")}
        />
        <MenuItem
          setActive={setActive}
          active={null}
          item={t("common:about")}
        />

        <MenuItem
          setActive={setActive}
          active={null}
          item={t("common:projects")}
        />

        <MenuItem
          setActive={setActive}
          active={null}
          item={t("common:skills")}
        /> */}
      </Menu>
    </div>
  );
};

export default Navbar;
