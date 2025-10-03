import BannerBasic from "@/components/Fragments/Global/BannerBasic";
import SolProduct from "@/components/Fragments/Solutions/SolProduct";
import SolServices from "@/components/Fragments/Solutions/SolServices";
import React from "react";

const SolutionsLP = () => {
  return (
    <>
      <HeaderAdditional translationKey="HeaderAdditional" />
      <BannerBasic translationKey="SolutionBanner" />
      <SolServices translationKey="SolutionServices" />
      <SolProduct
        translationKey="SolutionProducts"
        listProducts="ProductDetails"
      />
    </>
  );
};

export default SolutionsLP;
