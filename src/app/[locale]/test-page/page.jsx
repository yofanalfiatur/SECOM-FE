import TestFragment from "@/components/Fragments/TestFragments/TestFragment";
import { getPageData } from "@/libs/api";

export default async function TestPage({ params: { locale } }) {
  const response = await getPageData("homepage");

  // pilih data berdasarkan locale
  const pageData = response.data[locale];

  // ambil section sesuai komponennya
  const sections = pageData.sections.reduce((acc, section) => {
    acc[section.component] = section.fields;
    return acc;
  }, {});

  const bannerData = Object.values(sections.home_banner?.slides || []);
  const valueData = sections.home_value || {};
  const segmentData = sections.home_segmen || {};
  const aboutData = sections.home_about || {};

  return (
    <>
      <TestFragment data={bannerData} />
    </>
  );
}
