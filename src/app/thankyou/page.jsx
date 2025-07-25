import ButtonPrimary from "@/components/Elements/ButtonPrimary";
import { ThankYouPage } from "@/constants-temp/data";
import Image from "next/image";
import React from "react";

const ThankYou = () => {
  return (
    <>
      <section className="">
        <div className="container mx-auto flex flex-row">
          <div className="w-2/3 border-r-[1px] pt-20 pb-26 border-[#13223322]">
            <h1 className="text-[95px] font-open-sans font-semibold relative max-w-max leading-[1.1]">
              {ThankYouPage.title}
              <br />
              {ThankYouPage.title2}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="300"
                height="51"
                viewBox="0 0 300 51"
                fill="none"
                className="absolute top-[17%] right-[-2%]"
              >
                <line
                  y1="48.5"
                  x2="212"
                  y2="48.5"
                  stroke="#00AAAD"
                  stroke-width="5"
                />
                <line
                  x1="48"
                  y1="25.5"
                  x2="212"
                  y2="25.5"
                  stroke="#00AAAD"
                  stroke-width="5"
                />
                <line
                  x1="106"
                  y1="2.5"
                  x2="212"
                  y2="2.50001"
                  stroke="#00AAAD"
                  stroke-width="5"
                />
                <path
                  d="M236 0V51H300V0H236ZM265.44 30.4938C266.18 31.042 267.078 31.3381 268 31.3381C268.922 31.3381 269.82 31.042 270.56 30.4938L273.689 28.1562L295.733 44.625V46.75H240.267V44.625L262.311 28.1562L265.44 30.4938ZM268 27.0938L240.267 6.375V4.25H295.733V6.375L268 27.0938ZM240.267 11.6875L258.756 25.5L240.267 39.3125V11.6875ZM295.733 39.3125L277.244 25.5L295.733 11.6875V39.3125Z"
                  fill="#00AAAD"
                />
              </svg>
            </h1>
          </div>
          <div className="w-1/3"></div>
        </div>
        <div className="bg-[#13223322] w-screen h-[1px]"></div>
        <div className="container mx-auto flex flex-row">
          <div className="w-2/3 border-r-[1px] border-[#13223322]"></div>
          <div className="w-1/3 flex flex-col pt-10 pb-36 pl-8">
            <p className="text-lg text-darkblue w-[83%]">{ThankYouPage.desc}</p>
            <ButtonPrimary
              href={ThankYouPage.buttonCTA.href}
              target={ThankYouPage.buttonCTA.target}
              className="mt-5"
            >
              {ThankYouPage.buttonCTA.text}
            </ButtonPrimary>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYou;
