"use client";

import AboutTrusted from "@/components/Fragments/About/AbTrusted";
import BlpBanner from "@/components/Fragments/BusinessLP/BlpBanner";
import BlpCard from "@/components/Fragments/BusinessLP/BlpCard";
import BlpNews from "@/components/Fragments/BusinessLP/BlpNews";
import BlpWhy from "@/components/Fragments/BusinessLP/BlpWhy";
import HeaderAdditional from "@/components/Fragments/Header/HeaderAdditional";
import ResSurvey from "@/components/Fragments/Residential/R-Survey";
import React from "react";

const BusinessLP = () => {
  return (
    <>
      <HeaderAdditional
        menuServices="MenuServices"
        menuProducts="MenuProducts"
      />
      <BlpBanner translationKey="BusinessBanner" />
      <ResSurvey translationKey="ResSurvey" />
      <BlpWhy translationKey="BusinessWhy" />
      <BlpCard translationKey="BusinessCard" />
      <BlpNews translationKey="NewsSingle" />
      <AboutTrusted translationKey="AboutTrusted" />
    </>
  );
};

export default BusinessLP;
