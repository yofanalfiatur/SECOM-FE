"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef, useEffect, use } from "react";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import { useTranslations } from "next-intl";

const BlpNews = ({ translationKey }) => {
  const t = useTranslations();
  const BlpNews = t.raw(translationKey);
  return (
    <section className="blp-news">
      <div className="container">
        <h2>Business News</h2>
      </div>
    </section>
  );
};

export default BlpNews;
