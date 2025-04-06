import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
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
      </section>

      {/* Featured Artwork */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-12 items-center bg-[#f6f6f6]">
        <div className="relative w-full h-[400px]">
          <Image
            src="/art1.jpg"
            alt="Featured Art"
            fill
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-light mb-4">Puneeta Ranjan</h2>
          <p className="text-sm leading-relaxed">
            A story of resilience...
            <br />
            The strength that lies within each of us.
            <br />
            A transformation followed by a meeting can open doors to an infinite world.
          </p>
          <Link
            href="/about"
            className="text-yellow-700 underline mt-4 inline-block"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="grid md:grid-cols-3 gap-8 px-6 py-16 max-w-7xl mx-auto">
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

      {/* Youth Workshop Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-6 py-20 bg-[#fdfbf7]">
        <div>
          <h2 className="text-2xl font-light mb-4">Youth Workshops</h2>
          <p className="text-sm text-gray-700 mb-4">
            These workshops are tangible and real ways to experience the power of creation,
            to bring out collective intelligence—so sought after in today's professions.
          </p>
          <Link href="/workshops" className="text-yellow-700 underline">
            Learn More
          </Link>
        </div>
        <div className="relative w-full h-[400px]">
          <Image
            src="/art4.jpg"
            alt="Workshop Art"
            fill
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-white py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-light mb-10">Upcoming Events</h2>
        <div className="grid md:grid-cols-3 gap-10 text-sm">
          <div>
            <h4 className="text-yellow-700 font-semibold">→ Paris</h4>
            <p>
              MondapArt Gallery
              <br />
              18 Dauphine Street
              <br />
              75006 Paris
            </p>
          </div>
          <div>
            <h4 className="text-yellow-700 font-semibold">→ Brussels</h4>
            <p>
              Luxembourg Gallery
              <br />
              100 Rue de la Loi
              <br />
              1040 Brussels
            </p>
          </div>
          <div>
            <h4 className="text-yellow-700 font-semibold">→ Vannes</h4>
            <p>
              Moor Gallery
              <br />
              45 Venetes Street
              <br />
              56000 Vannes
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
