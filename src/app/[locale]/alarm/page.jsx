// Page Alarm Landing

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

const AlarmLanding = () => {
  return (
    <>
      {/* business */}
      <AmBanner translationKey="AlarmBanner" />
      <AmOverview translationKey="AlarmOverview" />
      {/* <AmChoose translationKey="AlarmReason" /> */}
      <AmReason translationKey="AlarmReason" />
      <AmProtect translationKey="AlarmProtect" />
      <AmProducts
        translationKey="AlarmProduct"
        listProducts="ProductDetails"
        typeProduct="business"
      />
      <AmPlacement
        translationKey="AlarmCorners"
        listProducts="ProductDetails"
        pinPlacement="pinBusiness"
      />
      <AmApps translationKey="AlarmApps" />
      <AmTrusted translationKey="AlarmTrusted" />
      <AmPackage
        translationKey="AlarmPackage"
        differences="AlarmDifferences"
        listPackages="BusinessPackages"
        packagesBuy="HomePackagesBuy"
        packagesRent="HomePackagesRent"
      />
      <AmFAQ translationKey="AlarmFAQ" />
    </>
  );
};

export default AlarmLanding;
