import "../styles/globals.css";
import Hero from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-white text-gray-800 flex flex-col min-h-screen">
      <Hero />

      <section className="text-center my-8 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="mb-3 text-lg">
            Contemporary British artist based in Lincolnshire
          </p>
          <blockquote className="italic text-gray-600">
            Jane Hindmarch is a British contemporary artist known for her
            observational multidisciplinary art drawn from a close contemplation
            of the natural world.
          </blockquote>
        </div>
      </section>

      <Footer />
    </main>
  );
}
