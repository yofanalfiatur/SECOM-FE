"use client";

import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useIsDesktop from "@/components/Hooks/useIsDesktop";

const SectorList = ({ translationKey }) => {
  const t = useTranslations();
  const SectorList = t.raw(translationKey);
  const locale = useLocale();
  const isDesktop = useIsDesktop();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="flex flex-col bg-darkblue st-list">
      <div className="container mx-auto flex flex-col lg:flex-row relative">
        <div className="w-full lg:w-5/12 lg:border-r lg:border-[#FFFFFF80]">
          <div className="flex flex-col pt-11 pb-6 lg:pb-10 lg:pt-10 pr-0 lg:pr-20 relative after:absolute after:content-none after:lg:content-[''] after:w-[calc(150%_+_(100vw-1320px+4rem)/2)] after:h-[1px] after:bottom-0 after:right-0 after:bg-[#FFFFFF80] after:z-[1] ">
            <h2 className="text-white font-raleway text-[30px] lg:text-[45px] font-normal leading-[1.3] lg:leading-[1.2]">
              {SectorList.title}
            </h2>
          </div>
          {/* Tab List */}
          {isDesktop ? (
            <ul className="flex flex-col gap-2 mt-4 lg:mt-12 mb-4 lg:mb-12 st-list__tab-list">
              {SectorList.items.map((item, index) => (
                <li
                  key={item.id ?? index}
                  onClick={() => setActiveIndex(index)}
                  className={`flex flex-col cursor-pointer px-4 border-l-[8px] transition-all duration-200 ease
                  ${
                    activeIndex === index
                      ? "border-tosca"
                      : "border-darkblue hover:border-tosca"
                  }`}
                >
                  <p className="text-white font-raleway font-normal text-[25px] lg:text-[30px] leading-[1.7]">
                    {item.title}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="w-full h-max flex flex-col mb-4 lg:mb-0 relative st-list__tab-list-md-wrap">
              <select
                name=""
                id=""
                className="w-full py-3 px-4 appearance-none text-white rounded-[5px] border-[1px] border-white"
              >
                {SectorList.items.map((item, index) => (
                  <option
                    key={item.id ?? index}
                    onClick={() => setActiveIndex(index)}
                    className={`flex flex-col cursor-pointer px-4 border-l-[8px] transition-all duration-200 ease
                        ${
                          activeIndex === index
                            ? "border-tosca"
                            : "border-darkblue hover:border-tosca"
                        }`}
                  >
                    <p className="text-white font-raleway font-normal text-[25px] lg:text-[30px] leading-[1.7]">
                      {item.title}
                    </p>
                  </option>
                ))}
              </select>
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none scale-85"
              >
                <path
                  d="M0.465612 7.725L11.5048 19L22.544 7.725C22.8439 7.41769 23.0078 7.00538 22.9997 6.57876C22.9916 6.15214 22.8122 5.74616 22.5009 5.45014C22.1895 5.15412 21.7718 4.9923 21.3396 5.00028C20.9074 5.00827 20.4961 5.1854 20.1962 5.49271L11.5048 14.3746L2.80377 5.4927C2.50388 5.18539 2.09259 5.00826 1.66039 5.00028C1.22819 4.9923 0.810481 5.15412 0.499151 5.45014C0.187821 5.74616 0.0083746 6.15214 0.000287681 6.57875C-0.00779924 7.00537 0.156137 7.41769 0.45603 7.725L0.465612 7.725Z"
                  fill="white"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Tab Content */}
        <div className="w-full h-max lg:w-7/12 sticky top-[94px]">
          <AnimatePresence mode="wait">
            {SectorList.items[activeIndex] && (
              <motion.div
                key={SectorList.items[activeIndex].id ?? activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col lg:pl-12 lg:pt-12 lg:pb-12 st-list__tab-content__item"
              >
                <Image
                  src={SectorList.items[activeIndex].image}
                  width={1000}
                  height={1000}
                  quality={100}
                  alt={SectorList.items[activeIndex].title}
                  className="w-full h-full aspect-[285/175] lg:aspect-[764/486] object-cover"
                />
                <p className="text-white text-[25px] lg:text-[35px] mt-4 lg:mt-6">
                  {SectorList.items[activeIndex].title}
                </p>
                <p className="text-white text-sm lg:text-[20px] mt-3 mb-6 leading-[1.3]">
                  {SectorList.items[activeIndex].desc}
                </p>
                <Link
                  href={SectorList.items[activeIndex].link}
                  target="_self"
                  className="text-white text-sm lg:text-lg font-raleway uppercase tracking-[2px] max-w-max"
                >
                  {locale === "en" ? "Learn More" : "Pelajari Lebih Lanjut"}
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SectorList;
