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
  const sectionRef = useRef(null);
  const wheelLockRef = useRef(false);
  const scrollAccumulator = useRef(0);
  const isInSection = useRef(false);
  const lastScrollTime = useRef(0);
  const total = AlarmReason.items.length;
  
  const SCROLL_THRESHOLD = 100; // Minimum scroll delta to trigger slide change
  const SCROLL_RESET_DELAY = 150; // Reset accumulator after this delay (ms)

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

  // Enhanced scroll navigation with threshold and section snapping
  useEffect(() => {
    const el = sectionRef.current;
    const splideInst = bgSplideRef.current?.splide;
    if (!el || !splideInst) return;

    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
    
    const smoothScrollTo = (targetOffset, duration = 400) => {
      const startTime = performance.now();
      const startScrollTop = window.pageYOffset;
      
      const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuart(progress);
        
        window.scrollTo(0, startScrollTop + targetOffset * easedProgress);
        
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };
      
      requestAnimationFrame(animateScroll);
    };

    const snapToSection = () => {
      const rect = el.getBoundingClientRect();
      const sectionMid = rect.top + rect.height / 2;
      const viewportMid = window.innerHeight / 2;
      const tolerance = Math.min(120, window.innerHeight * 0.1);
      const aligned = Math.abs(sectionMid - viewportMid) <= tolerance;
      
      if (!aligned && isInSection.current) {
        // Snap section to center when leaving
        const scrollOffset = sectionMid - viewportMid;
        smoothScrollTo(scrollOffset);
      }
      
      return aligned;
    };

    const onWheel = (e) => {
      const rect = el.getBoundingClientRect();
      const sectionMid = rect.top + rect.height / 2;
      const viewportMid = window.innerHeight / 2;
      const tolerance = Math.min(120, window.innerHeight * 0.1);
      const aligned = Math.abs(sectionMid - viewportMid) <= tolerance;
      
      const currentTime = Date.now();
      const delta = e.deltaY;
      const atFirst = current === 0;
      const atLast = current === total - 1;
      
      // Reset accumulator if too much time has passed
      if (currentTime - lastScrollTime.current > SCROLL_RESET_DELAY) {
        scrollAccumulator.current = 0;
      }
      lastScrollTime.current = currentTime;
      
      // Check if we're at boundaries and trying to scroll beyond
      const tryingToScrollUp = delta < 0;
      const tryingToScrollDown = delta > 0;
      const atTopBoundary = atFirst && tryingToScrollUp;
      const atBottomBoundary = atLast && tryingToScrollDown;
      
      // If at boundaries, completely disable section control and allow normal scroll
      if (aligned && (atTopBoundary || atBottomBoundary)) {
        isInSection.current = false;
        scrollAccumulator.current = 0;
        // Don't prevent default - allow normal page scrolling
        return;
      }
      
      // If approaching section but not aligned and not at boundaries, snap to it first
      if (!aligned && !isInSection.current && !atTopBoundary && !atBottomBoundary) {
        const distanceToSection = Math.abs(sectionMid - viewportMid);
        if (distanceToSection < window.innerHeight * 0.3) {
          e.preventDefault();
          const scrollOffset = sectionMid - viewportMid;
          smoothScrollTo(scrollOffset);
          isInSection.current = true;
          return;
        }
      }
      
      // Section is aligned and we can navigate slides
      if (aligned && !atTopBoundary && !atBottomBoundary) {
        isInSection.current = true;
        
        // Check if we can navigate in the scroll direction
        const canNavigateDown = delta > 0 && !atLast;
        const canNavigateUp = delta < 0 && !atFirst;
        
        if (canNavigateDown || canNavigateUp) {
          // We can navigate slides - trap the scroll
          e.preventDefault();
          if (wheelLockRef.current) return;
          
          // Accumulate scroll delta
          scrollAccumulator.current += Math.abs(delta);
          
          // Only trigger slide change when threshold is reached
          if (scrollAccumulator.current >= SCROLL_THRESHOLD) {
            wheelLockRef.current = true;
            scrollAccumulator.current = 0;
            
            if (canNavigateDown) {
              setCurrent((c) => Math.min(c + 1, total - 1));
            } else if (canNavigateUp) {
              setCurrent((c) => Math.max(c - 1, 0));
            }
          }
        }
      } else if (!aligned) {
        isInSection.current = false;
        scrollAccumulator.current = 0;
      }
    };

    const unlock = () => {
      wheelLockRef.current = false;
    };

    // Handle scroll end to snap section if needed (but not at boundaries)
    let scrollTimeout;
    const onScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (!wheelLockRef.current) {
          const atFirst = current === 0;
          const atLast = current === total - 1;
          // Only snap if not at boundaries
          if (!atFirst && !atLast) {
            snapToSection();
          }
        }
      }, 150);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    splideInst.on("moved", unlock);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      splideInst.off("moved", unlock);
      clearTimeout(scrollTimeout);
    };
  }, [current, total]);

  return (
    <section
      ref={sectionRef}
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
            wheel: false,
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
