"use client"

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const ProductAero = () => {
  return (
    <main>
      <section className="container bg-primary-100 py-8">
        <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
          Our Latest Products
        </h1>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <Image
                src="/assets/homeSecCollections/proOne.png"
                width={500}
                height={500}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-slate-600">
              
              <p className="line-clamp-1 text-sm"> By KK Tech</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
              Aerospace and Defense Products
              </h1>
              <p className="line-clamp-2">
              Enhance your operations with our top-tier aerospace and defense solutions, designed for precision and reliability in the most demanding environments.
              </p>
            </div>
          </div>
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <Image
                src="/assets/homeSecCollections/protwo.png"
                width={500}
                height={500}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-slate-600">
              
              <p className="line-clamp-1 text-sm"> By KK Tech</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
              Satcom and Ground Application Products      
                      </h1>
              <p className="line-clamp-2">
              Stay connected with our advanced satellite communication and ground application products, engineered for optimal performance and durability.
              </p>
            </div>
          </div>
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <Image
                src="/assets/homeSecCollections/aeroplpro.png"
                width={500}
                height={500}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-slate-600">
              
              <p className="line-clamp-1 text-sm"> By KK Tech</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
              Trianga Indigenous and Wave Guide Products
              </h1>
              <p className="line-clamp-2">
              Experience the cutting-edge technology of our Trianga indigenous and wave guide products, crafted to deliver superior performance and efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container bg-primary-100 py-8">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <Image
                src="/assets/homeSecCollections/prothree.png"
                width={500}
                height={500}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-slate-600">
              
              <p className="line-clamp-1 text-sm"> By KK Tech</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
              Hi-Rel Space Qualified Products
              </h1>
              <p className="line-clamp-2">
              Trust our high-reliability space-qualified products for your critical space missions, ensuring unmatched quality and dependability.
              </p>
            </div>
          </div>
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <Image
                src="/assets/homeSecCollections/profour.png"
                width={500}
                height={500}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-slate-600">
              
              <p className="line-clamp-1 text-sm"> By KK Tech</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
              Raw Materials, Fasteners, and Ceramic Products      
                      </h1>
              <p className="line-clamp-2">
              Source the finest raw materials, fasteners, and ceramic products from us, offering exceptional quality to meet your manufacturing and production needs.
              </p>
            </div>
          </div>
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <Image
                src="/assets/homeSecCollections/proOne.png"
                width={500}
                height={500}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-slate-600">
              
              <p className="line-clamp-1 text-sm"> By KK Tech</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
              AMC for SATCOM Antenna & RF Components
              </h1>
              <p className="line-clamp-2">
              Ensure the longevity and performance of your SATCOM antennas and RF components with our expert AMC services, providing maintenance and support you can rely on.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductAero;
