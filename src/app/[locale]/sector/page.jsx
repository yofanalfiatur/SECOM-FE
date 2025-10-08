import BannerBasic from "@/components/Fragments/Global/BannerBasic";
import HeaderAdditional from "@/components/Fragments/Header/HeaderAdditional";
import ResTesti from "@/components/Fragments/Residential/R-Testimonial";
import SectorList from "@/components/Fragments/Sector/StList";
import React from "react";

const SectorLanding = () => {
  return (
    <>
      <HeaderAdditional
        menuServices="MenuServices"
        menuProducts="MenuProducts"
      />
      <BannerBasic translationKey="SectorBanner" />
      <SectorList translationKey="SectorServices" />
      <ResTesti translationKey="ReTestimonial" />
    </>
  );
};

export default SectorLanding;
