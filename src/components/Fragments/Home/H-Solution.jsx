"use client";

import { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import Image from "next/image";
import { HSolution } from "@/constants-temp/data";
import ButtonSecondary from "@/components/Elements/ButtonSecondary";

const HomeSolution = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    const glide = new Glide(sliderRef.current, {
      type: "carousel",
      perView: 1,
      gap: 30,
      autoplay: 4000,
      hoverpause: true,
    });

    glide.mount();

    return () => {
      glide.destroy();
    };
  }, []);

  return (
    <section className="py-11 h-sol bg-navyblue overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-8">
        <div className="flex flex-col justify-center w-full lg:w-[45%] z-10 bg-navyblue relative before:content-[''] before:absolute before:h-full before:bottom-0 before:right-[-2rem] before:bg-navyblue before:-z-10 before:[width:calc(150%+(100vw-1320px+0rem)/2)]">
          <p className="text-xl text-white font-raleway tracking-[5px] font-light opacity-80 uppercase">
            {HSolution.hint}
          </p>
          <h2 className="text-white text-[45px] font-raleway font-medium mt-5 mb-2 w-[80%] leading-[1.2]">
            {HSolution.title}
          </h2>
          <p className="text-white text-[18px] font-raleway font-normal mb-6 leading-[1.5] w-[80%]">
            {HSolution.desc}
          </p>
          <ButtonSecondary
            href={HSolution.btnSolution.href}
            target={HSolution.btnSolution.target}
          >
            {HSolution.btnSolution.text}
          </ButtonSecondary>
        </div>

        <div className="relative w-full lg:w-[52%] flex flex-col justify-center py-1 h-sol__wrap-slider">
          <div className="glide" ref={sliderRef}>
            {/* Slides */}
            <div
              className="glide__track !overflow-visible"
              data-glide-el="track"
            >
              <ul className="glide__slides">
                {HSolution.itemSlider.map((item, index) => (
                  <li key={index} className="glide__slide">
                    <div className="bg-white overflow-hidden shadow-lg relative">
                      <Image
                        src={item.photo}
                        alt={item.title}
                        width={693}
                        height={524}
                        className="w-full h-auto object-cover"
                      />
                      <h3 className="text-lg font-semibold m-6 bg-tosca p-6 absolute bottom-0 left-0 text-white">
                        {item.title}
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Arrows */}
            <div className="glide__arrows" data-glide-el="controls">
              <button
                className="glide__arrow glide__arrow--left absolute left-[-18px] top-1/2 -translate-y-1/2 bg-white p-2 shadow hover:bg-gray-200 w-[36px] h-[36px] flex flex-col justify-center items-center"
                data-glide-dir="<"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="16"
                  viewBox="0 0 11 16"
                  fill="none"
                  style={{ transform: "rotate(180deg)" }}
                >
                  <path
                    d="M2.14107 15.6761L11 7.99667L2.14107 0.317235C1.89961 0.108614 1.57565 -0.00542789 1.24045 0.000197756C0.905249 0.0058234 0.586268 0.130656 0.35368 0.347233C0.121092 0.56381 -0.00605115 0.854392 0.000221138 1.15505C0.00649247 1.45571 0.145666 1.74183 0.387124 1.95045L7.36576 7.99667L0.387123 14.0496C0.145665 14.2582 0.00649117 14.5443 0.000219778 14.8449C-0.00605257 15.1456 0.12109 15.4362 0.353678 15.6528C0.586267 15.8693 0.905247 15.9942 1.24045 15.9998C1.57565 16.0054 1.89961 15.8914 2.14107 15.6828L2.14107 15.6761Z"
                    fill="#00AAAD"
                  />
                </svg>
              </button>
              <button
                className="glide__arrow glide__arrow--right absolute right-[-18px] top-1/2 -translate-y-1/2 bg-white p-2 shadow hover:bg-gray-200 w-[36px] h-[36px] flex flex-col justify-center items-center"
                data-glide-dir=">"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="16"
                  viewBox="0 0 11 16"
                  fill="none"
                >
                  <path
                    d="M2.14107 15.6761L11 7.99667L2.14107 0.317235C1.89961 0.108614 1.57565 -0.00542789 1.24045 0.000197756C0.905249 0.0058234 0.586268 0.130656 0.35368 0.347233C0.121092 0.56381 -0.00605115 0.854392 0.000221138 1.15505C0.00649247 1.45571 0.145666 1.74183 0.387124 1.95045L7.36576 7.99667L0.387123 14.0496C0.145665 14.2582 0.00649117 14.5443 0.000219778 14.8449C-0.00605257 15.1456 0.12109 15.4362 0.353678 15.6528C0.586267 15.8693 0.905247 15.9942 1.24045 15.9998C1.57565 16.0054 1.89961 15.8914 2.14107 15.6828L2.14107 15.6761Z"
                    fill="#00AAAD"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSolution;
