import React from "react";
import { MeetExpectation } from "../../../Utils/DummyData";

const MeetYourExpectation = () => {
  return (
    <div>
      {MeetExpectation.map((items, ind) => (
        <div
          key={ind}
          className="text-center py-10 mx-auto flex flex-col items-center justify-center gap-14"
        >
          <div className="flex flex-col lg:gap-6">
            <h1 className="subheading text-goldColor lg:leading-[80px] sm:leading-[50px]">
              {items.headingOne}
            </h1>
            <p className="text8 text-whiteColor w-[70%] mx-auto">{items.paraghOne}</p>
          </div>
          <div className="flex flex-col lg:gap-6">
            <h1 className="mainheading text-goldColor lg:leading-[90px] sm:leading-[100px]">
              {items.headingTwo}
            </h1>
            <p className="text8 text-whiteColor w-[70%] mx-auto">{items.paraghTwo}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MeetYourExpectation;
