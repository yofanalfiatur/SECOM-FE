"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef, useEffect } from "react";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import { useTranslations } from "next-intl";
import Image from "next/image";

const BlpWhy = ({ translationKey }) => {
  const t = useTranslations();
  const BlpWhy = t.raw(translationKey);
  return (
    <section className="flex flex-col relative overflow-hidden pb-9 lg:pb-0 lg:border-b-1 lg:border-[#13223333] blp-why ">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-7/12 flex flex-col lg:border-r-1 lg:border-[#13223333]">
          <h2 className="text-darkblue leading-[1.3] lg:leading-[1.2] text-3xl lg:text-6xl font-medium font-raleway">
            {BlpWhy.title}
          </h2>
          <div className="flex flex-col">
            {BlpWhy.items.map((item, index) => (
              <div className="flex flex-row" key={index}>
                <Image
                  src={item.icon}
                  width={55}
                  height={52}
                  alt={item.title}
                  className="w-[44px] object-contain lg:w-[55px]"
                />
                <p className="text-[#132233] text-sm lg:text-lg font-normal">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-5/12 flex flex-col lg:pl-6">
          <Image
            src={BlpWhy.image}
            width={530}
            height={550}
            alt="About"
            className="pt-7 pb-8 lg:pt-16 lg:pb-16 lg:pr-16 w-full h-auto object-cover"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default BlpWhy;
