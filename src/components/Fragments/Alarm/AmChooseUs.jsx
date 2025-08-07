import { AlarmReason } from "@/constants-temp/data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AmChoose = () => {
  const [current, setCurrent] = useState(0);
  const total = AlarmReason.items.length;
  const splideRef = useRef(null);
  const autoplayInterval = 5000; // Change slide every 5 seconds

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % total);
    }, autoplayInterval);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, [total, autoplayInterval]);

  // Sync Splide with current index
  useEffect(() => {
    if (splideRef.current) {
      splideRef.current.go(current);
    }
  }, [current]);

  return (
    <section className="flex flex-col relative overflow-hidden am-choose">
      {/* Background image slider */}
      <div className="flex flex-col h-[693px] relative z-0">
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
              <div
                className="w-full h-[300px] md:h-[400px] lg:h-[693px] bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${item.background})`,
                }}
              ></div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* Card slider with pagination */}
      <div className="container mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-end w-full h-full z-[1]">
        <div className="w-5/12 h-full relative flex flex-col justify-center items-start">
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
                    className={`py-8 pl-10 pr-18 flex flex-col justify-center items-start h-[566px] ${
                      position === 0 ? "bg-navyblue" : "bg-tosca"
                    }`}
                  >
                    <p className="text-[#ffffff99] uppercase text-lg tracking-[2px] font-raleway mb-4">
                      {AlarmReason.title}
                    </p>
                    <p className="text-2xl lg:text-[45px] font-raleway font-normal text-white leading-[1.1]">
                      {item.title}
                    </p>
                    <p className="text-lg text-white opacity-80 mt-3">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex flex-col justify-center gap-1 mt-6 absolute top-1/2 right-2 transform -translate-x-1/2 z-10">
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
