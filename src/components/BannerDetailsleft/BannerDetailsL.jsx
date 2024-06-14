"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";

const BannerDetailsL = ({ reverse, img }) => {
  return (
    <section>
      <main className="bg-slate-100 dark:bg-slate-900 dark:text-white pb-10">
        <section className="container flex flex-col items-center justify-center md:h-[400px] ">
          <div className="grid grid-cols-1 items-center gap-4  md:grid-cols-2">
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
                reverse ? "md:order-last" : ""
              } `}
            >
              <h1 className="text-2xl md:text-4xl ">SPACE INDUSTRY</h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                KK Technology is a one-stop electronic distributor providing a
                broad array of space level electronic and electrical components.
                We supply high reliability electronics products and value-added
                services to leading space manufacturers and OEMs globally
              </p>
              <div>
                <ul className="flex list-inside list-disc flex-col gap-2  md:gap-4">
                  <li className="font-medium">Innovative (Solutions)</li>
                  <li className="font-medium">Dedicated (Support)</li>
                  <li className="font-medium"> Unmatched (Expertise)</li>
                </ul>
              </div>
              <div className="space-x-4">
                <Link href="/about">
                  <button className=" border-primary bg-black px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80 hover:text-black">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true"
              className={reverse ? "order-1" : ""}
            >
              <Image
                src="/assets/sectionOne/jet.png"
                width={600}
                height={1000}
                alt="aero"
                className="max-auto w-full hover:drop-shadow-md"
              />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default BannerDetailsL;
