"use client";
import React from "react";

// Dummy Blog Posts Data
const blogPosts = [
  {
    id: 1,
    title: "Things that Inspire Me As An Artist",
    date: "Aug 08, 2022",
    description: "Just some of my sources of inspiration! Are any of these inspiring to you, too? :)",
    image: "/art3.jpg",
  },
  {
    id: 2,
    title: "What is Art Block?",
    date: "Jul 18, 2022",
    description: "It happens to the best of us...",
    image: "/art1.jpg",
  },
  {
    id: 3,
    title: "I Can't Paint Without Music",
    date: "Jun 27, 2022",
    description: "Art itself, helping me to create MORE art.",
    image: "/art3.jpg",
  },
  {
    id: 4,
    title: "My Favorite Watercolor Supplies, Part 2: Paper and Palettes",
    date: "Jun 21, 2022",
    description: "Tips for paper and palettes for watercolor beginners.",
    image: "/art4.jpg",
  },
  {
    id: 5,
    title: "My Favorite Watercolor Supplies, Part 1: Paints",
    date: "Jun 18, 2022",
    description: "Reviews of some favorite watercolor paints and tips!",
    image: "/art5.jpg",
  },
  {
    id: 6,
    title: "What I Wish I Knew Before Starting Watercolor",
    date: "Jun 04, 2022",
    description: "Things to know before you start watercolor painting.",
    image: "/art1.jpg",
  },
  {
    id: 7,
    title: "Somewhere out in the Atlantic...",
    date: "May 03, 2022",
    description: "A much needed little break...",
    image: "/art4.jpg",
  },
  {
    id: 8,
    title: "Somewhere out in the Atlantic...",
    date: "May 03, 2022",
    description: "A much needed little break...",
    image: "/art4.jpg",
  },
  {
    id: 9,
    title: "Somewhere out in the Atlantic...",
    date: "May 03, 2022",
    description: "A much needed little break...",
    image: "/art4.jpg",
  },
];

function page() {
  return (
    <div className="bg-white min-h-screen py-28 px-6">
      
      {/* Page Title */}
      <h1 className="text-center text-5xl italic font-bold text-gray-800 mb-16 uppercase">
        Blogs
      </h1>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div key={post.id} className="flex flex-col gap-4">
            
            {/* Thumbnail */}
            <div className="overflow-hidden shadow-md group">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[384px] object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Blog Info */}
            <div className="flex flex-col gap-2">
              <p className="text-gray-500 text-sm">{post.date}</p>
              <h2 className="text-2xl font-bold text-gray-800">{post.title}</h2>
              <p className="text-gray-600">{post.description}</p>
              <a href="#" className="mt-2 text-blue-600 hover:underline font-medium">
                Read More
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom Padding */}
      <div className="h-24" />
    </div>
  );
}

export default page;
