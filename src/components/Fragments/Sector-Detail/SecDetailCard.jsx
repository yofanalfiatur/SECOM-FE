import BackgroundDots from "@/components/Elements/BackgroundDots";
import ButtonPrimary from "@/components/Elements/ButtonPrimary";
import SliderBasic from "@/components/Elements/SliderBasic";
import useIsDesktop from "@/components/Hooks/useIsDesktop";
import { useTranslations } from "next-intl";
import Image from "next/image";

const SecDetailCard = ({ translationKey, secDetailCTA }) => {
  const t = useTranslations();
  const SecDetailCard = t.raw(translationKey);
  const SecDetailCTA = t.raw(secDetailCTA);
  const isDesktop = useIsDesktop();

  return (
    <section className="pt-8 lg:pt-19 pb-10 lg:pb-18 relative">
      <BackgroundDots
        dotSize={isDesktop ? 2.5 : 2}
        dotsX={isDesktop ? 35 : 15}
        dotsY={isDesktop ? 25 : 35}
      />
      <div className="container mx-auto flex flex-col items-center relative z-1">
        <h2 className="text-darkblue font-raleway font-normal text-[30px] lg:text-[40px] text-center leading-[1.3] lg:leading-[1.2]">
          {SecDetailCard.title}
        </h2>
        <p className="text-darkblue w-full lg:w-[50%] text-center text-sm lg:text-lg leading-[1.7] lg:leading-[1.5] mt-2 mb-6 lg:mb-12">
          {SecDetailCard.desc}
        </p>

        <div className="flex flex-col w-full abw-sustain__wrap-slider">
          <SliderBasic
            items={SecDetailCard.items}
            linkLabel={{ en: "See Details", id: "Lihat Detail" }}
          />
        </div>
      </div>

      <div className="container mt-18 mx-auto flex flex-col lg:flex-row lg:bg-navyblue relative z-1">
        <div className="w-full lg:w-[35%]">
          <Image
            src={SecDetailCTA.image}
            width={600}
            height={400}
            quality={100}
            alt="SecDetailCTA"
            className={`lg:[clip-path:polygon(0_0,89%_0,100%_100%,0%_100%)] w-full h-full object-cover aspect-[285/121] lg:aspect-[431/146]`}
          />
        </div>
        <div className="w-full lg:w-[41%] flex flex-col justify-center bg-navyblue px-5 lg:px-0 pt-3 lg:pt-0 pb-3 lg:pb-0">
          <h3 className="text-white font-raleway font-normal text-[20px] lg:text-[30px] lg:pl-10 leading-[1.7] lg:leading-[1.5] lg:max-w-[455px] ">
            {SecDetailCTA.title}
          </h3>
        </div>
        <div className="w-full lg:w-[24%] flex flex-col justify-center lg:items-end lg:pr-7 bg-navyblue px-5 lg:px-0 pb-6 lg:pb-0">
          <ButtonPrimary
            href={SecDetailCTA.btnCTA.href}
            target={SecDetailCTA.btnCTA.target}
            className="hover:bg-white hover:text-navyblue "
          >
            {SecDetailCTA.btnCTA.text}
          </ButtonPrimary>
        </div>
      </div>
    </section>
  );
};

export default SecDetailCard;
