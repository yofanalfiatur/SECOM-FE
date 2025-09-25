"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import AccordionItem from "@/components/Elements/AccordionItem";

const AmFAQ = ({ translationKey }) => {
  const t = useTranslations();
  const AlarmFAQ = t.raw(translationKey);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="pt-10 pb-10 lg:pt-18 lg:pb-21 bg-[#E6F3FF]">
      <div className="container mx-auto flex flex-col lg:items-center">
        <h2 className="text-[25px] lg:text-[40px] font-normal lg:font-medium font-raleway w-full text-center text-darkblue">
          {AlarmFAQ.title}
        </h2>
        <p className="text-sm leading-[1.7] lg:leading-[1.5] text-darkblue lg:text-lg w-full lg:w-6/12 text-center mt-3  mb-9 lg:mb-8">
          {AlarmFAQ.desc}
        </p>

        <div className="flex flex-col gap-5 w-full lg:w-8/12">
          {AlarmFAQ.items.map((item, index) => (
            <AccordionItem
              key={index}
              index={index}
              isOpen={activeIndex === index}
              onToggle={toggleAccordion}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmFAQ;
