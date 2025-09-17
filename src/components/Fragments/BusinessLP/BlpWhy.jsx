"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef, useEffect, use } from "react";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import { useTranslations } from "next-intl";

const BlpWhy = ({ translationKey }) => {
  const t = useTranslations();
  const BlpWhy = t.raw(translationKey);
  return (
    <section className="blp-why">
      <div className="container">
        <h2>Business Why</h2>
      </div>
    </section>
  );
};

export default BlpWhy;
