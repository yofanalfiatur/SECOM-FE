"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import Image from "next/image";

const AmBanner = ({ translationKey }) => {
  const t = useTranslations();
  const AlarmBanner = t.raw(translationKey);
  const isDesktop = useIsDesktop();

  return (
    <section
      className={`flex-col flex justify-end lg:justify-center py-6 h-[480px] sm:h-[408px] bg-no-repeat bg-center lg:bg-right bg-cover lg:bg-inherit overflow-hidden relative after:content-[''] after:absolute after:top-0 after:left-0 after:z-[1] after:w-full after:h-full after:bg-[linear-gradient(0deg,_#00529C_30%,_rgba(0,82,156,0)_60.4%)] after:lg:bg-[linear-gradient(90deg,_#00529C_38%,_rgba(0,82,156,0)_75%)] am-banner`}
    >
      <Image
        src={isDesktop ? AlarmBanner.background : AlarmBanner.backgroundMd}
        alt="Banner background"
        width={1200}
        height={900}
        className="object-cover absolute top-0 right-0 w-full lg:w-[65%] h-full"
      />

      <div className="container mx-auto relative z-[2] flex flex-col">
        <h1 className="text-white font-raleway text-3xl lg:text-[50px] font-medium w-full leading-[1.5] lg:leading-[1.3] lg:w-[35%] mb-4 lg:mb-6">
          {AlarmBanner.title[0]}
          <span className="relative after:content-[''] after:absolute after:bottom-[-4px] after:lg:bottom-[-8px] after:left-0 after:w-full after:h-[4px] after:bg-tosca">
            {AlarmBanner.title[1]}
          </span>
        </h1>
      </div>
    </section>
  );
};

export default AmBanner;
