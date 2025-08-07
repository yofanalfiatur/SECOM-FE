import ButtonPrimary from "@/components/Elements/ButtonPrimary";
import { ReAbout } from "@/constants-temp/data";

import Image from "next/image";
import React from "react";

const ResAbout = () => {
  return (
    <section className="flex flex-col">
      <div className="w-full border-b-1 border-[#13223333]">
        <div className="container flex flex-row mx-auto">
          <div className="w-3/4 pt-[4.5rem] pb-12 border-r-1 border-[#13223333]">
            <h2 className="text-[#132233] leading-[1.2] text-6xl font-medium font-raleway lg:w-3/4">
              {ReAbout.title}
            </h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto justify-between flex flex-row">
        <div className="w-[45%] border-r-1 border-[#13223333] flex flex-col">
          <Image
            src={ReAbout.photo}
            width={530}
            height={550}
            alt="About"
            className="pt-16 pb-16 pr-16 w-full h-auto object-cover"
          />
        </div>
        <div className="w-[55%] flex flex-col pt-16 pb-16 pl-16 pr-2">
          <div className="flex flex-col text-lg text-darkblue">
            {ReAbout.desc}
          </div>
          <div className="flex flex-col mt-6 mb-12 gap-6">
            {ReAbout.items.map((item, index) => (
              <div
                key={index}
                className="flex flex-row items-center gap-x-3 mb-4"
              >
                <Image src={item.icon} width={63} height={52} alt="About" />
                <p className="text-[#132233] text-lg font-normal font-raleway">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <ButtonPrimary
            href={ReAbout.btnAbout.href}
            target={ReAbout.btnAbout.target}
            className=""
          >
            {ReAbout.btnAbout.text}
          </ButtonPrimary>
        </div>
      </div>
    </section>
  );
};

export default ResAbout;
