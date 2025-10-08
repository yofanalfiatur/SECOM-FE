import BannerBasic from "@/components/Fragments/Global/BannerBasic";
import HeaderAdditional from "@/components/Fragments/Header/HeaderAdditional";
import SolProduct from "@/components/Fragments/Solutions/SolProduct";
import SolServices from "@/components/Fragments/Solutions/SolServices";
import React from "react";

const SolutionsLP = () => {
  return (
    <>
      <HeaderAdditional
        menuServices="MenuServices"
        menuProducts="MenuProducts"
      />
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
