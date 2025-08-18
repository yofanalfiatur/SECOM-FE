"use client";

import AmApps from "@/components/Fragments/Alarm/AmApps";
import AmBanner from "@/components/Fragments/Alarm/AmBanner";
import AmChoose from "@/components/Fragments/Alarm/AmChooseUs";
import AmCorner from "@/components/Fragments/Alarm/AmCorner";
import AmFAQ from "@/components/Fragments/Alarm/AmFAQ";
import AmPackage from "@/components/Fragments/Alarm/AmPackage";
import AmProducts from "@/components/Fragments/Alarm/AmProducts";
import AmProtect from "@/components/Fragments/Alarm/AmProtect";
import AmTrusted from "@/components/Fragments/Alarm/AmTrusted";
import AmOverview from "@/components/Fragments/Alarm/AmOverview";

const SolutionsPage = () => {
  return (
    <>
      <AmBanner translationKey="SolBanner" />
      <AmOverview translationKey="SolOverview" />
      <AmChoose translationKey="SolReason" />
      <AmProtect translationKey="SolProtect" />
      <AmProducts translationKey="SolProduct" listProducts="ProductDetails" />
      <AmCorner translationKey="SolCorners" listProducts="ProductDetails" />
      <AmApps translationKey="SolApps" />
      <AmTrusted translationKey="SolTrusted" />
      <AmPackage
        translationKey="SolPackage"
        differences="SolDifferences"
        listPackages="HomePackages"
        packagesBuy="HomePackagesBuy"
        packagesRent="HomePackagesRent"
      />
      <AmFAQ translationKey="SolFAQ" />
    </>
  );
};

export default SolutionsPage;
