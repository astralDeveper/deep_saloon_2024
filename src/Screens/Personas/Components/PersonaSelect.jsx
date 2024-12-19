import React from "react";
import CheckBox from "../../../Components/CheckBox";
import { PersonaOptions } from "../../../Utils/DummyData";
import Button from "../../../Components/Button";

const PersonaSelect = () => {
  return (
    <div>
      {PersonaOptions.map((items, ind) => (
        <div key={ind}>
          <div className="mb-6">
            <h1 className="text7 text-whiteColor py-2 font-semiBold">
              {items.heading}
            </h1>
            <h1 className="text10 text-personaColor">{items.description}</h1>
          </div>
          {items.personasCheckBox.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckBox />
              <p className="text10 text-personaColor font-light py-2">
                <span className="text-whiteColor font-semiBold">
                  {item.boldPara}{" "}
                </span>
                {item.para}
              </p>
            </div>
          ))}
        </div>
      ))}
      <Button
        btnname="Save Changes"
        btnStyle="text11 font-semibold bg-primaryColor 
        px-3 py-3 mt-4 text-whiteColor"
      />
    </div>
  );
};

export default PersonaSelect;
