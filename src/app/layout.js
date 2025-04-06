import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Puneeta Ranjan - Art & Paintings",
  description:
    "Explore the exquisite world of paintings by Puneeta Ranjan. Discover mesmerizing oil paintings, nature-inspired artworks, past exhibitions, and behind-the-scenes creations.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> */}
      <Header />
      <body className="bg-white text-black antialiased">{children}</body>
      <Footer />
    </html>
  );
}
