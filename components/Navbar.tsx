"use client";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import LanguageChanger from "./LanguageChanger";

import { useDetectScroll } from "@/hooks/useDetectScroll";
import { cn } from "@/lib/utils";
import { Menu, MenuItem } from "./ui/navbar-menu";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const { t } = useTranslation();
  const navRef = useRef<HTMLDivElement | null>(null);
  const { scrollDirection } = useDetectScroll();

  useEffect(() => {
    if (scrollDirection === "down") {
      navRef.current?.classList.add("-translate-y-40");
    } else {
      navRef.current?.classList.remove("-translate-y-40");
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
        "fixed top-2 sm:top-6 inset-x-2 sm:inset-x-8 lg:inset-x-12 max-w-lg mx-auto z-50 duration-200",

        className
      )}
    >
      <LanguageChanger className="absolute -bottom-12 rounded-xl bg-[#1e1e1e] border-[1px] border-[#282828] px-4 py-2 left-[50%] -translate-x-1/2 flex justify-center items-center gap-4 text-white" />
      <Menu setActive={setActive}>
        {navLinks.map((link) => (
          <MenuItem key={link.id} href={link.href} item={link.item} />
        ))}
      </Menu>
    </div>
  );
};

export default Navbar;
