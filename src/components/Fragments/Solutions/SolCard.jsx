import React, { use } from "react";

const SolCard = ({ translationKey }) => {
  const t = useTranslations();
  const SolCard = t.raw(translationKey);
  return (
    <section className="flex flex-col sol-card">
      <div className="container mx-auto flex flex-col">
        <h2 className="text-darkblue text-3xl lg:text-6xl font-medium font-raleway"></h2>
        <div className="flex flex-col lg:flex-row"></div>
      </div>
    </section>
  );
};

export default SolCard;
