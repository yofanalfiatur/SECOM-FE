// Page Alarm Landing

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

const AlarmLanding = () => {
  return (
    <>
      <AmBanner translationKey="AlarmBanner" />
      <AmOverview translationKey="AlarmOverview" />
      <AmChoose translationKey="AlarmReason" />
      <AmProtect translationKey="AlarmProtect" />
      <AmProducts translationKey="AlarmProduct" listProducts="ProductDetails" />
      <AmCorner translationKey="AlarmCorners" listProducts="ProductDetails" />
      <AmApps translationKey="AlarmApps" />
      <AmTrusted translationKey="AlarmTrusted" />
      <AmPackage
        translationKey="AlarmPackage"
        differences="AlarmDifferences"
        listPackages="Packages"
        packagesBuy="SoPackagesBuy"
        packagesRent="SoPackagesRent"
      />
      <AmFAQ translationKey="AlarmFAQ" />
    </>
  );
};

export default AlarmLanding;
