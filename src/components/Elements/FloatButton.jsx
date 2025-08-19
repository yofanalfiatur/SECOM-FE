import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const FloatButton = () => {
  const t = useTranslations();
  const floatChat = t.raw("floatChat");
  const [isOpen, setIsOpen] = useState(false);

  const toggleFloatButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex flex-col fixed z-[100] bottom-[30px] right-[30px] float-button">
        <div
          className={`flex flex-col float-list transition-all duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <Link
            href={`https://wa.me/${floatChat.whatsapp}`}
            target="_blank"
            className={`flex flex-row items-center float-wa float-item absolute right-[4px] lg:right-[9px] gap-4 cursor-pointer group transition-all ease duration-300 ${
              isOpen ? "top-[-145px]" : "top-[-90]"
            }`}
          >
            <div className="shadow-[0px_4px_10px_0px_#0000001A] bg-white flex flex-col items-center justify-center float-text rounded-[5px] relative right-[-10px] opacity-0 invisible transition-all ease duration-300 group-hover:opacity-100 group-hover:visible group-hover:right-0">
              <p className="uppercase font-raleway font-normal text-navyblue tracking-[1px] leading-[1] px-2 py-2 text-xs">
                Whatsapp
              </p>
              <div
                style={{ clipPath: "polygon(0 0, 0% 100%, 100% 50%)" }}
                className="bg-white w-[17px] h-[17px] absolute top-[-2px] right-[-4px] transform translate-1/2"
              ></div>
            </div>
            <div className="bg-tosca w-[34px] h-[34px] flex flex-col items-center justify-center rounded-full">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 2.91005C16.0831 1.98416 14.991 1.25002 13.7875 0.750416C12.584 0.250812 11.2931 -0.00426317 9.99 5.38951e-05C4.53 5.38951e-05 0.0800002 4.45005 0.0800002 9.91005C0.0800002 11.6601 0.54 13.3601 1.4 14.8601L0 20.0001L5.25 18.6201C6.7 19.4101 8.33 19.8301 9.99 19.8301C15.45 19.8301 19.9 15.3801 19.9 9.92005C19.9 7.27005 18.87 4.78005 17 2.91005ZM9.99 18.1501C8.51 18.1501 7.06 17.7501 5.79 17.0001L5.49 16.8201L2.37 17.6401L3.2 14.6001L3 14.2901C2.17755 12.9771 1.74092 11.4593 1.74 9.91005C1.74 5.37005 5.44 1.67005 9.98 1.67005C12.18 1.67005 14.25 2.53005 15.8 4.09005C16.5676 4.85392 17.1759 5.7626 17.5896 6.76338C18.0033 7.76417 18.2142 8.83714 18.21 9.92005C18.23 14.4601 14.53 18.1501 9.99 18.1501ZM14.51 11.9901C14.26 11.8701 13.04 11.2701 12.82 11.1801C12.59 11.1001 12.43 11.0601 12.26 11.3001C12.09 11.5501 11.62 12.1101 11.48 12.2701C11.34 12.4401 11.19 12.4601 10.94 12.3301C10.69 12.2101 9.89 11.9401 8.95 11.1001C8.21 10.4401 7.72 9.63005 7.57 9.38005C7.43 9.13005 7.55 9.00005 7.68 8.87005C7.79 8.76005 7.93 8.58005 8.05 8.44005C8.17 8.30005 8.22 8.19005 8.3 8.03005C8.38 7.86005 8.34 7.72005 8.28 7.60005C8.22 7.48005 7.72 6.26005 7.52 5.76005C7.32 5.28005 7.11 5.34005 6.96 5.33005H6.48C6.31 5.33005 6.05 5.39005 5.82 5.64005C5.6 5.89005 4.96 6.49005 4.96 7.71005C4.96 8.93005 5.85 10.1101 5.97 10.2701C6.09 10.4401 7.72 12.9401 10.2 14.0101C10.79 14.2701 11.25 14.4201 11.61 14.5301C12.2 14.7201 12.74 14.6901 13.17 14.6301C13.65 14.5601 14.64 14.0301 14.84 13.4501C15.05 12.8701 15.05 12.3801 14.98 12.2701C14.91 12.1601 14.76 12.1101 14.51 11.9901Z"
                  fill="white"
                />
              </svg>
            </div>
          </Link>

          <Link
            href={`mailto:${floatChat.email}`}
            target="_blank"
            className={`flex flex-row items-center float-email float-item absolute right-[4px] lg:right-[9px] gap-4 cursor-pointer group transition-all ease duration-300 ${
              isOpen ? "top-[-100px]" : "top-[-70]"
            }`}
          >
            <div className="shadow-[0px_4px_10px_0px_#0000001A] bg-white flex flex-col items-center justify-center float-text rounded-[5px] relative right-[-10px] opacity-0 invisible transition-all ease duration-300 group-hover:opacity-100 group-hover:visible group-hover:right-0">
              <p className="uppercase font-raleway font-normal text-navyblue tracking-[1px] leading-[1] px-2 py-2 text-xs">
                EMAIL
              </p>
              <div
                style={{ clipPath: "polygon(0 0, 0% 100%, 100% 50%)" }}
                className="bg-white w-[17px] h-[17px] absolute top-[-2px] right-[-4px] transform translate-1/2"
              ></div>
            </div>
            <div className="bg-tosca w-[34px] h-[34px] flex flex-col items-center justify-center rounded-full">
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.8 14C1.305 14 0.8814 13.8288 0.5292 13.4864C0.177 13.144 0.0006 12.7318 0 12.25V1.75C0 1.26875 0.1764 0.856916 0.5292 0.5145C0.882 0.172083 1.3056 0.000583333 1.8 0H16.2C16.695 0 17.1189 0.1715 17.4717 0.5145C17.8245 0.8575 18.0006 1.26933 18 1.75V12.25C18 12.7312 17.8239 13.1434 17.4717 13.4864C17.1195 13.8294 16.6956 14.0006 16.2 14H1.8ZM9 7.875L1.8 3.5V12.25H16.2V3.5L9 7.875ZM9 6.125L16.2 1.75H1.8L9 6.125ZM1.8 3.5V1.75V12.25V3.5Z"
                  fill="white"
                />
              </svg>
            </div>
          </Link>
        </div>

        {/* Float Default Button */}
        <div
          className={`bg-tosca w-[42px] h-[42px] lg:w-[52px] lg:h-[52px] flex flex-col items-center justify-center rounded-full cursor-pointer absolute bottom-0 right-0 shadow-[0px_4px_10px_0px_#0000001A] float-default transition-all duration-300 ${
            isOpen ? "opacity-0 invisible" : "opacity-100 visible"
          }`}
          onClick={toggleFloatButton}
        >
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="scale-85 lg:scale-100"
          >
            <path
              d="M8.62129 11.4147H20.3845M8.62129 17.5853H17.0103M14.5029 28C17.4355 27.9993 20.2882 27.0438 22.6295 25.2778C24.9707 23.5119 26.6733 21.0315 27.4797 18.2119C28.286 15.3924 28.1523 12.3869 27.0987 9.65006C26.0452 6.91323 24.1291 4.5939 21.6402 3.04282C19.1514 1.49175 16.2251 0.793294 13.304 1.05309C10.383 1.31289 7.62591 2.51682 5.44986 4.48278C3.27381 6.44875 1.79712 9.06984 1.2431 11.9496C0.689087 14.8295 1.08789 17.8114 2.37919 20.4444C2.53681 20.7654 2.58935 21.1274 2.50908 21.4747L1.31816 26.6354C1.28459 26.7802 1.28844 26.9312 1.32935 27.0741C1.37027 27.2171 1.4469 27.3472 1.55202 27.4523C1.65714 27.5575 1.7873 27.6341 1.93023 27.675C2.07316 27.7159 2.22415 27.7198 2.36897 27.6862L7.52816 26.4938C7.87649 26.4175 8.24048 26.4639 8.55854 26.6252C10.4082 27.5335 12.4422 28.0039 14.5029 28Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Float Close Button */}
        <div
          className={`bg-white w-[42px] h-[42px] lg:w-[52px] lg:h-[52px] flex flex-col items-center justify-center rounded-full cursor-pointer absolute bottom-0 right-0 shadow-[0px_4px_10px_0px_#0000001A] float-close transition-all duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={toggleFloatButton}
        >
          <svg
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="scale-85 lg:scale-100"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.3818 13.4027L19.5523 21.5733C19.8247 21.8363 20.1896 21.9819 20.5683 21.9786C20.947 21.9753 21.3092 21.8235 21.577 21.5557C21.8448 21.2879 21.9967 20.9256 22 20.5469C22.0033 20.1682 21.8577 19.8034 21.5946 19.531L13.4241 11.3604L21.5946 3.1899C21.8577 2.9175 22.0033 2.55266 22 2.17396C21.9967 1.79526 21.8448 1.43301 21.577 1.16522C21.3092 0.897431 20.947 0.745533 20.5683 0.742242C20.1896 0.738951 19.8247 0.884531 19.5523 1.14763L11.3818 9.31817L3.21124 1.14763C2.93761 0.891035 2.57489 0.750965 2.19982 0.757056C1.82475 0.763146 1.46677 0.914919 1.20162 1.18026C0.936465 1.4456 0.784945 1.80369 0.77912 2.17876C0.773295 2.55383 0.913621 2.91645 1.17041 3.1899L9.3395 11.3604L1.16896 19.531C1.03101 19.6642 0.920983 19.8236 0.845287 19.9998C0.769592 20.176 0.729748 20.3655 0.728082 20.5573C0.726415 20.7491 0.762959 20.9393 0.835581 21.1168C0.908203 21.2943 1.01545 21.4555 1.15106 21.5912C1.28667 21.7268 1.44793 21.834 1.62544 21.9066C1.80294 21.9793 1.99312 22.0158 2.1849 22.0141C2.37668 22.0125 2.5662 21.9726 2.74242 21.8969C2.91863 21.8212 3.078 21.7112 3.21124 21.5733L11.3818 13.4027Z"
              fill="#7D7D7D"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default FloatButton;
