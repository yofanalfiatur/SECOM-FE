"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRouter, usePathname } from "next/navigation";

const ContactForm = () => {
  const t = useTranslations();
  const FormValue = t.raw("FormValue");
  const router = useRouter();
  const pathname = usePathname();

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
  const [isSent, setIsSent] = useState(false);

  const locationOptions = FormValue.locationType;
  const howDidYouKnowOptions = FormValue.howDidYouKnow;

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required !";
    if (!formData.email) {
      newErrors.email = "Email is required !";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email !";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required !";
    } else if (!/^\d{8,15}$/.test(formData.phone.replace(/\s+/g, ""))) {
      newErrors.phone = "Please enter a valid phone number !";
    }
    if (!formData.location) newErrors.location = "Location is required !";
    if (!formData.company.trim())
      newErrors.company = "Company name is required !";
    if (!formData.howDidYouKnow)
      newErrors.howDidYouKnow = "Please select how you know us !";
    if (!formData.message.trim()) newErrors.message = "Message is required !";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setIsSent(false);

    try {
      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        { ...formData },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (res.status === 200) {
        setIsSent(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          company: "",
          howDidYouKnow: "",
          message: "",
        });

        setTimeout(() => {
          if (pathname.startsWith("/en")) {
            router.push("/en/thankyou");
          } else {
            router.push("/thankyou");
          }
        }, 500);
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setErrors({ submit: "Failed to send message. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  console.log("SERVICE ID:", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);

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
            className="relative overflow-hidden flex flex-col mb-3 lg:mb-6"
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
                className={`peer pb-2 px-3 pt-[20px] lg:pb-3 lg:px-4 lg:pt-[32px] text-navyblue text-[12px] lg:text-xl rounded-[3px] bg-white m-[3px] focus:outline-none`}
              />
              <label
                htmlFor="name"
                className={`text-navyblue text-[12px] lg:text-xl tracking-[2px] absolute top-1/2 transform -translate-y-1/2 pointer-events-none left-[18px] peer-focus:text-[8px] lg:peer-focus:text-[10px] peer-focus:top-[15px] lg:peer-focus:top-[23px] transition-all duration-200 ease-in-out ${
                  formData.name
                    ? "!text-[8px] lg:!text-[10px] top-[15px] lg:top-[23px]"
                    : ""
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6 mb-3 lg:mb-6">
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
                  className={`peer pb-2 px-3 pt-[20px] lg:pb-3 lg:px-4 lg:pt-[32px] text-navyblue text-[12px] lg:text-xl rounded-[3px] bg-white m-[3px] focus:outline-none`}
                />
                <label
                  htmlFor="phone"
                  className={`text-navyblue text-[12px] lg:text-xl tracking-[2px] absolute top-1/2 transform -translate-y-1/2 pointer-events-none left-[18px] peer-focus:text-[8px] lg:peer-focus:text-[10px] peer-focus:top-[15px] lg:peer-focus:top-[23px] transition-all duration-200 ease-in-out ${
                    formData.phone
                      ? "!text-[8px] lg:!text-[10px] top-[15px] lg:top-[23px]"
                      : ""
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
            className="relative overflow-hidden flex flex-col mb-3 lg:mb-6"
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
                className={`peer pb-2 px-3 pt-[20px] lg:pb-3 lg:px-4 lg:pt-[32px] text-navyblue text-[12px] lg:text-xl rounded-[3px] bg-white m-[3px] focus:outline-none appearance-none cursor-pointer ${
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
                className={`text-navyblue text-[12px] lg:text-xl tracking-[2px] absolute top-1/2 transform -translate-y-1/2 pointer-events-none left-[18px] peer-focus:text-[8px] lg:peer-focus:text-[10px] peer-focus:top-[15px] lg:peer-focus:top-[23px] transition-all duration-200 ease-in-out ${
                  formData.location
                    ? "!text-[8px] lg:!text-[10px] top-[15px] lg:top-[23px]"
                    : ""
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
            className="relative overflow-hidden flex flex-col mb-3 lg:mb-6"
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
                className={`peer pb-2 px-3 pt-[20px] lg:pb-3 lg:px-4 lg:pt-[32px] text-navyblue text-[12px] lg:text-xl rounded-[3px] bg-white m-[3px] focus:outline-none`}
              />
              <label
                htmlFor="company"
                className={`text-navyblue text-[12px] lg:text-xl tracking-[2px] absolute top-1/2 transform -translate-y-1/2 pointer-events-none left-[18px] peer-focus:text-[8px] lg:peer-focus:text-[10px] peer-focus:top-[15px] lg:peer-focus:top-[23px] transition-all duration-200 ease-in-out ${
                  formData.company
                    ? "!text-[8px] lg:!text-[10px] top-[15px] lg:top-[23px]"
                    : ""
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
            className="relative overflow-hidden flex flex-col mb-3 lg:mb-6"
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
                className={`peer pb-2 px-3 pt-[20px] lg:pb-3 lg:px-4 lg:pt-[32px] text-navyblue text-[12px] lg:text-xl rounded-[3px] bg-white m-[3px] focus:outline-none appearance-none cursor-pointer ${
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
                className={`text-navyblue text-[12px] lg:text-xl tracking-[2px] absolute top-1/2 transform -translate-y-1/2 pointer-events-none left-[18px] peer-focus:text-[8px] lg:peer-focus:text-[10px] peer-focus:top-[15px] lg:peer-focus:top-[23px] transition-all duration-200 ease-in-out ${
                  formData.howDidYouKnow
                    ? "!text-[8px] lg:!text-[10px] top-[15px] lg:top-[23px]"
                    : ""
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
            className="relative overflow-hidden flex flex-col mb-3 lg:mb-6"
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
                className={`peer pb-2 px-3 pt-[32px] lg:pb-3 lg:px-4 lg:pt-[35px] text-navyblue text-[12px] lg:text-xl rounded-[3px] bg-white m-[3px] focus:outline-none`}
              />
              <label
                htmlFor="message"
                className={`text-navyblue text-[12px] lg:text-xl tracking-[2px] absolute pt-[12px] lg:pt-[17px] pointer-events-none w-[98%] left-[3px] top-[3px] pl-[16px] pb-1 rounded-[5px] peer-focus:text-[8px] lg:peer-focus:text-[10px] peer-focus:pt-[12px] lg:peer-focus:pt-[17px] transition-all duration-200 ease-in-out bg-white ${
                  formData.message
                    ? "!text-[8px] lg:!text-[10px] pt-[12px] lg:pt-[17px]"
                    : ""
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

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isLoading}
            className="cursor-pointer w-full py-3 lg:py-4 mt-1 lg:mt-4 rounded-[5px] tracking-[5px] font-raleway text-white text-sm lg:text-xl transition-all duration-200 bg-tosca hover:bg-teal-600 active:bg-teal-700 uppercase"
          >
            {isLoading ? (
              <motion.div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : isSent ? (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                ✅ {FormValue.textBtnSuccess}
              </motion.span>
            ) : (
              FormValue.textBtnSend
            )}
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
