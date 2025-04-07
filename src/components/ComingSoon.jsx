import React, { useState } from "react";

const ComingSoon = () => {
  const [hover, setHover] = useState(false);

  const handleMouseMove = (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    document.documentElement.style.setProperty('--mouse-x', mouseX);
    document.documentElement.style.setProperty('--mouse-y', mouseY);
  };

  return (
    <div
      className="min-h-screen w-full bg-[#0e0825] relative overflow-hidden flex items-center justify-center px-4"
      onMouseMove={handleMouseMove}
    >
      {/* 🌀 Animated Background Circles */}
      <div className="absolute -top-40 -left-20 w-[300px] h-[300px] bg-[#1f122e] rounded-full opacity-20 animate-pulse blur-3xl"></div>
      <div className="absolute top-10 right-10 w-[200px] h-[200px] bg-[#4a3b76] rounded-full opacity-20 animate-ping blur-2xl"></div>
      <div className="absolute bottom-10 left-20 w-[250px] h-[250px] bg-[#3e2a57] rounded-full opacity-20 animate-pulse blur-3xl"></div>

      {/* 🚧 Animated Text (No Background) */}
      <div
        className={`relative z-10 flex flex-col items-center text-center transition-all duration-300 ${
          hover ? "scale-105" : ""
        }`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <h1
          className="text-5xl font-bold text-[#f0ecec] opacity-0"
          style={{ animation: "slideInUp 2s ease-out forwards" }}
        >
          🚧 Coming Soon 🚧
        </h1>
        <p
          className="text-[#d1d1d1] mt-4 max-w-md text-lg font-medium opacity-0"
          style={{ animation: "slideInUp 2s ease-out 0.5s forwards" }}
        >
          This page is under construction. We're cooking something awesome with 💜 <br />
          Stay tuned for magic!
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
