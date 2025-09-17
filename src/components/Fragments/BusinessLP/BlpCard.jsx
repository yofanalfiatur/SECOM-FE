"use client";

import { useRef, useEffect, use } from "react";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import { useTranslations } from "next-intl";
import Image from "next/image";

const BlpCard = ({ translationKey }) => {
  const t = useTranslations();
  const BlpCard = t.raw(translationKey);
  return (
    <section className="flex flex-col blp-card">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
        {BlpCard.map((item, index) => (
          <div className=" flex flex-col">
            <Image
              src={item.image}
              width={1000}
              height={1000}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div
              className={`flex flex-col items-center py-3 px-6 w-full ${
                index === 0 ? "bg-navyblue" : "bg-tosca"
              }`}
            >
              <p className="text-white leading-[1.3] lg:leading-[1.2] text-xl lg:text-[30px]">
                {item.title}
              </p>
              <p className="text-white leading-[1.3] lg:leading-[1.2] text-sm lg:text-lg">
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
