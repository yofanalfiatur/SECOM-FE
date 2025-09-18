"use client";
import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";

const FAQPage = () => {
  const t = useTranslations();
  const FAQPage = t.raw("FAQPage");
  const locale = useLocale();

  const uniqueCategories = [...new Set(FAQPage.map((faq) => faq.category))];

  const [activeTab, setActiveTab] = useState(uniqueCategories[0]);

  const filteredFaqs = FAQPage.filter((faq) => faq.category === activeTab);

  return (
    <section className="flex flex-col faq py-12 lg:py-20">
      <div className="container mx-auto flex flex-col lg:flex-row">
        {/* Column Category */}
        <div className="w-full lg:w-4/12 flex flex-col lg:pr-10 relative mb-8 lg:mb-0">
          <h2 className="text-darkblue text-3xl lg:text-5xl font-medium font-raleway mb-6">
            {locale === "en"
              ? "Frequently Asked Questions"
              : "Pertanyaan yang sering ditanyakan"}
          </h2>
          <div className="flex flex-col gap-2">
            {uniqueCategories.map((category, index) => (
              <button
                key={index}
                className={`faq-tab text-left p-4 rounded-lg transition-all duration-300 ${
                  activeTab === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-8/12 flex flex-col gap-4">
          {filteredFaqs.map((faq, index) => (
            <details
              key={index}
              className="p-4 border rounded-lg bg-white shadow-sm"
              name="faq-accordion"
            >
              <summary className="font-semibold cursor-pointer text-lg text-darkblue">
                {faq.question}
              </summary>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
