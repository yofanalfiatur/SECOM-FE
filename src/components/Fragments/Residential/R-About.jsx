import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const ResAbout = () => {
  const t = useTranslations();
  const ReAbout = t.raw("ReAbout");

  return (
    <section className="flex flex-col relative overflow-hidden pb-9 lg:pb-0">
      <div className="w-full border-b-1 border-[#13223333]">
        <div className="container flex flex-row mx-auto">
          <div className="w-8/12 sm:w-10/12 lg:w-3/4 pt-8 lg:pt-[4.5rem] pb-8 lg:pb-12 lg:border-r-1 lg:border-[#13223333]">
            <h2 className="text-darkblue leading-[1.3] lg:leading-[1.2] text-3xl lg:text-6xl font-medium font-raleway w-full lg:w-3/4">
              {ReAbout.title}
            </h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto justify-between flex flex-col lg:flex-row">
        <div className="w-full lg:w-[45%] lg:border-r-1 lg:border-[#13223333] flex flex-col">
          <Image
            src={ReAbout.photo}
            width={530}
            height={550}
            alt="About"
            className="pt-7 pb-8 lg:pt-16 lg:pb-16 lg:pr-16 w-full h-auto object-cover"
          />
        </div>
        <div className="w-full lg:w-[55%] relative flex flex-col pt-6 lg:pt-16 l:pb-16 lg:pl-16 lg:pr-2 after:content-[''] after:lg:content-none after:absolute after:w-[200%] after:h-[1px] after:bg-[#13223333] after:top-[0%] after:left-[-50%] after:-translate-y-1/2">
          <div
            className="flex flex-col text-sm lg:text-lg text-darkblue leading-[1.7] lg:leading-[1.5]"
            dangerouslySetInnerHTML={{ __html: ReAbout.desc }}
          />

          <div className="flex flex-col mt-5 mb-6 lg:mb-12 gap-6">
            {ReAbout.items.map((item, index) => (
              <div
                key={index}
                className="flex flex-row items-center gap-x-6 lg:gap-x-3 mb-4"
              >
                <Image
                  src={item.icon}
                  width={63}
                  height={52}
                  alt={item.title}
                  className="w-[44px] object-contain lg:w-[63px]"
                />
                <p className="text-[#132233] text-sm lg:text-lg font-normal font-raleway">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResAbout;
