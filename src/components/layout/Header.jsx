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
import { ChevronRightIcon, Instagram } from "lucide-react";

const navigation = [
  { name: "BLOGS", href: "/pages/blog", current: false },
  { name: " PORTFOLIO", href: "/pages/portfolio", current: false },
  { name: "MEDIA", href: "/pages/media", current: false },
  { name: "About", href: "/pages/about", current: false },
  { name: "Contact us", href: "/pages/contact", current: false },
];
const navigationMobile = [
  { name: "HOME", href: "/", current: false },
  { name: "BLOGS", href: "/pages/blog", current: false },
  { name: " PORTFOLIO", href: "/pages/portfolio", current: false },
  { name: "MEDIA", href: "/pages/media", current: false },
  { name: "About", href: "/pages/about", current: false },
  { name: "Contact us", href: "/pages/contact", current: false },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-transparent backdrop-blur-xs text-white fixed w-full top-0 z-10">
      <nav
        aria-label="Global"
        className=" justify-between px-4 py-2 lg:px-0 lg:py-1"
      >
        {/* Desktop Header */}
        <div className="hidden lg:flex justify-between w-full">
          <div className="flex flex-1">
            <img
              alt="Logo"
              href="/"
              src="/logo1.png"
              className="w-40 object-cover"
            />
            {/* <p>Puneeta Ranjan </p> */}
          </div>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <div className="hidden lg:flex justify-center items-center md:py-3 gap-3">
            <PopoverGroup className="flex justify-center gap-x-6 px-6 text-sm font-medium">
              <Link href={"/"} className="text-black uppercase">
                home
              </Link>

              <Popover className="relative group">
                <PopoverButton className="flex items-center gap-1 text-black transition focus:outline-none">
                  AVAILABLE WORKS
                  <ChevronDownIcon className="h-5 w-5" />
                </PopoverButton>

                <PopoverPanel className="absolute top-15 left-0 z-30 w-72 bg-[#070B2A] backdrop-blur-xl p-4 space-y-4 text-sm text-white/90 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
                  {/* Our Expertise */}
                  <div className="relative group/exp">
                    <div className="w-full text-left font-semibold text-white hover:text-blue-300 flex justify-between items-center cursor-pointer">
                      Paintings <ChevronRightIcon className="w-4 h-4" />
                    </div>
                    <div className="absolute left-full -top-4 z-40 ml-4 w-72 bg-[#070B2A] backdrop-blur-xl p-4 space-y-2 text-white/90 invisible opacity-0 group-hover/exp:visible group-hover/exp:opacity-100 transition-all duration-300">
                      <Link
                        href="/pages/services/ourSolutions/digital-transformation"
                        className="block"
                      >
                        Oil Paintings
                      </Link>
                      <Link
                        href="/pages/services/ourSolutions/crm-erp-solution"
                        className="block"
                      >
                        Work on paper
                      </Link>
                    </div>
                  </div>

                  {/* Our Solutions */}
                  <div className="relative group/sol">
                    <div className="w-full text-left font-semibold text-white hover:text-blue-300 flex justify-between items-center cursor-pointer">
                      Drawings <ChevronRightIcon className="w-4 h-4" />
                    </div>
                    <div className="absolute left-full -top-13 z-40 ml-4 w-72 bg-[#070B2A] backdrop-blur-xl p-4 space-y-2 text-white/90 invisible opacity-0 group-hover/sol:visible group-hover/sol:opacity-100 transition-all duration-300">
                      <Link
                        href="/pages/services/ourSolutions/digital-transformation"
                        className="block"
                      >
                        Doodle
                      </Link>
                      <Link
                        href="/pages/services/ourSolutions/crm-erp-solution"
                        className="block"
                      >
                        Sketches
                      </Link>
                    </div>
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
              <FaInstagram className="w-5 h-5 text-black" />
              <FaPinterestP className="w-5 h-5 text-black" />
            </PopoverGroup>
          </div>

          {/* <div className="flex items-center gap-6">
            <Link
              href="/pages/store"
              className="text-white text-center text-xl uppercase"
            >
              Store
            </Link>
          </div> */}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex justify-between items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
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
              className="text-white/70 text-center text-xl uppercase"
            >
              <FaStore className="w-8 h-8" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu (Dialog) */}
        <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
          <DialogPanel className="fixed inset-0 z-50 bg-white text-white  transform transition-all duration-500 ease-in-out">
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
                className="text-white p-2 text-center justify-center "
              >
                Close
              </button>
            </div>
            <div className="flex flex-col items-center py-4">
              {navigationMobile.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-white text-xl uppercase"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/bookyourEvent"
                className="py-2 text-white text-xl uppercase"
              >
                Store
              </Link>
            </div>
          </DialogPanel>
        </Dialog>
      </nav>
    </header>
  );
};
