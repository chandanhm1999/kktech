"use client";

import {
  IconMenu2,
  IconMinus,
  IconShoppingCart,
  IconNotes,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (route) => pathname === route ? 'bg-body-600 text-white' : 'text-black';

  return (
    <header className="sticky top-0 z-50 flex w-full flex-wrap bg-lightwhite py-2 text-sm sm:flex-nowrap sm:justify-start">
      <nav
        className="mx-auto w-full px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" passHref>
              <Image
                src="/assets/nav/techkk.png" // Add the correct path to your logo image
                alt="Logo"
                height={100}
                width={280}
              />
            </Link>
          </div>

          {/* Mobile menu buttons */}
          <div className="sm:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-body-200 p-2 align-middle text-sm font-medium text-body-400 shadow-sm transition-all"
              aria-controls="navbar-collapse-basic"
              aria-label="Toggle navigation"
            >
              {menuOpen ? (
                <IconMinus className="h-4 w-4" />
              ) : (
                <IconMenu2 className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <div
          id="navbar-collapse-basic"
          className={`${
            menuOpen ? "block" : "hidden"
          } grow basis-full sm:block`}
        >
          <div className="mt-5 flex flex-col gap-4 tracking-tight sm:mt-0 sm:flex-row sm:items-center sm:pl-5 md:text-sm">
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Link href="/" passHref>
                <span className={`rounded py-1.5 px-3 text-sm font-medium hover:bg-body-600 hover:text-white ${isActive('/')}`}>
                  Home
                </span>
              </Link>

              <Link href="/about" passHref>
                <span className={`rounded py-1.5 px-3 text-sm font-medium hover:bg-body-600 hover:text-white ${isActive('/about')}`}>
                  About
                </span>
              </Link>

              <Link href="/products" passHref>
                <span className={`rounded py-1.5 px-3 text-sm font-medium hover:bg-body-600 hover:text-white ${isActive('/products')}`}>
                  Products
                </span>
              </Link>

              
            </div>

            <div className="flex flex-col items-center gap-3 sm:ml-auto sm:flex-row">
              <Link href="/contact" passHref className="flex items-center gap-x-1.5 rounded border-accent-300 py-1.5 px-3 font-medium text-body-500 hover:bg-body-100 sm:border sm:border-primary-300 sm:bg-primary sm:font-semibold sm:text-primary-800 sm:hover:bg-primary-300">
                <IconNotes size={20} stroke={1.5} className="hidden sm:block" />
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
