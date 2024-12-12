import React from "react";
import { CardData } from "../../../Utils/DummyData";

const AboutCard = () => {
  return (
    <>
      {CardData.map((item, ind) => (
        <div className="w-full flex justify-center " key={ind}>
          <div
            className={`flex lg:flex-row md:flex-row flex-col-reverse items-center justify-center my-2 lg:gap-y-14 gap-x-14 ${
              ind % 2 === 1 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div className="flex flex-col gap-2  justify-center">
              <p className="subheading text-goldColor font-semibold lg:leading-[90px] md:leading-[50px]">
                {item.name}
              </p>
              <p className="text9 text-white">{item.pargh}</p>
            </div>
            <div className="overflow-hidden shrink-0">
              <img
                src={item.img}
                className="w-[200px] md:w-[300px] lg:w-[450px] sm:w-[300px] rounded-full object-cover border-2 border-goldColor"
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
