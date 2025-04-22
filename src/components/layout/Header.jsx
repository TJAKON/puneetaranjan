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
import { FaClosedCaptioning, FaInstagram, FaPinterestP, FaStore, FaWindowClose } from "react-icons/fa";
import { Bars3Icon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  HeartIcon as HeartSolid,
} from "@heroicons/react/20/solid";
import { Instagram } from "lucide-react";

const navigation = [
  { name: "BLOGS", href: "/Blog", current: false },
  { name: "ART COMMISSION", href: "/artcommission", current: false },
  { name: "FAQS", href: "#testimonials", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Contact us", href: "/contact", current: false },
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
            <Image
              alt="Logo"
              src="/logo1.png"
              width={100}
              height={0}
              className="w-40 object-cover"
            />
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/bookyourEvent"
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
              src="/logo1.png"
              width={100}
              height={0}
              className="w-30"
            />
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/bookyourEvent"
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
            <Link href={""} className="text-black uppercase">
              home
            </Link>

            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-black focus:outline-none  uppercase">
                Portfolio
                <ChevronDownIcon className="h-5 w-5" />
              </PopoverButton>
              <PopoverPanel
                transition
                className="absolute top-12 z-10 mt-3 md:w-[80vh] overflow-hidden rounded-xl bg-black/90 backdrop-blur-lg ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 px-4 py-4">
                  {/* Insert portfolio links or items here */}
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
