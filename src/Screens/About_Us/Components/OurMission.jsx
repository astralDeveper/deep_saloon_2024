import React from "react";
import { OurMissions } from "../../../Utils/DummyData";

const OurMission = () => {
  return (
    <div className="bg-goldColor w-full py-10">
      <div className="w-[80%] mx-auto my-4 bg-gray">
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
              <h2 className="text2 py-2 text-whiteColor font-semibold">
                {items.heading}
              </h2>
              <p className="text10 font-light text-whiteColor">{items.parph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurMission;
