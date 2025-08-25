"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";

const AmApps = ({ translationKey }) => {
  const t = useTranslations();
  const AlarmApps = t.raw(translationKey);

  return (
    <section className="pb-10 lg:pb-14">
      <div className="container mx-auto relative flex flex-row justify-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex lg:flex-col justify-center lg:justify-start absolute left-[50%] lg:left-0 top-[4%] md:top-[3%] lg:top-[50%] transform translate-y-[-50%] translate-x-[-50%] lg:translate-x-[0%] z-[2] w-full lg:w-max"
        >
          <Image
            src={AlarmApps.image}
            alt="apps"
            width={540}
            height={345}
            quality={100}
            className="w-[330px] lg:w-[480px] 2xl:w-[540px] "
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:w-[90%] flex flex-col lg:flex-row relative z-[1] bg-navyblue lg:pt-11 pb-8 lg:pb-12 lg:pr-15"
        >
          <div className="w-full h-[160px] lg:w-[35%]"></div>
          <div className="w-full lg:w-[65%] flex flex-col px-6 lg:px-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-white text-[25px] lg:text-[35px] font-raleway font-medium"
            >
              {AlarmApps.title}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-white text-sm lg:text-base leading-[1.7] lg:leading-[1.5] mt-2 lg:mt-0 mb-4 lg:mb-8"
              dangerouslySetInnerHTML={{ __html: AlarmApps.desc }}
            />
            <ul className="grid grid-cols-12 gap-x-3 gap-y-3 lg:gap-x-4 lg:gap-y-5">
              {AlarmApps.items.map((item, index) => (
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="col-span-12 gap-3 lg:gap-4 md:col-span-6 flex flex-row items-center "
                  key={index}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={45}
                    height={37}
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-white text-xs lg:text-base font-medium">
                      {item.title}
                    </p>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                      className="text-white text-xs lg:text-[14px]"
                    />
                  </div>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-row mt-6 lg:mt-11 gap-3"
            >
              {AlarmApps.download.map((item, index) => (
                <Link key={index} href={item.link} target="_blank">
                  <Image
                    src={item.image}
                    alt="download button"
                    width={150}
                    height={50}
                  />
                </Link>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AmApps;
