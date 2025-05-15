"use client";

import Link from "next/link";
import React from "react";

function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-28">
        {/* About Section */}
        <h1 className="text-4xl font-bold text-gray-800 mb-10">About</h1>
        <div className="text-gray-700 text-lg leading-relaxed space-y-6 text-justify mb-10">
          <p>
            More than just a practice, art is a hobby to me — it's a means of
            interacting with the world. I am a contemporary artist based in Pune
            and draw a lot of inspiration from the natural world and the idea
            that everything around us, including stars and trees, has a similar
            essence to us.
          </p>
          <p>
            This relationship is vital to my art, as I turn everyday situations
            and well-known landscapes into colorful, energetic paintings with a
            strong emotional connection.
          </p>
          <p>
            My painting alternates between peaceful reflection and vibrant
            passion. I create sentimental paintings using realistic and abstract
            techniques, influenced by travel, nature, and human connection.
            Poetry and music deeply inspire my creative approach.
          </p>
          <p>
            Every artwork is a reflection of my own emotions and experiences —
            my work is like a diary, like a poem, transforming the ephemeral
            nature of daily experiences and emotions into art. In my Pune
            Studio, each piece is a delicate rendition of the world around me, a
            tangible manifestation of my observations and inner reflection.
          </p>
        </div>

        {/* Artist Picture */}
        <div className="flex justify-center mb-12">
          <img
            src="/images/puneeta2.jpeg"
            alt="Artist Photo"
            className="max-w-lg w-full h-auto object-cover shadow-lg"
          />
        </div>

        {/* Video of Working */}
        <div className="mb-20">
          <h2 className="text-4xl italic font-bold text-gray-800 mb-6">
            Studio Process Video
          </h2>
          <div className="w-full aspect-video">
            <video
              controls
              className="w-full h-full object-cover rounded-lg shadow-md"
            >
              <source src="/videos/working-in-studio.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Artistic Practice */}
        <h2 className="text-4xl italic font-bold text-gray-800 mt-20 mb-10">
          Artistic Practice
        </h2>
        <div className="text-gray-700 text-lg leading-relaxed space-y-6 text-justify">
          <p>
            As a painter located in Pune, I have a strong desire to ensure that
            everyone in Pune has access to art education. I am working to start
            a free art school for underprivileged kids, fostering creativity and
            talent in a nurturing atmosphere.
          </p>
          <p>
            I envision a top-tier art school providing expert art instruction to
            support aspiring artists. Additionally, I want to start healing art
            programs in hospitals, believing that creativity has the power to
            heal.
          </p>
          <p>
            Through these projects, I aim to uplift communities, promote
            optimism, and ensure that art becomes a transforming, inclusive
            experience for all — not a privilege, but a fundamental human right.
          </p>
        </div>

        {/* CV Download */}
        <div className="mt-20">
          <h2 className="text-4xl italic font-bold text-gray-800 mb-6">Curriculum Vitae</h2>
          <a
            href="/files/artist-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition font-medium"
          >
            Download CV
          </a>
        </div>

        {/* Collections */}
        <h2 className="text-4xl italic font-bold text-gray-800 mt-20 mb-10 capitalize">
          Art Exhibitions, Awards and Achievements
        </h2>
        <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Awards</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Best Emerging Artist – Pune Art Fair 2022</li>
              <li>Featured Artist – Kala Sangam International 2023</li>
              <li>Art for Healing – Creative Therapy Award 2024</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Collections</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Private collections in India, France, and Canada</li>
              <li>Displayed at MondapArt Gallery (Paris)</li>
              <li>Permanent installation at Pune Healing Hospital</li>
            </ul>
          </div>
        </div>

        {/* Style of Working */}
        <h2 className="text-4xl italic font-bold text-gray-800 mt-20 mb-10">
          Style of Working
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed text-justify">
          Oils and watercolours are my chosen mediums, though I occasionally
          work with coloured pencils as well. Nature, poetry, and music are my
          muses — breathing life and spirit into my creations.
        </p>

        {/* Contact Button */}
        <div className="mt-16">
          <Link
            href="/pages/contact"
            className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition font-medium"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-gray-300 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Sign up for my art newsletter!
          </h2>
          <p className="text-gray-600 mb-8">
            Join my mailing list to get news on my work, free stuff, and more!
          </p>
          <form className="flex flex-col md:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 border border-gray-600 p-4 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition flex items-center gap-2 group"
            >
              Submit
              <span className="transform group-hover:translate-x-1 transition">
                &#8594;
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;