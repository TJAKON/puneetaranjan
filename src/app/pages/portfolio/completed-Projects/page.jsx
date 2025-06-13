"use client";
import React from "react";
import Link from "next/link";

const paintings = [
  {
    slug: "whispers-of-light",
    img: "art1.jpg",
    title: "Whispers of Light",
    style: "Acrylic on Canvas",
    size: "24 x 36 in",
    description: "A serene depiction of dawn breaking through quiet hills.",
  },
  {
    slug: "eternal-bloom",
    img: "art2.jpg",
    title: "Eternal Bloom",
    style: "Watercolor",
    size: "18 x 24 in",
    description: "A vibrant expression of nature’s endless beauty.",
  },
  {
    slug: "urban-echoes",
    img: "art3.jpg",
    title: "Urban Echoes",
    style: "Mixed Media",
    size: "30 x 40 in",
    description:
      "Captures the dynamic pulse of city life through texture and tone.",
  },
  {
    slug: "silent-depths",
    img: "art4.jpg",
    title: "Silent Depths",
    style: "Oil on Canvas",
    size: "20 x 30 in",
    description: "A moody introspective piece evoking deep reflection.",
  },
  {
    slug: "garden-dreams",
    img: "art5.jpg",
    title: "Garden Dreams",
    style: "Ink and Watercolor",
    size: "16 x 20 in",
    description: "Delicate florals flow with soft storytelling and elegance.",
  },
  {
    slug: "hydrangeas-bloom",
    img: "art2.jpg",
    title: "Hydrangeas Bloom",
    style: "Watercolor",
    size: "18 x 24 in",
    description: "A colorful celebration of seasonal floral vibrance.",
  },
];

function page() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Top Banner */}
      <div className="relative w-full h-96">
        <img
          src="/images/image11.jpeg"
          alt="Art Commissions Banner"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-5xl md:text-7xl text-white font-extrabold italic tracking-wide drop-shadow-lg">
            Completed Projects
          </h1>
        </div>
      </div>

      {/* Art Gallery */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
        {paintings.map((art, index) => (
          <Link key={index} href={`/pages/product/${art.slug}`}>
            <div className="bg-white border overflow-hidden shadow-lg group hover:shadow-xl transition">
              <img
                src={`/${art.img}`}
                alt={art.title}
                className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {art.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Style:</strong> {art.style}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Size:</strong> {art.size}
                </p>
                <p className="text-sm text-gray-600 mt-2">{art.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Testimonial */}
      <section className="max-w-5xl mx-auto py-20 px-6 text-center">
        <div className="flex flex-col items-center">
          <img
            src="/art1.jpg"
            alt="Testimonial"
            className="w-40 h-40 rounded-full mb-8 shadow-lg object-cover"
          />
          <blockquote className="text-xl italic text-gray-700 mb-6 leading-relaxed">
            "I think puneeta is beyond generous with the time and attention she
            gives her clients. I felt like I was her most important customer.
            Beyond happy and can't stop enjoying the pieces I've purchased and
            the one I had commissioned. Cannot wait to work with her again!"
          </blockquote>
          <h4 className="text-lg font-semibold text-gray-800">- Jessica P.</h4>

          {/* Arrows (optional) */}
          <div className="flex justify-center gap-6 mt-6 text-2xl text-gray-500">
            <span className="cursor-pointer hover:text-black transition">
              &larr;
            </span>
            <span>1 / 1</span>
            <span className="cursor-pointer hover:text-black transition">
              &rarr;
            </span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="max-w-6xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
    
        <div className="space-y-10">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              What kind of commissions do you take?
            </h3>
            <p className="text-gray-700">
              I work mainly with acrylic and gouache. Watercolor commissions are
              currently unavailable.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              What will I receive?
            </h3>
            <p className="text-gray-700">
              - The physical art piece
              <br />- High-quality digital files for personal, non-commercial
              use
            </p>
            <p className="text-red-500 mt-4 font-semibold">
              * Currently not offering framing services.
            </p>
          </div>
          <div>
            <p className="text-gray-700">
              Still have questions? Feel free to email me at
              <a
                href="mailto:puneetaranjan@gmail.com"
                className="ml-1 font-bold underline hover:text-black"
              >
                puneetaranjan@gmail.com
              </a>
              or visit the contact page!
            </p>
          </div>
        </div>

  
        <div className="space-y-10">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              How long do art commissions take?
            </h3>
            <p className="text-gray-700">
              Timing depends on complexity. I will provide an estimate after
              discussing your project.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              Where can I see examples?
            </h3>
            <p className="text-gray-700">
              You can view my portfolio on this page and in the Portfolio menu.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              How does payment work?
            </h3>
            <p className="text-gray-700">
              I follow a 50-50 payment system to ensure commitment from both
              sides.
            </p>
          </div>
        </div>
      </section> */}

      {/* Newsletter Signup */}
      <section className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h3 className="text-3xl font-extrabold mb-4 text-gray-900">
          Sign up for my art newsletter!
        </h3>
        <p className="text-gray-600 mb-10">
          Join to get updates, freebies, and more!
        </p>
        <form className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 text-black border border-gray-300 p-4 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
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
      </section>
    </div>
  );
}

export default page;
