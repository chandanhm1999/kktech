"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ProductDetails = () => {
  const router = useRouter();
  const { query } = router;
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (query.product) {
      const selectedProduct = JSON.parse(query.product);
      setProduct(selectedProduct);
      // Find related products
      const related = productData.filter(p => p.title === selectedProduct.title && p !== selectedProduct);
      setRelatedProducts(related);
    }
  }, [query.product]);

  const addToCart = (product) => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const newCart = [...savedCart, product];
    localStorage.setItem('cart', JSON.stringify(newCart));
    router.push('/cart');
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container py-8">
      <button onClick={() => router.back()} className="mb-4 rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-800">
        Back
      </button>
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
        {product.subtitle && <h2 className="mb-2">{product.subtitle}</h2>}
        <Image
          src={product.imageSrc}
          width={500}
          height={500}
          alt="Product Image"
          className="w-full h-auto object-cover mb-4"
        />
        <p>{product.description}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 rounded bg-green-600 px-4 py-2 text-white hover:bg-green-800"
        >
          Add to Cart
        </button>
      </div>
      {relatedProducts.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Related Products</h3>
          <div className="grid grid-cols-1 gap-3">
            {relatedProducts.map((extraProduct, index) => (
              <div key={index} className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950">
                <Image
                  src={extraProduct.imageSrc}
                  width={500}
                  height={500}
                  alt="Extra Product Image"
                  className="mx-auto h-[150px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                />
                <h2 className="line-clamp-1 text-lg font-bold">{extraProduct.subtitle}</h2>
                <p className="line-clamp-2">{extraProduct.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
