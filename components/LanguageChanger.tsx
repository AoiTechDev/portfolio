"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import { useRef } from "react";

const lang = ["en", "pl"];
export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const langRefs = useRef<Array<HTMLSpanElement | null>>([]);

  const handleChange = (index: number) => {
    const newLocale = langRefs.current[index]?.textContent;
   
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.defaultLocale
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <div className="uppercase space-x-5 ">
      {lang.map((lang, index) => (
        <span
        className="cursor-pointer hover:opacity-60 duration-200"
          ref={(e) => {
            if (!langRefs.current[index]) {
              langRefs.current[index] = e;
            }
          }}
          key={lang}
          onClick={() => handleChange(index)}
        >
          {lang}
        </span>
      ))}
    </div>
  );
}
