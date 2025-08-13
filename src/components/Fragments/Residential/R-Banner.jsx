"use client";

import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import { useTranslations } from "next-intl";

const ResBanner = () => {
  const t = useTranslations();
  const ReBanner = t.raw("ReBanner");

  const isDesktop = useIsDesktop();
  return (
    <>
      <section className="overflow-hidden res-banner">
        <div
          className="relative w-full aspect-[200/115] bg-cover bg-bottom bg-no-repeat flex flex-col overflow-hidden res-banner__wrap"
          style={{
            backgroundImage: `url('${ReBanner.background}')`,
          }}
        >
          <div className="mx-auto items-center container flex flex-col h-full relative z-[11] lg:z-1">
            <h1 className="mt-4 lg:mt-28 lg:w-[80%] leading-[1.2] font-medium text-white font-raleway text-[23px] lg:text-[50px] text-center ">
              {ReBanner.title}
            </h1>
          </div>
          {isDesktop && (
            <>
              <ul className="absolute w-full h-full z-[2]">
                {ReBanner.items.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      top: item.top,
                      left: item.left,
                      position: "absolute",
                      maxWidth: item.maxWidth,
                    }}
                    className="flex flex-col res-banner__card overflow-hidden rounded-[0px]"
                  >
                    <div className="flex flex-col res-banner__card-wrap">
                      <p className="text-navyblue py-4 px-4 rounded-[0px] overflow-hidden font-raleway leading-6 text-[16px]">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
          <Image
            src={ReBanner.photo}
            alt="Banner Image"
            width={1920}
            height={1374}
            className="absolute w-full z-[2] lg:z-10 scale-[102.5%] bottom-[3px] sm:bottom-[5px] md:bottom-[8px] lg:bottom-[13px] translate-x[-50%] pointer-events-none"
          />
        </div>
      </section>
      {!isDesktop && (
        <div className="bg-navyblue relative z-[3] pb-18">
          <div className="container mx-auto">
            <Splide
              options={{
                type: "loop",
                perPage: 1,
                perMove: 1,
                arrows: true,
                pagination: false,
                autoplay: true,
                interval: 5000,
                speed: 1000,
              }}
              className="w-full h-full top-[-25px] "
              hasTrack={false}
            >
              {/* Custom Arrow Buttons */}
              <div className="splide__arrows absolute top-[25px] w-full z-[2]">
                <button className="splide__arrow splide__arrow--prev !border-tosca !bg-white !opacity-100 !border-[1px] !rounded-none !w-[36px] !h-[36px]">
                  <svg
                    width="22"
                    height="15"
                    viewBox="0 0 22 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="scale-75 rotate-[270deg]"
                  >
                    <path
                      d="M21.3765 12.0804L10.9045 0L0.432595 12.0804C0.148111 12.4096 -0.00740039 12.8514 0.000270989 13.3085C0.00794236 13.7656 0.178168 14.2005 0.473501 14.5177C0.768834 14.8349 1.16508 15.0083 1.57507 14.9997C1.98507 14.9911 2.37522 14.8014 2.6597 14.4721L10.9045 4.95578L19.1585 14.4721C19.443 14.8014 19.8331 14.9911 20.2431 14.9997C20.6531 15.0083 21.0493 14.8349 21.3447 14.5177C21.64 14.2005 21.8102 13.7656 21.8179 13.3085C21.8256 12.8514 21.6701 12.4096 21.3856 12.0804H21.3765Z"
                      fill="#00AAAD"
                    />
                  </svg>
                </button>
                <button className="splide__arrow splide__arrow--next !border-tosca !bg-white !opacity-100 !border-[1px] !rounded-none !w-[36px] !h-[36px]">
                  <svg
                    width="22"
                    height="15"
                    viewBox="0 0 22 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="scale-75 rotate-[90deg]"
                  >
                    <path
                      d="M21.3765 12.0804L10.9045 0L0.432595 12.0804C0.148111 12.4096 -0.00740039 12.8514 0.000270989 13.3085C0.00794236 13.7656 0.178168 14.2005 0.473501 14.5177C0.768834 14.8349 1.16508 15.0083 1.57507 14.9997C1.98507 14.9911 2.37522 14.8014 2.6597 14.4721L10.9045 4.95578L19.1585 14.4721C19.443 14.8014 19.8331 14.9911 20.2431 14.9997C20.6531 15.0083 21.0493 14.8349 21.3447 14.5177C21.64 14.2005 21.8102 13.7656 21.8179 13.3085C21.8256 12.8514 21.6701 12.4096 21.3856 12.0804H21.3765Z"
                      fill="#00AAAD"
                    />
                  </svg>
                </button>
              </div>
              <SplideTrack className="">
                {ReBanner.items.map((item, index) => (
                  <SplideSlide key={index}>
                    <div className="w-full h-full flex flex-col items-center px-10">
                      <Image
                        src={item.icon}
                        alt={`Banner Item ${index + 1}`}
                        width={55}
                        height={55}
                        className="rounded-full w-[55px] h-[55px] sm:w-[65px] sm:h-[65px] object-cover"
                      />
                      <p className="text-white text-center font-raleway mt-4">
                        {item.text}
                      </p>
                    </div>
                  </SplideSlide>
                ))}
              </SplideTrack>
            </Splide>
          </div>
        </div>
      )}
    </>
  );
};

export default ResBanner;
