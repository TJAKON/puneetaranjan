"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  "/images/image0.jpeg",
  "/images/image2.jpeg",
  "/images/image5.jpeg",
  "/Oil_Paintings/image0.jpeg",
  "/Oil_Paintings/image8.jpeg",
  "/Oil_Paintings/image5.jpeg",
  "/Sketches/image2.jpeg",
  "/Works_on_paper/image6.jpeg",
  "/Works_on_paper/image7.jpeg",
  "/Works_on_paper/image9.jpeg",
  "/Portfolio_sold_works/image7.jpeg",
  "/Portfolio_sold_works/image4.jpeg",
];

const Hero = () => {
  const [showCopyright, setShowCopyright] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = (e) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setShowCopyright(true);
    setTimeout(() => setShowCopyright(false), 1200);
  };

  return (
    <section className="h-screen w-full overflow-hidden relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={true}
        className="h-full w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-screen w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${src})` }}
              onContextMenu={handleContextMenu}
              onDragStart={(e) => e.preventDefault()}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {showCopyright && (
        <div
          className="fixed z-50 bg-white text-black px-4 py-2 rounded-md text-sm shadow-lg pointer-events-none"
          style={{ top: position.y, left: position.x }}
        >
          © All artwork is copyrighted by Puneeta Ranjan.
        </div>
      )}
    </section>
  );
};

export default Hero;
