"use client";

import { useState } from "react";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AboutLocation = ({ translationKey }) => {
  const t = useTranslations();
  const AboutLocation = t.raw(translationKey);
  const isDesktop = useIsDesktop();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="flex flex-col pt-10 pb-10 lg:pt-22 lg:pb-10 relative overflow-hidden ab-location">
      <div className="container flex flex-row mx-auto">
        {/* Left side: buttons */}
        <div className="w-full lg:w-3/12 flex flex-col pt-8">
          <h2 className="text-darkblue text-[25px] lg:text-[40px] font-medium font-raleway">
            {AboutLocation.title}
          </h2>
          <p className="mt-2 mb-4 text-darkblue text-sm lg:text-lg">
            {AboutLocation.desc}
          </p>
          <div className="flex flex-col gap-4">
            {AboutLocation.items.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`border-tosca border-[1px] px-4 py-3 text-base lg:text-lg font-normal transition-all ease duration-200 cursor-pointer ab-location__btn ${
                  activeIndex === index
                    ? "active-loc bg-tosca text-white"
                    : "bg-white text-tosca hover:bg-tosca hover:text-white"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right side: embeds */}
        <div className="w-full lg:w-9/12 relative">
          {AboutLocation.items.map((item, index) => (
            <div
              key={index}
              className={`flex flex-row ab-location__embed absolute top-0 left-0 w-full pl-10 transition-all duration-500 ${
                activeIndex === index
                  ? "opacity-100 visible relative"
                  : "opacity-0 invisible"
              }`}
            >
              {/* Image */}
              <div className="w-1/3 flex flex-col">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={1000}
                  height={1000}
                  className="w-full lg:h-[450px] object-cover"
                />
              </div>

              {/* Embed + Address */}
              <div className="w-2/3 flex flex-col">
                <div
                  dangerouslySetInnerHTML={{ __html: item.embed }}
                  className="flex flex-col aspect-[720/270] w-full h-auto"
                />
                <div className="flex flex-col bg-tosca p-4">
                  <p className="text-white text-sm">{item.address}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutLocation;
