import React from "react";
import { IMAGES } from "../../../Utils/images";
import { descrp } from "../../../Utils/DummyData";

const SliderCard = () => {
  return (
    <div className="flex items-center">
      <div>
        <img
          className="w-[1500px] object-contain"
          src={IMAGES.PEOPLESAY}
          alt={IMAGES.PEOPLESAY}
        />
      </div>
      <div className="bg-secondaryColor -ml-7">
        <h1 className="text6 bg-darkYellowColor p-4 text-whiteColor">
          sanju kumari
        </h1>
        <p className="text8 p-8 text-lightwhite font-light">{descrp}</p>
      </div>
    </div>
  );
};

export default SliderCard;
