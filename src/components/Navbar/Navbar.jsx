"use client";

import {
  IconMenu2,
  IconMinus,
  IconShoppingCart,
  IconUserCircle,
  IconUserPlus,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
                <span className="rounded py-1.5 px-3 text-sm font-medium text-black hover:bg-body-600">
                  Home
                </span>
              </Link>

              <Link href="/products" passHref>
                <span className="rounded py-1.5 px-3 text-sm font-medium text-black hover:bg-body-600">
                  Products
                </span>
              </Link>

              <Link href="/about" passHref>
                <span className="rounded py-1.5 px-3 text-sm font-medium text-black hover:bg-body-600">
                  About
                </span>
              </Link>

              <Link href="/blog" passHref>
                <span className="rounded py-1.5 px-3 text-sm font-medium text-black hover:bg-body-600">
                  Blog
                </span>
              </Link>
            </div>

            <div className="flex flex-col items-center gap-3 sm:ml-auto sm:flex-row">
              <button className="flex items-center gap-x-1.5 rounded border-accent py-1.5 px-3 font-medium text-body-500 hover:bg-body-100 sm:border">
                <IconUserPlus size={20} stroke={1.5} className="hidden sm:block" />
                Refer Friends
              </button>

              <button className="flex items-center gap-x-1.5 rounded border-accent-300 py-1.5 px-3 font-medium text-body-500 hover:bg-body-100 sm:border sm:border-primary-300 sm:bg-primary sm:font-semibold sm:text-primary-800 sm:hover:bg-primary-300">
                <IconUserCircle size={20} stroke={1.5} className="hidden sm:block" />
                Account
              </button>

              <button className="rounded py-1.5 px-3 text-body-900 hover:bg-body-100">
                <IconShoppingCart stroke={1.5} size={24} className="hidden sm:block" />
                <span className="text-body-500 sm:hidden">Your Cart</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
