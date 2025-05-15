"use client";
import React from "react";

function page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-28 px-6 md:px-16">
      {/* Main Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-bold italic text-gray-800 mb-8">
            Get in touch!
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            If you have business inquiries, comments, or questions, please fill
            out the form below and I will contact you shortly! You can also use
            this form to inquire about commissions, or if you prefer, email me
            at
            <a
              href="mailto:palettemage@gmail.com"
              className="text-black font-semibold ml-1"
            >
              puneetaranjan@gmail.com
            </a>
            .
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            I look forward to hearing from you! Thank you very much for
            visiting, shopping, and being supportive of both my work and the
            artistic community!
          </p>


          <p className="text-gray-700 mb-10 font-medium">- puneeta</p>

          {/* Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 text-black p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 text-black  p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 text-black  p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full border border-gray-300 text-black  p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
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

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <div className="overflow-hidden shadow-lg">
            <img
              src="/images/image0.jpeg"
              alt="Artwork"
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="max-w-4xl mx-auto mt-24 border-t border-gray-300 pt-16 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          Sign up for my art newsletter!
        </h3>
        <p className="text-gray-600 mb-8">
          Join my mailing list to get news on my work, free stuff, and more!
        </p>

        <form className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 text-black  border border-gray-300 p-4 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
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
  );
}

export default page;
