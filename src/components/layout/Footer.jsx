import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react"; // Importing icons from lucide-react
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/20/solid"; // Heroicons for contact info

export const Footer = () => {
  return (
    <footer
      className="relative h-[60vh] bg-fixed bg-center bg-cover text-white bg-black/20 backdrop-blur-sm"
      style={{ backgroundImage: "url('/art4.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-saturate-50" />

      {/* Creative Message */}
      {/* <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide animate-fade-up">
          Let Art Speak Where Words Fall Short
        </h2>
        <p className="mt-4 text-lg text-gray-200 max-w-xl animate-fade-up delay-150">
          Every stroke holds a story. Thank you for being part of the journey.
        </p>
      </div> */}

      <div className="max-w-4xl mx-auto text-center py-20">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Sign up for my art newsletter!
        </h2>
        <p className="text-white mb-8">
          Join my mailing list to get news on my work, free stuff, and more!
        </p>
        <form className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 border-2 border-white placeholder-white p-4 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <button
            type="submit"
            className="bg-white text-black px-8 py-4 rounded-full hover:bg-gray-800 transition flex items-center gap-2 group"
          >
            Submit
            <span className="transform group-hover:translate-x-1 transition">
              &#8594;
            </span>
          </button>
        </form>
      </div>

      {/* Bottom text */}
      <div className="absolute bottom-4 w-full text-center text-sm text-gray-300 z-10">
        © {new Date().getFullYear()} Puneeta Ranjan. All rights reserved.
      </div>
    </footer>
  );
};
