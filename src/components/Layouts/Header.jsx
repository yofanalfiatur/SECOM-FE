import { MenuType, MenuHeader, HeaderButton } from "../../constants-temp/data";

import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "../Elements/ButtonPrimary";

const Header = () => {
  const { HeaderBtnText, HeaderBtnHref, HeaderBtnTarget } = HeaderButton;
  return (
    <>
      <header className="flex flex-col items-center justify-center max-w-screen z-[999] top-0 sticky bg-white border-b-1 border-[#00529C33] header ">
        <div className=" w-full max-w-screen flex flex-row items-center justify-between header__wrap">
          <div className="w-[220px] items-center flex flex-col justify-center header__logo border-r-1 border-[#00529C33] h-[-webkit-fill-available]">
            <Link
              href={"/"}
              className="flex flex-row items-center justify-center gap-2"
            >
              <Image
                src="/img/secom-logo-fix.png"
                alt="SECOM Logo"
                width={148}
                height={37}
              />
            </Link>
          </div>
          <div className="w-[90%] flex flex-col justify-end header__wrap-right">
            <div className="pr-8 flex flex-row justify-end border-b-1 border-[#00529C33] header__wrap-top">
              <div className="flex flex-row">
                <ul className="lang-list">
                  <li className="lang-option active">
                    <Link href="/#" className="flex flex-row  lang-link">
                      <Image
                        src="/img/flag-en.svg"
                        alt="English"
                        width={20}
                        height={14}
                      />
                      <span>EN</span>
                    </Link>
                  </li>
                  <li className="lang-option">
                    <Link href="/#" className="flex flex-row  lang-link">
                      <Image
                        src="/img/flag-id.svg"
                        alt="Indonesian"
                        width={20}
                        height={14}
                      />
                      <span>ID</span>
                    </Link>
                  </li>
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
                href={"#/"}
                className="flex flex-row  gap-2 lg:py-2 lg:px-2.5 items-center justify-center bg-navyblue"
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
                  SMART SECURITY LOGIN
                </span>
              </Link>
            </div>
            <nav className="pl-6 pr-8 flex flex-row justify-between items-center border-x-1 border-[#ffffff33] header__nav">
              <ul className=" flex flex-row gap-10 header__type">
                {MenuType.map(({ icon, text, href }, index) => (
                  <li className="header__type__item" key={index}>
                    <Link
                      href={`${href}`}
                      className=" flex flex-row py-5 gap-2 items-center justify-center header__type__link"
                    >
                      <Image src={icon} alt="Business" width={20} height={20} />
                      <span className="text-navyblue header__type__text uppercase tracking-[2px] font-raleway leading-none">
                        {text}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              {/* Menu Desktop */}
              <div className="flex flex-row gap-4 items-center">
                <ul className="gap-x-4 flex flex-row header__menu">
                  {MenuHeader.map(({ text, href, subMenu }, index) => (
                    <li
                      className="flex flex-col items-center justify-center header__menu__item group"
                      key={index}
                    >
                      <Link
                        href={href}
                        className="relative py-5 header__menu__link flex flex-row items-center gap-2"
                      >
                        <span className="text-navyblue uppercase tracking-[2px] font-raleway leading-none">
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
                        <ul className="header__menu__sub top-full absolute ease duration-300 bg-white shadow-lg flex invisible opacity-0  flex-col group-hover:visible group-hover:opacity-100 z-50 min-w-[180px]">
                          {subMenu.map(
                            ({ subMenuText, subMenuHref }, subIdx) => (
                              <li key={subIdx}>
                                <Link
                                  href={subMenuHref}
                                  className="block px-4 py-2 text-navyblue hover:bg-tosca hover:text-white font-raleway"
                                >
                                  {subMenuText}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
                <ButtonPrimary
                  href={HeaderBtnHref}
                  target={HeaderBtnTarget}
                  className="!text-[12px] !px-6 !py-3.5"
                >
                  {HeaderBtnText}
                </ButtonPrimary>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
