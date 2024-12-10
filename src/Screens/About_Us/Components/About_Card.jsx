import React from "react";
import { CardData } from "../../../Utils/DummyData";

const AboutCard = () => {
  
  return (
    <>
      {CardData.map((item, ind) => (
        <div className="w-full flex justify-center" key={ind}>
          <div
            className={`flex lg:flex-row flex-col items-center justify-center my-10 gap-20 ${
              ind === 1 ? "flex-row-reverse" : "flex-row"
            }`} // Reverse layout only for the second card
          >
            <div className="lg:w-[60%] flex flex-col gap-10 justify-center">
              <p className="text-[70px] text-[#D4AF37] font-semibold">
                {item.name}
              </p>
              <p className="text-white">{item.pargh}</p>
            </div>
            <div className="border-2 border-[#D4AF37] rounded-full overflow-hidden">
              <img
                src={item.img}
                className="w-[400px] h-[450px] rounded-3xl object-contain"
                alt="About Image"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AboutCard;
