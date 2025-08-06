"use client";

import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CardStack = () => {
  // Sample testimonial data - replace with your own data
  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh. Ambitioni dedisse scripsisse iudicaretur. Curabitur blandit tempus ardua ridiculus sed magna.",
      name: "John Anderson",
      location: "New York, USA",
    },
    {
      id: 2,
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      name: "Sarah Johnson",
      location: "London, UK",
    },
    {
      id: 3,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      name: "Maria Garcia",
      location: "Madrid, Spain",
    },
    {
      id: 4,
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "David Chen",
      location: "Tokyo, Japan",
    },
    {
      id: 5,
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      name: "Emma Wilson",
      location: "Sydney, Australia",
    },
  ];

  const splideOptions = {
    type: "slide",
    perPage: 1,
    perMove: 1,
    gap: 0,
    focus: "center",
    pagination: false,
    arrows: false,
    autoWidth: false,
    speed: 800,
    easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  };

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Hear it from our customers
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Morbi odio eros,
            volutpat ut pharetra vitae, lobortis sed nibh. Ambitioni dedisse
            scripsisse iudicaretur. Curabitur blandit tempus ardua ridiculus sed
            magna.
          </p>
        </div>

        {/* Card Stack Slider */}
        <div className="relative">
          <style jsx>{`
            .card-stack-container {
              perspective: 1000px;
              height: 400px;
            }

            .card-stack-container .splide__slide {
              transform-style: preserve-3d;
              transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }

            .card-stack-container .splide__slide:not(.is-active) {
              transform: translateZ(-60px) scale(0.9);
              opacity: 0.7;
            }

            .card-stack-container .splide__slide.is-active {
              transform: translateZ(0) scale(1);
              opacity: 1;
              z-index: 10;
            }

            .card-stack-container
              .splide__slide:not(.is-active):nth-child(even) {
              transform: translateZ(-60px) scale(0.9) translateX(-20px);
            }

            .card-stack-container
              .splide__slide:not(.is-active):nth-child(odd) {
              transform: translateZ(-60px) scale(0.9) translateX(20px);
            }
          `}</style>

          <Splide
            hasTrack={false}
            options={splideOptions}
            className="card-stack-container"
          >
            {/* Custom Navigation Arrows */}
            <div className="splide__arrows">
              <button className="splide__arrow splide__arrow--prev absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white border-2 border-teal-400 hover:bg-teal-50 shadow-lg rounded-lg p-3 transition-all duration-200 hover:scale-110">
                <ChevronLeft className="w-5 h-5 text-teal-600" />
              </button>
              <button className="splide__arrow splide__arrow--next absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white border-2 border-teal-400 hover:bg-teal-50 shadow-lg rounded-lg p-3 transition-all duration-200 hover:scale-110">
                <ChevronRight className="w-5 h-5 text-teal-600" />
              </button>
            </div>

            <SplideTrack>
              {testimonials.map((testimonial) => (
                <SplideSlide key={testimonial.id}>
                  <div className="mx-8 h-full flex items-center justify-center">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full relative border-4 border-blue-600">
                      {/* Gradient accent bar */}
                      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-400 to-blue-500 rounded-t-xl"></div>

                      {/* Quote icon */}
                      <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                          </svg>
                        </div>
                      </div>

                      {/* Testimonial text */}
                      <p className="text-gray-700 leading-relaxed text-center mb-8 text-lg">
                        {testimonial.text}
                      </p>

                      {/* Customer info */}
                      <div className="text-center">
                        <h4 className="font-semibold text-teal-600 text-lg mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default CardStack;
