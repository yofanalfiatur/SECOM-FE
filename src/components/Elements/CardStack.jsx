"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

// Add your image URLs here
const images = [
  "/img/temp/alarm-banner-bg-mobile.jpg",
  "/img/temp/alarm-banner-bg-mobile.jpg",
  "/img/temp/alarm-banner-bg-mobile.jpg",
];

const MAX_VISIBLE = 3; // Show top 3 cards

export default function CardStack() {
  const [cards, setCards] = useState(images);

  const next = () => {
    const [first, ...rest] = cards;
    setCards([...rest, first]); // Move top to back
  };

  const prev = () => {
    const last = cards[cards.length - 1];
    setCards([last, ...cards.slice(0, cards.length - 1)]); // Move last to front
  };

  return (
    <div className="relative w-full max-w-md mx-auto py-12">
      <div className="relative h-[350px] w-full">
        {cards.slice(0, MAX_VISIBLE).map((src, i) => {
          const offset = MAX_VISIBLE - i - 1;

          return (
            <motion.div
              key={src}
              className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden shadow-xl bg-white"
              style={{
                zIndex: 10 - offset,
              }}
              animate={{
                scale: 1 - offset * 0.05,
                y: offset * 20,
                opacity: 1 - offset * 0.1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              <Image
                src={src}
                alt={`Slide ${i}`}
                fill
                className="object-cover"
              />
            </motion.div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center gap-6 mt-10">
        <button
          onClick={prev}
          className="p-2 bg-white rounded-full shadow hover:scale-110 transition"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <button
          onClick={next}
          className="p-2 bg-white rounded-full shadow hover:scale-110 transition"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
