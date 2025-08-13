"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

const AmOverview = () => {
  const t = useTranslations();
  const AlarmOverview = t.raw("AlarmOverview");

  return (
    <section className="pt-9 pb-14 lg:pt-24 lg:pb-24 am-value">
      <div className="container mx-auto flex flex-col gap-6 lg:gap-9">
        <div
          className="w-full lg:w-10/12 text-xl lg:text-[45px] text-start lg:text-center font-medium self-center font-raleway am-value__desc"
          dangerouslySetInnerHTML={{ __html: AlarmOverview.desc }}
        />
        <ul className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-between">
          {AlarmOverview.items.map((item, index) => (
            <li
              key={index}
              className="flex flex-row gap-6 items-center w-full lg:w-[30%]"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={63}
                height={52}
                className="w-[44px] lg:w-[63px] lg:h-auto"
              />
              <p className="text-sm lg:text-xl">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AmOverview;
