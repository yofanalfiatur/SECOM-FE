"use client";

import useActiveLanguage from "@/components/Hooks/useActiveLanguage";
import { HTop, MenuHeader } from "@/constants-temp/data";
import Image from "next/image";
import Link from "next/link";

const MenuMobile = (props) => {
  const { isLanguageActive } = useActiveLanguage();

  const { handleHamburgerClick } = props;

  return (
    <>
      {/* language Mobile */}
      <div className="flex flex-row border-b-[1px] border-[#13223333]  header__lang-md">
        {HTop.language.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            onClick={handleHamburgerClick}
            className={`w-1/2 border-r-[1px] border-[#13223333] relative py-5 header__menu__link flex flex-row items-center justify-center gap-2 ${
              isLanguageActive(item.text) ? "active-md" : ""
            }`}
          >
            <Image src={item.icon} alt={item.text} width={20} height={14} />
            <span className="text-navyblue uppercase tracking-[2px] font-raleway font-medium leading-none">
              {item.text}
            </span>
          </Link>
        ))}
      </div>

      {/* Menu Mobile */}
      <ul className="gap-x-6 flex flex-col lg:hidden header__menu-md">
        {MenuHeader.map(({ text, href, subMenu }, index) => (
          <li
            className="flex flex-col items-center justify-center header__menu-md__item group"
            key={index}
          >
            <Link
              href={href}
              onClick={handleHamburgerClick}
              className="relative py-5 header__menu__link flex flex-row items-center gap-2"
            >
              <span className="text-navyblue uppercase tracking-[2px] font-raleway font-medium leading-none">
                {text}
              </span>
              {subMenu && subMenu.length > 0 && (
                <svg
                  width="13"
                  height="7"
                  viewBox="0 0 13 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.86148 6.62859L12.1715 1.05559C12.2601 0.962603 12.3096 0.839061 12.3096 0.710591C12.3096 0.58212 12.2601 0.45858 12.1715 0.365592L12.1655 0.359591C12.1225 0.314356 12.0708 0.278336 12.0134 0.253723C11.9561 0.229109 11.8944 0.216416 11.832 0.216416C11.7696 0.216416 11.7078 0.229109 11.6505 0.253723C11.5932 0.278336 11.5414 0.314356 11.4985 0.359591L6.49847 5.60759L1.50048 0.35959C1.4575 0.314355 1.40578 0.278335 1.34844 0.253722C1.29111 0.229108 1.22937 0.216415 1.16698 0.216415C1.10458 0.216415 1.04284 0.229108 0.985509 0.253722C0.928176 0.278335 0.876449 0.314355 0.833476 0.35959L0.827475 0.365591C0.73883 0.458579 0.689379 0.582119 0.689379 0.71059C0.689379 0.83906 0.73883 0.962602 0.827475 1.05559L6.13747 6.62859C6.18417 6.6776 6.24034 6.71662 6.30256 6.74328C6.36479 6.76994 6.43178 6.78369 6.49948 6.78369C6.56717 6.78369 6.63416 6.76994 6.69639 6.74328C6.75861 6.71662 6.81478 6.6776 6.86148 6.62859Z"
                    fill="#00529C"
                  />
                </svg>
              )}
            </Link>
            {/* Submenu */}
            {subMenu && subMenu.length > 0 && (
              <ul className="header__menu-md__sub ease duration-300 bg-white shadow-lg flex flex-col  z-50">
                {subMenu.map(({ subMenuText, subMenuHref }, subIdx) => (
                  <li key={subIdx}>
                    <Link
                      onClick={handleHamburgerClick}
                      href={subMenuHref}
                      className="block px-4 py-2 text-navyblue hover:bg-tosca hover:text-white font-raleway"
                    >
                      {subMenuText}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuMobile;
