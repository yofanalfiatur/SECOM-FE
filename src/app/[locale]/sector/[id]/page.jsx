"use client";

import BannerSecondary from "@/components/Fragments/Global/BannerSecondary";
import OverviewGlobal from "@/components/Fragments/Global/OverviewGlobal";
import SecDetailCard from "@/components/Fragments/Sector-Detail/SecDetailCard";
import SecDetailSlider from "@/components/Fragments/Sector-Detail/SecDetailSlider";
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";

export default function SectorDetailPage({ params }) {
  const t = useTranslations();
  //   const careerDetails = t.raw("CareerDetail"); // ambil array CareerDetail
  //   const career = careerDetails.find((c) => c.id === params.id);

  //   if (!career) {
  //     notFound();
  //   }

  return (
    <>
      <BannerSecondary translationKey="SectorDetailBanner" />
      <OverviewGlobal
        translationKey="SectorDetailBanner"
        className="lg:!pt-17 !pb-10 lg:!pb-17"
      />
      <SecDetailSlider translationKey="SectorDetailSlider" />
      <SecDetailCard
        translationKey="SectorDetailCard"
        secDetailCTA="SectorDetailCTA"
      />
    </>
  );
}
