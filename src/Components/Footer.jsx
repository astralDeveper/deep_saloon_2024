import React from "react";
import { IMAGES } from "../Utils/images";
import { blogDetailTable, footerImg, FootHeading } from "../Utils/DummyData";

const Footer = () => {
  const heading = "Support";

  return (
    <div className="bg-secondaryColor w-full">
      <div className="w-[80%] mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 py-12">
        {/* logo section  */}
        <div className="flex flex-col lg:gap-10 md:gap-7 sm:gap-4 gap-3">
          <img
            className="w-[120px]"
            src={IMAGES.LOGO}
            alt={IMAGES.LOGO}
            draggable={false}
          />
          <p className="text11 text-primaryColor">{FootHeading}</p>
          <div className="flex items-center justify-start gap-3">
            {footerImg.map((img, i) => (
              <img
                key={i}
                className="w-5 h-5 cursor-pointer object-contain"
                src={img.img}
                alt={img}
              />
            ))}
          </div>
        </div>
        {/* logo section  */}

        {/* Quick Links  */}
        <div className="grid grid-cols-1 md:grid-cols-2 text-primaryColor">
          {blogDetailTable.map((item, i) => (
            <div key={i}>
              <h2 className="text11 font-light pb-4">{item.heading}</h2>
              <ul>
                {item.links.map((items, ind) => (
                  <div key={ind}>
                    <li className="text11 font-medium py-1 cursor-pointer">
                      {items.name}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Quick Links  */}

        {/* Support links */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100 text-primaryColor">
          <div>
            <h1>{heading}</h1>
            <div className="mt-4 flex  flex-col items-start gap-2">
              <div className="flex items-center justify-start gap-3">
                <img
                  className="lg:w-[20px] md:w-[20px] sm:w-[16px] w-[16px] "
                  src={IMAGES.CALLICON}
                  alt={IMAGES.CALLICON}
                />
                <p className="text11">Call</p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <img
                  className="lg:w-[26px] md:w-[22px] sm:w-[18px] w-[18px] "
                  src={IMAGES.EMAILBORDER}
                  alt={IMAGES.EMAILBORDER}
                />
                <p className="text11">Email</p>
              </div>
            </div>
          </div>
        </div>
        {/* Support links */}

        {/* Our Newsletter  */}
        <div className="flex flex-col gap-2 lg:items-center">
          <h1 className="text11 text-primaryColor">Our Newletters</h1>
          <input
            className="outline-none rounded-full px-3 py-1 bg-transparent border-[1px] border-whiteColor text-whiteColor"
            type="text"
            placeholder="Email*"
          />
          <button className="border-[1px] border-primaryColor rounded-full px-5 py-1 text-primaryColor">
            Subscribe
          </button>
        </div>
        {/* Our Newsletter  */}
      </div>

      <div className="text-center border-t-2 border-primaryColor p-6 text-primaryColor">
        <h1 className="text11">
          ©2024-2025 by DEEP BEAUTY PARLOUR. Powered by V.A.P. JEC'27
        </h1>
      </div>
    </div>
  );
};

export default Footer;
