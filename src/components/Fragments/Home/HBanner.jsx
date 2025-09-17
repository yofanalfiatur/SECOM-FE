"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef, useEffect } from "react";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import { useTranslations } from "next-intl";
import ButtonPrimary from "@/components/Elements/ButtonPrimary";

const HomeBanner = ({ translationKey }) => {
  const t = useTranslations();
  const HBanner = t.raw(translationKey);
  const isDesktop = useIsDesktop();

  const mainSplideRef = useRef(null);
  const titleSplideRef = useRef(null);
  const descSplideRef = useRef(null);

  useEffect(() => {
    // Sync all splides
    if (
      mainSplideRef.current &&
      titleSplideRef.current &&
      descSplideRef.current
    ) {
      const mainSplide = mainSplideRef.current.splide;
      const titleSplide = titleSplideRef.current.splide;
      const descSplide = descSplideRef.current.splide;

      // Sync title & desc splide
      mainSplide.sync(titleSplide);
      mainSplide.sync(descSplide);
    }
  }, []);

  return (
    <>
      <section className="overflow-hidden relative h-banner">
        <div className="w-full after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-[1] after:bg-[linear-gradient(180deg,rgba(0,82,156,0)_50%,#00529C_75%)] after:lg:bg-[linear-gradient(180deg,rgba(0,82,156,0)_50.06%,#00529C_100%)] h-banner__bg">
          <Splide
            ref={mainSplideRef}
            options={{
              type: "loop",
              perPage: 1,
              autoplay: false,
              interval: 4000,
              pauseOnHover: true,
              arrows: false,
              pagination: false,
              gap: "0px",
              height: "calc(100vh - 94px)",
              breakpoints: {
                1024: {
                  height: "550px",
                },
              },
            }}
            className="h-banner__slider"
            hasTrack={false}
          >
            <SplideTrack>
              {HBanner.map((item, index) => (
                <SplideSlide key={index}>
                  <div className=" relative w-full h-full h-banner__slide">
                    <img
                      src={isDesktop ? item.bgDesktop : item.bgMobile}
                      alt={`Banner ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
        </div>
        <div className="absolute z-[2] bottom-0 left-0 w-full h-banner__content border-t-[1px] border-white">
          <div className="container mx-auto flex flex-col lg:flex-row lg:min-h-[230px]">
            <div className="w-full lg:w-8/12 lg:border-r-[1px] lg:border-white pt-4 lg:pt-7 lg:pr-8">
              <Splide
                ref={titleSplideRef}
                options={{
                  type: "loop",
                  perPage: 1,
                  autoplay: false,
                  interval: 4000,
                  pauseOnHover: true,
                  arrows: false,
                  pagination: false,
                  gap: "0px",
                  height: "100%",
                }}
                className="h-full flex items-center"
                hasTrack={false}
              >
                <SplideTrack className="h-full">
                  {HBanner.map((item, index) => (
                    <SplideSlide key={index} className="w-full h-full">
                      <div className="w-full h-full flex flex-col">
                        <p className="text-white text-[30px] lg:text-[45px] font-raleway font-normal lg:mb-2 leading-[1.3]">
                          {item.title}
                        </p>
                        {item.href !== null && item.btnCTA && (
                          <ButtonPrimary
                            href={item.btnCTA.href}
                            target={item.btnCTA.target}
                            className="mt-2 hidden lg:flex"
                          >
                            {item.btnCTA.text}
                          </ButtonPrimary>
                        )}
                      </div>
                    </SplideSlide>
                  ))}
                </SplideTrack>
              </Splide>
            </div>
            <div className="w-full lg:w-4/12 pt-0 pb-10 lg:pt-9 lg:pb-9 lg:pl-8 h-banner__wrap-desc">
              <Splide
                ref={descSplideRef}
                options={{
                  type: "loop",
                  perPage: 1,
                  autoplay: false,
                  interval: 4000,
                  pauseOnHover: true,
                  arrows: false,
                  pagination: true,
                  gap: "0px",
                }}
                className="h-full"
                hasTrack={false}
              >
                <SplideTrack>
                  {HBanner.map((item, index) => (
                    <SplideSlide key={index}>
                      <div className="">
                        <p className="text-sm lg:text-lg text-white leading-[1.7] lg:leading-[1.5]">
                          {item.desc}
                        </p>
                      </div>
                    </SplideSlide>
                  ))}
                </SplideTrack>
              </Splide>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
