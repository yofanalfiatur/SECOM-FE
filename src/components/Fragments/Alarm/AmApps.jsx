"use client";

import { AlarmApps } from "@/constants-temp/data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const AmApps = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto relative flex flex-row justify-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex lg:flex-col justify-center lg:justify-start absolute left-[50%] lg:left-0 top-[4%] lg:top-[50%] transform translate-y-[-50%] translate-x-[-50%] lg:translate-x-[0%] z-[2] w-full lg:w-max"
        >
          <Image
            src={AlarmApps.image}
            alt="apps"
            width={477}
            height={477}
            className="w-[240px] md:w-[340px] lg:w-[477px] "
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:w-[90%] flex flex-col lg:flex-row relative z-[1] bg-navyblue lg:pt-11 pb-8 lg:pb-12 lg:pr-10"
        >
          <div className="w-full h-[160px] lg:w-[35%]"></div>
          <div className="w-full lg:w-[65%] flex flex-col px-6 lg:px-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-white text-[25px] lg:text-[40px] font-raleway font-medium"
            >
              {AlarmApps.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-white text-sm lg:text-lg leading-[1.7] lg:leading-[1.5] mt-2 lg:mt-0 mb-4 lg:mb-8"
            >
              {AlarmApps.desc}
            </motion.p>
            <ul className="grid grid-cols-12 gap-x-3 gap-y-3 lg:gap-x-8 lg:gap-y-8">
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
                  <p className="text-white text-xs lg:text-[16px]">
                    {item.title}
                  </p>
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
                <Link key={index} href={item.link}>
                  <Image src={item.image} width={120} height={40} />
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
