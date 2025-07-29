"use client";
import {
  FooterContent,
  FooterMenu,
  FooterSocMed,
  FooterDropdown,
} from "@/constants-temp/data";

import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import ButtonSecondary from "../Elements/ButtonSecondary";
import Starfield from "../Elements/Starfield";

const Footer = () => {
  // Get current pathname
  const pathname = usePathname();

  // Define pages where footer__top should be hidden
  const hideFooterTopPages = ["/login", "/thankyou"];

  // Check if current page should hide footer top
  const shouldHideFooterTop = hideFooterTopPages.includes(pathname);

  return (
    <footer className="max-w-screen items-center justify-center flex flex-col bg-[#00529c] footer overflow-hidden relative">
      <div className="radial one"></div>
      <div className="radial two"></div>
      <div className="radial three"></div>
      <Starfield />
      {/* Conditionally render footer__top based on current pathname */}
      {!shouldHideFooterTop && (
        <section className=" relative z-10 flex flex-col border-b-1 border-[#ffffff66] w-full footer__top">
          <div className="relative z-[1] container w-full mx-auto">
            <div className="w-[90%] lg:w-3/4 border-r-1 py-10 lg:pt-22 lg:pb-16 border-[#ffffff66] flex flex-col items-center">
              <h2 className="text-white text-[25px] lg:text-[60px] pr-4 lg:pl-0 py-3">
                {FooterContent.FtTitle}
              </h2>
            </div>
            <div className="w-[10%] lg:w-1/4"></div>
          </div>
        </section>
      )}

      <section className=" relative z-10 flex flex-col w-full footer__cta">
        <div className="container relative z-[1] w-full mx-auto flex flex-row">
          <div className="w-[20%] lg:w-1/4"></div>
          <div className="w-[80%] lg:w-3/4 flex flex-col gap-y-6 border-[#ffffff66] border-l-1 pl-8 lg:pl-26 lg:pt-18 lg:pb-24 py-10">
            <p className="text-white text-[13px] lg:text-lg lg:text-[25px]">
              {FooterContent.FtDescription}
            </p>
            <ButtonSecondary
              href={FooterContent.FtButtonHref}
              target={FooterContent.FtButtonTarget}
            >
              {FooterContent.FtButtonText}
            </ButtonSecondary>
          </div>
        </div>
      </section>
      <section className=" relative z-10 w-full flex flex-col border-y-1 border-[#ffffff66] footer__info">
        <div className="container w-full mx-auto flex flex-col lg:flex-row !p-0">
          <div className="w-full lg:w-1/4 flex flex-col justify-center">
            <div className="flex items-center lg:items-start flex-col gap-9 border-b-1 border-[#ffffff66] lg:border-none">
              <Image
                src="/img/secom-logo.png"
                alt="logo"
                width={248}
                height={62}
              />
              <div className="flex flex-col f-wrap-dropdown relative max-w-max max-h-max">
                <select
                  name="f-dropdown"
                  id="f-dropdown"
                  className="lg:text-[14px] max-w-max lg:py-2.5 lg:pl-3 lg:pr-16 relative border-1 border-[#ffffffb3] appearance-none text-[#ffffffb3] f-dropdown"
                >
                  {FooterDropdown.map(({ FtDropText, FtDropValue }, index) => (
                    <option
                      value={FtDropValue}
                      key={index}
                      className="text-white f-dropdown__option"
                    >
                      {FtDropText}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/4 lg:border-l-1 border-[#ffffff66] flex flex-col">
            <div className="f-wrap-address lg:pl-26 lg:py-6 flex flex-col gap-y-2 px-[1rem] lg:px-0">
              <p className="f-address__text text-white text-[14px]">ADDRESS</p>
              <Link
                className="text-white font-semibold text-xl w-full lg:w-2/3"
                href={FooterContent.FtAddressLink}
              >
                {FooterContent.FtAddressText}
              </Link>
            </div>
            <div className=" f-info relative lg:pl-26 flex flex-row w-full border-t-[1px] border-[#ffffff66] lg:border-none">
              <div className="lg:mt-8 lg:mb-20 flex flex-col lg:flex-row w-full px-[1rem] lg:px-0">
                <div className="f-sitemap w-2/3">
                  <p className="f-hint text-white lg:text-[14px] font-bold mb-4">
                    SITEMAPS
                  </p>
                  <ul className="f-sitemap__list flex flex-col flex-wrap max-h-[65px] max-w-max gap-[15px]">
                    {FooterMenu.map(({ FtMenuText, FtMenuLink }, index) => (
                      <li
                        className="f-sitemap__list__item flex flex-col max-w-max"
                        key={index}
                      >
                        <Link
                          href={FtMenuLink}
                          className="f-sitemap__list__item__link text-white max-w-max"
                        >
                          {FtMenuText}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="f-socmed w-1/3">
                  <p className="f-hint text-white lg:text-[14px] font-bold  lg:mb-8">
                    STAY CONNECTED
                  </p>
                  <div className="f-socmed__list flex flex-row gap-8 ">
                    <Link
                      href={FooterSocMed.FtFacebook}
                      target="_blank"
                      className="flex flex-col items-center justify-center f-socmed__list__item f-socmed__list__item--fb"
                    >
                      <FaFacebookF className="opacity-[40%] hover:opacity-[100%] text-white w-[14] h-[27] flex flex-col items-center justify-center" />
                    </Link>
                    <Link
                      href={FooterSocMed.FtLinkedin}
                      target="_blank"
                      className="flex flex-col items-center justify-center f-socmed__list__item f-socmed__list__item--in"
                    >
                      <FaLinkedinIn className="opacity-[40%] hover:opacity-[100%] text-white w-[24.5] h-[23.5] flex flex-col items-center justify-center" />
                    </Link>
                    <Link
                      href={FooterSocMed.FtInstagram}
                      target="_blank"
                      className="flex flex-col items-center justify-center f-socmed__list__item f-socmed__list__item--ig"
                    >
                      <FaInstagram className="opacity-[40%] hover:opacity-[100%] text-white w-[27] h-[26] flex flex-col items-center justify-center" />
                    </Link>
                    <Link
                      href={FooterSocMed.FtYoutube}
                      target="_blank"
                      className="flex flex-col items-center justify-center f-socmed__list__item f-socmed__list__item--yt"
                    >
                      <FaYoutube className="opacity-[40%] hover:opacity-[100%] text-white w-[32] h-[32] flex flex-col items-center justify-center" />
                    </Link>
                    <Link
                      href={FooterSocMed.FtTiktok}
                      target="_blank"
                      className="flex flex-col items-center justify-center f-socmed__list__item f-socmed__list__item--tt"
                    >
                      <FaTiktok className="opacity-[40%] hover:opacity-[100%] text-white w-[21] h-[24] flex flex-col items-center justify-center" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" relative z-10 flex flex-col w-full footer__bottom">
        <div className="container lg:pt-[2rem] lg:pb-[2rem] flex flex-row w-full mx-auto">
          <div className="w-1/6">
            <p className="text-white text-[14px] ">
              © {new Date().getFullYear()} PT. SECOM Indonesia
            </p>
          </div>
          <div className="w-5/6">
            <Link
              href="/privacy-policy"
              className="float-right text-white text-[14px]"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
