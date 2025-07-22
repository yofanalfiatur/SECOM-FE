import { ContactPage } from "@/constants-temp/data";

import Image from "next/image";
// import Form from "next/form";

const InputForm = (props) => {
  const { children, type, placeholder, className } = props;
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[14px] text-darkblue font-open-sans">
        {children}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`border-2 border-[#00000022] pt-8 pb-2 px-4 ${className}`}
      />
    </div>
  );
};

const Contact = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center py-16 relative overflow-hidden">
        <Image
          src={ContactPage.photo}
          width={630}
          height={1091}
          alt="Contact"
          className="absolute w-full h-full lg:w-[45vw]  left-0 top-0 object-cover object-center"
        />

        <div className="container mx-auto flex flex-row justify-end">
          <div className="w-1/2">
            <h1 className="font-raleway text-darkblue text-[40px] font-medium mt-[2px] mb-2">
              {ContactPage.title}
            </h1>
            <p className="text-darkblue font-open-sans text-lg">
              {ContactPage.desc}
            </p>
            <p className="text-[14px] flex flex-row mb-6">
              <span className="text-red-500">* </span>Required
            </p>

            <div className="h-[800px] w-full contact__form bg-amber-200 mb-6">
              <form action="">
                <InputForm
                  type="text"
                  placeholder="Name"
                  className="text-[14px] text-darkblue font-open-sans"
                >
                  Name
                </InputForm>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
