import RadialGrid from "@/components/Elements/RadialGrid";
import { LoginDummy } from "@/constants-temp/data";
import React from "react";

const LoginPage = () => {
  return (
    <>
      <section className="py-[3rem] relative overflow-hidden flex flex-col items-center justify-center h-[80vh] hide__footer__top">
        <RadialGrid />
        <div className="container mx-auto flex flex-col items-center justify-center relative z-10 ">
          <div className="w-full lg:w-1/2">
            <h1 className="text-[40px] text-white text-center font-medium font-raleway">
              {LoginDummy.title}
            </h1>

            <div className="w-full h-[310px] bg-white login__form"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
