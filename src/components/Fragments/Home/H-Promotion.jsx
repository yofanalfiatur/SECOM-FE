import React from "react";
import { HPromotion } from "@/constants-temp/data";
import Image from "next/image";
import ButtonPrimary from "@/components/Elements/ButtonPrimary";

const HomePromotion = () => {
  return (
    <section className=" pb-24 h-prom">
      <div className="container mx-auto flex flex-row justify-between">
        <div className="flex flex-col w-[55%]">
          <Image
            src={HPromotion.image}
            alt="H-Promotion"
            width={714}
            height={421}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex flex-col w-[41%] justify-center pr-16">
          <p className="text-darkblue text-xl tracking-[3px] font-raleway uppercase">
            {HPromotion.hint}
          </p>
          <h2 className="text-darkblue text-[45px] font-raleway font-medium mt-4 mb-3 leading-[1.2]">
            {HPromotion.title}
          </h2>
          <p className=" text-lg font-normal leading-[1.5] text-darkblue">
            {HPromotion.desc}
          </p>
          <ButtonPrimary
            text={HPromotion.btnPromotion.text}
            href={HPromotion.btnPromotion.href}
            target={HPromotion.btnPromotion.target}
            className="mt-6 !py-5"
          >
            {HPromotion.btnPromotion.text}
          </ButtonPrimary>
        </div>
      </div>
    </section>
  );
};

export default HomePromotion;
