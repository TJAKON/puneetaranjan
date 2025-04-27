"use client";
import React from "react";

function page() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Top Banner */}
      <div className="relative w-full h-96">
        <img
          src="/art2.jpg"
          alt="Art Commissions Banner"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-5xl md:text-7xl text-white font-extrabold italic tracking-wide drop-shadow-lg">
            Art Commissions
          </h1>
        </div>
      </div>

      {/* Art Gallery */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {/* Example art images */}
        {[
          "art1.jpg",
          "art2.jpg",
          "art3.jpg",
          "art4.jpg",
          "art5.jpg",
          "art2.jpg",
        ].map((img, index) => (
          <div
            key={index}
            className="overflow-hidden shadow-md group"
          >
            <img
              src={`/${img}`}
              alt={`Artwork ${index + 1}`}
              className="object-cover w-full h-full transform group-hover:scale-105 transition duration-300"
            />
          </div>
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
            "I think puneeta is beyond generous with the time and attention
            she gives her clients. I felt like I was her most important
            customer. Beyond happy and can't stop enjoying the pieces I've
            purchased and the one I had commissioned. Cannot wait to work with
            her again!"
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
      <section className="max-w-6xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Side */}
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

        {/* Right Side */}
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
      </section>

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
