import FAQsFragment from "@/components/Fragments/FAQs/page";
import { getPosts } from "@/libs/api";
import React from "react";

export default async function FAQPage(props) {
  const params = await props.params;
  const locale = params?.locale || "en";

  const response = await getPosts("faqs");

  const faqsByLocale =
    response?.data?.faqs?.[locale] || response?.data?.faqs?.id || [];

  const sections = {
    FaqsList: {
      faqs: faqsByLocale,
    },
  };

  return <FAQsFragment sections={sections} locale={locale} />;
}
