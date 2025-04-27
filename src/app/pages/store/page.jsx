"use client";
import React, { useState } from 'react';

const products = [
    {
      id: 1,
      title: "Succulents",
      price: 75,
      type: "Original",
      image: "/art1.jpg",
    },
    {
      id: 2,
      title: "Found Treasure",
      price: 500,
      type: "Original",
      image: "/art2.jpg",
    },
    {
      id: 3,
      title: "Matsuri Print",
      price: 30,
      type: "Print",
      image: "/art3.jpg",
    },
    {
      id: 4,
      title: "Moon Dancer Print",
      price: 30,
      type: "Print",
      image: "/art4.jpg",
    },
    {
      id: 5,
      title: "Lady Blue Print",
      price: 30,
      type: "Print",
      image: "/art5.jpg",
    },
    {
      id: 6,
      title: "Oriole Print",
      price: 30,
      type: "Print",
      image: "/art1.jpg",
    },
    {
      id: 7,
      title: "Raven Print",
      price: 30,
      type: "Print",
      image: "/art2.jpg",
    },
    {
      id: 8,
      title: "The Archer Print",
      price: 30,
      type: "Print",
      image: "/art3.jpg",
    },
    {
      id: 9,
      title: "The Northern Empress Print",
      price: 30,
      type: "Print",
      image: "/art4.jpg",
    },
    {
      id: 10,
      title: "Floral Dream Print",
      price: 30,
      type: "Print",
      image: "/art5.jpg",
    },
    {
      id: 11,
      title: "Hydrangeas Print",
      price: 53,
      type: "Print",
      image: "/art1.jpg",
    },
    {
      id: 12,
      title: "Moon Dancer",
      price: 630,
      type: "Original",
      image: "/art2.jpg",
    },
    {
      id: 13,
      title: "Lady Blue",
      price: 475,
      type: "Original",
      image: "/art3.jpg",
    },
    {
      id: 14,
      title: "The Magical Seal",
      price: 540,
      type: "Original",
      image: "/art4.jpg",
    },
  ];
  

function page() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((product) => product.type === activeFilter);

  return (
    <div className="bg-white">
      {/* Page Title */}
      <div className="py-16 text-center">
        <h1 className="text-4xl italic font-bold text-gray-800">Store</h1>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-8 mb-12">
        {["All", "Original", "Print"].map((filter) => (
          <button
            key={filter}
            className={`text-lg font-medium ${
              activeFilter === filter ? "text-black underline" : "text-gray-500"
            } hover:text-black transition`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter === "Original"
              ? "ORIGINALS"
              : filter === "Print"
              ? "PRINTS"
              : "ALL"}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredProducts.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            <div className="overflow-hidden shadow-lg mb-4 w-full">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-80 object-cover hover:scale-105 transition duration-300"
              />
            </div>
            <h2 className="text-center text-lg font-semibold text-gray-800 mb-2">
              "{product.title}"
            </h2>
            <p className="text-center text-gray-600 text-md font-medium">
              ${product.price.toFixed(2)}
            </p>
          </div>
        ))}
      </section>

      {/* Padding bottom */}
      <div className="h-24" />
    </div>
  );
}

export default page;
