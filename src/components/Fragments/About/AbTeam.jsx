"use client";

import { useRef, useState, useEffect } from "react";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const AboutTeam = ({ translationKey }) => {
  const t = useTranslations();
  const AboutTeam = t.raw(translationKey);
  const isDesktop = useIsDesktop();
  const locale = useLocale();

  const [activeIndex, setActiveIndex] = useState(null);

  // Handle overflow body
  useEffect(() => {
    if (activeIndex !== null) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup biar aman
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [activeIndex]);

  return (
    <section className="flex flex-col relative overflow-hidden ab-team">
      {/* Intro Section */}
      <div
        className="flex flex-col h-full w-full relative bg-cover bg-center bg-no-repeat after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#00529C99] ab-team__intro"
        style={{ backgroundImage: `url(${AboutTeam.image})` }}
      >
        <div className="container mx-auto flex flex-col items-center relative z-[2]">
          <h2 className="text-white text-center w-full lg:w-[62%] text-sm sm:text-[18px] md:text-2xl lg:text-[50px] font-raleway font-normal pt-5 lg:pt-20 leading-[1.4] lg:leading-[1.2] mb-2 lg:mb-8">
            {AboutTeam.title}
          </h2>
        </div>
        <Image
          src={AboutTeam.photo}
          width={1920}
          height={768}
          alt="About"
          quality={100}
          className="w-full h-full object-cover object-center relative z-[1]"
        />
      </div>

      {/* Leadership List */}
      <div className="container mx-auto">
        <div className="flex flex-row items-center mt-8 lg:mt-16 mb-6 lg:mb-8 gap-4 lg:gap-10">
          <p className="text-darkblue text-[25px] lg:text-[40px] font-raleway font-medium">
            {locale === "en" ? "Our Leadership" : "Our Leadership"}
          </p>
          <div className="flex-1 h-[1px] bg-[#13223333]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-5 ab-team__list">
          {AboutTeam.items.map((item, index) => {
            const videoRef = useRef(null);
            const videoRefPopup = useRef(null);
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`ab-team__item flex flex-col group ${
                  isActive ? "active-card" : ""
                }`}
              >
                {/* Card Content (trigger popup) */}
                <div
                  className="flex flex-col cursor-pointer ab-team__item__content"
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => videoRef.current?.play()}
                  onMouseLeave={() => {
                    if (videoRef.current) {
                      videoRef.current.pause();
                      videoRef.current.currentTime = 0;
                    }
                  }}
                >
                  {/* Wrapper image + video */}
                  <div className="w-full relative aspect-[1/1] overflow-hidden">
                    {/* Video */}
                    <video
                      ref={videoRef}
                      src={item.video}
                      className="absolute z-0 inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      muted
                      loop
                      playsInline
                    ></video>

                    {/* Image */}
                    <Image
                      src={item.image}
                      width={800}
                      height={800}
                      alt={item.name}
                      quality={100}
                      className="w-full h-full relative z-0 object-cover object-center transition-opacity duration-500 group-hover:opacity-0"
                    />

                    {/* Plus Icon */}
                    <div className="absolute z-10 top-[10px] right-[10px] w-[40px] h-[40px] bg-navyblue flex items-center justify-center p-[10px]">
                      <div className="flex flex-col items-center justify-center relative w-full h-full">
                        <div className="w-full h-[4px] bg-tosca"></div>
                        <div className="w-[4px] h-full bg-tosca absolute top-1/2 left-1/2 transform -translate-1/2"></div>
                      </div>
                    </div>
                  </div>

                  {/* Text Info */}
                  <p className="text-darkblue text-xl lg:text-[25px] font-raleway font-semibold mt-4 lg:mt-9 mb-1">
                    {item.name}
                  </p>
                  <p className="text-base lg:text-xl text-darkblue font-raleway font-normal">
                    {item.position}
                  </p>
                </div>

                {/* Popup team */}
                <div
                  className={`flex flex-col lg:flex-row fixed z-[999] top-0 w-full h-full bg-[#132233e6] ab-item__item__popup transition-all duration-500 overflow-auto ${
                    isActive
                      ? "left-0 opacity-100 visible"
                      : "left-[120%] opacity-0 invisible"
                  }`}
                  onClick={() => setActiveIndex(null)} // klik overlay = close
                >
                  <div className="container flex flex-col h-max justify-center lg:flex-row mx-auto mt-[150px] lg:mt-[200px] mb-[50px]">
                    <div
                      className="w-full lg:w-10/12 bg-white flex flex-col lg:flex-row h-max relative ab-team__item__popup__wrap"
                      onClick={(e) => e.stopPropagation()} // klik di dalam box putih jangan close
                    >
                      {/* Close Button */}
                      <button
                        className="absolute top-[-40px] right-0 w-[30px] h-[30px] text-white flex items-center justify-center cursor-pointer ab-team__item__popup__close"
                        onClick={() => setActiveIndex(null)}
                      >
                        <span className="text-[40px] leading-none">
                          &times;
                        </span>
                      </button>

                      {/* Image + Video */}
                      <div
                        className="flex flex-col justify-center w-full lg:w-[35%] relative"
                        onMouseEnter={() => videoRefPopup.current?.play()}
                        onMouseLeave={() => {
                          if (videoRefPopup.current) {
                            videoRefPopup.current.pause();
                            videoRefPopup.current.currentTime = 0;
                          }
                        }}
                      >
                        <Image
                          src={item.image}
                          width={800}
                          height={800}
                          alt={item.name}
                          quality={100}
                          className="w-full h-full aspect-[385/542] object-cover object-center"
                        />
                        <video
                          ref={videoRefPopup}
                          src={item.video}
                          className="absolute z-0 inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-500 hover:opacity-100"
                          muted
                          loop
                          playsInline
                        ></video>
                      </div>

                      {/* Text Content */}
                      <div className="flex flex-col w-full lg:w-[65%] relative bg-[#E6E9F5]">
                        <div className="flex flex-col border-b-[1px] border-[#13223333] p-6">
                          <p className="text-darkblue text-[25px] lg:text-[35px] font-raleway font-semibold">
                            {item.name}
                          </p>
                          <p className="text-sm lg:text-xl text-darkblue font-raleway font-normal">
                            {item.position}
                          </p>
                        </div>
                        <div
                          dangerouslySetInnerHTML={{ __html: item.desc }}
                          className="text-sm lg:text-base font-normal leading-[1.7] lg:leading-[1.5] text-darkblue py-6 px-6 overflow-y-auto min-h-[unset] lg:min-h-[300px] max-h-max lg:max-h-[45vh]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
