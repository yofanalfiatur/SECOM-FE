"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef, useEffect } from "react";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AbWorldBanner = ({ translationKey }) => {
  const t = useTranslations();
  const AbWorldBanner = t.raw(translationKey);
  const isDesktop = useIsDesktop();

  return (
    <section className="flex flex-col relative overflow-hidden lg:h-[654px] bg-navyblue abw-banner">
      <div className="absolute top-0 left-0  w-full h-full">
        <div className="container mx-auto flex flex-col justify-center h-full">
          <div className="flex flex-col lg:w-[50%]">
            <p className="text-white">{AbWorldBanner.subtitle}</p>
            <h2 className="text-white font-raleway font-medium text-[25px] lg:text-[40px]">
              {AbWorldBanner.title}
            </h2>
          </div>
        </div>
      </div>
      <div className="w-full h-full lg:ml-auto lg:w-[50%]">
        <Image
          src={AbWorldBanner.bgDesktop}
          alt="ab-world-banner"
          width={1000}
          height={1000}
          className="object-cover h-full w-full"
        />
      </div>
    </section>
  );
};

export default AbWorldBanner;
