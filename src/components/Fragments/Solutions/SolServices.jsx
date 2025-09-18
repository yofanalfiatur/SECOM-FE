import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { use } from "react";

const SolServices = ({ translationKey }) => {
  const t = useTranslations();
  const SolServices = t.raw(translationKey);
  return (
    <section className="flex flex-col sol-card">
      <div className="container mx-auto flex flex-col">
        <h2 className="text-darkblue text-3xl lg:text-6xl font-medium font-raleway">
          {SolServices.title}
        </h2>
        <p className="text-darkblue text-sm lg:text-lg">{SolServices.desc}</p>
        <div className="grid grid-cols-3 gap-4">
          {SolServices.items.map((item, index) => (
            <div className="sol-card__item" key={index}>
              <div className="flex flex-col items-center py-3 px-6 w-full">
                <p className="text-nayvblue leading-[1.3] lg:leading-[1.2] text-xl lg:text-[30px]">
                  {item.title}
                </p>
                <p className="text-darkblue leading-[1.3] lg:leading-[1.2] text-sm lg:text-lg">
                  {item.desc}
                </p>
              </div>
              <div className="flex flex-col relative">
                <Image
                  src={item.image}
                  width={1000}
                  height={1000}
                  alt={item.title}
                  className="w-full h-full object-cover relative z-[1]"
                />
                <div
                  style={{
                    clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)",
                  }}
                  className="bg-navyblue w-full h-full absolute z-0 top-[0] right-[0]"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolServices;
