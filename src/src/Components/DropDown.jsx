import React from "react";

function DropDown() {
  return (
    <select
      name="cars"
      id="cars"
      className="w-full border border-[#e1c45b] text-[#e1c45b]
          bg-transparent font-medium py-2 text12 rounded-md outline-none mb-2"
    >
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
  );
}

export default DropDown;
