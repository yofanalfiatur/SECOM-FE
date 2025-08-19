"use client";

import RadialGridCard from "@/components/Elements/RadialGridCard";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useTranslations } from "next-intl";

const AmProducts = (props) => {
  const { translationKey, listProducts, typeProduct } = props;
  const isDesktop = useIsDesktop();
  const t = useTranslations();
  const ProductDetails = t.raw(listProducts);
  const AlarmProduct = t.raw(translationKey);
  const TypeProduct = typeProduct;
  return (
    <section className="pt-10 pb-12 lg:pt-20 lg:pb-26 bg-navyblue am-prod">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-[25px] lg:text-4xl font-raleway font-medium text-white text-center">
          {AlarmProduct.title}
        </h2>
        <p className="text-sm lg:text-lg leading-[1.7] lg:leading-[1.5] text-white text-center w-[90%] lg:w-[60%] mt-2 lg:mt-5 mb-6 lg:mb-13">
          {AlarmProduct.desc}
        </p>

        {/* Card Desktop */}
        {isDesktop ? (
          <div className="flex flex-col am-products__grid">
            <ul className="flex flex-row flex-wrap justify-center gap-4">
              {ProductDetails.filter((item) =>
                item.type.includes(TypeProduct)
              ).map((item, index) => (
                <li
                  key={index}
                  className="w-[32.5%] relative flex flex-col min-h-[500px] group"
                >
                  <Link
                    href={item.link}
                    className="flex flex-col h-full bg-[#012146] pt-12 pb-6 px-8 m-1 relative z-[1] group"
                  >
                    <RadialGridCard className="group-hover:!rounded-full" />
                    <div className="flex flex-col items-center">
                      <p className="text-white text-[25px] font-raleway text-center">
                        {item.title}
                      </p>
                      <p className="text-white text-center mt-2 mb-10 w-[80%] min-h-[80px]">
                        {item.subtitle}
                      </p>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={216}
                        height={216}
                        className="group-hover:scale-110 transition-all duration-200 ease-in-out"
                      />
                    </div>
                  </Link>
                  <div className="absolute top-0 left-0 w-full h-full z-0 bg-[#012146] transition-all duration-200 ease opacity-100 group-hover:opacity-0"></div>
                  <div className="absolute top-0 left-0 w-full h-full z-0 animated-gradient-bg transition-all duration-200 ease opacity-0 group-hover:opacity-100"></div>
                </li>
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
                {ProductDetails.filter((item) =>
                  item.type.includes(TypeProduct)
                ).map((item, index) => (
                  <SplideSlide key={index}>
                    <div className="relative flex flex-col group min-h-[350px] bg-[#012146] pt-7 pb-6 px-8">
                      <Link
                        href={item.link}
                        className="flex flex-col h-full relative z-[1]"
                      >
                        <RadialGridCard className="!rounded-full" />
                        <div className="flex flex-col items-center relative z-[1]">
                          <p className="text-white font-raleway text-center font-medium">
                            {item.title}
                          </p>
                          <p className="text-white text-center mt-1 mb-8 w-[80%] text-sm">
                            {item.subtitle}
                          </p>
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={147}
                            height={147}
                            className="group-hover:scale-110 transition-all duration-200 ease-in-out"
                          />
                        </div>
                      </Link>
                    </div>
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

export default AmProducts;
