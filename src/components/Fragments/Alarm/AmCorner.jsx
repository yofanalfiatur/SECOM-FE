"use client";
import ButtonPrimary from "@/components/Elements/ButtonPrimary";
import { AlarmCorners } from "@/constants-temp/data";
import Image from "next/image";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const AmCorner = () => {
  return (
    <section className="pt-10 lg:pt-8 pb-6 lg:pb-8">
      <div className="container mx-auto">
        <h2 className="text-darkblue text-[25px] lg:text-[40px] lg:text-center">
          {AlarmCorners.title}
        </h2>
        <p className="text-darkblue text-sm lg:text-lg">{AlarmCorners.desc}</p>
        <ButtonPrimary
          href={AlarmCorners.btnConsult.href}
          target={AlarmCorners.btnConsult.target}
          className="mt-6 !py-5"
        >
          {AlarmCorners.btnConsult.text}
        </ButtonPrimary>
        <div className="relative flex flex-col wrap">
          <Image
            src={AlarmCorners.image}
            alt="AlarmCorners"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
          {AlarmCorners.items.map((item, index) => (
            <div
              key={index}
              className="absolute flex flex-col max-w-max"
              style={{
                top: item.positionX,
                left: item.positionY,
              }}
            >
              <div className="flex flex-row bg-white max-w-[330px]">
                <div className="flex flex-col w-[40%]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={89}
                    height={89}
                    className="w-[44px] lg:w-max lg:h-auto"
                  />
                </div>
                <div className="w-[60%]">
                  <p className="text-darkblue text-sm lg:text-xl">
                    {item.title}
                  </p>
                  <p className="text-darkblue text-[] lg:text-[12px]">
                    {item.desc}
                  </p>
                </div>
              </div>
              <div
                className="pin-point absolute bg-tosca rounded-full w-[50px] h-[50px] flex flex-col items-center justify-center"
                style={{
                  top: `calc(${item.positionX} - 2%)`,
                  left: `calc(${item.positionY} - 5%)`,
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={30}
                  height={30}
                  className=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmCorner;
