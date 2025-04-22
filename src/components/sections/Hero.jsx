"use client";

import React, { useState } from "react";

const Hero = () => {
  const [showCopyright, setShowCopyright] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = (e) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setShowCopyright(true);

    setTimeout(() => {
      setShowCopyright(false);
    }, 1000); // You had 500ms, I bumped it slightly for better UX
  };

  return (
    <section className="h-screen relative flex items-center justify-center md:mx-10">
      {/* Only this div triggers right-click message */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/art3.jpg')" }}
        onContextMenu={handleContextMenu}
        onDragStart={(e) => e.preventDefault()}
      ></div>

      {/* Copyright Message */}
      {showCopyright && (
        <div
          className="fixed z-50 bg-white text-black px-4 py-2 rounded-md text-sm shadow-lg"
          style={{ top: position.y, left: position.x }}
        >
          © All artwork is copyrighted by Puneeta Ranjan.
        </div>
      )}
    </section>
  );
};

export default Hero;
