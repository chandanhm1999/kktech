"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";

const BannerDetails = ({ reverse, img }) => {
  return (
    <section>
      <main className="bg-slate-100 dark:bg-slate-900 dark:text-white">
        <section className="container flex flex-col items-center justify-center py-10 md:h-[500px]">
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className={reverse ? "order-1" : ""}
            >
              <Image
                src="/assets/sectionOne/rocket.png"
                width={600}
                height={1000}
                alt="aero"
                className="mx-auto w-full hover:drop-shadow-md"
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true"
              className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
                reverse ? "md:order-last" : ""
              }`}
            >
              <h1 className="text-2xl md:text-4xl">Our Services Include:</h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                We deliver high-quality products and services to leading
                aerospace, military, and commercial manufacturers, as well as
                OEMs worldwide. Our team is dedicated to helping you design,
                implement, and manage the development of customized solutions to
                meet your evolving needs.
              </p>
              <div>
                <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4">
                  <li className="font-medium">Extensive (Component Supply)</li>
                  <li className="font-medium">
                    Comprehensive (Project Management)
                  </li>
                  <li className="font-medium">Uncompromising (Quality)</li>
                </ul>
              </div>
              <div className="space-x-4">
                <Link href="/about">
                  <button className="border-primary bg-black px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80 hover:text-black">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default BannerDetails;
