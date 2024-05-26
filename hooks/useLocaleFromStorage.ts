import { useEffect, useState } from "react";

export function useLocaleFromStorage() {
  const [locale, setLocale] = useState<string | null | undefined>(null);

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("NEXT_LOCALE="))
      ?.split("=")[1];

    setLocale(cookie);
  }, []);

  return locale;
}
