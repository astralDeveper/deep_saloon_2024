import React from "react";
import Button from "../../../Components/Button";
import { IMAGES } from "../../../Utils/images";

const MemberPrice = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text5 font-bold text-whiteColor">Essential</h1>
        <h2 className="heading2 text-whiteColor font-bold">
          $12.95
          <span className="text11 text-lightGray font-normal">/month</span>
        </h2>
        <p className="text13 text-lightGray py-2">$155.40/year</p>
        <Button
          divstyle="bg-grayColor2 flex rounded-md p-2 "
          btnname="You save $24.00 a year"
          imagediv="w-100 flex flex-row-reverse items-center justify-center gap-3 text-whiteColor text-grayColor "
          imageStyle="w-5 h-5 object-contain"
          image={IMAGES.IICON}
        ></Button>
        <Button
          divstyle="w-full bg-whiteColor rounded-md p-2 my-4"
          btnname="Try free for 30 days"
          imagediv="w-100 flex flex-row-reverse items-center justify-center gap-3  text-secondaryColor "
        ></Button>
        <p className="text11 pb-4 text-whiteColor">
          or skip trial and <span className="text-primaryColor cursor-pointer">pay now</span>
        </p>
      </div>
    </div>
  );
};

export default MemberPrice;
