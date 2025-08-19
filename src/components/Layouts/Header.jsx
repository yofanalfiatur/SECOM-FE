"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import HeaderTop from "../Fragments/Header/HeaderTop";
import MenuDesktop from "../Fragments/Header/MenuDesktop";
import MenuMobile from "../Fragments/Header/MenuMobile";
import useIsDesktop from "../Hooks/useIsDesktop";

const Header = () => {
  const isDesktop = useIsDesktop();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsMenuOpen((prev) => !prev);
  };
  // 👇 Disable body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="flex flex-col items-center justify-center max-w-screen z-[999] top-0 sticky bg-white shadow-sm lg:shadow-none lg:border-b-1 lg:border-[#00529C33] h-[60px] lg:h-[95px] header">
        <div className="w-full h-full max-w-screen flex flex-row items-center justify-between header__wrap">
          <div className="w-[220px] pl-[1rem] lg:pl-0 items-start lg:items-center flex flex-col justify-center header__logo lg:border-r-1 border-[#00529C33] h-full">
            <Link
              href="/"
              className="flex flex-row items-center justify-center gap-2"
            >
              <Image
                src="/img/secom-logo-fix.png"
                alt="SECOM Logo"
                width={148}
                height={37}
                className="w-[105px] lg:w-[148px] object-contain"
              />
            </Link>
          </div>
          {isDesktop ? (
            <>
              <div className="w-[90%] hidden lg:flex flex-col justify-end h-full header__wrap-right">
                <HeaderTop />
                <MenuDesktop />
              </div>
            </>
          ) : (
            <>
              {/* Mobile Hamburger Button */}
              <div className="lg:hidden w-max h-auto pr-[2rem] header__btn-md">
                <div
                  className={`hamburger hover:cursor-pointer ${
                    isMenuOpen ? "active" : ""
                  }`}
                  id="hamburger"
                  onClick={handleHamburgerClick}
                >
                  <span className="line w-[20px] h-[2px] bg-black block my-[5px] mx-auto transition-all duration-300 ease-in-out"></span>
                  <span className="line w-[20px] h-[2px] bg-black block my-[5px] mx-auto transition-all duration-300 ease-in-out"></span>
                  <span className="line w-[20px] h-[2px] bg-black block my-[5px] mx-auto transition-all duration-300 ease-in-out"></span>
                </div>
              </div>
            </>
          )}
        </div>
      </header>

      {!isDesktop && (
        <>
          {/* Offcanvas Mobile Menu */}

          <div
            className={`${
              isMenuOpen
                ? "top-0 visible opacity-100"
                : "top-[-100%] invisible opacity-0"
            } lg:hidden flex-col pt-[60px] pb-[100px] fixed left-0 w-screen h-screen max-h-screen overflow-scroll z-[99] bg-white offcanvas transition-all duration-300 ease-in-out`}
          >
            <MenuMobile handleHamburgerClick={handleHamburgerClick} />
          </div>
        </>
      )}
    </>
  );
};

export default Header;
