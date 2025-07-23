"use client";
import React, { useState } from "react";

const TestimonialStackSlider = () => {
  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh. Ambitioni dedisse scripsisse iudicaretur. Curabitur blandit tempus ardua ridiculus sed magna.",
      name: "Nama Pelanggan, Usia",
      location: "Lokasi",
    },
    {
      id: 2,
      text: "Exceptional service and outstanding quality! This product has completely transformed how we approach our daily operations. The team's attention to detail and commitment to excellence is truly remarkable.",
      name: "Sarah Johnson, 34",
      location: "Jakarta",
    },
    {
      id: 3,
      text: "I've been using this service for over a year now, and I'm consistently impressed by the innovation and reliability. It's rare to find a company that truly delivers on their promises.",
      name: "Michael Chen, 28",
      location: "Surabaya",
    },
    {
      id: 4,
      text: "The customer support is phenomenal, and the product quality exceeds expectations. I would highly recommend this to anyone looking for a premium solution.",
      name: "Diana Putri, 41",
      location: "Bandung",
    },
    {
      id: 5,
      text: "What sets this apart is the seamless user experience and the continuous improvements they make. It's clear they listen to their customers and act on feedback.",
      name: "Ahmad Rahman, 29",
      location: "Yogyakarta",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [deltaX, setDeltaX] = useState(0);

  const nextSlide = () => {
    if (isAnimating || isDragging) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating || isDragging) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Touch/Mouse event handlers
  const handleStart = (clientX) => {
    if (isAnimating) return;
    setIsDragging(true);
    setStartX(clientX);
    setDeltaX(0);
  };

  const handleMove = (clientX) => {
    if (!isDragging || isAnimating) return;
    const delta = clientX - startX;
    setDeltaX(delta);
  };

  const handleEnd = () => {
    if (!isDragging || isAnimating) return;

    const threshold = 50; // Minimum swipe distance

    if (Math.abs(deltaX) > threshold) {
      setIsAnimating(true);

      if (deltaX > 0) {
        // Swipe right - go to previous
        setCurrentIndex(
          (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
      } else {
        // Swipe left - go to next
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }

      setTimeout(() => setIsAnimating(false), 500);
    }

    setIsDragging(false);
    setDeltaX(0);
  };

  // Mouse events
  const handleMouseDown = (e) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleEnd();
    }
  };

  // Touch events
  const handleTouchStart = (e) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  const getCardStyle = (index) => {
    const position =
      (index - currentIndex + testimonials.length) % testimonials.length;

    // Add drag offset to the front card
    const dragOffset = position === 0 && isDragging ? deltaX * 0.5 : 0;

    const styles = {
      0: {
        // Front card
        transform: `translateX(${dragOffset}px) translateY(0px) scale(1)`,
        zIndex: 30,
        opacity: isDragging ? Math.max(0.7, 1 - Math.abs(deltaX) / 300) : 1,
        filter: "brightness(1)",
      },
      1: {
        // Second card
        transform: "translateX(8px) translateY(12px) scale(0.96)",
        zIndex: 20,
        opacity: 0.85,
        filter: "brightness(0.92)",
      },
      2: {
        // Third card
        transform: "translateX(16px) translateY(24px) scale(0.92)",
        zIndex: 10,
        opacity: 0.7,
        filter: "brightness(0.84)",
      },
    };

    return (
      styles[position] || {
        transform: "translateX(24px) translateY(36px) scale(0.88)",
        zIndex: 1,
        opacity: 0.5,
        filter: "brightness(0.76)",
      }
    );
  };

  return (
    <div className="w-2/3 mx-auto px-4 py-16  min-h-screen">
      {/* Slider Container */}
      <div className="relative flex items-center justify-center">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className="absolute left-0 z-40 w-[36px] h-[36px] flex flex-col justify-center items-center bg-white shadow-lg hover:shadow-xl border-[1px] border-teal-500 text-teal-600 hover:bg-teal-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          aria-label="Previous testimonial"
        >
          <svg
            width="11"
            height="16"
            viewBox="0 0 11 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transform rotate-180 mx-auto relative left-[-1px]"
          >
            <path
              d="M2.14107 15.6761L11 7.99667L2.14107 0.317235C1.89961 0.108614 1.57565 -0.00542789 1.24045 0.000197756C0.905249 0.0058234 0.586268 0.130656 0.35368 0.347233C0.121092 0.56381 -0.00605115 0.854392 0.000221138 1.15505C0.00649247 1.45571 0.145666 1.74183 0.387124 1.95045L7.36576 7.99667L0.387123 14.0496C0.145665 14.2582 0.00649117 14.5443 0.000219778 14.8449C-0.00605257 15.1456 0.12109 15.4362 0.353678 15.6528C0.586267 15.8693 0.905247 15.9942 1.24045 15.9998C1.57565 16.0054 1.89961 15.8914 2.14107 15.6828L2.14107 15.6761Z"
              fill="#00AAAD"
            />
          </svg>
        </button>

        {/* Cards Container */}
        <div
          className="relative w-full max-w-2xl h-96 mx-16 flex justify-center items-center cursor-grab select-none"
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute transition-all ease-out ${
                isDragging ? "duration-0" : "duration-500"
              }`}
              style={{
                ...getCardStyle(index),
                width: "100%",
                height: "100%",
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) ${
                  getCardStyle(index).transform
                }`,
                pointerEvents: isDragging ? "none" : "auto",
              }}
            >
              <div className="w-full h-full bg-white shadow-xl border-4 border-teal-500 p-8 flex flex-col justify-between pointer-events-none">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="47"
                    viewBox="0 0 60 47"
                    fill="none"
                  >
                    <path
                      d="M21.7337 0L17.6471 22.3113H25.0774V47H0V21.9455L6.6873 0H21.7337ZM56.6564 0L52.5697 22.3113H60V47H34.9226V21.9455L41.6099 0H56.6564Z"
                      fill="#00AAAD"
                    />
                  </svg>
                </div>

                {/* Testimonial Text */}
                <div className="flex-1 flex items-center">
                  <p className="text-darkblue text-2xl leading-[1.2] text-center font-raleway">
                    {testimonial.text}
                  </p>
                </div>

                {/* Customer Info */}
                <div className="text-center mt-6 pt-6">
                  <h4 className="font-bold text-teal-600 text-lg mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-base">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="absolute right-0 z-40 w-[36px] h-[36px] flex flex-col justify-center items-center bg-white shadow-lg hover:shadow-xl border-[1px] border-teal-500 text-teal-600 hover:bg-teal-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          aria-label="Next testimonial"
        >
          <svg
            width="11"
            height="16"
            viewBox="0 0 11 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.14107 15.6761L11 7.99667L2.14107 0.317235C1.89961 0.108614 1.57565 -0.00542789 1.24045 0.000197756C0.905249 0.0058234 0.586268 0.130656 0.35368 0.347233C0.121092 0.56381 -0.00605115 0.854392 0.000221138 1.15505C0.00649247 1.45571 0.145666 1.74183 0.387124 1.95045L7.36576 7.99667L0.387123 14.0496C0.145665 14.2582 0.00649117 14.5443 0.000219778 14.8449C-0.00605257 15.1456 0.12109 15.4362 0.353678 15.6528C0.586267 15.8693 0.905247 15.9942 1.24045 15.9998C1.57565 16.0054 1.89961 15.8914 2.14107 15.6828L2.14107 15.6761Z"
              fill="#00AAAD"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialStackSlider;
