"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Loader2 } from "lucide-react";

const LoginForm = () => {
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
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="w-full rounded-lg shadow-lg p-8 login__form"
    >
      <div className="space-y-6 h-full flex flex-col">
        {/* Email Field */}
        <div className="relative overflow-hidden rounded-[5px] flex flex-col login__wrap-input">
          <div
            className={`relative flex flex-col m-4 px-4 min-h-[77px] bg-gray-50 rounded-[5px] ${
              errors.email ? "border-red-500" : ""
            } `}
          >
            <label
              htmlFor="email"
              className="text-navyblue text-xl tracking-[2px]"
            >
              EMAIL
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border-1 text-navyblue text-xl`}
            />
          </div>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-xs ml-1"
            >
              {errors.email}
            </motion.p>
          )}
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full pl-12 pr-12 py-3 bg-gray-50 border-0 rounded-lg text-gray-900 placeholder-gray-400 text-sm font-medium tracking-wide focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                errors.password ? "ring-2 ring-red-500" : ""
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
          {errors.password && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-xs ml-1"
            >
              {errors.password}
            </motion.p>
          )}
        </div>

        {/* Forgot Password Link */}
        <div className="text-left">
          <button
            type="button"
            className="text-white text-sm hover:text-blue-200 transition-colors duration-200 font-medium"
            onClick={() => console.log("Forgot password clicked")}
          >
            Forgot password?
          </button>
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
          className={`w-full py-3 rounded-lg font-medium text-white text-sm tracking-wider transition-all duration-200 ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-teal-500 hover:bg-teal-600 active:bg-teal-700"
          }`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>LOGGING IN...</span>
            </div>
          ) : (
            "LOGIN"
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default LoginForm;
