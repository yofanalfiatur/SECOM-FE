"use client";
import { useState } from "react";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AbWorldRnD = ({ translationKey }) => {
  const t = useTranslations();
  const AbWorldRnd = t.raw(translationKey);
  const isDesktop = useIsDesktop();

  // state untuk tab aktif
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="abw-rnd">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        {/* LEFT SIDE */}
        <div className="w-full flex flex-col">
          <p className="text-darkblue">{AbWorldRnd.subtitle}</p>
          <h2 className="text-darkblue font-raleway font-medium text-[25px] lg:text-[40px]">
            {AbWorldRnd.title}
          </h2>

          {/* Dropdown filter untuk mobile */}
          {!isDesktop && (
            <div className="abw-rnd dropdown">
              <ul>
                <li className="">Test</li>
                <li className="">Test</li>
              </ul>
            </div>
          )}

          {/* Tab List */}
          <div className="flex flex-col">
            {AbWorldRnd.items.map((item, index) => (
              <div className="abw-rnd__item mb-4" key={index}>
                {isDesktop && (
                  <div
                    onClick={() => setActiveIndex(index)}
                    className={`border border-tosca px-4 py-4 flex flex-col items-center cursor-pointer transition-all ease duration-200 abw-rnd__item__btn
                      ${
                        activeIndex === index
                          ? "bg-tosca text-white active-tab"
                          : "text-tosca hover:bg-tosca hover:text-white"
                      }`}
                  >
                    <p className="text-xl">{item.title}</p>
                  </div>
                )}

                {/* Desc toggle */}
                <div
                  className={`flex flex-col text-darkblue overflow-hidden transition-all ease duration-500 ab-rnd__item__desc
                    ${
                      activeIndex === index ? "max-h-[1000px]" : "max-h-[0px]"
                    }`}
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full flex flex-col relative">
          {AbWorldRnd.items.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 ease ab-rnd__item__img 
                ${
                  activeIndex === index
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
            >
              <Image
                src={item.image}
                width={1000}
                height={1000}
                alt={item.title}
                quality={100}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AbWorldRnD;
