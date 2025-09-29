"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AboutTrusted = ({ translationKey }) => {
  const t = useTranslations();
  const AboutTrusted = t.raw(translationKey);
  const isDesktop = useIsDesktop();

  return (
    <section className="flex flex-col pt-0 pb-8 lg:pt-10 lg:pb-30 overflow-hidden ab-trusted">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h2 className="text-darkblue text-[25px] lg:text-[40px] font-raleway font-medium">
          {AboutTrusted.title}
        </h2>
        <div className="flex flex-col mb-4 mt-4 ab-trusted__wrap-slider">
          <Splide
            options={{
              type: "loop",
              autoplay: false,
              interval: 4000,
              pauseOnHover: true,
              arrows: false,
              pagination: true,
              perPage: 4,
              gap: "1.5rem",
              breakpoints: {
                1024: {
                  perPage: 3,
                },
                768: {
                  perPage: 2,
                },
              },
            }}
            className="w-full slider-with-pagin ab-trusted__slider"
            hasTrack={false}
          >
            <SplideTrack className="!overflow-visible mb-8 ab-trusted__track">
              {AboutTrusted.items.map((img, index) => (
                <SplideSlide key={index} className="ab-trusted__slide">
                  <div className="ab-trusted__item flex flex-col items-center">
                    <Image
                      src={img}
                      alt={`trusted-${index}`}
                      width={310}
                      height={165}
                      className="object-contain w-full max-h-[72px] lg:max-h-[165px] m-auto ab-trusted__img"
                    />
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default AboutTrusted;
