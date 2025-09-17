"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef, useEffect } from "react";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import { useTranslations } from "next-intl";
import Image from "next/image";

const HomeSegment = ({ translationKey }) => {
  const t = useTranslations();
  const HSegment = t.raw(translationKey);
  const isDesktop = useIsDesktop();
  return (
    <>
      <section className="flex flex-col relative bg-navyblue pt-8 lg:pt-12 lg:pb-20 h-segment">
        <div className="flex flex-col items-center container mx-auto relative z-[2]">
          <h2 className="text-white text-[30px] lg:text-[45px] font-raleway font-normal">
            {HSegment.title}
          </h2>
          <p className="text-white text-center text-sm lg:text-lg leading-[1.7] lg:leading-[1.5] lg:w-[55%] mt-2 mb-5 lg:mt-1 lg:mb-10">
            {HSegment.desc}
          </p>
          <div className="gap-5 flex flex-col lg:flex-row mb-[-150px] lg:mb-[-270px]">
            {HSegment.card.map((item, index) => (
              <div key={index} className="flex flex-col relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1000}
                  height={1000}
                  className="w-full lg:h-[450px] object-cover"
                />
                <div className="bg-tosca flex flex-col px-5 lg:px-6 py-4 lg:py-5 lg:m-5 lg:absolute lg:bottom-0">
                  <p className="text-white lg:text-[25px] mb-1 lg:mb-2 font-medium">
                    {item.title}
                  </p>
                  <p className="text-white text-sm lg:text-base leading-[1.7] lg:leading-[1.5]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSegment;
