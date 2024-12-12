import React from "react";
import { IMAGES } from "../../../Utils/images";

const Review = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-28 p-6 md:p-16 lg:p-28 bg-secondaryColor">
      {/* Right Side: Image */}
      <div className="flex justify-center md:justify-end">
        <img
          className="w-full max-w-[400px] md:max-w-[400px] shrink-0 lg:max-w-[380px] object-contain"
          src={IMAGES.ABOUTPRIDALTWO}
          alt={IMAGES.ABOUTPRIDALTWO}
          draggable={false}
        />
      </div>

      {/* Left Side: Text and Input */}
      <div className="flex flex-col gap-4">
        <h1 className="heading2 text-primaryColor text-center md:text-left">
          Add a Review
        </h1>
        <p className="text8 text-primaryColor text-center md:text-left">
          How Did We Do?
        </p>
        <textarea
          className="p-4 h-40 md:h-60 w-[600px] bg-transparent outline-none 
        text-whiteColor border-2 border-primaryColor rounded-lg resize-none"
          placeholder="Write your review here..."
        ></textarea>
      </div>
    </div>
  );
};

export default Review;
