"use client";

import AmApps from "@/components/Fragments/Alarm/AmApps";
import AmBanner from "@/components/Fragments/Alarm/AmBanner";
import AmChoose from "@/components/Fragments/Alarm/AmChooseUs";
import AmFAQ from "@/components/Fragments/Alarm/AmFAQ";
import AmPackage from "@/components/Fragments/Alarm/AmPackage";
import AmProducts from "@/components/Fragments/Alarm/AmProducts";
import AmProtect from "@/components/Fragments/Alarm/AmProtect";
import AmTrusted from "@/components/Fragments/Alarm/AmTrusted";
import AmOverview from "@/components/Fragments/Alarm/AmOverview";
import AmPlacement from "@/components/Fragments/Alarm/AmPlacement";
import AmReason from "@/components/Fragments/Alarm/AmReason";

const SolutionsPage = () => {
  return (
    <>
      {/* home */}
      <AmBanner translationKey="SolBanner" />
      <AmOverview translationKey="SolOverview" />
      <AmReason translationKey="SolReason" />
      <AmProtect translationKey="SolProtect" />
      <AmProducts
        translationKey="SolProduct"
        listProducts="ProductDetails"
        typeProduct="home"
      />
      <AmPlacement
        translationKey="SolCorners"
        listProducts="ProductDetails"
        pinPlacement="pinHome"
      />
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
