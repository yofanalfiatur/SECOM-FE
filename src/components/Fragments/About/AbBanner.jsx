"use client";
import "@splidejs/react-splide/css";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import { useTranslations } from "next-intl";

const AboutBanner = ({ translationKey }) => {
  const t = useTranslations();
  const AboutBanner = t.raw(translationKey);
  const isDesktop = useIsDesktop();
  return (
    <>
      <section
        className="overflow-hidden lg:h-[623px] relative bg-cover bg-no-repeat bg-center after:content-[''] after:absolute after:top-0 after:left-0 after:z-[0] after:w-full after:h-full after:bg-navyblue after:opacity-60 ab-banner"
        style={{ backgroundImage: `url(${AboutBanner.bgDesktop})` }}
      >
        <div className="container mx-auto flex flex-col mt-38 items-center h-full relative z-[1] ab-banner__content">
          <p className="text-white lg:text-xl lg:text-center w-[30%] font-raleway font-normal uppercase tracking-[4] lg:mb-3">
            {AboutBanner.subtitle}
          </p>
          <h2 className="text-white font-raleway font-medium lg:text-6xl leading-[1.2] lg:text-center w-[40%]">
            {AboutBanner.title}
          </h2>
        </div>
      </section>
    </>
  );
};

export default AboutBanner;
