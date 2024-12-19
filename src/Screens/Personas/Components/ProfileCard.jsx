import React, { useState } from "react";
import { IMAGES } from "../../../Utils/images";
import Divider from "../../../Components/Divider";
import { ProfileData } from "../../../Utils/DummyData";

const ProfileCard = ({ show, setShow }) => {
  const bio =
    "Welcome Kevin, Complete your profile to unlock exclusive rewards and personalized offers!";

  return (
    <div className="w-[80%] lg:-mb-10 md:-mb-8 sm:-mb-6 -mb-4 mx-auto bg-gray">
      <div className="lg:px-8 md:px-6 sm:px-4 px-4 py-4">
        <div className="flex items-start lg:items-center justify-between">
          <div className="flex flex-col md:flex-row items-start lg:items-center gap-3">
            <img
              className="lg:w-[100px] md:w-[80px] sm:w-[55px] w-[50px] object-contain"
              src={IMAGES.PROFILE}
              alt={IMAGES.PROFILE}
              draggable={false}
            />
            <div>
              <h1 className="text7 py-1 text-whiteColor font-semibold">
                Kevin Gilbert
              </h1>
              <p className="text11 text-bioColor">{bio}</p>
            </div>
          </div>
          <div>
            <div className="relative size-40">
              <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                {/* Background Circle */}
                <circle
                  cx={18}
                  cy={18}
                  r={13}
                  fill="none"
                  className="stroke-current text-percentColor"
                  strokeWidth={1}
                />
                {/* Progress Circle */}
                <circle
                  cx={18}
                  cy={18}
                  r={12}
                  fill="none"
                  className="stroke-current text-borderColor2"
                  strokeWidth={3}
                  strokeDasharray={100}
                  strokeDashoffset={42}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <span className="text12 font-semibold flex flex-col justify-center items-center text-whiteColor">
                  <p>75%</p>
                  <p>Complete</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider borderStyle="border-borderColor2 mt-1" />
      <div className="flex items-center lg:gap-14 md:gap-10 sm:gap-8 gap-x-5 text-whiteColor pt-4 lg:px-8 md:px-6 sm:px-4 px-4">
        {ProfileData.map((items, ind) => (
          <h1
            onClick={() => setShow(ind + 1)}
            key={ind}
            className={`lg:text-[1rem] md:text-[0.6rem] sm:text-[0.5rem] text-[0.4rem] 
             ${
               show === ind + 1 ? "border-b-[1px] border-borderColor2" : ""
             }  cursor-pointer lg:leading-10 md:leading-8 sm:leading-6 leading-5`}
          >
            {items.name}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
