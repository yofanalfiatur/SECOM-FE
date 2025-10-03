"use client";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import React, { useState } from "react";

const HeaderAdditional = ({ menuServices, menuProducts }) => {
  const t = useTranslations();
  const locale = useLocale();
  const isDesktop = useIsDesktop();
  const MenuServices = t.raw(menuServices);
  const MenuProducts = t.raw(menuProducts);

  // state untuk tab yang dihover
  const [hoveredTab, setHoveredTab] = useState(null);

  // fungsi helper untuk handle event sesuai device
  const handleTabEvent = (tabName) => {
    if (isDesktop) {
      // di desktop: hanya set tab saat hover
      setHoveredTab(tabName);
    } else {
      // di mobile: toggle tab saat klik
      setHoveredTab((prev) => (prev === tabName ? null : tabName));
    }
  };

  return (
    <section className="flex flex-col header-add sticky top-[60px] lg:top-[94px] z-[999]">
      <div className="flex flex-col relative">
        {/* tab list */}
        <div className="bg-navyblue grid grid-cols-2 relative z-[1]">
          {/* tab sector */}
          <div className="flex flex-col justify-center items-center border-r-[1px] border-[#FFFFFF33] relative header-add__wrap-item">
            <div
              className="flex flex-row relative items-center justify-center cursor-pointer header-add__item"
              onMouseEnter={() => isDesktop && handleTabEvent("sector")}
              onMouseLeave={() => isDesktop && setHoveredTab(null)}
              onClick={() => !isDesktop && handleTabEvent("sector")}
            >
              <p className="text-white text-[10px] lg:text-base uppercase tracking-[2px] py-3 px-2 font-raleway">
                {isDesktop
                  ? locale === "en"
                    ? "SECTOR WE PROTECT"
                    : "SEKTOR YANG KAMI PROTEKSI"
                  : locale === "en"
                  ? "SEE OUR SECTORS"
                  : "LIHAT SEKTOR KAMI"}
              </p>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.86148 6.62859L12.1715 1.05559C12.2601 0.962603 12.3096 0.839061 12.3096 0.710591C12.3096 0.58212 12.2601 0.45858 12.1715 0.365592L12.1655 0.359591C12.1225 0.314356 12.0708 0.278336 12.0134 0.253723C11.9561 0.229109 11.8944 0.216416 11.832 0.216416C11.7696 0.216416 11.7078 0.229109 11.6505 0.253723C11.5932 0.278336 11.5414 0.314356 11.4985 0.359591L6.49847 5.60759L1.50048 0.35959C1.4575 0.314355 1.40578 0.278335 1.34844 0.253722C1.29111 0.229108 1.22937 0.216415 1.16698 0.216415C1.10458 0.216415 1.04284 0.229108 0.985509 0.253722C0.928176 0.278335 0.876449 0.314355 0.833476 0.35959L0.827475 0.365591C0.73883 0.458579 0.689379 0.582119 0.689379 0.71059C0.689379 0.83906 0.73883 0.962602 0.827475 1.05559L6.13747 6.62859C6.18417 6.6776 6.24034 6.71662 6.30256 6.74328C6.36479 6.76994 6.43178 6.78369 6.49948 6.78369C6.56717 6.78369 6.63416 6.76994 6.69639 6.74328C6.75861 6.71662 6.81478 6.6776 6.86148 6.62859Z"
                  fill="#ffffff"
                ></path>
              </svg>
            </div>
            {/* triangle */}
            <div
              className={`absolute z-[1] w-[15px] h-[15px] border-t-[15px] border-navyblue border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent scale-[100%] transition-all duration-300 ease-[cubic-bezier(.2,1,.3,1)] ${
                hoveredTab === "sector"
                  ? "opacity-100 visible top-full"
                  : "opacity-0 invisible top-[50%]"
              }`}
              onMouseEnter={() => isDesktop && handleTabEvent("sector")}
              onMouseLeave={() => isDesktop && setHoveredTab(null)}
            ></div>
          </div>

          {/* tab solutions */}
          <div className="flex flex-col justify-center items-center relative header-add__wrap-item">
            <div
              className="flex flex-row relative items-center justify-center cursor-pointer header-add__item"
              onMouseEnter={() => isDesktop && handleTabEvent("solutions")}
              onMouseLeave={() => isDesktop && setHoveredTab(null)}
              onClick={() => !isDesktop && handleTabEvent("solutions")}
            >
              <p className="text-white text-[10px] lg:text-base uppercase tracking-[2px] py-3 px-2 font-raleway">
                {locale === "en" ? "SOLUTIONS" : "SOLUSI"}
              </p>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.86148 6.62859L12.1715 1.05559C12.2601 0.962603 12.3096 0.839061 12.3096 0.710591C12.3096 0.58212 12.2601 0.45858 12.1715 0.365592L12.1655 0.359591C12.1225 0.314356 12.0708 0.278336 12.0134 0.253723C11.9561 0.229109 11.8944 0.216416 11.832 0.216416C11.7696 0.216416 11.7078 0.229109 11.6505 0.253723C11.5932 0.278336 11.5414 0.314356 11.4985 0.359591L6.49847 5.60759L1.50048 0.35959C1.4575 0.314355 1.40578 0.278335 1.34844 0.253722C1.29111 0.229108 1.22937 0.216415 1.16698 0.216415C1.10458 0.216415 1.04284 0.229108 0.985509 0.253722C0.928176 0.278335 0.876449 0.314355 0.833476 0.35959L0.827475 0.365591C0.73883 0.458579 0.689379 0.582119 0.689379 0.71059C0.689379 0.83906 0.73883 0.962602 0.827475 1.05559L6.13747 6.62859C6.18417 6.6776 6.24034 6.71662 6.30256 6.74328C6.36479 6.76994 6.43178 6.78369 6.49948 6.78369C6.56717 6.78369 6.63416 6.76994 6.69639 6.74328C6.75861 6.71662 6.81478 6.6776 6.86148 6.62859Z"
                  fill="#ffffff"
                ></path>
              </svg>
            </div>
            {/* triangle */}
            <div
              className={`absolute z-[1] w-[15px] h-[15px] border-t-[15px] border-navyblue border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent scale-[100%] transition-all duration-300 ease-[cubic-bezier(.2,1,.3,1)] ${
                hoveredTab === "solutions"
                  ? "opacity-100 visible top-full"
                  : "opacity-0 invisible top-[50%]"
              }`}
              onMouseEnter={() => isDesktop && handleTabEvent("solutions")}
              onMouseLeave={() => isDesktop && setHoveredTab(null)}
            ></div>
          </div>
        </div>

        {/* tab content sector */}
        <div
          className={`w-full h-[calc(100vh-98px)] lg:h-max flex flex-col bg-[#E6E9F5] absolute z-0 left-0 transition-all duration-300 ease-[cubic-bezier(.2,1,.3,1)] ${
            hoveredTab === "sector"
              ? "opacity-100 visible top-full"
              : "opacity-0 invisible top-[50%]"
          }`}
          onMouseEnter={() => isDesktop && handleTabEvent("sector")}
          onMouseLeave={() => isDesktop && setHoveredTab(null)}
        >
          <div className="container mx-auto pt-10 lg:pt-9 header-add__content h-max lg:h-[300px] grid grid-cols-12 gap-y-4">
            <div className="col-span-12 lg:col-span-2 flex flex-col max-h-max">
              <Link
                href={locale === "en" ? "/en/sector" : "/sector"}
                className="flex flex-row max-w-max items-center mb-4 lg:mb-4 group transition-all duration-300 ease relative"
              >
                <p className="text-darkblue font-medium text-base group-hover:text-tosca transition-all duration-300 ease">
                  {locale === "en" ? "Sector Overview" : "Sektor Kami"}
                </p>
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-[-1.7rem] top-1/2 transform -translate-y-1/2 group-hover:right-[-2.2rem] transition-all duration-300 ease"
                >
                  <path
                    d="M1 6L13 6M13 6L8.5 10.5M13 6L8.5 1.5"
                    stroke="#959BA9"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-300 ease group-hover:stroke-tosca"
                  />
                </svg>
              </Link>

              <p className="text-darkblue font-medium text-base mb-4 lg:mb-4">
                {locale === "en" ? "Service" : "Layanan"}
              </p>
              <ul className="flex flex-col">
                {MenuServices.map((item, index) => (
                  <li className="flex flex-col" key={index}>
                    <Link
                      href={item.href}
                      className="flex flex-row max-w-max items-center mb-4 lg:mb-4 transition-all duration-200 ease group relative"
                    >
                      <p className="text-darkblue text-sm transition-all duration-200 ease  group-hover:text-tosca">
                        {item.text}
                      </p>
                      <svg
                        width="14"
                        height="12"
                        viewBox="0 0 14 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute right-[-1.7rem] top-1/2 transform -translate-y-1/2 group-hover:right-[-2.2rem] transition-all duration-300 ease"
                      >
                        <path
                          d="M1 6L13 6M13 6L8.5 10.5M13 6L8.5 1.5"
                          stroke="#959BA9"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className=" transition-all duration-200 ease group-hover:stroke-tosca"
                        />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-10 flex flex-col max-h-max">
              <p className="text-darkblue font-medium text-base mb-4 lg:mb-4">
                {locale === "en" ? "Products" : "Produk"}
              </p>
              <ul className="w-full h-full flex flex-col flex-wrap lg:max-h-[165px]">
                {MenuProducts.map((item, index) => (
                  <li className="flex flex-col" key={index}>
                    <Link
                      href={item.href}
                      className="flex flex-row max-w-max items-center mb-4 lg:mb-4 transition-all duration-200 ease group relative"
                    >
                      <p className="text-darkblue text-sm transition-all duration-200 ease  group-hover:text-tosca">
                        {item.text}
                      </p>
                      <svg
                        width="14"
                        height="12"
                        viewBox="0 0 14 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute right-[-1.7rem] top-1/2 transform -translate-y-1/2 group-hover:right-[-2.2rem] transition-all duration-300 ease"
                      >
                        <path
                          d="M1 6L13 6M13 6L8.5 10.5M13 6L8.5 1.5"
                          stroke="#959BA9"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className=" transition-all duration-300 ease group-hover:stroke-tosca"
                        />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* tab content solution */}
        <div
          className={`w-full h-[calc(100vh-98px)] lg:h-max flex flex-col bg-[#E6E9F5] absolute z-0 left-0 transition-all duration-300 ease-[cubic-bezier(.2,1,.3,1)] ${
            hoveredTab === "solutions"
              ? "opacity-100 visible top-full"
              : "opacity-0 invisible top-[50%]"
          }`}
          onMouseEnter={() => isDesktop && handleTabEvent("solutions")}
          onMouseLeave={() => isDesktop && setHoveredTab(null)}
        >
          <div className="container mx-auto pt-10 lg:pt-9 header-add__content h-max lg:h-[300px] grid grid-cols-12 gap-y-4">
            <div className="col-span-12 lg:col-span-2 flex flex-col max-h-max">
              <Link
                href={locale === "en" ? "/en/solutions" : "/solutions"}
                className="flex flex-row max-w-max items-center mb-4 lg:mb-4 group transition-all duration-300 ease relative"
              >
                <p className="text-darkblue font-medium text-base group-hover:text-tosca transition-all duration-300 ease">
                  {locale === "en" ? "Solutions Overview" : "Solusi Kami"}
                </p>
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-[-1.7rem] top-1/2 transform -translate-y-1/2 group-hover:right-[-2.2rem] transition-all duration-300 ease"
                >
                  <path
                    d="M1 6L13 6M13 6L8.5 10.5M13 6L8.5 1.5"
                    stroke="#959BA9"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-300 ease group-hover:stroke-tosca"
                  />
                </svg>
              </Link>

              <p className="text-darkblue font-medium text-base mb-4 lg:mb-4">
                {locale === "en" ? "Service" : "Layanan"}
              </p>
              <ul className="flex flex-col">
                {MenuServices.map((item, index) => (
                  <li className="flex flex-col" key={index}>
                    <Link
                      href={item.href}
                      className="flex flex-row max-w-max items-center mb-4 lg:mb-4 transition-all duration-200 ease group relative"
                    >
                      <p className="text-darkblue text-sm transition-all duration-200 ease  group-hover:text-tosca">
                        {item.text}
                      </p>
                      <svg
                        width="14"
                        height="12"
                        viewBox="0 0 14 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute right-[-1.7rem] top-1/2 transform -translate-y-1/2 group-hover:right-[-2.2rem] transition-all duration-300 ease"
                      >
                        <path
                          d="M1 6L13 6M13 6L8.5 10.5M13 6L8.5 1.5"
                          stroke="#959BA9"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className=" transition-all duration-200 ease group-hover:stroke-tosca"
                        />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-10 flex flex-col max-h-max">
              <p className="text-darkblue font-medium text-base mb-4 lg:mb-4">
                {locale === "en" ? "Products" : "Produk"}
              </p>
              <ul className="w-full h-full flex flex-col flex-wrap lg:max-h-[165px]">
                {MenuProducts.map((item, index) => (
                  <li className="flex flex-col" key={index}>
                    <Link
                      href={item.href}
                      className="flex flex-row max-w-max items-center mb-4 lg:mb-4 transition-all duration-200 ease group relative"
                    >
                      <p className="text-darkblue text-sm transition-all duration-200 ease  group-hover:text-tosca">
                        {item.text}
                      </p>
                      <svg
                        width="14"
                        height="12"
                        viewBox="0 0 14 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute right-[-1.7rem] top-1/2 transform -translate-y-1/2 group-hover:right-[-2.2rem] transition-all duration-300 ease"
                      >
                        <path
                          d="M1 6L13 6M13 6L8.5 10.5M13 6L8.5 1.5"
                          stroke="#959BA9"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className=" transition-all duration-300 ease group-hover:stroke-tosca"
                        />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderAdditional;
