import React from "react";
import { OurStorys } from "../../../Utils/DummyData";

const OurStory = () => {
  return (
    <>
      {OurStorys.map((items, ind) => (
        <div key={ind} className="flex py-20">
          <div>
            <img
              className="w-[1250px] object-contain"
              src={items.img1}
              alt={items.img1}
            />
          </div>
          <div className="text-center text-white flex flex-col justify-center items-center px-8">
            <h1 className="text4 text-[#E1C45B]">{items.heading}</h1>
            <h2 className="text1 py-4 font-semibold">{items.subHead}</h2>
            <p className="text5 text-[#CACACA]">{items.parph}</p>
          </div>
          <div>
            <img
              className="w-[1250px] object-contain"
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
