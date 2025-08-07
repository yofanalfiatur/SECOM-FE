"use client";

import Image from "next/image";
import { ReSolution } from "@/constants-temp/data";
import ButtonSecondary from "@/components/Elements/ButtonSecondary";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const ResSolution = () => {
  return (
    <section className="py-11 res-sol bg-navyblue overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-8">
        <div className="flex flex-col justify-center w-full lg:w-[45%] z-10 bg-navyblue relative before:content-[''] before:absolute before:h-full before:bottom-0 before:right-[-2rem] before:bg-navyblue before:-z-10 before:[width:calc(150%+(100vw-1320px+0rem)/2)]">
          <p className="text-xl text-white font-raleway tracking-[5px] font-light opacity-80 uppercase">
            {ReSolution.hint}
          </p>
          <h2 className="text-white text-[45px] font-raleway font-medium mt-5 mb-2 w-[80%] leading-[1.2]">
            {ReSolution.title}
          </h2>
          <p className="text-white text-[18px] font-raleway font-normal mb-6 leading-[1.5] w-[80%]">
            {ReSolution.desc}
          </p>
          <ButtonSecondary
            href={ReSolution.btnSolution.href}
            target={ReSolution.btnSolution.target}
          >
            {ReSolution.btnSolution.text}
          </ButtonSecondary>
        </div>

        <div className="relative w-full lg:w-[52%] flex flex-col justify-center py-1 res-sol__wrap-slider">
          <Splide
            options={{
              type: "loop",
              perPage: 1,
              autoplay: true,
              interval: 4000,
              pauseOnHover: true,
              arrows: true,
              pagination: false,
              gap: "30px",
            }}
            className="w-full"
          >
            {ReSolution.itemSlider.map((item, index) => (
              <SplideSlide key={index}>
                <div className="bg-white overflow-hidden shadow-lg relative">
                  <Image
                    src={item.photo}
                    alt={item.title}
                    width={693}
                    height={524}
                    className="w-full h-auto object-cover"
                  />
                  <h3 className="text-lg font-semibold m-6 bg-tosca p-6 absolute bottom-0 left-0 text-white">
                    {item.title}
                  </h3>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default ResSolution;
