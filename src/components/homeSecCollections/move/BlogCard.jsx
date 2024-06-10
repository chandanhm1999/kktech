// BlogCard.jsx
import React from "react";

const BlogCard = ({ Img1, alt, title, link }) => {
  return (
    <div>
      <div
        id="card"
        className="mx-2 mb-7 rounded-lg p-4 shadow-lg transition-all duration-500 hover:scale-[1.01] hover:shadow-xl"
      >
        <div className="overflow-hidden rounded-lg">
          <img
            src={Img1}
            alt={alt}
            className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
          />
        </div>
        <div className="space-y-3 py-3">
          <h1 className="line-clamp-1 text-xl font-bold">{title}</h1>
          <a href={link} className="text-blue underline ">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;