"use client";

import { useRef, useEffect, use } from "react";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import { useTranslations } from "next-intl";
import Image from "next/image";

const BlpCard = ({ translationKey }) => {
  const t = useTranslations();
  const BlpCard = t.raw(translationKey);
  return (
    <section className="flex pt-0 lg:pt-16 pb-10 lg:pb-28 flex-col blp-card">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-5">
        {BlpCard.map((item, index) => (
          <div className=" flex flex-col" key={index}>
            <Image
              src={item.image}
              width={1000}
              height={1000}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div
              className={`flex flex-col items-center pt-2 pb-2 lg:pt-5 lg:pb-6 px-6 w-full ${
                index === 0 ? "bg-navyblue" : "bg-tosca"
              }`}
            >
              <p className="text-white leading-[1.3] lg:leading-[1.2] text-sm lg:text-[30px] mb-1 lg:mb-2">
                {item.title}
              </p>
              <p className="text-white leading-[1.3] lg:leading-[1.2] text-[10px] lg:text-lg">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlpCard;
