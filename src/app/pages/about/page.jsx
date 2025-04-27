"use client";

import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="bg-white min-h-screen">

      {/* Profile Section */}
      <div className="max-w-4xl mx-auto px-6 text-center py-20">

        {/* Profile Image */}
        <div className="flex justify-center mb-12">
          <img
            src="/art1.jpg"
            alt="Artist Photo"
            className="w-[400px] h-[400px] object-cover shadow-lg"
          />
        </div>

        {/* Welcome Heading */}
        <h1 className="text-4xl italic font-bold text-gray-800 mb-10">
          Greetings from Puneeta Ranjan
        </h1>

        {/* About Paragraph */}
        <div className="text-gray-700 text-lg leading-relaxed space-y-6 text-justify">

          <p>
            More than just a practice, art is a hobby to me — it's a means of interacting with the world.
            I am a contemporary artist based in Pune and draw a lot of inspiration from the natural world 
            and the idea that everything around us, including stars and trees, has a similar essence to us.
          </p>

          <p>
            This relationship is vital to my art, as I turn everyday situations and well-known landscapes into 
            colorful, energetic paintings with a strong emotional connection.
          </p>

          <p>
            My painting alternates between peaceful reflection and vibrant passion. I create sentimental paintings 
            using realistic and abstract techniques, influenced by travel, nature, and human connection. 
            Poetry and music deeply inspire my creative approach.
          </p>

          <p>
            Every artwork is a reflection of my own emotions and experiences — my work is like a diary, like a poem, 
            transforming the ephemeral nature of daily experiences and emotions into art. 
            In my Pune Studio, each piece is a delicate rendition of the world around me, 
            a tangible manifestation of my observations and inner reflection.
          </p>
        </div>

        {/* Our Aim Section */}
        <h1 className="text-4xl italic font-bold text-gray-800 mt-20 mb-10">
          Our Aim
        </h1>

        <div className="text-gray-700 text-lg leading-relaxed space-y-6 text-justify">

          <p>
            As a painter located in Pune, I have a strong desire to ensure that everyone in Pune has access to art education. 
            I am working to start a free art school for underprivileged kids, fostering creativity and talent in a nurturing atmosphere.
          </p>

          <p>
            I envision a top-tier art school providing expert art instruction to support aspiring artists. 
            Additionally, I want to start healing art programs in hospitals, believing that creativity has the power to heal.
          </p>

          <p>
            Through these projects, I aim to uplift communities, promote optimism, and ensure that art becomes a transforming, 
            inclusive experience for all — not a privilege, but a fundamental human right.
          </p>
        </div>

        {/* Special Highlights */}
        <h1 className="text-4xl italic font-bold text-gray-800 mt-20 mb-10">
          Special Highlighting Features
        </h1>

        <div className="text-gray-700 text-lg leading-relaxed space-y-4 text-justify">
          <ul className="list-disc list-inside space-y-2">
            <li>
              Specialization in Modern Art and Ideas, a certified course from 
              <span className="font-semibold text-black"> The Museum of Modern Art (MoMA), New York</span>.
            </li>
            <li>
              Pursuing an online course <span className="font-semibold text-black">“Healing with the Arts”</span> 
              from the University of Florida.
            </li>
            <li>
              Started painting at a very early age — held my first Solo Painting Exhibition when I was in 9th Grade.
            </li>
            <li>
              Initially pursued Chartered Accountancy but decided to follow my heart’s desire to be an artist.
            </li>
          </ul>
        </div>

        {/* Style of Working */}
        <h1 className="text-4xl italic font-bold text-gray-800 mt-20 mb-10">
          Style of Working
        </h1>

        <div className="text-gray-700 text-lg leading-relaxed space-y-6 text-justify">
          <p>
            Oils and watercolours are my chosen mediums, though I occasionally work with coloured pencils as well.
            Nature, poetry, and music are my muses — breathing life and spirit into my creations.
          </p>
        </div>

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
              <span className="transform group-hover:translate-x-1 transition">&#8594;</span>
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default page;
