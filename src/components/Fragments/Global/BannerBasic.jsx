import { useTranslations } from "next-intl";
import React from "react";

const BannerBasic = ({ translationKey }) => {
  const t = useTranslations();
  const BannerBasic = t.raw(translationKey);
  return (
    <section
      className={`flex flex-col h-[362px] banner-basic`}
      style={{ backgroundImage: `url(${BannerBasic.image})` }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="w-full">
          <h2
            className="text-darkblue text-3xl lg:text-6xl font-medium font-raleway"
            dangerouslySetInnerHTML={{ __html: BannerBasic.title }}
          />
        </div>
      </div>
    </section>
  );
};

export default BannerBasic;
