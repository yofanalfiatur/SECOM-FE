"use client";
import FloatButton from "@/components/Elements/FloatButton";
// import PromotionDeals from "@/components/Elements/PromotionDeals";
import ResAbout from "@/components/Fragments/Residential/R-About";
import ResBanner from "@/components/Fragments/Residential/R-Banner";
import ResBannerImage from "@/components/Fragments/Residential/R-BannerImage";
import ResPromotion from "@/components/Fragments/Residential/R-Promotion";
import ResQuote from "@/components/Fragments/Residential/R-Quote";
import ResSolution from "@/components/Fragments/Residential/R-Solution";
import ResSurvey from "@/components/Fragments/Residential/R-Survey";
import ResTesti from "@/components/Fragments/Residential/R-Testimonial";

export default async function HomePage() {
  return (
    <>
      {/* temporary direct to residential */}
      <ResBannerImage />
      {/* <ResBanner /> */}
      <ResSurvey />
      <ResAbout />
      <ResSolution />
      <ResTesti />
      <ResQuote />
      {/* <ResPromotion /> */}
      {/* <PromotionDeals /> */}
      <FloatButton />
    </>
  );
}
