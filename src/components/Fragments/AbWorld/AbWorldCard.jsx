"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef, useEffect } from "react";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AbWorldCard = ({ translationKey }) => {
  const t = useTranslations();
  const AbWorldCard = t.raw(translationKey);
  const isDesktop = useIsDesktop();
  return (
    <section className="abw-card">
      <div className="container mx-auto grid grid-cols-2 gap-4">
        {AbWorldCard.map((item, index) => (
          <div
            className={`flex flex-col abw-card__item ${
              index === 0 ? "bg-navyblue" : "bg-tosca"
            }`}
            key={index}
          >
            <h3 className="text-white">{item.title}</h3>
            <Image
              src={item.image}
              width={1000}
              height={250}
              alt={item.title}
              className="w-full h-full max-h-[250px] object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AbWorldCard;
