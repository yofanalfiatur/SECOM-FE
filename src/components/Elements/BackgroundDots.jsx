"use client";

import { useEffect } from "react";

const BackgroundDots = () => {
  useEffect(() => {
    // Default setup
    let num_dots_x = 25;
    let num_dots_y = 20;
    let dot_size = 5;
    let dot_color = "#01F3FF33"; // Biru muda
    let dot_hl_color = "#004697"; // Biru tua

    const updateGradient = (x, y) => {
      const container = document.querySelector(".dots-bg-container");
      if (container) {
        container.style.backgroundImage = `radial-gradient(circle at ${x}% ${y}%, ${dot_hl_color}, ${dot_color} 30%)`;
      }
    };

    const resizeSvg = () => {
      const container = document.querySelector(".dots-bg-container");
      const svgBg = document.querySelector(".dots-svg-bg");
      if (container && svgBg) {
        const w = container.offsetWidth;
        const h = container.offsetHeight;
        svgBg.setAttribute("width", w);
        svgBg.setAttribute("height", h);
      }
    };

    const drawDots = () => {
      const mask = document.querySelector("#dots-bg-mask");
      if (!mask) return;

      // Clear existing dots
      while (mask.children.length > 1) {
        mask.removeChild(mask.lastChild);
      }

      const svgNS = "http://www.w3.org/2000/svg";

      for (let i = 0; i < num_dots_x; i++) {
        for (let j = 0; j < num_dots_y; j++) {
          const circle = document.createElementNS(svgNS, "circle");
          circle.setAttributeNS(
            null,
            "cx",
            `${(i + 0.5) * (100 / num_dots_x)}%`
          );
          circle.setAttributeNS(
            null,
            "cy",
            `${(j + 0.5) * (100 / num_dots_y)}%`
          );
          circle.setAttributeNS(null, "r", dot_size);
          mask.appendChild(circle);
        }
      }
    };

    const handleMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 100;
      const mouseY = (event.clientY / window.innerHeight) * 100;
      updateGradient(mouseX, mouseY);
    };

    // Initialize
    drawDots();
    resizeSvg();

    // Event listeners
    window.addEventListener("resize", resizeSvg);
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeSvg);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="dots-bg-container">
      <svg className="dots-svg-bg" width="100%" height="100%">
        <defs>
          <mask id="dots-bg-mask">
            <rect id="mask-rect" width="100%" height="100%" fill="white" />
          </mask>
        </defs>
        <rect
          fill="white"
          id="dots-bg-rect"
          width="100%"
          height="100%"
          mask="url(#dots-bg-mask)"
        />
      </svg>
    </div>
  );
};

export default BackgroundDots;
