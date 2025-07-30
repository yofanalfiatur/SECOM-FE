"use client";
import { ContactPage } from "@/constants-temp/data";

import ContactForm from "@/components/Fragments/Contact/ContactForm";

import { motion } from "framer-motion";

import Image from "next/image";
const Contact = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center pt-0 pb-5 lg:pt-15 lg:pb-15 relative overflow-hidden hide__footer__top">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col relative lg:absolute top-0 left-0 w-full h-auto lg:h-full lg:w-[45vw]"
        >
          <Image
            src={ContactPage.photo}
            width={630}
            height={1091}
            alt="Contact"
            className="w-full lg:h-full aspect-[32/22] lg:aspect-auto object-cover object-center"
          />
        </motion.div>

        <div className="container mx-auto flex flex-row justify-end">
          <div className="w-full lg:w-1/2 flex flex-col">
            <h1 className="font-raleway text-darkblue text-[25px] lg:text-[40px] font-medium mt-6  lg:mt-[2px] lg:mb-2">
              {ContactPage.title}
            </h1>
            <p className="text-darkblue font-open-sans text-sm lg:text-lg">
              {ContactPage.desc}
            </p>
            <p className="text-[14px] flex flex-row mb-6">
              <span className="text-red-500">* </span>Required
            </p>

            <div className="flex flex-col w-full mb-6 ct__wrap-form">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
