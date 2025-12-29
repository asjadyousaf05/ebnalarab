import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

export type Locale = "en" | "ar";

type LocaleContextValue = {
  locale: Locale;
  dir: "ltr" | "rtl";
  toggleLocale: () => void;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("locale") : null;
    return stored === "ar" || stored === "en" ? stored : "en";
  });
  const dir: "ltr" | "rtl" = locale === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    const html = document.documentElement;
    html.lang = locale === "ar" ? "ar" : "en";
    html.dir = dir;
    window.localStorage.setItem("locale", locale);
  }, [locale, dir]);

  const value = useMemo(
    () => ({
      locale,
      dir,
      toggleLocale: () => setLocale((prev) => (prev === "en" ? "ar" : "en")),
      setLocale,
    }),
    [locale, dir]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return ctx;
};
