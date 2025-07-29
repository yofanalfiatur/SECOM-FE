"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

const useActiveLanguage = () => {
  const pathname = usePathname();

  const activeLanguage = useMemo(() => {
    if (pathname.startsWith("/id/") || pathname === "/id") {
      return "ID";
    }
    return "EN";
  }, [pathname]);

  const isLanguageActive = (langCode) => activeLanguage === langCode;

  return { activeLanguage, isLanguageActive };
};

export default useActiveLanguage;
