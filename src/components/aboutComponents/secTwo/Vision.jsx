import React from 'react'
import Image from "next/image";
const Vision = () => {
  return (
    <div className="w-full max-w-[1366px] px-5 md:px-10 mx-auto">
      <div className="py-12 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 text-3xl font-semibold tracking-tight lg:text-4xl sm:leading-none">
                Our <span className="font-extrabold text-blue">Vision</span> 
              </h2>
              <p className="mt-5 md:text-lg">
                At KK Tech, our vision is to be a global leader in technology
                innovation, setting the standard for excellence and driving the
                future of our industry. We aim to create a better, more
                connected world through cutting-edge solutions that empower
                businesses and enrich lives.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <Image
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="/assets/sectionOne/rocket.png"
                width={400}
                height={400}
                alt="about1"
              />
              <Image
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="/assets/sectionOne/jet.png"
                width={400}
                height={400}
                alt="about3"
              />
            </div>
            <div className="px-3">
              <Image
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="/assets/sectionOne/aero.png"
                width={400}
                height={400}
                alt="about2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vision
