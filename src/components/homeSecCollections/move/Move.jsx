"use client"

// Swipe.jsx
import React from "react";
import Slider from "react-slick";
import BlogCard from "./BlogCard";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    />
  );
}


const Move = () => {
  const products = [
    {
      id: 1,
      title: "Defense Products",
      image: "/assets/homeCollections/Onee.png",
      alt: "Aerospace and Defense Products",
      link: "/products",
    },
    {
      id: 2,
      title: "Satcom and Ground Application Products",
      image: "/assets/homeCollections/twoo.png",
      alt: "Satcom and Ground Application Products",
      link: "/products",
    },
    {
      id: 3,
      title: "KK Indigenous and Wave Guide Products",
      image: "/assets/homeCollections/three.png",
      alt: "Trianga Indigenous and Wave Guide Products",
      link: "/products",
    },
    {
      id: 4,
      title: "Hi-Rel Space Products",
      image: "/assets/homeCollections/four.png",
      alt: "Hi-Rel Space Qualified Products",
      link: "/products",
    },
    {
      id: 5,
      title: "Test & Measurements Products",
      image: "/assets/homeCollections/seveen.png",
      alt: "Test Measurements and Embedded Products",
      link: "/products",
    },
    {
      id: 6,
      title: "AMC for satcom services",
      image: "/assets/homeCollections/six.png",
      alt: "Satcom and Ground Application Products",
      link: "/products",
    },
    {
      id: 7,
      title: "Specialized Raw Materials & Ceramics Products",
      image: "/assets/homeCollections/five.png",
      alt: "Aerospace and Defense Products",
      link: "/products",
    },
    {
      id: 7,
      title: "Medical & Scientfic components",
      image: "/assets/homeCollections/eight.png",
      alt: "Aerospace and Defense Products",
      link: "/products",
    },
  ];

  const settings = {
    dots: false,
    loop: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    mobileFirst: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="container px-10 py-10">
        <h1 className="mb-8 inline-block border-l-8 border-primary  py-2 pl-2 text-center text-3xl font-bold">
          Explore
        </h1>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id}>
              <BlogCard Img1={product.image} alt={product.alt} title={product.title} link={product.link} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Move;