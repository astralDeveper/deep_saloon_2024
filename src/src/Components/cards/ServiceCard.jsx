import React from "react";
import { IMAGES } from "../../utils/Images";
import Button from "../Button";
import DropDown from "../DropDown";

function ServiceCard() {
  return (
    <>
      <div className="flex flex-col">
        <div
          className="bg-cover bg-no-repeat w-full h-[240px] relative"
          style={{
            backgroundImage: `url(${IMAGES.MAKEUP})`,
          }}
        >
          <div className="absolute right-1 top-1 bg-secondaryColor p-2 rounded-full">
            <img src={IMAGES.HARDICON} className="h-[20px]" />
          </div>
          <div className="absolute Left-0 top-0 bg-redColor px-2 py-1 text12 text-whiteColor shadow">
            55% Discount
          </div>
        </div>
        <h3 className=" px-2 py-2 text12 text-primaryColor text-center">
          Sidal Makeup
        </h3>
        <h5 className=" px-2 pb-1 text12 text-whiteColor text-center">159$</h5>
        <h5 className=" px-2 pb-1 text12 text-whiteColor text-center">399$</h5>

        <DropDown />
        <Button
          divstyle="w-full border border-[#e1c45b] text-[#e1c45b]
          bg-transparent font-medium py-2 text12 rounded-full"
          btnname="Sort by"
        />
      </div>
    </>
  );
}

export default ServiceCard;
