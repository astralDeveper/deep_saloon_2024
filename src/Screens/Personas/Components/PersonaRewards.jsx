import React from "react";
import { IMAGES } from "../../../Utils/images";
import Button from "../../../Components/Button";

const PersonaRewards = () => {
  const para =
    "Use your coins while booking for discounts! 100 coins = 100 rupees";
  return (
    <div>
      <h1 className="text7 font-semibold text-whiteColor">
        Your Loyalty Rewards
      </h1>
      <div className="flex items-end gap-4 py-4">
        <img
          className="lg:w-[130px] md:w-[100px] sm:w-[80px] w-[60px]"
          src={IMAGES.REWARDS}
          alt={IMAGES.REWARDS}
        />

        <h1 className="heading1 font-semiBold text-whiteColor">
          <span className="text8 font-normal">You have</span> <br />
          250<span className="text10 font-normal"> Coins!</span>
        </h1>
      </div>
      <div className="py-4">
        <p className="text-whiteColor text11">{para}</p>
        <div className="flex items-center gap-4 py-4">
          <Button
            btnname="redeem Now"
            btnStyle="text11 bg-primaryColor px-5 py-2 text-whiteColor font-semibold"
          />
          <Button
            btnname="Links to booking page"
            btnStyle="text11 text-borderColor2 underline"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonaRewards;
