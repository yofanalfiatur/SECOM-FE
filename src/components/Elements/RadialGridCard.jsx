"use client";

import { useState, useCallback } from "react";

const RadialGridCard = ({
  className = "",
  dotColor = "#00D4FF",
  dotSize = "1px",
  spacing = "15px",
  hoverOpacity = 0.8,
  defaultOpacity = 0.15,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setMousePosition({ x: 50, y: 50 });
  }, []);

  return (
    <div
      className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ pointerEvents: "none" }}
    >
      {/* Base dot pattern */}
      <div
        className="absolute inset-0 transition-opacity duration-300 ease-out"
        style={{
          backgroundImage: `radial-gradient(circle, ${dotColor} ${dotSize}, transparent ${dotSize})`,
          backgroundSize: spacing + " " + spacing,
          backgroundPosition: `${spacing} ${spacing}`,
          opacity: defaultOpacity,
        }}
      />

      {/* Interactive hover effect */}
      <div
        className="absolute inset-0 transition-all duration-200 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            ${dotColor} 0%, 
            ${dotColor} 20%, 
            transparent 60%)`,
          opacity: isHovered ? hoverOpacity : 0,
          transform: isHovered ? "scale(1.1)" : "scale(1)",
          filter: "blur(0.5px)",
        }}
      />

      {/* Additional glow effect on hover */}
      {isHovered && (
        <div
          className="absolute inset-0 transition-opacity duration-300 ease-out"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(0, 212, 255, 0.3) 0%, 
              rgba(0, 212, 255, 0.1) 30%, 
              transparent 60%)`,
            opacity: 0.6,
          }}
        />
      )}
    </div>
  );
};

export default RadialGridCard;
