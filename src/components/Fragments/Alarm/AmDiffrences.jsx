import { AlarmDifferences } from "@/constants-temp/data";
import React from "react";

const AmDiffrences = () => {
  return (
    <>
      <section>
        <div className="container">
          <h2 className="text-[40px]">{AlarmDifferences.title}</h2>

          <p className="text-[#13223366]">{AlarmDifferences.hint}</p>
        </div>
      </section>
    </>
  );
};

export default AmDiffrences;
