import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-newblack">
      <section className="mx-auto max-w-[1200px] text-white">
        <div className=" grid py-5 md:grid-cols-3">
          <div className=" px-4 py-8 ">
            <Image
              src="/assets/nav/techkk.png" // Add the correct path to your logo image
              alt="Logo"
              height={100}
              width={280}
            />
            <br />
            <p className="">
              R No 01 KNO 71/95/2/1, Rajanakunte, Yalahanka, Vajram Tiara Foot
              Boll Ground, Doddaballapura main Road, Avalahalli, Bengaluru,
              Bengaluru Urban, Karnataka, 560064
            </p>
            <br />
            <div className="mt-3 flex items-center gap-3">
              <FaMobileAlt />
              <p>+91 8197722432</p>
            </div>
            {/* Social Handle */}
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10 ">
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    <Link href="/" passHref>
                      Home
                    </Link>
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                  <Link href="/about" passHref>
                      About
                    </Link>
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                  <Link href="/products" passHref>
                      Products
                    </Link>
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                  <Link href="/contact" passHref>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Privacy Policy
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Services
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Social Links
                </h1>
                <div className="flex flex-col gap-3">
                  <h1>Subscribe to our newsletter</h1>
                  <input
                    className="rounded-full px-3 py-1 text-black focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 "
                    type="text"
                    placeholder="Email"
                  />
                  <div className=" flex items-center">
                    <a href="#" className="duration-200 hover:scale-105">
                      info@KKtechnology.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border-t-2 border-gray-300/50 py-6 text-center">
            @copyright 2024 KK Technology
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
