"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import CardProduct from "@/components/Elements/CardProduct";

const SolProduct = ({ translationKey, listProducts }) => {
  const t = useTranslations();
  const ProductDetails = t.raw(listProducts);
  const SolProduct = t.raw(translationKey);
  const isDesktop = useIsDesktop();
  const locale = useLocale();

  return (
    <section className="bg-navyblue flex flex-col pt-10 lg:pt-21 pb-10 lg:pb-25 sol-product">
      <div className="container mx-auto flex flex-col">
        <div className="flex flex-row sol-product__intro">
          <div className="w-full lg:w-8/12 lg:pr-20">
            <h2 className="text-white text-[30px] lg:text-[40px] font-raleway font-normal ">
              {SolProduct.title}
            </h2>
            <p className="text-white text-sm lg:text-lg leading-[1.7] lg:leading-[1.5] mt-2 mb-14">
              {SolProduct.desc}
            </p>
          </div>
          <div className="w-full lg:w-4/12 lg:pl-3 ">
            <p className="text-white lg:mt-6 lg:mb-3 lg:text-lg">
              {locale === "en" ? "FILTER BY" : "FILTER BERDASARKAN"}
            </p>
            <div className="flex flex-col relative">
              <select
                name=""
                id=""
                className="border-[1px] rounded-[5px] border-white lg:text-lg text-white py-4 px-4 w-full appearance-none"
              >
                <option value="">
                  {locale === "en" ? "All Industries" : "Semua Industri"}
                </option>
              </select>
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
              >
                <path
                  d="M0.465612 7.725L11.5048 19L22.544 7.725C22.8439 7.41769 23.0078 7.00538 22.9997 6.57876C22.9916 6.15214 22.8122 5.74616 22.5009 5.45014C22.1895 5.15412 21.7718 4.9923 21.3396 5.00028C20.9074 5.00827 20.4961 5.1854 20.1962 5.49271L11.5048 14.3746L2.80377 5.4927C2.50388 5.18539 2.09259 5.00826 1.66039 5.00028C1.22819 4.9923 0.810481 5.15412 0.499151 5.45014C0.187821 5.74616 0.0083746 6.15214 0.000287681 6.57875C-0.00779924 7.00537 0.156137 7.41769 0.45603 7.725L0.465612 7.725Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Card Desktop */}
        {isDesktop ? (
          <div className="w-full flex flex-col am-products__grid">
            <ul className="flex flex-row flex-wrap justify-center gap-4">
              {ProductDetails.map((item, index) => (
                <CardProduct key={index} item={item} variant="desktop" />
              ))}
            </ul>
          </div>
        ) : (
          <>
            {/* Mobile Card Slider */}
            <Splide
              options={{
                type: "loop",
                perPage: 1,
                autoplay: false,
                pauseOnHover: true,
                gap: "20px",
                arrows: false,
                pagination: true,
              }}
              hasTrack={false}
              className="[&_.splide__track]:!overflow-visible w-full"
            >
              <SplideTrack>
                {ProductDetails.map((item, index) => (
                  <SplideSlide key={index}>
                    <CardProduct item={item} variant="mobile" />
                  </SplideSlide>
                ))}
              </SplideTrack>
            </Splide>
          </>
        )}
      </div>
    </section>
  );
};

export default SolProduct;
