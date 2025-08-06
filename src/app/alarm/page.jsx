// Page Alarm Landing

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
import AmDiffrences from "@/components/Fragments/Alarm/AmDiffrences";
import CardStack from "@/components/Elements/CardStack";

const AlarmLanding = () => {
  return (
    <>
      <AmBanner />
      <AmOverview />
      <AmChoose />
      <AmProtect />
      <AmProducts />
      <AmCorner />
      <AmApps />
      <AmTrusted />
      <AmPackage />
      <AmDiffrences />
      <AmFAQ />
      {/* <CardStack /> */}
    </>
  );
};

export default AlarmLanding;
