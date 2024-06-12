"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setProducts(savedCart);
  }, []);

  const handleGetQuote = () => {
    const cartString = encodeURIComponent(JSON.stringify(products));
    router.push(`/getQuote?cart=${cartString}`);
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
    updateCart(updatedProducts);
  };

  const updateCart = (updatedProducts) => {
    localStorage.setItem('cart', JSON.stringify(updatedProducts));
  };

  return (
    <div className="container mx-auto px-10 py-5">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {products.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {products.map((product, index) => (
            <div key={index} className="mb-4 p-4 border rounded shadow flex">
              <div className="w-1/3">
                <Image
                  src={product.imageSrc}
                  width={500}
                  height={500}
                  alt="Product Image"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-2/3 pl-4">
                <h2 className="font-bold text-xl">{product.title}</h2>
                {product.subtitle && <h3 className="text-lg">{product.subtitle}</h3>}
                <p>{product.description}</p>
                <button
                  onClick={() => handleDeleteProduct(index)}
                  className="bg-red-600 text-white px-4 py-2 rounded mt-5 sm:mt-1 md:mt-2 lg:mt-8 bg-red"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={handleGetQuote}
            className="bg-green text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Proceed to Get Quote
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
