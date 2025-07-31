"use client";
import { AlarmBanner } from "@/constants-temp/data";
import { motion } from "framer-motion";

const AmBanner = () => {
  return (
    <section
      className="flex-col flex justify-end lg:justify-center py-6 min-h-[408px] bg-no-repeat bg-right overflow-hidden relative after:content-[''] after:absolute after:top-0 after:left-0 after:z-[1] after:w-full after:h-full  after:bg-[linear-gradient(0deg,_#00529C_30%,_rgba(0,82,156,0)_60.4%)] after:lg:bg-[linear-gradient(90deg,_#00529C_50%,_rgba(0,82,156,0)_72.4%)] am-banner"
      style={{ backgroundImage: `url('${AlarmBanner.background}')` }}
    >
      <div className="container mx-auto relative z-[2] flex flex-col">
        <h1 className="text-white font-raleway text-3xl lg:text-[50px] font-medium w-full lg:w-[35%] mb-9 lg:mb-6">
          {AlarmBanner.title[0]}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="relative after:content-[''] after:absolute after:bottom-[-4px] after:lg:bottom-[-8px] after:left-0 after:w-full after:h-[4px] after:bg-tosca"
          >
            {AlarmBanner.title[1]}
          </motion.span>
        </h1>
      </div>
    </section>
  );
};

export default AmBanner;
