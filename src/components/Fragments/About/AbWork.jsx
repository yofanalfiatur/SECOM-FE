"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef, useEffect } from "react";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import { useTranslations } from "next-intl";

const AboutWork = ({ translationKey }) => {
  const t = useTranslations();
  const AboutWork = t.raw(translationKey);
  const isDesktop = useIsDesktop();

  // Refs untuk sync
  const titleSplideRef = useRef(null);
  const imgSplideRef = useRef(null);
  const descSplideRef = useRef(null);

  useEffect(() => {
    if (
      titleSplideRef.current &&
      imgSplideRef.current &&
      descSplideRef.current
    ) {
      const titleSplide = titleSplideRef.current.splide;
      const imgSplide = imgSplideRef.current.splide;
      const descSplide = descSplideRef.current.splide;

      // Sync title → img & desc
      titleSplide.sync(imgSplide);
      titleSplide.sync(descSplide);
    }
  }, []);

  return (
    <section className="relative bg-navyblue ab-work">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-7/12 flex flex-col border-white/50 border-r-[1px]">
          <h2 className="text-white text-[30px] lg:text-[50px] font-normal h-full">
            {AboutWork.title}
          </h2>
        </div>
        <div className="w-5/12 flex flex-col p-10 ab-work__wrap-slider-title">
          <Splide
            ref={titleSplideRef}
            options={{
              type: "loop",
              perPage: 1,
              arrows: true,
              pagination: false,
              autoplay: false,
              pauseOnHover: true,
              gap: "0px",
            }}
            className="w-full h-max ab-work__slider-title"
            hasTrack={false}
          >
            <SplideTrack>
              {AboutWork.items.map((item, index) => (
                <SplideSlide key={index} className="h-max ab-work__slide-title">
                  <p className="text-white h-max ab-work__item-title">
                    {item.title}
                  </p>
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
        </div>
      </div>

      <div className="flex flex-col border-white/50 border-t-[1px]">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="w-7/12 border-white/50 border-r-[1px] p-10 ab-work__wrap-slider-img">
            <Splide
              ref={imgSplideRef}
              options={{
                type: "loop",
                perPage: 1,
                arrows: false,
                pagination: false,
                autoplay: false,
                pauseOnHover: true,
                gap: "0px",
              }}
              className="w-full h-max ab-work__slider-img"
              hasTrack={false}
            >
              <SplideTrack>
                {AboutWork.items.map((item, index) => (
                  <SplideSlide key={index} className="h-max ab-work__slide-img">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover ab-work__item-img"
                    />
                  </SplideSlide>
                ))}
              </SplideTrack>
            </Splide>
          </div>

          <div className="w-5/12 flex flex-col p-10 ab-work__wrap-slider-desc">
            <Splide
              ref={descSplideRef}
              options={{
                type: "loop",
                perPage: 1,
                arrows: false,
                pagination: false,
                autoplay: false,
                pauseOnHover: true,
                gap: "0px",
              }}
              className="w-full h-max ab-work__slider-desc"
              hasTrack={false}
            >
              <SplideTrack>
                {AboutWork.items.map((item, index) => (
                  <SplideSlide
                    key={index}
                    className="h-max ab-work__slide-desc"
                  >
                    <p className="text-white h-max ab-work__item-desc">
                      {item.desc}
                    </p>
                  </SplideSlide>
                ))}
              </SplideTrack>
            </Splide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWork;
