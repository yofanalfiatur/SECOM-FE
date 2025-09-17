"use client";

import AboutTrusted from "@/components/Fragments/About/AbTrusted";
import BlpBanner from "@/components/Fragments/BusinessLP/BlpBanner";
import BlpCard from "@/components/Fragments/BusinessLP/BlpCard";
import BlpNews from "@/components/Fragments/BusinessLP/BlpNews";
import BlpWhy from "@/components/Fragments/BusinessLP/BlpWhy";
import React from "react";

const BusinessLP = () => {
  return (
    <>
      <BlpBanner translationKey="BusinessBanner" />
      <BlpWhy translationKey="BusinessWhy" />
      <BlpCard translationKey="BusinessCard" />
      <BlpNews translationKey="" />
      <AboutTrusted translationKey="AboutTrusted" />
    </>
  );
};

export default BusinessLP;
