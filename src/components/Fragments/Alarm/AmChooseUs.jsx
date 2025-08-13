"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AmChoose = () => {
  const t = useTranslations();
  const AlarmReason = t.raw("AlarmReason");

  const [current, setCurrent] = useState(0);
  const total = AlarmReason.items.length;
  const splideRef = useRef(null);
  const autoplayInterval = 8000; // Autoplay interval in milliseconds
  const touchStartX = useRef(null);
  const cardAreaRef = useRef(null);

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % total);
    }, autoplayInterval);
    return () => clearInterval(timer);
  }, [total, autoplayInterval]);

  // Sync Splide with current
  useEffect(() => {
    if (splideRef.current) {
      splideRef.current.go(current);
    }
  }, [current]);

  // Swipe detection
  useEffect(() => {
    const area = cardAreaRef.current;
    if (!area) return;

    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      if (touchStartX.current === null) return;
      const endX = e.changedTouches[0].clientX;
      const diffX = touchStartX.current - endX;

      if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
          setCurrent((prev) => (prev + 1) % total);
        } else {
          setCurrent((prev) => (prev - 1 + total) % total);
        }
      }
      touchStartX.current = null;
    };

    area.addEventListener("touchstart", handleTouchStart);
    area.addEventListener("touchend", handleTouchEnd);

    return () => {
      area.removeEventListener("touchstart", handleTouchStart);
      area.removeEventListener("touchend", handleTouchEnd);
    };
  }, [total]);

  return (
    <section className="flex flex-col relative lg:overflow-hidden am-choose h-[680px] md:h-[750px] lg:h-auto">
      {/* Background image slider */}
      <div className="flex flex-co h-[328px] md:h-[400px] lg:h-[693px] relative z-0">
        <Splide
          ref={splideRef}
          options={{
            type: "fade",
            perPage: 1,
            perMove: 1,
            pagination: false,
            arrows: false,
            autoplay: false,
          }}
          className="w-full h-full"
        >
          {AlarmReason.items.map((item, index) => (
            <SplideSlide key={index} className="relative w-full h-full">
              <Image
                src={item.image}
                alt=""
                width={1920}
                height={693}
                className="w-full h-[300px] md:h-[400px] lg:h-[693px] object-cover object-center"
                sizes="100vw"
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* Card slider with pagination */}
      <div
        ref={cardAreaRef} // swipe area
        className="container mx-auto relative lg:absolute top-[100px] lg:top-1/2 lg:left-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col justify-center lg:items-end w-full h-max lg:h-full z-[1]"
      >
        <div className="w-full lg:w-5/12 h-full relative flex flex-col justify-center items-start">
          <AnimatePresence initial={false} mode="popLayout">
            {AlarmReason.items.map((item, index) => {
              const position = (index - current + total) % total;
              if (position > 1) return null;

              return (
                <motion.div
                  key={index}
                  className="absolute w-full"
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
                    className={`py-7 pl-7 pr-12 lg:py-8 lg:pl-10 lg:pr-18 flex flex-col justify-center items-start h-[450px] md:h-[430px] lg:h-[566px] ${
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
        </div>

        {/* Pagination Dots */}
        <div className="flex flex-col justify-center gap-1 mt-6 absolute top-1/2 right-7 lg:right-2 transform -translate-x-1/2 z-10">
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
    </section>
  );
};

export default AmChoose;
