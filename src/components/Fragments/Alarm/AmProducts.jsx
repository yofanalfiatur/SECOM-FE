"use client";
import RadialGridCard from "@/components/Elements/RadialGridCard";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import { AlarmProduct } from "@/constants-temp/data";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const AmProducts = () => {
  const isDesktop = useIsDesktop();

  const sliderRef = useRef(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    const glide = new Glide(sliderRef.current, {
      type: "carousel",
      perView: 1,
      gap: 20,
      autoplay: false,
      hoverpause: true,
    });

    glide.mount();

    return () => {
      glide.destroy();
    };
  }, []);

  return (
    <section className="pt-10 pb-6 lg:pt-20 lg:pb-26 bg-navyblue">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-[25px] lg:text-4xl font-raleway font-medium text-white text-center">
          {AlarmProduct.title}
        </h2>
        <p className="text-sm lg:text-lg leading-[1.7] lg:leading-[1.5] text-white text-center w-[90%] lg:w-[60%] mt-2 lg:mt-5 mb-6 lg:mb-13">
          {AlarmProduct.desc}
        </p>

        {/* Card Desktop */}
        {isDesktop ? (
          <>
            <div className="flex flex-col am-products__grid">
              <ul className="flex flex-row flex-wrap justify-center gap-4">
                {AlarmProduct.products.map((item, index) => (
                  <li
                    key={index}
                    className="w-[32.5%] relative flex flex-col min-h-[500px] group"
                  >
                    <Link
                      href={item.link}
                      className="flex flex-col h-full bg-[#012146] pt-12 pb-6 px-8 m-1 relative z-[1]"
                    >
                      <RadialGridCard />
                      <div className="flex flex-col items-center">
                        <p className="text-white text-[25px] font-raleway text-center">
                          {item.title}
                        </p>
                        <p className="text-white text-center mt-2 mb-10 w-[80%] min-h-[80px]">
                          {item.desc}
                        </p>
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={216}
                          height={216}
                          className="group-hover:scale-110 transition-all duration-200 ease-in-out"
                        />
                      </div>
                    </Link>
                    <div className="absolute top-0 left-0 w-full h-full z-0 bg-[#012146] transition-all duration-200 ease opacity-100 group-hover:opacity-0"></div>
                    <div className="absolute top-0 left-0 w-full h-full z-0 animated-gradient-bg transition-all duration-200 ease opacity-0 group-hover:opacity-100"></div>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <>
            {/* Mobile Card Slider */}
            <div className="glide w-full" ref={sliderRef}>
              <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                  {AlarmProduct.products.map((item, index) => (
                    <li
                      key={index}
                      className="relative flex flex-col group glide__slide"
                    >
                      <Link
                        href={item.link}
                        className="flex flex-col min-h-[350px] bg-[#012146] pt-7 pb-6 px-8 relative z-[1]"
                      >
                        <div className="flex flex-col items-center">
                          <p className="text-white font-raleway text-center">
                            {item.title}
                          </p>
                          <p className="text-white text-center mt-1 mb-8 w-[80%] text-sm">
                            {item.desc}
                          </p>
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={147}
                            height={147}
                            className="group-hover:scale-110 transition-all duration-200 ease-in-out"
                          />
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Optional: navigation buttons */}
              <div
                className="glide__bullets flex justify-center mt-4 gap-2"
                data-glide-el="controls[nav]"
              >
                {AlarmProduct.products.map((_, index) => (
                  <button
                    key={index}
                    className="glide__bullet w-[10px] h-[10px] bg-white rounded-full hover:bg-tosca transition-all duration-200 ease"
                    data-glide-dir={`=${index}`}
                  ></button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default AmProducts;
