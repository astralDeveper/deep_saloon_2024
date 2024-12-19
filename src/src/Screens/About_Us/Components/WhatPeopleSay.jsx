import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import SliderCard from "./SliderCard";
import { IMAGES } from "../../../Utils/images";

const WhatPeopleSay = () => {
  return (
    <div className="bg-secondaryColor text-center w-full py-14">
      <h1 className="mainheading py-8 text-goldColor ">What People Say</h1>
      <div className="relative">
        {/* Prev and next button  */}
        <button
          className="swiper-custom-prev 
        absolute left-20 top-1/2 transform -translate-y-12 
        z-10 bg-backgroundColor1 p-2 rounded-full "
        >
          <img
            src={IMAGES.LEFTICON}
            alt="Previous"
            className="w-10 h-10 object-contain"
          />
        </button>
        <button
          className="swiper-custom-next absolute 
        right-20 top-1/2 transform -translate-y-12 z-10 
        bg-backgroundColor1 p-2 rounded-full"
        >
          <img
            src={IMAGES.RIGHTICON}
            alt="Next"
            className="w-10 h-10 object-contain"
          />
        </button>
        {/* Prev and next button  */}
        <Swiper
          spaceBetween={30}
          hashNavigation={{
            watchState: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Autoplay, Navigation]}
          navigation={{
            nextEl: ".swiper-custom-next",
            prevEl: ".swiper-custom-prev",
          }}
          className="w-[80%]  "
        >
          <SwiperSlide
            className="text-center flex justify-center items-center"
            data-hash="slide1"
          >
            {/* Content Card Component  */}
            <SliderCard />
          </SwiperSlide>
          <SwiperSlide
            className="text-center flex justify-center items-center"
            data-hash="slide2"
          >
            {/* Content Card Component  */}
            <SliderCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default WhatPeopleSay;
