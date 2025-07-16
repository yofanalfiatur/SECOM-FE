import HomeAbout from "@/components/Fragments/Home/H-About";
import HomeBanner from "@/components/Fragments/Home/H-Banner";
import HomePromotion from "@/components/Fragments/Home/H-Promotion";
import HomeQuote from "@/components/Fragments/Home/H-Quote";
import HomeSolution from "@/components/Fragments/Home/H-Solution";
import HomeSurvey from "@/components/Fragments/Home/H-Survey";
import HomeTesti from "@/components/Fragments/Home/H-Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeSurvey />
      <HomeAbout />
      <HomePromotion />
      <HomeQuote />
      <HomeSolution />
      <HomeTesti />
    </>
  );
}
