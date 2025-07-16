import ButtonPrimary from "@/components/Elements/ButtonPrimary";
import React from "react";

const HomeSurvey = () => {
  return (
    <section className="py-[3rem] relateive h-survey">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col">
          <p className="text-navyblue">Is Your Home Already Safe? </p>
          <p className="text-[25px] text-navyblue">
            Check your home safety levels with this short survey
          </p>
        </div>
        <h2 className="text-navyblue">
          Ut enim ad minim veniam, quis nostrud exercitation?
        </h2>
        <div className="h-survey__wrap-btn">
          <ButtonPrimary href="/#">Take the Survey</ButtonPrimary>
        </div>
      </div>
    </section>
  );
};

export default HomeSurvey;
