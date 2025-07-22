import Link from "next/link";
import { ErrorPage } from "@/constants-temp/data";
import Image from "next/image";
import ButtonPrimary from "@/components/Elements/ButtonPrimary";

const NotFound = () => {
  return (
    <>
      <section className="relative w-full p-36 h-full lg:min-h-[700px] mt-10 mb-8">
        <Image
          src="/img/404.svg"
          alt="Error Page"
          width={1000}
          height={1000}
          className="w-screen h-full absolute top-0 left-0 transform-x-[50%]"
        />
        <div className="container relative mx-auto flex flex-col gap-6 justify-center items-center">
          <h1 className="text-6xl font-semibold font-open-sans text-center lg:w-[46%] leading-[1.2] mt-10">
            {ErrorPage.title}
          </h1>
          <p className="text-center text-lg lg:w-[36%] mb-1">
            {ErrorPage.description}
          </p>
          <ButtonPrimary
            href={ErrorPage.buttonCTA.href}
            className="hover:text-sky-400"
            target={ErrorPage.buttonCTA.target}
          >
            {ErrorPage.buttonCTA.text}
          </ButtonPrimary>
        </div>
      </section>
    </>
  );
};
export default NotFound;
