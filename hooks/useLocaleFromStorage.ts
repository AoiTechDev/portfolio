import { useCookies } from "next-client-cookies";
export function useLocaleFromStorage() {
  const cookies = useCookies();
  const locale = cookies.get("NEXT_LOCALE");

  return locale;
}
