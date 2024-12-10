import React from "react";
import { MeetExpectation } from "../../../Utils/DummyData";

const MeetYourExpectation = () => {
  return (
    <div>
      {MeetExpectation.map((items, ind) => (
        <div className="text-center py-10 mx-auto flex flex-col items-center justify-center gap-32">
          <div>
            <h1 className="subheading text-goldColor">{items.headingOne}</h1>
            <p className="text-whiteColor w-[70%] mx-auto">{items.paraghOne}</p>
          </div>
          <div>
            <h1 className="mainheading text-goldColor">{items.headingTwo}</h1>
            <p className="text-whiteColor w-[70%] mx-auto">{items.paraghTwo}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MeetYourExpectation;
