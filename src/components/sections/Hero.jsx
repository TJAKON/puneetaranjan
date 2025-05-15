"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const images = ["/art3.jpg", "/art2.jpg", "/art4.jpg"]; // Add more images as needed

const Hero = () => {
  const [showCopyright, setShowCopyright] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = (e) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setShowCopyright(true);
    setTimeout(() => setShowCopyright(false), 1000);
  };

  return (
    <section className=" h-screen w-full overflow-hidden">
      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="h-full w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${src})` }}
              onContextMenu={handleContextMenu}
              onDragStart={(e) => e.preventDefault()}
            />
          </SwiperSlide>
        ))}
      </Swiper>

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
