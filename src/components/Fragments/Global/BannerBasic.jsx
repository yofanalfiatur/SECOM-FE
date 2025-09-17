import { useTranslations } from "next-intl";
import React from "react";

const BannerBasic = ({ translationKey }) => {
  const t = useTranslations();
  const BannerBasic = t.raw(translationKey);
  return (
    <section className="flex flex-col banner-basic">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="w-full">
          <h2 className="text-darkblue text-3xl lg:text-6xl font-medium font-raleway">
            {BannerBasic.title}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default BannerBasic;
