"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useLocale } from "next-intl";

const LoginForm = () => {
  const locale = useLocale();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required !";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email !";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required !";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters !";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would typically make your API call
      // const response = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      console.log("Login attempt:", formData);

      // Handle success (redirect, store token, etc.)
      // router.push('/dashboard');
    } catch (error) {
      console.error("Login error:", error);
      setErrors({ submit: "Login failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full lg:p-8 form__wrap">
      <div className="h-full flex flex-col">
        {/* Email Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="relative overflow-hidden  flex flex-col mb-2 lg:mb-6 "
        >
          <div
            className={`relative flex flex-col rounded-[5px] overflow-hidden form__wrap__input ${
              errors.email ? "border-red-500" : ""
            } `}
          >
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`peer pb-2 px-3 pt-[20px] lg:pb-3 lg:px-4 lg:pt-[32px] text-navyblue text-[12px] lg:text-xl rounded-[3px] bg-white m-[3px] focus:outline-none`}
            />
            <label
              htmlFor="email"
              className={`text-navyblue text-[12px] lg:text-xl tracking-[2px] absolute top-1/2 transform -translate-y-1/2 pointer-events-none left-[18px] peer-focus:text-[8px] lg:peer-focus:text-[10px] peer-focus:top-[15px] lg:peer-focus:top-[23px] transition-all duration-200 ease-in-out ${
                formData.email
                  ? "!text-[8px] lg:!text-[10px] top-[15px] lg:top-[23px]"
                  : ""
              }`}
            >
              EMAIL
            </label>
          </div>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white text-xs mt-2 ml-1 bg-[#ff4444b9] max-w-max px-2"
            >
              {errors.email}
            </motion.p>
          )}
        </motion.div>

        {/* Password Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="relative overflow-hidden flex flex-col mb-2"
        >
          <div
            className={`relative flex flex-col rounded-[5px] overflow-hidden form__wrap__input ${
              errors.password ? "" : ""
            }`}
          >
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`peer pb-2 px-3 pt-[20px] lg:pb-3 lg:px-4 lg:pt-[32px] text-navyblue text-[12px] lg:text-xl rounded-[3px] bg-white m-[3px] focus:outline-none `}
            />
            <label
              htmlFor="password"
              className={`text-navyblue text-[12px] lg:text-xl tracking-[2px] absolute top-1/2 transform -translate-y-1/2 pointer-events-none left-[18px] peer-focus:text-[8px] lg:peer-focus:text-[10px] peer-focus:top-[15px] lg:peer-focus:top-[23px] transition-all duration-200 ease-in-out ${
                formData.password
                  ? "!text-[8px] lg:!text-[10px] top-[15px] lg:top-[23px]"
                  : ""
              }`}
            >
              {locale === "en" ? "PASSWORD" : "KATA SANDI"}
            </label>

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5 cursor-pointer" />
              ) : (
                <Eye className="w-5 h-5 cursor-pointer" />
              )}
            </button>
          </div>
          {errors.password && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white text-xs mt-2 ml-1 bg-[#ff4444b9] max-w-max px-4"
            >
              {errors.password}
            </motion.p>
          )}
        </motion.div>

        {/* Forgot Password Link */}
        <div className="text-left">
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-white text-sm lg:text-lg hover:text-blue-200 transition-colors duration-200 font-raleway"
            onClick={() => console.log("Forgot password clicked")}
          >
            {locale === "en" ? "Forgot password?" : "Lupa kata sandi?"}
          </motion.button>
        </div>

        {/* Submit Error */}
        {errors.submit && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm text-center"
          >
            {errors.submit}
          </motion.p>
        )}

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isLoading}
          onClick={handleSubmit}
          whileHover={{ scale: isLoading ? 1 : 1.02 }}
          whileTap={{ scale: isLoading ? 1 : 0.98 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className={`w-full py-3 lg:py-4 mt-5 lg:mt-9 rounded-[5px] tracking-[5px] font-raleway text-white text-sm lg:text-xl transition-all duration-200 ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-tosca hover:bg-teal-600 active:bg-teal-700"
          }`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>LOGGING IN...</span>
            </div>
          ) : locale === "en" ? (
            "LOGIN"
          ) : (
            "MASUK"
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default LoginForm;
