"use client";
import { useRef, useEffect } from "react";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AboutStory = ({ translationKey }) => {
  const t = useTranslations();
  const AboutStory = t.raw(translationKey);
  const isDesktop = useIsDesktop();
  return (
    <>
      <section className="relative mt-[-150px] lg:mt-[-140px] ab-story">
        <div className="container mx-auto flex flex-col lg:flex-row lg:bg-navyblue">
          <div className="w-full lg:w-6/12 flex flex-col justify-center px-12 pt-10 lg:pt-0 pb-10 lg:pb-0 bg-navyblue lg:bg-[unset]">
            <h2 className="text-white text-[30px] lg:text-[40px] font-raleway font-normal">
              {AboutStory.title}
            </h2>
            <p
              className="text-white text-base lg:text-lg mt-3 mb-7 lg:w-[90%]"
              dangerouslySetInnerHTML={{ __html: AboutStory.desc }}
            />
          </div>
          <div className="w-full lg:w-6/12 flex flex-col bg-navyblue lg:bg-[unset]">
            <Image
              src={AboutStory.bgDesktop}
              alt="About"
              width={1000}
              height={1000}
              className="object-cover w-full h-[486px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutStory;
