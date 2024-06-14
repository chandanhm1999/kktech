"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/Motion";
import collectionsData from "./data/collectionsData.json"; // Import the JSON data

export default function Collections() {
  const { heading, description, products } = collectionsData;

  return (
    <div className="min-h-screen py-10 sm:py-8 lg:py-0">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-center gap-8 text-center sm:mb-8 sm:justify-between sm:text-left md:mb-12">
          <div className="flex-col items-center gap-12 pt-5">
            <motion.h2
              className="flex flex-col text-2xl tracking-tight text-blue sm:text-2xl md:text-2xl"
              variants={fadeIn("up", "tween", 0.1, 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              {heading}
            </motion.h2>

            <motion.p
              className="mt-4 max-w-4xl text-sm text-body-500 sm:text-lg"
              variants={fadeIn("up", "tween", 0.2, 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              {description}
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
            {products.map((product, index) => (
              <Link
                key={product.id}
                href={product.link}
                className={`group relative flex h-48 items-end overflow-hidden rounded shadow-lg ${index === 0 ? 'md:col-span-2 md:h-80' : 'md:h-80'}`}
              >
                <Image
                  src={product.image}
                  height={300}
                  width={400}
                  alt={product.alt}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="via-transparent to-transparent pointer-events-none absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
                <p className="relative ml-4 mb-3 inline-block text-sm font-medium text-white md:ml-5 md:text-lg">
                  {product.title}
                </p>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
