'use client';

import React from 'react';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-white px-4 md:mx-10">
      {/* Background Image or Color */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url('/art2.jpg')" }} // change to your image path
      ></div>
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-4">My Passion for Painting</h2>
        <p className="text-lg mb-6">
          Every stroke of color I place on a wall is a part of my soul. I specialize in creative
          and wall paintings that turn blank spaces into emotions, stories, and inspirations.
        </p>
        <Link href="/about">
          <button className="bg-white text-black font-medium px-6 py-2 rounded-md hover:bg-gray-200 transition">
            More About Me
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
