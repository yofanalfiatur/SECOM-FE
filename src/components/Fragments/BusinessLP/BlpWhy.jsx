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
  const isDesktop = useIsDesktop();
  return (
    <section className="flex flex-col relative overflow-hidden pt-10 lg:pt-0 pb-9 lg:pb-0 lg:border-b-1 lg:border-[#13223333] blp-why ">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-7/12 flex flex-col justify-center lg:border-r-1 lg:border-[#13223333]">
          <h2 className="text-darkblue leading-[1.3] lg:leading-[1.2] text-3xl lg:text-6xl font-medium font-raleway border-b-1 border-b-[#13223333] lg:border-b-0">
            {BlpWhy.title}
          </h2>

          {!isDesktop && (
            <Image
              src={BlpWhy.image}
              width={600}
              height={600}
              quality={100}
              alt={BlpWhy.title}
              className="mt-7 mb-8 lg:mt-20 lg:mb-20 lg:mr-0 w-full h-auto lg:aspect-[285/260] object-cover"
            />
          )}

          <div className="flex flex-col mt-12 gap-8">
            {BlpWhy.items.map((item, index) => (
              <div className="flex flex-row items-center gap-4" key={index}>
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

        {isDesktop && (
          <div className="w-full lg:w-5/12 flex flex-col lg:pl-14">
            <Image
              src={BlpWhy.image}
              width={600}
              height={600}
              alt="About"
              className="mt-7 mb-8 lg:mt-20 lg:mb-20 lg:mr-0 w-full h-auto lg:aspect-[462/422] object-cover"
              quality={100}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default BlpWhy;
