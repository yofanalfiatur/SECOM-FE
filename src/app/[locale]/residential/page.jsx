import ResAbout from "@/components/Fragments/Residential/R-About";
import ResBanner from "@/components/Fragments/Residential/R-Banner";
import ResPromotion from "@/components/Fragments/Residential/R-Promotion";
import ResQuote from "@/components/Fragments/Residential/R-Quote";
import ResSolution from "@/components/Fragments/Residential/R-Solution";
import ResSurvey from "@/components/Fragments/Residential/R-Survey";
import ResTesti from "@/components/Fragments/Residential/R-Testimonial";
import React from "react";

const ResidentialLanding = () => {
  return (
    <>
      <ResBanner />
      <ResSurvey />
      <ResAbout />
      <ResSolution />
      <ResTesti />
      <ResQuote />
      <ResPromotion />
    </>
  );
};

export default ResidentialLanding;
