import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const CareerCard = ({ translationKey }) => {
  const t = useTranslations();
  const CareerCard = t.raw(translationKey);
  return (
    <section className="cr-card">
      <div className="container mx-auto grid grid-cols-3 gap-4">
        {CareerCard.map((item, index) => (
          <div className="flex flex-col cr-card__item">
            <Image
              src={item.image}
              width={1000}
              height={1000}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="flex flex-col items-center py-3 px-6 w-full">
              <p className="text-nayvblue leading-[1.3] lg:leading-[1.2] text-xl lg:text-[30px]">
                {item.title}
              </p>
              <p className="text-darkblue leading-[1.3] lg:leading-[1.2] text-sm lg:text-lg">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerCard;
