"use client";
import { HTop } from "../../../constants-temp/data";

import { useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const HeaderTop = () => {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  // Menentukan bahasa aktif berdasarkan pathname
  const activeLanguage = useMemo(() => {
    // Jika pathname dimulai dengan /id/, maka bahasa aktif adalah ID
    if (pathname.startsWith("/id/") || pathname === "/id") {
      return "ID";
    }
    // Selain itu, bahasa aktif adalah EN (default)
    return "EN";
  }, [pathname]);

  // Function untuk mengecek apakah language option aktif
  const isLanguageActive = (langCode) => {
    return activeLanguage === langCode;
  };

  return (
    <>
      <div className="pr-8 flex flex-row justify-end border-b-1 border-[#00529C33] gap-6 header__wrap-top">
        <div className="flex flex-row items-center">
          <ul
            className={`relative lang-list ${isHovered ? "expand-lang" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {HTop.language.map((item, index) => {
              // Ekstrak kode bahasa dari text atau tambahkan property langCode di data
              const langCode = item.text; // Asumsi item.text berisi 'EN' atau 'ID'

              return (
                <li
                  className={`lang-option ${
                    isLanguageActive(langCode) ? "active" : ""
                  }`}
                  key={index}
                >
                  <Link
                    href={item.href}
                    className="flex flex-row items-center gap-2 lang-link"
                  >
                    <Image
                      src={item.icon}
                      alt={item.text}
                      width={20}
                      height={14}
                    />
                    <span className="font-raleway text-[14px] text-darkblue">
                      {item.text}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.17202 6.41228L11.482 0.839283C11.5707 0.746294 11.6201 0.622753 11.6201 0.494282C11.6201 0.365812 11.5707 0.242271 11.482 0.149283L11.476 0.143282C11.433 0.0980473 11.3813 0.0620278 11.324 0.037414C11.2667 0.0128003 11.2049 0.000107252 11.1425 0.000107247C11.0801 0.000107241 11.0184 0.0128003 10.9611 0.037414C10.9037 0.0620278 10.852 0.0980473 10.809 0.143282L5.80902 5.39128L0.811022 0.143281C0.768049 0.0980464 0.716323 0.0620269 0.65899 0.0374131C0.601657 0.0127994 0.539916 0.00010632 0.477522 0.000106314C0.415129 0.000106309 0.353388 0.0127993 0.296055 0.0374131C0.238722 0.0620268 0.186996 0.0980463 0.144023 0.143281L0.138022 0.149282C0.0493773 0.24227 -7.38444e-05 0.365811 -7.38557e-05 0.494281C-7.38669e-05 0.622752 0.0493773 0.746293 0.138022 0.839282L5.44802 6.41228C5.49472 6.46129 5.55088 6.50031 5.61311 6.52697C5.67533 6.55363 5.74233 6.56738 5.81002 6.56738C5.87772 6.56738 5.94471 6.55363 6.00694 6.52697C6.06916 6.50031 6.12532 6.46129 6.17202 6.41228Z"
              fill="#132233"
            />
          </svg>
        </div>

        <Link
          href={HTop.login.href}
          className="flex flex-row  gap-2 lg:py-1 lg:px-[12px] items-center justify-center bg-tosca"
          target={HTop.login.target}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.2662 14.993H2.74152C1.68941 14.993 0.877396 14.1992 1.0153 13.1562L1.0951 12.5479C1.24 11.7079 2.00861 11.1794 2.84302 10.9981L7.9496 10.1H8.0504L13.157 10.9981C14.0054 11.1941 14.76 11.6932 14.9049 12.5479L14.9847 13.1639C15.1226 14.2069 14.3106 15 13.2585 15L13.2662 14.993ZM11.5001 4.5C11.5001 5.42826 11.1313 6.3185 10.4749 6.97487C9.81852 7.63125 8.92827 8 8 8C7.07173 8 6.18148 7.63125 5.52509 6.97487C4.8687 6.3185 4.49995 5.42826 4.49995 4.5C4.49995 3.57174 4.8687 2.6815 5.52509 2.02513C6.18148 1.36875 7.07173 1 8 1C8.92827 1 9.81852 1.36875 10.4749 2.02513C11.1313 2.6815 11.5001 3.57174 11.5001 4.5Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-white text-[13px] tracking-[2px] font-raleway leading-none">
            {HTop.login.text}
          </span>
        </Link>
      </div>
    </>
  );
};

export default HeaderTop;
