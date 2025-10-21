import FloatButton from "@/components/Elements/FloatButton";
import AmApps from "@/components/Fragments/Alarm/AmApps";
import AmFAQ from "@/components/Fragments/Alarm/AmFAQ";
import AmPackage from "@/components/Fragments/Alarm/AmPackage";
import AmPlacement from "@/components/Fragments/Alarm/AmPlacement";
import AmProducts from "@/components/Fragments/Alarm/AmProducts";
import AmProtect from "@/components/Fragments/Alarm/AmProtect";
import AmTrusted from "@/components/Fragments/Alarm/AmTrusted";
import BannerClipText from "@/components/Fragments/Global/BannerClipText";
import BannerSecondary from "@/components/Fragments/Global/BannerSecondary";
import HowWeWork from "@/components/Fragments/Global/HowWeWork";
import OverviewGlobal from "@/components/Fragments/Global/OverviewGlobal";
import SolDtHighlight from "@/components/Fragments/Solution-Detail/SolDtHighlight";
import { getPostBySlug } from "@/libs/api";
import React from "react";

export default async function ProductDetail({ params }) {
  const { id, locale } = await params;

  // fetch data based on slug
  const response = await getPostBySlug("products", id);
  if (!response || !response.data) return notFound();

  const productData = response.data;
  const translationData =
    productData.translations?.[locale] || productData.translations?.id;

  if (!translationData) return notFound();

  const fieldType = translationData.field_type;
  // mapping component
  const bannerData = {
    title: translationData.banner_title,
    image: translationData.banner_image_desktop,
    imageMd: translationData.banner_image_mobile,
  };

  const overviewData = {
    desc: translationData.overview_title_section,
    items: null,
  };

  const reasonData = {
    title: translationData.why_choose_title_section,
    items: translationData.why_choose_cards,
  };

  const highlightData = {
    title: translationData.highlight_title_section,
    desc: translationData.highlight_description_section,
    cards: translationData.highlight_cards,
    cta: null,
  };

  const faqData = {
    title: translationData.faq_title_section,
    desc: translationData.faq_description_section,
    items: translationData.faq_accordions,
  };

  //full template
  const bannerFullData = {
    title: translationData.banner_title,
    background_image_desktop: translationData.banner_image_desktop,
    background_image_mobile: translationData.banner_image_mobile,
  };
  const overviewFullData = {
    desc: translationData.overview_title_section,
    items: translationData.overview_cards,
  };
  const protectData = {
    title: translationData.circle_title_section,
    image: translationData.circle_image_desktop,
    imageMobile: translationData.circle_image_mobile,
    items: translationData.circle_cards,
  };

  const appsData = {
    title: translationData.apps_title_section,
    desc: translationData.apps_description_section,
    image: null,
    logo: null,
    hint: translationData.apps_hint_section,
    items: translationData.apps_list,
    playStoreImage: translationData.apps_playstore_image,
    playStoreURL: translationData.apps_playstore_url,
    appStoreImage: translationData.apps_appstore_image,
    appStoreURL: translationData.apps_appstore_url,
  };
  const featuresData = {
    title: translationData.feature_title_section,
    desc: translationData.feature_description_section,
    items: translationData.feature_table,
  };
  const packagesSection = {};
  const terms = {
    terms: translationData.terms,
  };

  return (
    <>
      {fieldType === "default" ? (
        <>
          {/* template default */}

          <BannerClipText dataSection={bannerData} />

          <OverviewGlobal dataSection={overviewData} />
          <HowWeWork dataSection={reasonData} />
          <SolDtHighlight dataSection={highlightData} />
          <AmFAQ dataSection={faqData} />
        </>
      ) : (
        <>
          {/* template full */}
          <BannerSecondary dataSection={bannerFullData} />

          <OverviewGlobal dataSection={overviewFullData} />
          <HowWeWork dataSection={reasonData} />

          <AmProtect dataSection={protectData} />

          {/* <AmProducts
            translationKey="AlarmProduct"
            listProducts="ProductDetails"
            typeProduct="business"
          /> */}
          {/* <AmPlacement
            translationKey="AlarmCorners"
            listProducts="ProductDetails"
            pinPlacement="pinBusiness"
          /> */}

          <AmApps dataSection={appsData} />
          <AmTrusted translationKey="AlarmTrusted" />
          {/* <AmPackage
            translationKey="AlarmPackage"
            differences="AlarmDifferences"
            listPackages="BusinessPackages"
            packagesBuy="BusinessPackagesBuy"
            packagesRent="BusinessPackagesRent"
          /> */}
          <AmFAQ dataSection={faqData} />
          <FloatButton />
        </>
      )}
    </>
  );
}
