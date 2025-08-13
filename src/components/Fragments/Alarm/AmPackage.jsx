"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import { useTranslations } from "next-intl";

const AmPackage = () => {
  const t = useTranslations();
  const AlarmPackage = t.raw("AlarmPackage");
  const Packages = t.raw("Packages");

  const isDesktop = useIsDesktop();
  const [activeTab, setActiveTab] = useState(0); // 0 = Rent, 1 = Buy

  // Filter items based on the active tab
  const filteredItems = Packages.filter((item) =>
    activeTab === 0 ? item.isRent === true : item.isRent === false
  );

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  // Animation for tab content
  const tabContentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <section className="pt-7 pb-6 lg:pt-13 lg:pb-8">
      <div className="container mx-auto flex flex-col lg:items-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-darkblue text-[25px] lg:text-[40px] lg:text-center font-normal"
        >
          {AlarmPackage.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-darkblue text-sm lg:text-lg lg:text-center lg:w-[40%] mt-3 mb-6 lg:mt-3 lg:mb-8"
        >
          {AlarmPackage.desc}
        </motion.p>

        {/* Tabs for Rent and Buy */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col border-1 border-[#00000033] w-full lg:w-10/12 rounded-[5px] overflow-hidden"
        >
          <div className="flex flex-row relative border-b-[1px] border-[#00000033]">
            {AlarmPackage.tabs.map((tab, index) => (
              <div
                className="w-1/2 relative first:border-r-[1px] first:border-[#00000033]"
                key={index}
              >
                <button
                  onClick={() => handleTabClick(index)}
                  className={`w-full pt-4 pb-3 lg:px-6 lg:pb-5 lg:pt-8 flex flex-col items-center cursor-pointer relative z-10 border-b-[4px] lg:border-b-[9px] hover:bg-[#00AAAD33] transition-all duration-200 ease ${
                    activeTab === index
                      ? " border-[#00AAAD]"
                      : "bg-transparent border-transparent"
                  }`}
                >
                  <p
                    className={`text-xs lg:text-xl text-center uppercase tracking-[2px] lg:tracking-normal font-raleway font-normal ${
                      activeTab === index ? "text-navyblue" : "text-slate-500"
                    }`}
                  >
                    {tab.title}
                  </p>
                  {isDesktop && (
                    <p
                      className={`text-sm ${
                        activeTab === index ? "text-navyblue" : "text-slate-400"
                      }`}
                    >
                      {tab.desc}
                    </p>
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Tab content */}
          <div className="flex flex-col relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col"
              >
                {filteredItems.map((item, index) => (
                  <div
                    key={`${activeTab}-${index}`}
                    className="flex flex-col lg:flex-row am-package__item border-b border-gray-200 last:border-b-0 overflow-hidden"
                  >
                    <div className="w-full lg:w-[30%] flex flex-col">
                      <div className="opacity-100 translate-y-0 transition duration-300 flex flex-col items-center">
                        <p className="bg-navyblue text-sm lg:text-lg text-white text-center py-2 rounded-b-[10px] w-[150px]">
                          {item.device} Device
                        </p>
                      </div>
                      <div className="relative">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={239}
                          height={156}
                          className="mx-auto pt-6 lg:pt-5 lg:pb-12"
                        />
                      </div>
                    </div>

                    <div className="w-full lg:w-[70%] p-6 flex flex-col justify-center">
                      <div>
                        <p className="text-center lg:text-start lg:text-[25px] font-bold font-raleway text-darkblue mb-2">
                          {item.title}
                        </p>
                        <div className="flex flex-col lg:flex-row items-center mb-2 gap-3">
                          <div className="flex flex-row items-start">
                            <span className="text-xs lg:text-sm font-bold text-navyblue leading-[1] mt-1 mr-1">
                              IDR{" "}
                            </span>
                            <span className="text-[25px] lg:text-[30px] font-bold text-navyblue leading-[1]">
                              RP {item.price}
                            </span>
                          </div>

                          {item.serviceFee && item.serviceFee.length > 0 && (
                            <>
                              {item.serviceFee.map((sub, index) => (
                                <div className="bg-[#CE2129] relative z-[1] text-white px-3 py-[4px] rounded text-sm flex flex-col items-center">
                                  <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute top-1/2 -translate-y-1/2 left-[-6px]"
                                  >
                                    <circle
                                      cx="6.30964"
                                      cy="6.30964"
                                      r="6.30964"
                                      fill="#00529C"
                                    />
                                    <path
                                      d="M8.43516 6.06586V6.97445H6.94608V8.58972H5.93654V6.97445H4.44746V6.06586H5.93654V4.45059H6.94608V6.06586H8.43516Z"
                                      fill="white"
                                    />
                                  </svg>
                                  <span className="text-[10px] leading-[1] mb-1">
                                    {sub.text}
                                  </span>
                                  <div className="flex flex-row items-start">
                                    <span className="text-[8px] leading-[1] mr-[1px] mt-[1px]">
                                      IDR
                                    </span>
                                    <span className="text-sm leading-[1] font-bold">
                                      {sub.fee}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </>
                          )}
                        </div>
                        <p className="text-darkblue">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AmPackage;
