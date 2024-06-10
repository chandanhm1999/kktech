import React from "react";

function Helico() {
  return (
    <section aria-labelledby="cause-heading">
      <div className="relative bg-black py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/assets/homeSecCollections/helico.png"
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black bg-opacity-50"
        />
        <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
          <h2
            id="cause-heading"
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
          >
            Long-term thinking
          </h2>
          <p className="mt-3 text-xl text-white">
            At KK Technologies, we are dedicated to forging strong relationships
            with our partners, customers, and communities. Our diverse team of
            experts is committed to delivering innovative technology solutions.
          </p>

          <button className=" border-primary bg-black  text-white transition-colors duration-300 hover:bg-primary/80
          mt-8 w-full block border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto">
            <a
              href="/products"
              
            >
              Our Products
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Helico;
