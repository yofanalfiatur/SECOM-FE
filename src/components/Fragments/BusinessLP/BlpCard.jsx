"use client";

import { useRef, useEffect, use } from "react";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import { useTranslations } from "next-intl";

const BlpCard = ({ translationKey }) => {
  const t = useTranslations();
  const BlpCard = t.raw(translationKey);
  return (
    <section className="blp-card">
      <div className="container">
        <h2>Business Card</h2>
      </div>
    </section>
  );
};

export default BlpCard;
