import React from "react";
import { NeetToCancel } from "../../../Utils/DummyData";

const NeedToCancel = () => {
  return (
    <div className="py-10">
      {NeetToCancel.map((items, ind) => (
        <div
          className="flex flex-col text-center items-center py-10 gap-y-3"
          key={ind}
        >
          <h1 className="mainheading text-[#D4AF37] font-semibold">
            {items.heading}
          </h1>
          <img
            className="w-[400px] rounded-xl shadow-[#D4AF37] shadow-lg"
            src={items.img}
            alt={items.img}
          />
          <h2 className="text3 text-whiteColor pt-4">{items.SubHead}</h2>
          <p className="text3 text-whiteColor w-[64%]">{items.parph}</p>
        </div>
      ))}
    </div>
  );
};

export default NeedToCancel;
