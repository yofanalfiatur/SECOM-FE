"use client";

import RadialGrid from "@/components/Elements/RadialGrid";
import { LoginDummy } from "@/constants-temp/data";
import React from "react";
import { motion } from "framer-motion";
import LoginForm from "@/components/Fragments/Login/LoginForm";

const LoginPage = () => {
  return (
    <>
      <motion.section
        animate={{ y: "0%", opacity: 1 }}
        initial={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden flex flex-col items-center justify-center hide__footer__top"
      >
        <RadialGrid />
        <div className="container pt-[166px] pb-[180px] mx-auto flex flex-col items-center justify-center relative z-10 ">
          <div className="w-full lg:w-1/2 overflow-hidden">
            <motion.h1
              animate={{ y: "0%", opacity: 1 }}
              initial={{ y: "100%", opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-[40px] text-white text-center font-medium font-raleway"
            >
              {LoginDummy.title}
            </motion.h1>

            <div className="w-full login__wrap-form">
              <LoginForm />
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default LoginPage;
