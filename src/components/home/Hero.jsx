import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="bg-black from-violet-950 to-violet-900 pt-20 dark:bg-violet-950 "
    style={{backgroundImage: 'url(/assets/sectionOne/aero.png)', backgroundSize: 'cover'}}
    >
      <section className="container flex h-[650px] flex-col items-center justify-center md:h-[500px] ">
        <div className="grid grid-cols-1 items-center gap-8 dark:text-white md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col items-center gap-4 text-center text-white md:items-start md:text-left "
          >
            <h1 className=" text-4xl ">
              KK Technologies
            </h1>
            <p className="">
            We specialize in the distribution of a comprehensive range of electronic and electrical components. Our commitment to excellence ensures that we deliver high-quality products and services to leading aerospace, military, and commercial manufacturers, as well as OEMs around the globe.
            </p>
            <div className="space-x-4">
              <button className=" border-primary bg-black px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                Get Started
              </button>
        
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className="mx-auto max-w-xs p-4"
          >
            <Image src="/assets/sectionOne/aero.jpg" alt="Ifo" width={500}
            height={500} className="hover:drop-shadow-md" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
