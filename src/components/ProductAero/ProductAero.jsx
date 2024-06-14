"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useRouter } from "next/navigation";  // Correct import for navigation

// Example JSON data; replace with actual data fetching in a real application
const productData = [
  {
    imageSrc: "/assets/homeCollections/Onee.png",
    title: "Defense Products",
    subtitle: "RF Components",
    description:
      "Enhance your operations with our top-tier aerospace and defense solutions, designed for precision and reliability in the most demanding environments.",
  },
  {
    imageSrc: "/assets/homeCollections/twoo.png",
    title: "Satcom and Ground Application Products",
    subtitle: "RF Components",
    description:
      "Stay connected with our advanced satellite communication and ground application products, engineered for optimal performance and durability.",
  },
  {
    imageSrc: "/assets/homeCollections/three.png",
    title: "KK Indigenous and Wave Guide Products",
    subtitle: "PCB Assemblies",
    description:
      "Experience the cutting-edge technology of our Trianga indigenous and wave guide products, crafted to deliver superior performance and efficiency.",
  },
  {
    imageSrc: "/assets/homeCollections/four.png",
    title: "Hi-Rel Space Products",
    subtitle: "Cable Assemblies",
    description:
      "Trust our high-reliability space-qualified products for your critical space missions, ensuring unmatched quality and dependability.",
  },
  {
    imageSrc: "/assets/homeCollections/seveen.png",
    title: "Test & Measurements Products",
    subtitle: "RF Components",
    description:
      "Source the finest raw materials, fasteners, and ceramic products from us, offering exceptional quality to meet your manufacturing and production needs.",
  },
  {
    imageSrc: "/assets/homeCollections/six.png",
    title: "AMC for satcom services",
    subtitle: "RF Components",
    description:
      "Ensure the longevity and performance of your SATCOM antennas and RF components with our expert AMC services, providing maintenance and support you can rely on.",
  },
  {
    imageSrc: "/assets/homeCollections/five.png",
    title: "Specialized Raw Materials & Ceramics Products",
    subtitle: "RF Components",
    description:
      "Ensure the longevity and performance of your SATCOM antennas and RF components with our expert AMC services, providing maintenance and support you can rely on.",
  },
  {
    imageSrc: "/assets/homeCollections/eight.png",
    title: "Medical & Scientfic components",
    subtitle: "RF Components",
    description:
      "Ensure the longevity and performance of your SATCOM antennas and RF components with our expert AMC services, providing maintenance and support you can rely on.",
  },
];

const ProductAero = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    AOS.init();
    setProducts(productData);
    // Load cart from localStorage on mount
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    console.log("Added to cart:", product); // Debug log
    closeModal();
  };

  const handleViewCart = () => {
    router.push(`/cart`);
  };

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
                <button
                  onClick={() => openModal(product)}
                  className="mt-2 rounded bg-black px-4 py-2 text-white hover:bg-blue-600"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-8 rounded shadow-lg max-w-md mx-auto">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 font-bold text-lg text-white bg-black hover:bg-red px-2.5 pb-1 rounded-full"
            >
              &times;
            </button>
            <h1 className="text-2xl font-bold mb-4">{selectedProduct.title}</h1>
            {selectedProduct.subtitle && <h2 className="mb-2">{selectedProduct.subtitle}</h2>}
            <Image
              src={selectedProduct.imageSrc}
              width={500}
              height={500}
              alt="Product Image"
              className="w-full h-auto object-cover mb-4"
            />
            <p>{selectedProduct.description}</p>
            <button
              onClick={() => addToCart(selectedProduct)}
              className="mt-4 rounded bg-green px-4 py-2 text-white hover:bg-lightyellow"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}

      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4">
          <button
            onClick={handleViewCart}
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-800"
          >
            View Cart ({cart.length})
          </button>
        </div>
      )}
    </main>
  );
};

export default ProductAero;
