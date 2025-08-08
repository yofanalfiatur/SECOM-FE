"use client";

import Image from "next/image";
import { ReSolution } from "@/constants-temp/data";
import ButtonSecondary from "@/components/Elements/ButtonSecondary";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const ResSolution = () => {
  return (
    <section className="pt-11 pb-19 lg:py-11 res-sol bg-navyblue overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-8">
        <div className="flex flex-col justify-center w-full lg:w-[45%] z-10 bg-navyblue relative before:content-[''] before:absolute before:h-full before:bottom-0 before:right-[-2rem] before:bg-navyblue before:-z-10 before:[width:calc(150%+(100vw-1320px+0rem)/2)]">
          <p className="text-sm lg:text-xl text-white font-raleway tracking-[5px] font-light opacity-80 uppercase">
            {ReSolution.hint}
          </p>
          <h2 className="text-white text-[25px] lg:text-[45px] font-raleway font-medium mt-3 lg:mt-5 mb-2 w-full lg:w-[80%] leading-[1.4] lg:leading-[1.2]">
            {ReSolution.title}
          </h2>
          <p className="text-white text-sm lg:text-lg font-raleway font-normal mb-6 leading-[1.5] w-full lg:w-[80%]">
            {ReSolution.desc}
          </p>
          <ButtonSecondary
            href={ReSolution.btnSolution.href}
            target={ReSolution.btnSolution.target}
          >
            {ReSolution.btnSolution.text}
          </ButtonSecondary>
        </div>

        <div className="relative w-full lg:w-[52%] flex flex-col justify-center py-1 res-sol__wrap-slider">
          <Splide
            options={{
              type: "loop",
              perPage: 1,
              autoplay: true,
              interval: 4000,
              pauseOnHover: true,
              arrows: true,
              pagination: false,
              gap: "30px",
            }}
            className="res-sol__slider"
            hasTrack={false}
          >
            {/* Custom Arrow Buttons */}
            <div className="splide__arrows absolute w-full z-[1] !top-[calc(100%+40px)] lg:!top-[50%] ">
              <button className="splide__arrow splide__arrow--prev !border-white lg:!border-tosca !bg-transparent lg:!bg-white !border-[1px] !rounded-none !w-[36px] !h-[36px] !left-[38%] lg:!left-[-18px]">
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
                    className="!fill-white lg:!fill-tosca"
                  />
                </svg>
              </button>
              <button className="splide__arrow splide__arrow--next !border-white lg:!border-tosca !bg-transparent lg:!bg-white !border-[1px] !rounded-none !w-[36px] !h-[36px] !right-[38%] lg:!right-[-18px]">
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
                    className="!fill-white lg:!fill-tosca"
                  />
                </svg>
              </button>
            </div>
            <SplideTrack>
              {ReSolution.itemSlider.map((item, index) => (
                <SplideSlide key={index}>
                  <div className="bg-white overflow-hidden relative h-full flex flex-col">
                    <Image
                      src={item.photo}
                      alt={item.title}
                      width={693}
                      height={524}
                      className="w-full h-full object-cover"
                    />
                    <p className="lg:m-6 bg-tosca p-4 lg:py-5 lg:px-6 lg:absolute lg:bottom-0 lg:left-0 text-white text-sm lg:text-base leading-[1.7] lg:leading-[1.5]">
                      {item.title}
                    </p>
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

export default ResSolution;
