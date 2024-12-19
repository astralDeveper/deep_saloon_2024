import React from "react";
import { MembersCardData } from "../../../Utils/DummyData";
import Button from "../../../Components/Button";

const MembersCard = () => {
  return (
    <>
      <div className="bg-gray  max-w-screen mx-auto sm:p-10 p-4 md:p-20">
        <div className="flex flex-col lg:flex-row justify-between items-start my-10">
          <h1 className="heading3 lg:leading-[55px] text-whiteColor font-semibold">
            Say to our incredible <br /> team members.
          </h1>
          <div className="mt-2 lg:mt-0">
            <p className="text10 text-whiteColor py-2">
              Praesent sagittis eros in convallis rutrum. Donec <br /> auctor
              nibh justo. Vestibulum tincidunt, libero sit.
            </p>
            <Button
              title="Join Our Team"
              btnStyle={"bg-primaryColor rounded-md text-whiteColor"}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {MembersCardData.map((item, ind) => (
            <div
              key={ind}
              className="rounded-xl bg-secondaryColor border border-primaryColor overflow-hidden shadow-shadow1 flex flex-col"
            >
              <div className="flex justify-center items-center bg-darkColor p-2">
                <img
                  className="h-auto w-full max-h-[270px] object-cover rounded-xl"
                  src={item.img}
                  alt={item.img}
                  draggable={false}
                />
              </div>
              <div className="text-center px-4 py-3">
                <h1 className="text10 font-semibold text-whiteColor">
                  {item.title}
                </h1>
                <p className="text12 text-offwhite">{item.destination}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MembersCard;
