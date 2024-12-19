import React from "react";
import { MembershipData } from "../../../Utils/DummyData";
import Button from "../../../Components/Button";
import { IMAGES } from "../../../Utils/images";

const MembershipTable = ({ pricingName, price, yearlyPrice }) => {
  const containerStyles = {
    height: 4,
    width: "100%",
    backgroundColor: "#868993",
    borderRadius: 50,
    marginTop: 8,
  };

  return (
    <div className="border-[1px] bg-black border-[#434343] p-8">
      {/* Pricing Section start here */}
      <div>
        <div className="flex flex-col items-center">
          <h1 className="text5 lg:text-[26px] font-bold text-whiteColor">{pricingName}</h1>
          <h2 className="heading1 lg:text-[43px] text-whiteColor font-bold">
            {price}
            <span className="text11 text-lightGray font-normal">/month</span>
          </h2>
          <p className="text13 text-lightGray py-2">{yearlyPrice}</p>
          <Button
            divstyle="text11 lg:text-[13px] bg-grayColor2 flex rounded-md p-2 "
            btnname="You save $24.00 a year"
            imagediv="w-100 flex flex-row-reverse items-center justify-center lg:gap-3 gap-2 text-whiteColor text-grayColor "
            imageStyle="w-5 h-5 object-contain"
            image={IMAGES.IICON}
          ></Button>
          <Button
            divstyle="w-full bg-whiteColor rounded-md p-2 my-4"
            btnname="Try free for 30 days"
            imagediv="w-100 flex flex-row-reverse items-center justify-center gap-3  text-secondaryColor "
          ></Button>
          <p className="text11 pb-4 text-whiteColor">
            or skip trial and{" "}
            <span className="text-primaryColor cursor-pointer">pay now</span>
          </p>
        </div>
      </div>
      {/* Pricing Section end here */}
      {MembershipData.map((item, index) => (
        <div
          key={index}
          className="my-4 flex items-start justify-center w-full gap-3"
        >
          <img
            className="w-3 h-3 mt-1 object-contain"
            src={item.active ? IMAGES.TICKMARK : IMAGES.CROSSGRAY}
            alt={item.name}
          />
          <div className="w-full flex flex-col items-start justify-start">
            <p
              className={`text11 ${
                item.active ? "text-grayColor" : "text-lightGray"
              } underline cursor-pointer`}
            >
              {item.name}
            </p>
            {item.completed !== undefined && (
              <div style={containerStyles}>
                <div
                  style={{
                    height: "100%",
                    width: `${item.completed}%`,
                    backgroundColor: "#ffffff",
                    borderRadius: "inherit",
                    textAlign: "right",
                  }}
                ></div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MembershipTable;
