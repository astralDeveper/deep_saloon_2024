import React from "react";
import TopHeader from "../../../Components/TopHeader";
import Button from "../../../Components/Button";
import { FiPlus } from "react-icons/fi";
import ServiceCard from "../../../Components/cards/ServiceCard";

const categories = [
  "All",
  "Manicure",
  "Pedicure",
  "Related Services",
  "Facials",
];

const filters = ["Price", "Brand", "Brands", "Select", "Type", "Volume"];

export default function SkinCare() {
  return (
    <div className="bg-secondaryColor ">
      <TopHeader name="Skin Care" />
      <div className="container mx-auto border ">
        <div className="flex justify-end w-full border ">
          <Button
            divstyle="w-[250px] border border-[#e1c45b] text-[#e1c45b]
          bg-transparent font-medium py-3 text10"
            btnname="Sort by"
          />
        </div>
        <div className="grid grid-cols-12 gap-4 py-12 border ">
          <div className="col-span-3">
            <h3 className="text5 font-normal text-[#e1c45b] border-b border-gray px-2 pb-4">
              Filter by
            </h3>
            {/* Dynamic Categories */}
            <div>
              <h5 className="text8 font-normal text-[#e1c45b] p-2">Category</h5>
              {categories.map((category, index) => (
                <h6
                  key={index}
                  className="text12 font-normal text-[#e1c45b] px-2 pb-2"
                >
                  {category}
                </h6>
              ))}
            </div>

            {/* Dynamic Filters */}
            {filters.map((filter, index) => (
              <div
                key={index}
                className="px-2 py-4 border-b border-gray flex justify-between items-center"
              >
                <h6 className="text10 font-normal text-[#e1c45b]">{filter}</h6>
                <FiPlus size={24} color="#000" />
              </div>
            ))}
          </div>
          <div className="col-span-9">
            <div className="grid grid-cols-4 gap-4">
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
