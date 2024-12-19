import React from "react";
import { NeetToCancel } from "../../../Utils/DummyData";

const NeedToCancel = () => {
  return (
    <div className="py-8">
      {NeetToCancel.map((items, ind) => (
        <div
          className="flex flex-col text-center items-center py-10 gap-y-8"
          key={ind}
        >
          <h1 className="subheading text-goldColor font-semibold leading-10">
            {items.heading}
          </h1>
          <img
            className="w-[200px] sm:w-[200px] md:w-[300px] lg:w-[400px] rounded-xl shadow-goldColor shadow-lg"
            src={items.img}
            alt={items.img}
          />
          <p className="text8 text-whiteColor w-[64%]">{items.parph}</p>
        </div>
      ))}
    </div>
  );
};

export default NeedToCancel;
