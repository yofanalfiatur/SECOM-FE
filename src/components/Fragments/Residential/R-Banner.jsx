import { ReBanner } from "@/constants-temp/data";

import Image from "next/image";

const ResBanner = () => {
  return (
    <section
      className="relative w-full aspect-[200/115] bg-cover bg-bottom bg-no-repeat flex flex-col overflow-hidden  res-banner"
      style={{
        backgroundImage: `url('${ReBanner.background}')`,
      }}
    >
      <div className="mx-auto items-center container flex flex-col h-full relative z-1">
        <h1 className="mt-28 w-[80%] leading-[1.2] font-medium text-white font-raleway lg:text-[50px] text-center ">
          {ReBanner.title}
        </h1>
      </div>
      <ul className="absolute w-full h-full z-[2]">
        {ReBanner.cardBanner.map((item, index) => (
          <li
            key={index}
            style={{
              top: item.top,
              left: item.left,
              position: "absolute",
              maxWidth: item.maxWidth,
            }}
            className="flex flex-col res-banner__card"
          >
            <div className="flex flex-col res-banner__card-wrap">
              <p className="text-navyblue py-4 px-4 rounded-[10px] overflow-hidden font-raleway leading-6 text-[16px]">
                {item.text}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <Image
        src={ReBanner.photo}
        alt="Banner Image"
        width={1920}
        height={1374}
        className="absolute w-full z-10 bottom-0 translate-x[-50%] pointer-events-none"
      />
    </section>
  );
};

export default ResBanner;
