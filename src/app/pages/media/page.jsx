"use client";
import React from "react";

function page() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Top Banner */}
      <div className="relative w-full h-80">
        <img
          src="/art2.jpg"
          alt="FAQ Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-4xl md:text-6xl text-center text-white font-bold italic">
            Frequently Asked Questions
          </h1>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left FAQs */}
        <div className="space-y-10">
          
          {/* <div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">
              What are the special website features?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The website features moving paintings on the homepage, a paintbrush-style cursor,
              and a theme based on soft earth tones like off-white, light brown, and light yellow.
            </p>
          </div> */}

          <div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">
              What categories are included in the website?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              About Us, Paintings (Oil Painting, Nature), Past Shows, Inside My Studio, Media (Newspaper and Magazine Articles),
              Completed Projects, Blogs, and Contact Us.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">
              What is the home page about?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Puneeta Ranjan, a Pune-based contemporary artist, creates vibrant emotional artworks inspired by nature, poetry, and music.
              She dreams of making art education accessible for all through free art schools and healing art programs.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">
              What is highlighted in the 'About the Artist' section?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Puneeta’s artwork reflects the connection between nature and human emotion. 
              Specialized in Modern Art from MoMA New York and currently pursuing 'Healing with the Arts' from the University of Florida.
              She works with oils, watercolors, and occasionally colored pencils, inspired by nature, poetry, and music.
            </p>
          </div>

        </div>

        {/* Right FAQs */}
        <div className="space-y-10">
          
          <div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">
              Where have past shows and exhibitions been held?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Solo exhibitions at Raja Ravi Varma Gallery Pune, Bombay Art Society Mumbai, India Habitat Center Delhi, 
              and international group shows like Parallax Art Fair London and Pondicherry Biennale.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">
              What awards and recognitions has Puneeta received?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Puneeta has received several awards, including Award of Excellence at Patna's State Level Painting Exhibition, 
              jury recognition by Allahabad Museum, and was selected as an International Jury by Artmaster Australia.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">
              What are the major completed projects?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              3D Art Kingdom at Phoenix Market City Pune, murals for Nyati Group Pune, paintings for Pune Circuit House, 
              and commissioned artworks for the Army Cantonment in Kanpur among others.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">
              How to contact Puneeta Ranjan?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Address: 204 Macaw, Nyati Enclave, Near DPS, NIBM Road, Pune 411060<br />
              Phone: 7507022004, 7507099004<br />
              Email: taw.artworkshop@gmail.com<br />
              Instagram: <a href="https://www.instagram.com/puneeta.ranjan/" target="_blank" className="text-blue-600 hover:underline">@puneeta.ranjan</a>
            </p>
          </div>

        </div>

      </section>

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
              className="flex-1 text-black border border-gray-600 p-4 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
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
