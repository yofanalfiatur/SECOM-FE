"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef, useEffect } from "react";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AbWorldMap = ({ translationKey }) => {
  const t = useTranslations();
  const AbWorldMap = t.raw(translationKey);

  return (
    <section className="bg-darkblue pt-10 pb-10 lg:pt-10 lg:pb-10 flex flex-col items-center abw-map">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-white text-xl lg:text-[40px] font-raleway font-normal text-center">
          {AbWorldMap.title}
        </h2>
        <p className="text-white lg:w-[55%] text-center">{AbWorldMap.desc}</p>
      </div>
      <div className="lg:px-15 xl:px-20 flex flex-col items-center w-full relative">
        <Image
          src={AbWorldMap.bgMap}
          width={1920}
          height={1080}
          alt="ab-world-map"
          quality={100}
          className="w-full h-full object-cover"
        />
        {AbWorldMap.items.map((item, index) => (
          <div
            className="absolute"
            style={{ top: item.top, left: item.left }}
            key={index}
          >
            <div className="abw-map__item__sonar">
              <div className="absolute w-[20px] h-[20px] bg-tosca rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 abw-map__item__pin__bg"></div>
              <div className="absolute w-[20px] h-[20px] border-tosca border-[1px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pulse-one"></div>
            </div>
            <div className="abw-map__item__wrap-text flex flex-row gap-3 bg-white absolute top-[-10px] px-2 py-1 w-max justify-center items-center">
              <Image
                src={item.flag}
                width={20}
                height={14}
                quality={100}
                className="w-[20px] h-[14px] object-cover"
              />
              <p className="text-darkblue">{item.country}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AbWorldMap;
