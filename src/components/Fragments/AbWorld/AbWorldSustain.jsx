"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef, useEffect } from "react";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

const AbWorldSustain = ({ translationKey }) => {
  const t = useTranslations();
  const locale = useLocale();
  const AbWorldSustain = t.raw(translationKey);
  return (
    <section className="bg-navyblue abw-sustain">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-white text-[30px] lg:text-[40px]">
          {AbWorldSustain.title}
        </h2>
        <p className="text-white w-full lg:w-[50%] text-center">
          {AbWorldSustain.desc}
        </p>
        <div className="flex flex-col w-full abw-sustain__wrap-slider">
          <Splide
            options={{
              type: "loop",
              autoplay: false,
              interval: 4000,
              pauseOnHover: true,
              arrows: false,
              pagination: false,
              perPage: 3,
              gap: "1rem",
              breakpoints: {
                1024: {
                  perPage: 2,
                  arrows: true,
                },
                768: {
                  perPage: 1,
                },
              },
            }}
            className="w-full abw-sustain__slider"
            hasTrack={false}
          >
            <SplideTrack className="abw-sustain__track">
              {AbWorldSustain.items.map((item, index) => (
                <SplideSlide
                  key={index}
                  className=" flex flex-col abw-sustain__slide"
                >
                  <div className="abw-sustain__item bg-white shadow-[0px_4px_15px_0px_#00000026] flex flex-col items-center">
                    <div className="flex flex-col w-full">
                      <Image
                        src={item.image}
                        alt={`trusted-${index}`}
                        width={420}
                        height={291}
                        quality={100}
                        className="w-full abw-sustain__img"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="">{item.title}</p>
                      <p className="">{item.title}</p>
                      <Link
                        href={item.link}
                        className="abw-sustain__link"
                        target="_self"
                      >
                        {locale === "en" ? "Read more" : "Baca Selengkapnya"}
                      </Link>
                    </div>
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

export default AbWorldSustain;
