"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Glide from "@glidejs/glide";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import BackgroundDots from "@/components/Elements/BackgroundDots";
import { AlarmProtect } from "@/constants-temp/data";
import ButtonPrimary from "@/components/Elements/ButtonPrimary";

const AmProtect = () => {
  const sliderRef = useRef(null);
  const glideInstance = useRef(null);
  const isDesktop = useIsDesktop(); // default breakpoint >1023px

  useEffect(() => {
    if (!sliderRef.current) return;

    if (glideInstance.current) {
      glideInstance.current.destroy();
      glideInstance.current = null;
    }

    if (!isDesktop) {
      const glide = new Glide(sliderRef.current, {
        type: "carousel",
        perView: 1,
        gap: 30,
        autoplay: false,
        hoverpause: true,
      });

      glide.mount();
      glideInstance.current = glide;
    }

    return () => {
      if (glideInstance.current) {
        glideInstance.current.destroy();
        glideInstance.current = null;
      }
    };
  }, [isDesktop]);

  return (
    <section className="relative pt-8 lg:pt-18 overflow-hidden">
      <BackgroundDots />
      <div className="container mx-auto relative z-[1] flex flex-col justify-center items-center">
        <h2 className="text-[25px] lg:text-[40px] text-center font-raleway font-medium">
          {AlarmProtect.title}
        </h2>
        <p className="text-sm lg:text-lg text-center mt-2 lg:mt-4 lg:mb-10">
          {AlarmProtect.desc}
        </p>

        <Image
          src={AlarmProtect.image}
          alt="Alarm Protect"
          width={1321}
          height={1000}
          className="max-w-full h-auto mb-6"
        />

        <div className="relative w-full lg:w-[52%] flex flex-col justify-center py-1">
          {!isDesktop ? (
            <div className="glide" ref={sliderRef}>
              <div
                className="glide__track !overflow-visible"
                data-glide-el="track"
              >
                <ul className="glide__slides">
                  {AlarmProtect.items.map((item, index) => (
                    <li key={index} className="glide__slide text-center px-4">
                      <p className="text-lg font-semibold mb-2">{item.title}</p>
                      <p className="text-base text-gray-600">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glide__arrows" data-glide-el="controls">
                <button
                  className="glide__arrow glide__arrow--left absolute left-[-18px] top-1/2 -translate-y-1/2 bg-white p-2 shadow hover:bg-gray-200 w-[36px] h-[36px] flex justify-center items-center"
                  data-glide-dir="<"
                >
                  ←
                </button>
                <button
                  className="glide__arrow glide__arrow--right absolute right-[-18px] top-1/2 -translate-y-1/2 bg-white p-2 shadow hover:bg-gray-200 w-[36px] h-[36px] flex justify-center items-center"
                  data-glide-dir=">"
                >
                  →
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-8">
              {AlarmProtect.items.map((item, index) => (
                <div key={index} className="text-center px-4">
                  <div className="text-2xl font-bold text-navyblue mb-2">
                    {index + 1}
                  </div>
                  <p className="text-lg font-semibold mb-2">{item.title}</p>
                  <p className="text-base text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <ButtonPrimary
          href={AlarmProtect.btnCTA.href}
          target={AlarmProtect.btnCTA.target}
        >
          {AlarmProtect.btnCTA.text}
        </ButtonPrimary>
      </div>
    </section>
  );
};

export default AmProtect;
