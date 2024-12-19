import React from "react";
import { TableName } from "../../../Utils/DummyData";
import Button from "../../../Components/Button";
import { IMAGES } from "../../../Utils/images";

const Table = () => {
  return (
    <div className="py-8">
      <div className="w-[80%] mx-auto overflow-x-auto sm:overflow-x-scroll">
        {TableName.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between px-2 min-w-[800px]"
          >
            <h1 className="text11 text-whiteColor font-semibold">
              {item.title}
            </h1>
            {item.fileds.map((items, ind) => (
              <div key={ind} className="flex flex-col items-center">
                <h1 className="text11 font-semibold text-whiteColor">
                  {items.name}
                </h1>
                <p className="text12 text-primaryColor font-normal">
                  {items.plan}
                </p>
              </div>
            ))}
          </div>
        ))}
        <div className="w-full bg-tableColor rounded-md py-2 pl-4 my-4 min-w-[800px]">
          <h1 className="text-whiteColor font-semiBold">Charts</h1>
        </div>
        <div className="text12 flex flex-col gap-4 min-w-[800px]">
          <div className="flex items-center justify-between px-2 text-whiteColor">
            <p>Charts per tab</p>
            <p>1</p>
            <p>2</p>
            <p>4</p>
            <p>2</p>
            <p>10</p>
            <p>16</p>
          </div>
          <div className="flex items-center justify-between px-2 text-whiteColor">
            <p>Charts per tab</p>
            <p>1</p>
            <p>2</p>
            <p>4</p>
            <p>2</p>
            <p>10</p>
            <p>16</p>
          </div>
          <div className="flex items-center justify-between px-2 text-whiteColor">
            <p>Charts per tab</p>
            <p>1</p>
            <p>2</p>
            <p>4</p>
            <p>2</p>
            <p>10</p>
            <p>16</p>
          </div>
          <div className="flex items-center justify-between px-2 text-whiteColor">
            <p>Charts per tab</p>
            <p>1</p>
            <p>2</p>
            <p>4</p>
            <p>2</p>
            <p>10</p>
            <p>16</p>
          </div>
          <div className="flex items-center justify-between px-2 text-whiteColor">
            <p>Charts per tab</p>
            <p>1</p>
            <p>2</p>
            <p>4</p>
            <p>2</p>
            <p>10</p>
            <p>16</p>
          </div>
          <div className="flex items-center justify-between px-2 text-whiteColor">
            <p>Charts per tab</p>
            <p>1</p>
            <p>2</p>
            <p>4</p>
            <p>2</p>
            <p>10</p>
            <p>16</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pt-6">
        <Button
          divstyle="text11 border-[1px] border-lightGray rounded-lg px-4 py-3 "
          btnname="Show all features"
          imagediv="w-100 flex flex-row-reverse items-center justify-center gap-3 text-whiteColor text-grayColor "
          imageStyle="w-4 h-4 object-contain"
          image={IMAGES.BOTTOMARROW}
        ></Button>
      </div>
    </div>
  );
};

export default Table;
