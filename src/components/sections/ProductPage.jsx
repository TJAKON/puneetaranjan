// components/ProductPage.jsx
import Image from "next/image";
import React from "react";

const ProductPage = ({ data }) => {
  const { title, description, image, size, medium, year } = data;

  return (
    <>
      {/* Painting Details Section */}
      <section
        className="min-h-screen pt-16 md:pt-40 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/gallery.jpeg')",
        }}
      >
        <div className="bg-transparent backdrop-blur-none md:backdrop-blur-md shadow-2xl max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center p-6 md:p-10">
          {/* Painting Image */}
          <div className="w-full">
            <div className="overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105 bg-white">
              <Image
                src={image}
                alt={title}
                width={800}
                height={1000}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Painting Info */}
          <div className="w-full space-y-6 text-white md:text-black/80 bg-transparent backdrop-blur-xs p-3">
            <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
            <div className="space-y-2 text-white md:text-black/80">
              {year && (
                <p>
                  <span className="font-semibold">Year:</span> {year}
                </p>
              )}
              {medium && (
                <p>
                  <span className="font-semibold">Medium:</span> {medium}
                </p>
              )}
              {size && (
                <p>
                  <span className="font-semibold">Size:</span> {size}
                </p>
              )}
            </div>
            {description && (
              <p className="mt-4 text-lg leading-relaxed">{description}</p>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="max-w-5xl mx-auto py-20 px-6 text-center bg-white rounded-lg shadow-inner mt-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Stay Inspired with the Art Newsletter
        </h3>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          Be the first to know about new collections, exhibitions, and
          behind-the-scenes insights.
        </p>

        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 border border-gray-300 p-4 rounded-full text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition flex items-center gap-2 group"
          >
            Subscribe
            <span className="transform group-hover:translate-x-1 transition">
              &rarr;
            </span>
          </button>
        </form>
      </section>
    </>
  );
};

export default ProductPage;
