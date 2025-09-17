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
      <section className="relative lg:mt-[-140px] ab-story">
        <div className="container mx-auto flex lg:flex-row bg-navyblue">
          <div className="w-7/12 flex flex-col justify-center px-12">
            <h2 className="text-white text-[30px] lg:text-[40px] font-raleway font-normal">
              {AboutStory.title}
            </h2>
            <p
              className="text-white text-base lg:text-lg mt-3 mb-7 lg:w-[90%]"
              dangerouslySetInnerHTML={{ __html: AboutStory.desc }}
            />
          </div>
          <div className="w-7/12 flex flex-col">
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
