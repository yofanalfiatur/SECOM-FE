"use client";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import { useTranslations } from "next-intl";
import React from "react";

const ResBannerImage = () => {
  const t = useTranslations();
  const ReBanner = t.raw("ReBanner");
  const isDesktop = useIsDesktop();
  return (
    <section
      className="h-[calc(70vh-60px)] md:h-[calc(92vh-60px)] lg:h-[calc(100vh-80px)] w-screen bg-center bg-cover res-bg-img"
      style={{
        backgroundImage: `url('${
          isDesktop ? ReBanner.bgImage : ReBanner.bgImageMd
        }')`,
      }}
    >
      <div className="container"></div>
    </section>
  );
};

export default ResBannerImage;
