import React from "react";
import { HQuote } from "@/constants-temp/data";

const HomeQuote = () => {
  return (
    <section className="py-[3rem] h-quote">
      <div className="container mx-auto">
        {HQuote.map((item, index) => (
          <div key={index}>
            <p className="text-lg text-darkblue">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeQuote;
