import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import { Footer } from "@/components/layout/Footer";

import { Facebook, Instagram, Twitter } from "lucide-react"; // Importing icons from lucide-react
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/20/solid"; // Heroicons for contact info

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      <Hero />

      {/* <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-light italic">
          “Give meaning to your life and give life to your senses.”
        </h1>
        <div className="mt-6 text-sm text-left">
          <p className="text-yellow-600 font-medium">Contemporary Painting</p>
          <p>+33 6 03 32 31 29</p>
          <p>
            <a href="mailto:contact@puneetaranjan.art">
              contact@puneetaranjan.art
            </a>
          </p>
        </div>
      </section> */}

      {/* Featured Artwork */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-20 md:mx-10 bg-[#0a1f3d] text-neutral-100">
        {/* Left Image Block */}
        <div className="relative w-full h-[500px] overflow-hidden shadow-lg group">
          <Image
            src="/art1.jpg"
            alt="Featured Art"
            fill
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-105"
          />
          {/* Optional overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300 rounded-xl"></div>
        </div>

        {/* Right Text Content */}
        <div className="flex flex-col justify-center items-start text-left">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4 tracking-tight">
            Puneeta Ranjan
          </h2>

          <p className="text-base leading-relaxed text-neutral-200 mb-4 border-l-4 border-yellow-500 pl-4">
            Puneeta is a Pune-based artist turning emotions into vibrant
            masterpieces— and dreams into accessible art education for all. Her
            works are translations of fleeting moments and profound feelings
            into a tangible form.
          </p>

          <p className="text-base leading-relaxed text-neutral-200 mb-6 border-l-4 border-yellow-500 pl-4">
            Puneeta is an expert artist and a Pune-based contemporary painter
            known for creating emotional, nature-inspired artworks that blend
            realism and abstraction. Her work reflects personal experiences,
            music, and poetry.
            <br />
            <br />
            Through her Pune studio, she offers original paintings and prints
            across India. Aiming to launch a free art school in Pune, a
            professional art institute, and healing art programs, making art
            education accessible and transformative for all.
          </p>

          <Link
            href="/pages/about"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-medium px-5 py-2 rounded-full shadow-md transition-all duration-300"
          >
            Learn More
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-16 bg-white text-neutral-900 max-w-7xl mx-auto">
        {/* Commission Section */}
        <div className="flex flex-col items-start text-left">
          <Image
            src="/art4.jpg" // Replace with your actual image path
            alt="Commission Art"
            width={600}
            height={0}
            className="w-full h-[450px] shadow-lg mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">Request a Commission</h3>
          <p className="text-base mb-4">
            I do commissioned work! Click the button to find out how to easily
            request one from me!
          </p>
          <button className="inline-flex items-center gap-2 border border-neutral-400 px-5 py-2 hover:bg-neutral-100 transition">
            Commission Me
            <span className="text-xl">→</span>
          </button>
        </div>

        {/* New Work Section */}
        <div className="flex flex-col items-start text-left">
          <Image
            src="/art2.jpg" // Replace with your actual image path
            alt="Hydrangeas Art"
            width={600}
            height={0}
            className="w-full h-[450px] shadow-lg mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">New Work - Hydrangeas</h3>
          <p className="text-base mb-4">
            I have new watercolor hydrangea prints for sale. Click the link to
            see them!
          </p>
          <button className="inline-flex items-center gap-2 border border-neutral-400 px-5 py-2  hover:bg-neutral-100 transition">
            Shop Now
            <span className="text-xl">→</span>
          </button>
        </div>
        {/* Art Workshop Section */}
        <div className="flex flex-col items-start text-left">
          <Image
            src="/art5.jpg" // Replace with your actual image
            alt="Art Workshop"
            width={600}
            height={0}
            className="w-full h-[450px] shadow-lg mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">Join Our Art Workshop</h3>
          <p className="text-base mb-4">
            Unleash your creativity in our weekend watercolor workshop. All
            skill levels welcome!
          </p>
          <button className="inline-flex items-center gap-2 border border-neutral-400 px-5 py-2 hover:bg-neutral-100 transition">
            Reserve Spot
            <span className="text-xl">→</span>
          </button>
        </div>

        {/* Featured Collection Section */}
        <div className="flex flex-col items-start text-left">
          <Image
            src="/art3.jpg" // Replace with your actual image
            alt="Nature Collection"
            width={600}
            height={0}
            className="w-full h-[450px] shadow-lg mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">
            Featured: Nature Collection
          </h3>
          <p className="text-base mb-4">
            Explore our exclusive Nature Collection—original prints inspired by
            forest walks and wildflowers.
          </p>
          <button className="inline-flex items-center gap-2 border border-neutral-400 px-5 py-2 hover:bg-neutral-100 transition">
            Explore Now
            <span className="text-xl">→</span>
          </button>
        </div>
      </section>

      {/* Gallery Section */}
      {/* <section className="grid md:grid-cols-3 gap-8 px-6 py-16 max-w-7xl mx-auto">
        {[
          { src: "/art2.jpg", title: "The Ideal Father", size: "92cm x 130cm" },
          {
            src: "/art3.jpg",
            title: "The Light of Her Eyes",
            size: "100cm x 80cm",
          },
          { src: "/art5.jpg", title: "Loulou", size: "80cm x 100cm" },
        ].map((art, idx) => (
          <div key={idx} className="text-center">
            <Image
              src={art.src}
              alt={art.title}
              width={300}
              height={300}
              className="mx-auto rounded"
            />
            <h3 className="mt-4 text-lg font-medium">{art.title}</h3>
            <p className="text-sm text-gray-500">{art.size}</p>
          </div>
        ))}
      </section> */}

      {/* Gallery Section */}
      <section className="bg-lines py-20 ">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 tracking-tight text-[#222] uppercase">
            Curated Works
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                src: "/art2.jpg",
                title: "The Ideal Father",
                size: "92cm x 130cm",
              },
              {
                src: "/art3.jpg",
                title: "The Light of Her Eyes",
                size: "100cm x 80cm",
              },
              { src: "/art5.jpg", title: "Loulou", size: "80cm x 100cm" },
            ].map((art, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={art.src}
                  alt={art.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-80 transition-transform duration-500 ease-in-out group-hover:scale-110"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bottom-20 bg-black/30 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-semibold">{art.title}</h3>
                  <p className="text-sm text-gray-300">{art.size}</p>
                </div>

                {/* Museum tag-style label */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white dark:bg-neutral-900 px-4 py-2 rounded-full shadow-md text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:bottom-4">
                  {art.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* View Gallery Link */}
      <div className="text-center my-6">
        <Link
          href="/gallery"
          className="text-yellow-700 font-medium hover:underline"
        >
          View the full online gallery →
        </Link>
      </div>

      {/* Elegant Youth Workshop Section */}
      <section className="relative px-6 py-24 bg-[#fdfbf7] overflow-hidden md:mx-10">
        {/* Decorative Strokes */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-yellow-500 rounded-tr-3xl"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-yellow-500 rounded-bl-3xl"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center relative z-5">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug">
              Unleash Creative Potential in{" "}
              <span className="text-yellow-600 underline decoration-wavy">
                Youth Workshops
              </span>
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Empower the next generation to explore, experiment, and express
              through hands-on art experiences. Our youth workshops encourage
              critical thinking, collaboration, and creativity using mediums
              like watercolors, ink, and mixed media.
            </p>
            <p className="text-base text-gray-700">
              Perfect for ages 10-18, these sessions foster both individual
              growth and group synergy—skills essential in tomorrow’s creative
              professions.
            </p>
            <Link
              href="/workshops"
              className="inline-block bg-yellow-600 text-white px-6 py-2 shadow-md hover:bg-yellow-700 transition"
            >
              Discover Workshops
            </Link>
          </div>

          {/* Image Section */}
          <div className="relative w-full h-[420px] shadow-xl overflow-hidden">
            <Image
              src="/art4.jpg"
              alt="Creative Youth Workshop"
              fill
              // width={600}
              height={0}
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            {/* Artistic overlay stroke */}
            <div className="absolute -top-3 -left-3 w-full h-full border-4 border-dashed border-yellow-500 rounded-lg pointer-events-none z-10"></div>
          </div>
        </div>
      </section>

      <AboutSection />

      {/* Events Section */}
      {/* Events Section */}
      <section className="relative bg-white py-20 px-6 mx-auto overflow-hidden md:mx-10">
        <h2 className="text-2xl font-light mb-12">Upcoming Events</h2>

        {/* Blinking background crosses */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-3 h-3 border border-yellow-500 rotate-45 blink-slow"></div>
          <div className="absolute bottom-10 right-10 w-3 h-3 border border-yellow-500 rotate-45 blink-slow"></div>
          <div className="absolute top-1/2 left-1/3 w-2 h-2 border border-yellow-400 rotate-45 blink-slow"></div>
        </div>

        {/* Events list */}
        <ul className="flex flex-col md:flex-row justify-between gap-8 text-sm text-gray-700">
          <li className="flex-1">
            <h4 className="text-yellow-700 font-semibold mb-1">→ Paris</h4>
            <p>
              MondapArt Gallery
              <br />
              18 Dauphine Street
              <br />
              75006 Paris
            </p>
          </li>
          <li className="flex-1">
            <h4 className="text-yellow-700 font-semibold mb-1">→ Brussels</h4>
            <p>
              Luxembourg Gallery
              <br />
              100 Rue de la Loi
              <br />
              1040 Brussels
            </p>
          </li>
          <li className="flex-1">
            <h4 className="text-yellow-700 font-semibold mb-1">→ Vannes</h4>
            <p>
              Moor Gallery
              <br />
              45 Venetes Street
              <br />
              56000 Vannes
            </p>
          </li>
        </ul>
      </section>

      {/* <footer
        className="relative h-[60vh] bg-fixed bg-center bg-cover text-white flex items-center justify-center"
        style={{ backgroundImage: "url('/art4.jpg')" }} // Replace with your image
      >
        <div className="bg-black/50 p-8 rounded-md text-center">
          <h2 className="text-3xl font-bold mb-4">Thank you for visiting</h2>
          <p className="text-md">
            © {new Date().getFullYear()} Puneeta Ranjan. All rights reserved.
          </p>
        </div>
      </footer> */}

      <Footer />
    </main>
  );
}
