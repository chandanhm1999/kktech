"use client";
import { Suspense } from 'react';
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const Page = () => {
    // Wrap useSearchParams in Suspense
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <PageContent />
      </Suspense>
    );
  };
const PageContent = () => {
  const searchParams = useSearchParams();
  const cart = searchParams.get('cart');

  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    if (cart) {
      const parsedCart = JSON.parse(decodeURIComponent(cart));
      setProducts(parsedCart);
    }
  }, [cart]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      products,
    };

    // Send email using your preferred method
    const res = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert('Email sent successfully!');
    } else {
      alert('Failed to send email.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Get a Quote</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          ></textarea>
        </div>

        {products.map((product, index) => (
          <div key={index} className="mb-4">
            <h2 className="font-bold">{product.title}</h2>
            <p>{product.subtitle}</p>
            <p>{product.description}</p>
          </div>
        ))}

        <button
          type="submit"
          className="bg-green text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send Quote
        </button>
      </form>
    </div>
  );
};

export default Page;
