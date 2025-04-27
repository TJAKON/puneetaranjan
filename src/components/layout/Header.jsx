"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  FaClosedCaptioning,
  FaInstagram,
  FaPinterestP,
  FaStore,
  FaWindowClose,
} from "react-icons/fa";
import { Bars3Icon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  HeartIcon as HeartSolid,
} from "@heroicons/react/20/solid";
import { Instagram } from "lucide-react";

const navigation = [
  { name: "HOME", href: "/", current: false },
  { name: "BLOGS", href: "/pages/blog", current: false },
  { name: "ART COMMISSION", href: "/pages/artCommission", current: false },
  { name: "FAQS", href: "/pages/faqs", current: false },
  { name: "About", href: "/pages/about", current: false },
  { name: "Contact us", href: "/pages/contact", current: false },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-transparent backdrop-blur-sm text-black sticky top-0 z-10">
      <nav
        aria-label="Global"
        className="mx-auto max-w-7xl justify-between px-4 py-2 lg:px-0 lg:py-1"
      >
        {/* Desktop Header */}
        <div className="hidden lg:flex justify-between items-baseline w-full">
          <div className="flex items-baseline gap-x-4">
            <FaInstagram className="w-6 h-6" />
            <FaPinterestP className="w-6 h-6" />
          </div>

          <div className="flex justify-center flex-1">
            <img
              alt="Logo"
              href="/"
              src="/logo1.png"
              className="w-40 object-cover"
            />
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/pages/store"
              className="text-black text-center text-xl uppercase"
            >
              Store
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex justify-between items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-8 w-8" />
          </button>

          <div className="flex justify-center flex-1">
            <Image
              alt="Logo"
              href="/"
              src="/logo1.png"
              width={100}
              height={0}
              className="w-30"
            />
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/pages/store"
              className="text-black/70 text-center text-xl uppercase"
            >
              <FaStore className="w-8 h-8" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu (Dialog) */}
        <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
          <DialogPanel className="fixed inset-0 z-50 bg-white text-black  transform transition-all duration-500 ease-in-out">
            <div className="flex justify-between items-center p-2">
              <div className=" items-center">
                <FaInstagram className="w-6 h-6 mb-3" />
                <FaPinterestP className="w-6 h-6" />
              </div>
              <div className="flex justify-center flex-1">
                <Image
                  alt="Logo"
                  href="/"
                  src="/logo1.png"
                  width={100}
                  height={0}
                  className="w-30"
                />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-black p-2 text-center justify-center "
              >
                Close
              </button>
            </div>
            <div className="flex flex-col items-center py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-black text-xl uppercase"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/bookyourEvent"
                className="py-2 text-black text-xl uppercase"
              >
                Store
              </Link>
            </div>
          </DialogPanel>
        </Dialog>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <div className="hidden lg:flex justify-center items-center md:py-3">
          <PopoverGroup className="flex justify-center gap-x-8 text-lg font-medium">
            <Link href={"/"} className="text-black uppercase">
              home
            </Link>

            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-black focus:outline-none uppercase">
                Portfolio
                <ChevronDownIcon className="h-5 w-5" />
              </PopoverButton>

              <PopoverPanel className="absolute top-8 z-10 mt-3 w-64 overflow-hidden bg-transparent backdrop-blur-sm ring-1 shadow-2xl ring-gray-900/5 transition-all">
                <div className="flex flex-col gap-3 p-4">
                  <Link
                    href="/"
                    className="text-black hover:text-blue-600 font-medium"
                  >
                    Acrylic
                  </Link>
                  <Link
                    href="/"
                    className="text-black hover:text-blue-600 font-medium"
                  >
                    Watercolor
                  </Link>
                  <Link
                    href="/"
                    className="text-black hover:text-blue-600 font-medium"
                  >
                    Gouache
                  </Link>
                  <Link
                    href="/"
                    className="text-black hover:text-blue-600 font-medium"
                  >
                    Drawings
                  </Link>
                </div>
              </PopoverPanel>
            </Popover>

            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-black uppercase"
              >
                {item.name}
              </Link>
            ))}
          </PopoverGroup>
        </div>
      </nav>
    </header>
  );
};
