"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AbWorldStory = ({ translationKey }) => {
  const t = useTranslations();
  const AbWorldStory = t.raw(translationKey);
  const isDesktop = useIsDesktop();

  return (
    <section className="abw-story">
      {/* Title & Description */}
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-darkblue text-[25px] lg:text-[40px] font-raleway font-normal text-center">
          {AbWorldStory.title}
        </h2>
        <p className="text-base lg:text-lg leading-[1.7] lg:leading-[1.5] text-darkblue text-center lg:w-[55%]">
          {AbWorldStory.desc}
        </p>
      </div>

      {/* Content */}
      <div className="w-full border-t border-[#00000033] px-4 lg:px-0">
        {isDesktop ? (
          // Desktop → Grid
          <div className="grid grid-cols-3">
            {AbWorldStory.items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col pl-8 pt-6 pb-8 pr-3 border-r border-b border-[#00000033]"
              >
                <Image
                  src={item.icon}
                  width={50}
                  height={50}
                  alt={item.title}
                />
                <p className="text-navyblue text-[30px] lg:text-[50px] font-bold">
                  {item.title}
                </p>
                <p className="font-raleway font-normal text-darkblue text-base lg:text-[25px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        ) : (
          // Mobile → Splide Slider
          <Splide
            options={{
              type: "loop",
              autoplay: false,
              interval: 4000,
              pauseOnHover: true,
              arrows: false,
              pagination: true,
              perPage: 1,
            }}
          >
            {AbWorldStory.items.map((item, index) => (
              <SplideSlide key={index} className="abw-story__item">
                <div className="flex flex-col">
                  <Image
                    src={item.icon}
                    width={50}
                    height={50}
                    alt={item.title}
                  />
                  <p className="text-navyblue text-[30px] lg:text-[50px] font-bold">
                    {item.title}
                  </p>
                  <p className="font-raleway font-normal text-darkblue text-base lg:text-[25px]">
                    {item.desc}
                  </p>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        )}
      </div>
    </section>
  );
};

export default AbWorldStory;
