import React from "react";
import servicesImg from "../../../../public/assets/sectionOne/stepin.png";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineDoubleArrow } from "react-icons/md";

const RightCard = () => {
  return (
    <div className="flex flex-wrap w-full md:space-x-12 space-x-0 space-y-6 items-center justify-center p-10 mx-auto">
      <div className="text-left w-full max-w-[550px] space-y-5">
        <h1 className="font-bold md:text-[28px] text-[22px]">
        KK <span className="text-blue">TECHNOLOGY</span>
        </h1>
        <p className="font-normal text-paragraph md:text-[16px] text-[16px]">
        KK TECHNOLOGY, an ISO 9001:2015 certified Indian company, specializes in design, distribution, and consultancy for aerospace, military, automotive, industrial, environmental, and electronics sectors. Our expert team ensures efficient sourcing and production, exceeding Six Sigma standards.

        We offer cost-effective solutions from unique components to OEM parts through a vast supplier network. Committed to innovation, we invest in R&D to lead in technology. Our customer-focused approach aims to exceed expectations and build lasting partnerships.
        </p>
        <Link
          href="/contact"
          className="flex items-center text-black text-xl font-bold py-3"
        >
          <span>Contact</span>
          <MdOutlineDoubleArrow className="ml-1 mt-1 text-4lg font-bold text-blue" />
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={servicesImg}
          className="rounded-md w-full max-w-[420px] md:max-w-[520px] object-contain"
          alt=""
        />
      </div>
    </div>
  );
};

export default RightCard;
