import React from "react";
import { OurStorys } from "../../../Utils/DummyData";

const OurStory = () => {
  return (
    <>
      {OurStorys.map((items, ind) => (
        <div
          key={ind}
          className="flex md:flex-row sm:flex-row flex-col md:gap-0 py-10"
        >
          <div>
            <img
              className="md:w-[1250px] sm:w-[1250px] w-[200px] mx-auto object-contain"
              src={items.img1}
              alt={items.img1}
            />
          </div>
          <div className="text-center max-h-[425px] overflow-y-hidden text-white flex flex-col justify-center items-center p-3">
            <h2 className="text2 font-semibold lg:leading-[50px] md:leading-[30px]">
              {items.heading}
            </h2>
            <p className="text12 p-4 text-text">{items.parph}</p>
          </div>
          <div>
            <img
              className="md:w-[1250px] sm:w-[1250px] w-[200px] mx-auto object-contain"
              src={items.img2}
              alt={items.img2}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default OurStory;
