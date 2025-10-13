"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef, useEffect } from "react";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import { useTranslations } from "next-intl";
import Image from "next/image";

const HomeValue = ({ translationKey }) => {
  const t = useTranslations();
  const HValue = t.raw(translationKey);
  const isDesktop = useIsDesktop();
  return (
    <>
      <section className="flex flex-col pt-6 lg:pt-17 pb-10 lg:pb-27 h-value">
        <div className="flex flex-col container mx-auto">
          <h2 className="text-navyblue text-[30px] lg:text-[45px] leading-[1.4] font-raleway font-medium mb-8 lg:mb-20">
            {HValue.title}
          </h2>
          <div className="flex flex-col md:flex-row gap-8 lg:gap-3">
            {HValue.items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center lg:items-start gap-4 lg:gap-8 px-6 lg:px-0"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={isDesktop ? 95 : 70}
                  height={isDesktop ? 95 : 70}
                />
                <p className="text-darkblue text-base lg:text-xl text-center lg:text-start font-medium">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeValue;
