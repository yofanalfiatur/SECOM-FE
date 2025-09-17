"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef, useEffect } from "react";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AboutCertificate = ({ translationKey }) => {
  const t = useTranslations();
  const AboutCertificate = t.raw(translationKey);
  const isDesktop = useIsDesktop();
  return (
    <>
      <section className="flex flex-col relative ab-certif">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row">
          <div className="w-8/12 flex flex-col relative z-0">
            <Splide
              options={{
                type: "loop",
                autoplay: false,
                interval: 4000,
                pauseOnHover: true,
                arrows: true,
                pagination: false,
                perPage: 2,
                gap: "1rem",
              }}
              className="w-full ab-certif__slider"
              hasTrack={false}
            >
              <SplideTrack className="!overflow-visible ab-certif__track">
                {AboutCertificate.items.map((item, index) => (
                  <SplideSlide key={index} className="ab-certif__slide">
                    <div
                      className={`ab-certif__item flex flex-col items-center p-6 bg-white !shadow-[0px_4px_15px_0px_#0000001A]`}
                    >
                      <Image
                        src={item.image}
                        width={204}
                        height={188}
                        alt={`Certificate ${index + 1}`}
                        className="mb-4 ab-certif__img"
                      />
                      <p className="text-sm font-normal text-darkblue text-center ab-certif__caption">
                        {item.title}
                      </p>
                    </div>
                  </SplideSlide>
                ))}
              </SplideTrack>
            </Splide>
          </div>
          <div
            className="w-4/12 flex flex-col justify-center relative z-[1] bg-white after:content-[''] after:absolute 
             after:w-[calc(150%_+_(100vw-1320px+4rem)/2)] 
             after:h-full 
             after:bottom-0 after:left-0 
             after:bg-white
             after:z-[-1]"
          >
            <h2 className="text-darkblue text-[45px]">
              {AboutCertificate.title}
            </h2>
            <p className="text-darkblue text-lg">{AboutCertificate.desc}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCertificate;
