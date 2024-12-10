import React from "react";
import { OurMissions } from "../../../Utils/DummyData";

const OurMission = () => {
  return (
    <div className="bg-[#D4AF37] w-full py-10">
      <div className="w-[80%] mx-auto my-4 bg-[#343434]">
        {OurMissions.map((items, ind) => (
          <div className="flex items-center gap-14 justify-between" key={ind}>
            <div>
              <img
                className="w-[2000px] object-contain pl-8"
                src={items.img}
                alt={items.img}
              />
            </div>
            <div>
              <h1 className="text4 text-YellowColor uppercase ">
                {items.heading}
              </h1>
              <h2 className="text1 py-2 text-whiteColor font-semibold">
                {items.subHead}
              </h2>
              <p className="text4 font-light text-whiteColor">{items.parph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurMission;
