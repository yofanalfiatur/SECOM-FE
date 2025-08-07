import React from "react";
import { RePromotion } from "@/constants-temp/data";
import Image from "next/image";
import ButtonPrimary from "@/components/Elements/ButtonPrimary";

const ResPromotion = () => {
  return (
    <section className="pt-24 pb-24 res-prom">
      <div className="container mx-auto flex flex-row justify-between">
        <div className="flex flex-col w-[55%]">
          <Image
            src={RePromotion.image}
            alt="Promotion Image"
            width={714}
            height={421}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex flex-col w-[41%] justify-center pr-16">
          <p className="text-darkblue text-xl tracking-[3px] font-raleway uppercase">
            {RePromotion.hint}
          </p>
          <h2 className="text-darkblue text-[45px] font-raleway font-medium mt-4 mb-3 leading-[1.2]">
            {RePromotion.title}
          </h2>
          <p className=" text-lg font-normal leading-[1.5] text-darkblue">
            {RePromotion.desc}
          </p>
          <ButtonPrimary
            text={RePromotion.btnPromotion.text}
            href={RePromotion.btnPromotion.href}
            target={RePromotion.btnPromotion.target}
            className="mt-6 !py-5"
          >
            {RePromotion.btnPromotion.text}
          </ButtonPrimary>
        </div>
      </div>
    </section>
  );
};

export default ResPromotion;
