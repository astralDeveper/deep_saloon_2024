import React from "react";
import Button from "../../../Components/Button";
import { ContactCardData } from "../../../Utils/DummyData";

const ContactUsCard = () => {
  return (
    <>
      {ContactCardData.map((items, ind) => (
        <div
          key={ind}
          className="lg:h-[220px] md:h-[190px] sm:h-[150px] h-[140px] border-[1px] border-primaryColor rounded-lg px-5 py-2"
        >
          <div className="flex items-center justify-start gap-2 pt-2">
            <img
              className="lg:w-4 md:w-3 sm:w-3 w-3 h-5 object-contain"
              src={items.icon}
              alt={items.icon}
            />
            <h1 className="text8 text-left line-clamp-3 text-whiteColor">
              {items.heading}
            </h1>
          </div>

          <div className="flex flex-col items-start pl-5">
            <p className="text11 text-left text-whiteColor py-3">
              {items.para}
            </p>
            {items.Fields &&
              items.Fields.map((item, i) => (
                <div className="lg:mt-4" key={i}>
                  <div>
                    {item.subhead && (
                      <p className="text11 text-whiteColor">{item.subhead}</p>
                    )}
                    {item.button && (
                      <div>
                        <Button
                          btnname={item.button}
                          image={item.icon}
                          btnStyle="flex items-center justify-center text12 text-primaryColor"
                          imageStyle="w-6 object-contain "
                          imagediv="flex flex-row-reverse gap-1 border-[1px] border-primaryColor rounded-full px-3 py-1"
                        />
                      </div>
                    )}
                    {item.socialIcon1 &&
                      item.socialIcon2 &&
                      item.socialIcon3 && (
                        <div className="flex items-center justify-center gap-2 object-contain">
                          <img
                            className="lg:w-8 md:w-6 sm:w-5 w-5 object-contain cursor-pointer"
                            src={item.socialIcon1}
                            alt={item.socialIcon1}
                          />
                          <img
                            className="lg:w-8 md:w-6 sm:w-5 w-5 object-contain cursor-pointer"
                            src={item.socialIcon2}
                            alt={item.socialIcon2}
                          />
                          <img
                            className="lg:w-8 md:w-6 sm:w-5 w-5 object-contain cursor-pointer"
                            src={item.socialIcon3}
                            alt={item.socialIcon3}
                          />
                        </div>
                      )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactUsCard;
