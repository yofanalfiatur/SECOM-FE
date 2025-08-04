"use client";
import { AlarmFAQ } from "@/constants-temp/data";
import { useState } from "react";

const AmFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="pt-10 pb-10 lg:pt-18 lg:pb-21 bg-[#E6F3FF]">
      <div className="container mx-auto flex flex-col lg:items-center">
        <h2 className="text-[25px] lg:text-[40px] font-normal lg:font-medium font-raleway w-full text-center text-darkblue">
          {AlarmFAQ.title}
        </h2>
        <p className="text-sm leading-[1.7] lg:leading-[1.3] font-normal text-darkblue lg:text-lg w-full lg:w-6/12 text-center mt-3  mb-9 lg:mb-8">
          {AlarmFAQ.desc}
        </p>

        <div className="flex flex-col gap-5 w-full lg:w-8/12">
          {AlarmFAQ.items.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div key={index} className="flex flex-col relative">
                <div className="relative z-[1] m-1 bg-white">
                  {/* Question */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`w-full px-4 lg:px-8 py-3 lg:py-4 flex justify-between items-center border-[#13223333] gap-4 ${
                      isOpen ? "border-b-[1px]" : "border-0"
                    } `}
                  >
                    <span className="font-raleway font-normal lg:text-xl text-left">
                      {item.question}
                    </span>
                    <svg
                      className={`transform transition-transform duration-300 ${
                        isOpen ? "rotate-0" : "rotate-180"
                      }`}
                      width="22"
                      height="15"
                      viewBox="0 0 22 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.3765 12.0804L10.9045 0L0.432595 12.0804C0.148111 12.4096 -0.00740039 12.8514 0.000270989 13.3085C0.00794236 13.7656 0.178168 14.2005 0.473501 14.5177C0.768834 14.8349 1.16508 15.0083 1.57507 14.9997C1.98507 14.9911 2.37522 14.8014 2.6597 14.4721L10.9045 4.95578L19.1585 14.4721C19.443 14.8014 19.8331 14.9911 20.2431 14.9997C20.6531 15.0083 21.0493 14.8349 21.3447 14.5177C21.64 14.2005 21.8102 13.7656 21.8179 13.3085C21.8256 12.8514 21.6701 12.4096 21.3856 12.0804H21.3765Z"
                        fill="#00AAAD"
                      />
                    </svg>
                  </button>

                  {/* Answer */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden px-4 lg:px-8 text-sm lg:text-xl ${
                      isOpen ? "max-h-[400px] py-5 lg:py-4" : "max-h-0 py-0"
                    }`}
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </div>

                {isOpen ? (
                  <div className="absolute top-0 left-0 w-full h-full z-0 animated-gradient-bg transition-all duration-200 ease opacity-100" />
                ) : (
                  <div className="absolute top-0 left-0 w-full h-full z-0 bg-white border-[1px] border-[#13223333] transition-all duration-200 ease opacity-100"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AmFAQ;
