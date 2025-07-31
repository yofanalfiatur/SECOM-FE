"use client";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import { AlarmProduct } from "@/constants-temp/data";

const AmProducts = () => {
  const isDesktop = useIsDesktop();
  return (
    <section className="py-6 bg-navyblue">
      <div className="container mx-auto">
        <h2 className="text-4xl font-raleway font-medium text-white">
          {AlarmProduct.title}
        </h2>
        <p className="text-lg font-normal leading-[1.5] text-white">
          {AlarmProduct.desc}
        </p>

        {/* Card Desktop */}
        {isDesktop ? (
          <>
            <div className=" am-products__slider">Desktop</div>
          </>
        ) : (
          <>
            <div className=" am-products__slider-md">Mobile</div>
          </>
        )}
      </div>
    </section>
  );
};

export default AmProducts;
