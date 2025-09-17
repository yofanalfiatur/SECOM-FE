"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef, useEffect, use } from "react";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import { useTranslations } from "next-intl";

const BlpBanner = ({ translationKey }) => {
  const t = useTranslations();
  const BlpBanner = t.raw(translationKey);
  return (
    <section className="blp-banner">
      <div className="container">
        <h2>Business Banner</h2>
      </div>
    </section>
  );
};

export default BlpBanner;
