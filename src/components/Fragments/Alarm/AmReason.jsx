"use client";

import React, { useState, useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const AmReason = ({ translationKey }) => {
  const t = useTranslations();
  const AlarmReason = t.raw(translationKey);

  const [current, setCurrent] = useState(0);
  const bgSplideRef = useRef(null);
  const total = AlarmReason.items.length;

  // Sinkronisasi dari Splide → Card stack
  useEffect(() => {
    if (bgSplideRef.current) {
      const bg = bgSplideRef.current.splide;
      if (bg) {
        bg.on("move", (newIndex) => {
          setCurrent(newIndex);
        });
      }
    }
  }, []);

  // Kalau state current berubah → update Splide
  useEffect(() => {
    if (bgSplideRef.current) {
      const bg = bgSplideRef.current.splide;
      if (bg && bg.index !== current) {
        bg.go(current);
      }
    }
  }, [current]);

  return (
    <section
      className="flex flex-col relative am-reason"
      id="am-reason-section"
    >
      {/* Background Image Slider */}
      <div className="flex flex-col relative z-0">
        <Splide
          ref={bgSplideRef}
          options={{
            type: "slide",
            perPage: 1,
            arrows: false,
            pagination: false,
            wheel: true,
            wheelMinThreshold: 1,
            releaseWheel: true,
            direction: "ttb",
            height: "80vh",
          }}
          className="w-full h-full"
        >
          {AlarmReason.items.map((item, index) => (
            <SplideSlide
              key={index}
              className="relative z-1 w-full h-max lg:h-full"
            >
              <Image
                src={item.image}
                alt=""
                width={1920}
                height={693}
                className="object-cover object-center w-full aspect-[320/328] lg:aspect-[unset] h-auto lg:h-full"
                sizes="100vw"
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* Card stack float */}
      <div className="absolute bottom-0 lg:bottom-[unset] w-full h-[380px] sm:h-[300px] lg:h-full pointer-events-none z-1">
        <div className="container h-full flex flex-row justify-end items-center mx-auto">
          <div className="w-full lg:w-5/12 h-full lg:h-[60%] relative flex flex-col justify-center items-start">
            <AnimatePresence initial={false} mode="popLayout">
              {AlarmReason.items.map((item, index) => {
                const position = (index - current + total) % total;
                if (position > 1) return null;

                return (
                  <motion.div
                    key={index}
                    className="absolute w-full  h-full"
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{
                      opacity: 1,
                      scale: 1 - position * 0.05,
                      y: -position * 30,
                      zIndex: total - position,
                    }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div
                      className={`py-10 pl-7 pr-12 lg:py-8 lg:pl-10 lg:pr-18 flex flex-col justify-center h-full ${
                        position === 0 ? "bg-navyblue" : "bg-tosca"
                      }`}
                    >
                      <p className="text-[#ffffff99] uppercase text-sm lg:text-lg tracking-[2px] font-raleway mb-3 lg:mb-4">
                        {AlarmReason.title}
                      </p>
                      <p className="text-[25px] lg:text-[45px] font-raleway font-normal text-white lg:leading-[1.1]">
                        {item.title}
                      </p>
                      <p className="leading-[1.7] lg:leading-[1.5] lg:text-lg text-white opacity-80 mt-3">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Pagination dots */}
            <div className="flex flex-col gap-1 mt-6 absolute top-1/2 right-5 transform -translate-y-1/2 z-10 pointer-events-auto">
              {AlarmReason.items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                    current === index ? "bg-tosca scale-110" : "bg-white"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmReason;
