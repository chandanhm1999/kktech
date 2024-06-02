"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/Motion";

export default function Collections() {
  return (
    <div className="min-h-screen py-10 sm:py-8 lg:py-0">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-center gap-8 text-center sm:mb-8 sm:justify-between sm:text-left md:mb-12">
          <div className="flex-col items-center gap-12 pt-5">
            <motion.h2
              className="flex flex-col text-3xl tracking-tight text-blue sm:text-4xl md:text-5xl"
              variants={fadeIn("up", "tween", 0.1, 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              Discover Our Extensive Range &apos;of{" "}
              <span>Specialized Products</span>
            </motion.h2>

            <motion.p
              className="mt-4 max-w-4xl text-base text-body-500 sm:text-lg"
              variants={fadeIn("up", "tween", 0.2, 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              {" "}
              Explore our diverse selection of high-quality products tailored to meet the needs of various industries. We are committed to delivering excellence and innovation across all our product lines.
            </motion.p>
          </div>
        </div>

        <div>
          <motion.div
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-3 pb-10"
            variants={fadeIn("up", "tween", 0.2, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <Link
              href="/products"
              className="group relative flex h-48 items-end overflow-hidden rounded shadow-lg md:col-span-2 md:h-80"
            >
              <Image
                src="/assets/homeSecCollections/aeroplpro.png"
                height={300}
                width={400}
                alt="Aerospace and Défense Products"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 "
              />

              <div className="via-transparent to-transparent pointer-events-none absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
              <p className="relative ml-4 mb-3 inline-block text-sm font-medium text-white md:ml-5 md:text-lg">
              Aerospace and Defense Products
              </p>
            </Link>
            <Link
              href="/products"
              className="group relative flex h-48 items-end overflow-hidden rounded shadow-lg md:h-80"
            >
              <Image
                src="/assets/homeSecCollections/proOne.png"
                height={1024}
                width={1024}
                alt="Satcom and Ground Application Products"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="via-transparent to-transparent pointer-events-none absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>

              <p className="relative ml-4 mb-3 inline-block text-sm font-medium text-white md:ml-5 md:text-lg">
              Satcom and Ground Application Products
              </p>
            </Link>

            <Link
              href="/products"
              className="group relative flex h-48 items-end justify-end overflow-hidden rounded px-4 shadow-lg md:h-80"
            >
              <Image
                src="/assets/homeSecCollections/protwo.png"
                height={1024}
                width={1024}
                alt="Trianga Indigenous and Wave Guide Products"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="via-transparent to-transparent pointer-events-none absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>

              <p className="relative ml-4 mb-3 inline-block text-sm font-medium text-white md:ml-5 md:text-lg">
              Trianga Indigenous and Wave Guide Products
              </p>
            </Link>
            <Link
              href="/products"
              className="group relative flex h-48 items-end overflow-hidden rounded shadow-lg md:h-80"
            >
              <Image
                src="/assets/homeSecCollections/prothree.png"
                height={1024}
                width={1024}
                alt="Hi-Rel Space Qualified Products"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="via-transparent to-transparent pointer-events-none absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>

              <p className="relative ml-4 mb-3 inline-block text-sm font-medium text-white md:ml-5 md:text-lg">
              Hi-Rel Space Qualified Products
              </p>
            </Link>
            <Link
              href="/products"
              className="group relative flex h-48 items-end overflow-hidden rounded shadow-lg md:h-80"
            >
              <Image
                src="/assets/homeSecCollections/profour.png"
                height={1024}
                width={1024}
                alt="Test Measurements and Embedded Products"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="via-transparent to-transparent pointer-events-none absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
              <p className="relative ml-4 mb-3 inline-block text-sm font-medium text-white md:ml-5 md:text-lg">
              Test Measurements and Embedded Products
              </p>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
