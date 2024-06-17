"use client"

// pages/ProductAero.js

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link"; 

const productData = [
  {
    id: 1,
    imageSrc: "/assets/homeCollections/nee.png",
    title: "Defense Products",
    subtitle: "RF Components",
    description:
      "Enhance your operations with our top-tier aerospace and defense solutions, designed for precision and reliability in the most demanding environments.",
    clicked: "product1"
  },
  {
    id: 2,
    imageSrc: "/assets/homeCollections/sat.png",
    title: "Satcom and Ground Application Products",
    subtitle: "RF Components",
    description:
      "Stay connected with our advanced satellite communication and ground application products, engineered for optimal performance and durability.",
    clicked: "product2"
  },
  {
    id: 3,
    imageSrc: "/assets/homeCollections/view.png",
    title: "KK Indigenous and Wave Guide Products",
    subtitle: "PCB Assemblies",
    description:
      "Experience the cutting-edge technology of our Trianga indigenous and wave guide products, crafted to deliver superior performance and efficiency.",
    clicked: "product3"
  },
  {
    id: 4,
    imageSrc: "/assets/homeCollections/chan.png",
    title: "Hi-Rel Space Products",
    subtitle: "Cable Assemblies",
    description:
      "Trust our high-reliability space-qualified products for your critical space missions, ensuring unmatched quality and dependability.",
    clicked: "product4"
  },
  {
    id: 5,
    imageSrc: "/assets/homeCollections/seveen.png",
    title: "Test & Measurements Products",
    subtitle: "RF Components",
    description:
      "Source the finest raw materials, fasteners, and ceramic products from us, offering exceptional quality to meet your manufacturing and production needs.",
    clicked: "product5"
  },
  {
    id: 6,
    imageSrc: "/assets/homeCollections/six.png",
    title: "AMC for satcom services",
    subtitle: "RF Components",
    description:
      "Ensure the longevity and performance of your SATCOM antennas and RF components with our expert AMC services, providing maintenance and support you can rely on.",
    clicked: "product6"
  },
  {
    id: 7,
    imageSrc: "/assets/homeCollections/raw.png",
    title: "Specialized Raw Materials & Ceramics Products",
    subtitle: "RF Components",
    description:
      "Ensure the longevity and performance of your SATCOM antennas and RF components with our expert AMC services, providing maintenance and support you can rely on.",
    clicked: "product7"
  },
  {
    id: 8,
    imageSrc: "/assets/homeCollections/medi.png",
    title: "Medical & Scientific components",
    subtitle: "RF Components",
    description:
      "Ensure the longevity and performance of your SATCOM antennas and RF components with our expert AMC services, providing maintenance and support you can rely on.",
    clicked: "product8"
  },
];

const ProductAero = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    AOS.init();
    setProducts(productData);
  }, []);

  return (
    <main>
      <section className="container py-8">
        <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
          Our Products
        </h1>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              id="card"
              className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
            >
              <div className="overflow-hidden">
                <Image
                  src={product.imageSrc}
                  width={500}
                  height={500}
                  alt="Product Image"
                  className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                />
              </div>
              <div className="flex justify-between pt-2 text-slate-600"></div>
              <div className="space-y-3 py-3">
                <h1 className="line-clamp-1 text-xl font-bold">{product.title}</h1>
                {product.subtitle && <h2>{product.subtitle}</h2>}
                <p className="line-clamp-2">{product.description}</p>
                <Link
                  href={`/products/${product.clicked}`}
                  passHref  // Ensure passHref is used to pass href prop to the underlying <a> tag
                >
                  <button
                    className="mt-2 rounded bg-black px-4 py-2 text-white hover:bg-blue-600"
                  >
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductAero;