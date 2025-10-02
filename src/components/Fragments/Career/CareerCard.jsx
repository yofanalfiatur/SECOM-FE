import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const CareerCard = ({ translationKey }) => {
  const t = useTranslations();
  const CareerCard = t.raw(translationKey);
  return (
    <section className="flex flex-col relative cr-card">
      <div className="container mx-auto grid grid-cols-3 gap-4">
        {CareerCard.map((item, index) => (
          <div className="flex flex-col cr-card__item" key={index}>
            <div className="cr-card__image"></div>
            <div className="cr-card__title-icon"></div>
            <div className="cr-card__title"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerCard;
