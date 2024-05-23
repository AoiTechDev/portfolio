"use client";
import { useCookies } from "next-client-cookies";
export function GetLocaleFromStorage() {
  const cookies = useCookies();
  const locale = cookies.get("NEXT_LOCALE");

  return locale;
}
