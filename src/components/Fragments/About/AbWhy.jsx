"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef, useEffect } from "react";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AboutWhy = ({ translationKey }) => {
  const t = useTranslations();
  const AboutWhy = t.raw(translationKey);
  const isDesktop = useIsDesktop();
  return (
    <>
      <section className="relative pt-6 lg:pt-15 ab-why">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-darkblue font-raleway font-medium text-[30px] lg:text-[40px]">
            {AboutWhy.title}
          </h2>
          <p className="text-sm font-normal lg:text-lg text-center text-darkblue w-[50%] pt-3 pb-3">
            {AboutWhy.desc}
          </p>
          <div className="w-full ab-why__wrap-slider">
            <Splide
              options={{
                type: "loop",
                autoplay: false,
                interval: 4000,
                pauseOnHover: true,
                arrows: false,
                pagination: false,
                perPage: 4,
                destroy: true,
                breakpoints: {
                  1024: {
                    destroy: false,
                    perPage: 2,
                    pagination: true,
                  },
                  768: {
                    perPage: 1,
                  },
                },
              }}
              className="w-full ab-why__slider"
              hasTrack={false}
            >
              <SplideTrack>
                {AboutWhy.items.map((item, index) => (
                  <SplideSlide
                    key={index}
                    className={`ab-why__slide ${
                      isDesktop ? "w-1/4" : "w-full"
                    }`}
                  >
                    <div
                      className={`ab-why__item flex flex-col items-center p-6`}
                    >
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={100}
                        height={100}
                        className="mb-4 ab-why__icon"
                      />
                      <p className="text-tosca font-raleway font-medium text-lg mb-2 text-center ab-why__item-title">
                        {item.title}
                      </p>
                      <p className="text-sm text-center ab-why__item-desc">
                        {item.desc}
                      </p>
                    </div>
                  </SplideSlide>
                ))}
              </SplideTrack>
            </Splide>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutWhy;
