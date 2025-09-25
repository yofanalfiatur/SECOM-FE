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
      <div className="relative lg:absolute top-0 left-0  w-full h-full">
        <div className="container mx-auto flex flex-col justify-center h-full">
          <div className="flex flex-col lg:w-5/12 pt-10 lg:pt-0 pr-0 lg:pr-16 pb-8 lg:pb-0">
            <p className="text-white tracking-[3px] font-raleway text-base lg:text-lg mb-3 lg:mb-6">
              {AbWorldBanner.subtitle}
            </p>
            <h2 className="text-white font-raleway font-normal lg:font-medium text-[35px] lg:text-6xl leading-[1.3] lg:leading-[1.2]">
              {AbWorldBanner.title}
            </h2>
          </div>
        </div>
      </div>
      <div className="w-full h-full lg:ml-auto lg:w-7/12">
        <Image
          src={AbWorldBanner.bgDesktop}
          alt="ab-world-banner"
          width={1000}
          height={1000}
          quality={100}
          className="object-cover aspect-[320/241] lg:aspect-auto h-full w-full"
        />
      </div>
    </section>
  );
};

export default AbWorldBanner;
