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
  const product = searchParams.get('product');

  const [productDetails, setProductDetails] = useState({
    title: "",
    subtitle: "",
    description: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: ""
  });

  useEffect(() => {
    if (product) {
      const parsedProduct = JSON.parse(decodeURIComponent(product));
      setProductDetails(parsedProduct);
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Combine product details and form data
    const dataToSend = {
      ...productDetails,
      ...formData
    };
    // Send email using your preferred method
    const res = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
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
          <label className="block text-gray-700">Product Title</label>
          <input
            type="text"
            value={productDetails.title}
            readOnly
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Subtitle</label>
          <input
            type="text"
            value={productDetails.subtitle}
            readOnly
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            value={productDetails.description}
            readOnly
            className="w-full px-3 py-2 border rounded"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
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
