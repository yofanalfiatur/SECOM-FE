"use client";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

const AmDiffrences = () => {
  const t = useTranslations();
  const AlarmDifferences = t.raw("AlarmDifferences");
  const Packages = t.raw("Packages");
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section className="flex flex-col pb-9 lg:pt-0 lg:pb-20  am-diff">
      <div className="container mx-auto flex flex-col items-center">
        <div className="w-full lg:w-10/12 flex flex-col">
          {/* Toggle Button */}
          <button
            onClick={toggleContent}
            className={`cursor-pointer bg-tosca w-full flex flex-row px-4 items-center justify-center gap-4  py-3 lg:py-4 transition-all duration-200 ease  ${
              isOpen ? "rounded-t-[5px]" : "rounded-[5px]"
            }`}
          >
            <span className="text-white font-raleway text-sm lg:text-xl lg:font-semibold tracking-[4px] uppercase">
              {AlarmDifferences.title}
            </span>
            <svg
              width="15"
              height="8"
              viewBox="0 0 15 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-300 ${
                isOpen ? "" : "rotate-180"
              }`}
            >
              <path
                d="M14.2166 6.44286L7.49708 0L0.777582 6.44286C0.595038 6.61846 0.495251 6.85407 0.500174 7.09785C0.505096 7.34164 0.614325 7.57362 0.80383 7.74278C0.993335 7.91193 1.24759 8.0044 1.51067 7.99984C1.77375 7.99528 2.0241 7.89406 2.20664 7.71845L7.49708 2.64308L12.7934 7.71845C12.9759 7.89406 13.2262 7.99528 13.4893 7.99984C13.7524 8.0044 14.0067 7.91193 14.1962 7.74278C14.3857 7.57362 14.4949 7.34164 14.4998 7.09785C14.5047 6.85407 14.405 6.61846 14.2224 6.44286H14.2166Z"
                fill="white"
              />
            </svg>
          </button>

          {/* Accordion Content */}
          <div
            className={`flex flex-col relative transition-all duration-500 ease-in-out overflow-hidden rounded-b-[5px] shadow-[0px_4px_10px_0px_#00000026] ${
              isOpen ? "max-h-[2000px]" : "max-h-0"
            }`}
          >
            <div className="md:overflow-visible overflow-x-auto flex flex-col bg-white mx-1 mb-1 relative z-[1] am-diff__wrap">
              <div className="relative z-[1] h-full rounded-b-[3px] w-full min-w-[400px] md:min-w-[600px] lg:min-w-0">
                {/* Head Content */}
                <div className="grid grid-cols-12 border-b-[1px] border-[#0000001A]">
                  <div className="py-3 lg:py-6 border-r-[1px] border-[#0000001A] col-span-4 flex flex-col items-center justify-center">
                    <p className="font-raleway text-navyblue text-sm lg:text-xl font-bold uppercase">
                      Device
                    </p>
                  </div>
                  <div className="py-3 lg:py-6 border-r-[1px] border-[#0000001A] col-span-4 flex flex-col items-center justify-center">
                    <p className="font-raleway text-navyblue text-sm lg:text-xl font-bold uppercase">
                      Home
                    </p>
                  </div>
                  <div className="py-3 lg:py-6 col-span-4 flex flex-col items-center justify-center">
                    <p className="font-raleway text-navyblue text-sm lg:text-xl font-bold uppercase">
                      Home PRO
                    </p>
                  </div>
                </div>
                {/* Body Content */}
                {AlarmDifferences.items.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-12 border-b-[1px] border-[#0000001A]"
                  >
                    {/* device */}
                    <div className="col-span-4 flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-6 border-r-[1px] border-[#0000001A] lg:min-h-[130px] p-5 lg:p-2">
                      <Image
                        src={item.image}
                        alt="secom"
                        width={88}
                        height={88}
                        className="w-[75px] h-[75px] lg:w-[88px] lg:h-[88px]"
                      />
                      <p className="font-raleway text-center lg:text-start text-sm lg:text-xl font-normal">
                        {item.device}
                      </p>
                    </div>
                    {/* Home */}
                    <div className="col-span-4 flex flex-col items-center justify-center border-r-[1px] border-[#0000001A]">
                      <p className=" font-raleway lg:text-xl font-normal">
                        {item.basic}
                      </p>
                    </div>
                    {/* Home Pro */}
                    <div className="col-span-4 flex flex-col items-center justify-center">
                      <p className=" font-raleway lg:text-xl font-normal">
                        {item.pro}
                      </p>
                    </div>
                  </div>
                ))}

                {/* price */}
                <div className="grid grid-cols-12 bg-tosca">
                  <div className="py-4 lg:py-6 col-span-4 flex flex-col items-center justify-center">
                    <p className="text-white text-[13px] lg:text-xl font-bold uppercase">
                      Price
                    </p>
                  </div>

                  <div className="py-4 lg:py-6 col-span-4 flex flex-col items-center justify-center">
                    <p className="text-white text-[13px] lg:text-xl font-bold uppercase">
                      RP {AlarmDifferences.price.home}
                    </p>
                  </div>
                  <div className="py-4 lg:py-6 col-span-4 flex flex-col items-center justify-center">
                    <p className="text-white text-[13px] lg:text-xl font-bold uppercase">
                      RP {AlarmDifferences.price.pro}
                    </p>
                  </div>
                </div>

                {/* Icon Plus */}
                <div className="w-full flex flex-col justify-center items-center">
                  <div className="my-3 lg:my-5 flex flex-col items-center w-[42px] h-[42px] lg:w-[70px] lg:h-[70px] justify-center  bg-navyblue rounded-full">
                    <div className="relative w-[14px] h-[14px] lg:w-[22px] lg:h-[22px]">
                      <span className="absolute left-1/2 top-0 h-full w-[3px] lg:w-[5px] bg-white -translate-x-1/2" />
                      <span className="absolute top-1/2 left-0 w-full h-[3px] lg:h-[5px] bg-white -translate-y-1/2" />
                    </div>
                  </div>
                </div>

                <div className="bg-navyblue py-4 lg:py-6 flex flex-col items-center justify-center">
                  <p className="text-white text-sm lg:text-xl font-raleway font-semibold uppercase">
                    {AlarmDifferences.serviceTitle}
                  </p>
                </div>

                {AlarmDifferences.serviceFee.map((service, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-12 border-b-[1px] border-[#0000001A]"
                  >
                    {/* Name */}
                    <div className="col-span-4 p-4 flex flex-row items-center justify-center border-r-[1px] border-[#0000001A] lg:min-h-[100px]">
                      <p className="text-xs text-darkblue text-center lg:text-xl font-normal">
                        {service.name}
                      </p>
                    </div>
                    {/* Home */}
                    <div className="col-span-4 p-4 flex flex-col items-center justify-center border-r-[1px] border-[#0000001A]">
                      <p className="text-[13px] lg:text-xl text-darkblue font-bold">
                        RP {service.priceHome}
                      </p>
                      <p className="text-[13px] lg:text-lg text-darkblue">
                        /month
                      </p>
                    </div>
                    {/* Home Pro */}
                    <div className="col-span-4 p-4 flex flex-col items-center justify-center">
                      <p className="text-[13px] lg:text-xl font-bold text-darkblue">
                        RP {service.pricePro}
                      </p>
                      <p className="text-[13px] lg:text-lg text-darkblue">
                        /month
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full z-0 animated-gradient-bg transition-all duration-200 ease opacity-100" />
          </div>

          {/* Hide Information Button */}
          {isOpen && (
            <button
              onClick={toggleContent}
              className=" text-tosca text-sm font-semibold mt-16 lg:mt-8 uppercase cursor-pointer flex flex-row justify-center items-center gap-2 self-center"
            >
              <p className="font-raleway font-normal text-xs tracking-[2px]">
                {AlarmDifferences.hint}
              </p>
              <svg
                width="15"
                height="8"
                viewBox="0 0 15 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-300 ${
                  isOpen ? "" : "rotate-180"
                }`}
              >
                <path
                  d="M14.2166 6.44286L7.49708 0L0.777582 6.44286C0.595038 6.61846 0.495251 6.85407 0.500174 7.09785C0.505096 7.34164 0.614325 7.57362 0.80383 7.74278C0.993335 7.91193 1.24759 8.0044 1.51067 7.99984C1.77375 7.99528 2.0241 7.89406 2.20664 7.71845L7.49708 2.64308L12.7934 7.71845C12.9759 7.89406 13.2262 7.99528 13.4893 7.99984C13.7524 8.0044 14.0067 7.91193 14.1962 7.74278C14.3857 7.57362 14.4949 7.34164 14.4998 7.09785C14.5047 6.85407 14.405 6.61846 14.2224 6.44286H14.2166Z"
                  fill="#00AAAD"
                />
              </svg>
            </button>
          )}

          {/* Hint */}
          <p className="text-[#13223399] mt-7 lg:mt-10 text-sm lg:text-[16px]">
            {AlarmDifferences.note}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AmDiffrences;
