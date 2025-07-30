"use client";

import { FormValue } from "@/constants-temp/data";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Loader2 } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    company: "",
    howDidYouKnow: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Options for dropdowns

  const locationOptions = FormValue.locationType;

  const howDidYouKnowOptions = FormValue.howDidYouKnow;

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required !";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required !";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email !";
    }

    // Phone validation
    if (!formData.phone) {
      newErrors.phone = "Phone number is required !";
    } else if (!/^\d{10,15}$/.test(formData.phone.replace(/\s+/g, ""))) {
      newErrors.phone = "Please enter a valid phone number !";
    }

    // Location validation
    if (!formData.location) {
      newErrors.location = "Location is required !";
    }

    // Company validation
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required !";
    }

    // How did you know validation
    if (!formData.howDidYouKnow) {
      newErrors.howDidYouKnow = "Please select how you know us !";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required !";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters !";
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

      // Here you would typically make your API call to Laravel backend
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      console.log("Contact form submission:", formData);

      // Handle success
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        company: "",
        howDidYouKnow: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      setErrors({ submit: "Failed to send message. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto rounded-lg form__wrap">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="w-full mx-auto rounded-lg form__wrap"
      >
        <div className="h-full flex flex-col">
          {/* Name Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden flex flex-col mb-6"
          >
            <div
              className={`relative flex flex-col rounded-[5px] overflow-hidden ct__wrap__input form__wrap__input ${
                errors.name ? "border-red-500" : ""
              }`}
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`peer pt-[32px] pb-3 px-4 text-navyblue text-xl rounded-[3px] bg-white m-[3px] focus:outline-none`}
              />
              <label
                htmlFor="name"
                className={`text-navyblue text-xl tracking-[2px] absolute top-1/2 transform -translate-y-1/2 pointer-events-none left-[18px] peer-focus:text-[10px] peer-focus:top-[23px] transition-all duration-200 ease-in-out ${
                  formData.name ? "text-[10px] top-[23px]" : ""
                }`}
              >
                YOUR NAME<span className="text-red-500">*</span>
              </label>
            </div>
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white text-xs mt-2 ml-1 bg-[#ff4444b9] max-w-max px-2"
              >
                {errors.name}
              </motion.p>
            )}
          </motion.div>

          {/* Email and Phone Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative overflow-hidden flex flex-col"
            >
              <div
                className={`relative flex flex-col rounded-[5px] overflow-hidden ct__wrap__input form__wrap__input ${
                  errors.email ? "border-red-500" : ""
                }`}
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`peer pt-[32px] pb-3 px-4 text-navyblue text-xl rounded-[3px] bg-white m-[3px] focus:outline-none`}
                />
                <label
                  htmlFor="email"
                  className={`text-navyblue text-xl tracking-[2px] absolute top-1/2 transform -translate-y-1/2 pointer-events-none left-[18px] peer-focus:text-[10px] peer-focus:top-[23px] transition-all duration-200 ease-in-out ${
                    formData.email ? "text-[10px] top-[23px]" : ""
                  }`}
                >
                  EMAIL<span className="text-red-500">*</span>
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

            {/* Phone Field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative overflow-hidden flex flex-col"
            >
              <div
                className={`relative flex flex-col rounded-[5px] overflow-hidden ct__wrap__input form__wrap__input ${
                  errors.phone ? "border-red-500" : ""
                }`}
              >
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`peer pt-[32px] pb-3 px-4 text-navyblue text-xl rounded-[3px] bg-white m-[3px] focus:outline-none`}
                />
                <label
                  htmlFor="phone"
                  className={`text-navyblue text-xl tracking-[2px] absolute top-1/2 transform -translate-y-1/2 pointer-events-none left-[18px] peer-focus:text-[10px] peer-focus:top-[23px] transition-all duration-200 ease-in-out ${
                    formData.phone ? "text-[10px] top-[23px]" : ""
                  }`}
                >
                  PHONE NUMBER<span className="text-red-500">*</span>
                </label>
              </div>
              {errors.phone && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-white text-xs mt-2 ml-1 bg-[#ff4444b9] max-w-max px-2"
                >
                  {errors.phone}
                </motion.p>
              )}
            </motion.div>
          </div>

          {/* Location Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative overflow-hidden flex flex-col mb-6"
          >
            <div
              className={`relative flex flex-col rounded-[5px] overflow-hidden ct__wrap__input form__wrap__input ${
                errors.location ? "border-red-500" : ""
              }`}
            >
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={`peer pt-[32px] pb-3 px-4 text-navyblue text-xl rounded-[3px] bg-white m-[3px] focus:outline-none appearance-none cursor-pointer ${
                  !formData.location ? "text-gray-400" : ""
                }`}
              >
                {locationOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <label
                htmlFor="location"
                className={`text-navyblue text-xl tracking-[2px] absolute top-1/2 transform -translate-y-1/2 pointer-events-none left-[18px] peer-focus:text-[10px] peer-focus:top-[23px] transition-all duration-200 ease-in-out ${
                  formData.location ? "text-[10px] top-[23px]" : ""
                }`}
              >
                LOCATION TYPE<span className="text-red-500">*</span>
              </label>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
            {errors.location && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white text-xs mt-2 ml-1 bg-[#ff4444b9] max-w-max px-2"
              >
                {errors.location}
              </motion.p>
            )}
          </motion.div>

          {/* Company Name Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative overflow-hidden flex flex-col mb-6"
          >
            <div
              className={`relative flex flex-col rounded-[5px] overflow-hidden ct__wrap__input form__wrap__input ${
                errors.company ? "border-red-500" : ""
              }`}
            >
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={`peer pt-[32px] pb-3 px-4 text-navyblue text-xl rounded-[3px] bg-white m-[3px] focus:outline-none`}
              />
              <label
                htmlFor="company"
                className={`text-navyblue text-xl tracking-[2px] absolute top-1/2 transform -translate-y-1/2 pointer-events-none left-[18px] peer-focus:text-[10px] peer-focus:top-[23px] transition-all duration-200 ease-in-out ${
                  formData.company ? "text-[10px] top-[23px]" : ""
                }`}
              >
                COMPANY NAME<span className="text-red-500">*</span>
              </label>
            </div>
            {errors.company && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white text-xs mt-2 ml-1 bg-[#ff4444b9] max-w-max px-2"
              >
                {errors.company}
              </motion.p>
            )}
          </motion.div>

          {/* How Did You Know Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative overflow-hidden flex flex-col mb-6"
          >
            <div
              className={`relative flex flex-col rounded-[5px] overflow-hidden ct__wrap__input form__wrap__input ${
                errors.howDidYouKnow ? "border-red-500" : ""
              }`}
            >
              <select
                name="howDidYouKnow"
                value={formData.howDidYouKnow}
                onChange={handleChange}
                className={`peer pt-[32px] pb-3 px-4 text-navyblue text-xl rounded-[3px] bg-white m-[3px] focus:outline-none appearance-none cursor-pointer ${
                  !formData.howDidYouKnow ? "text-gray-400" : ""
                }`}
              >
                {howDidYouKnowOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <label
                htmlFor="howDidYouKnow"
                className={`text-navyblue text-xl tracking-[2px] absolute top-1/2 transform -translate-y-1/2 pointer-events-none left-[18px] peer-focus:text-[10px] peer-focus:top-[23px] transition-all duration-200 ease-in-out ${
                  formData.howDidYouKnow ? "text-[10px] top-[23px]" : ""
                }`}
              >
                HOW DID YOU KNOW SECOM?<span className="text-red-500">*</span>
              </label>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
            {errors.howDidYouKnow && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white text-xs mt-2 ml-1 bg-[#ff4444b9] max-w-max px-2"
              >
                {errors.howDidYouKnow}
              </motion.p>
            )}
          </motion.div>

          {/* Message Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="relative overflow-hidden flex flex-col mb-6"
          >
            <div
              className={`relative flex flex-col rounded-[5px] overflow-hidden ct__wrap__input form__wrap__input ${
                errors.message ? "border-red-500" : ""
              }`}
            >
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`peer pt-[32px] pb-3 px-4 text-navyblue text-xl rounded-[3px] bg-white m-[3px] focus:outline-none resize-none`}
              />
              <label
                htmlFor="message"
                className={`text-navyblue text-xl tracking-[2px] absolute top-[25px] pointer-events-none left-[18px] peer-focus:text-[10px] peer-focus:top-[15px] transition-all duration-200 ease-in-out ${
                  formData.message ? "text-[10px] top-[23px]" : ""
                }`}
              >
                MESSAGE<span className="text-red-500">*</span>
              </label>
            </div>
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white text-xs mt-2 ml-1 bg-[#ff4444b9] max-w-max px-2"
              >
                {errors.message}
              </motion.p>
            )}
          </motion.div>

          {/* Submit Error */}
          {errors.submit && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm text-center mb-4"
            >
              {errors.submit}
            </motion.p>
          )}

          {/* Submit Error */}
          {errors.submit && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm text-center mb-4"
            >
              {errors.submit}
            </motion.p>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: isLoading ? 1 : 1.02 }}
            whileTap={{ scale: isLoading ? 1 : 0.98 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className={`cursor-pointer w-full py-4 mt-4 rounded-[5px] tracking-[5px] font-raleway text-white text-xl transition-all duration-200 ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-tosca hover:bg-teal-600 active:bg-teal-700"
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>SENDING MESSAGE...</span>
              </div>
            ) : (
              "SEND MESSAGE"
            )}
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
