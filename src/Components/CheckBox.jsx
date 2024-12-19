import React, { useState } from "react";

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <input
      className="accent-checkBoxColor text-whiteColor w-[18px] h-[18px]"
      type="checkbox"
      checked={isChecked}
      onChange={handleCheckbox}
    />
  );
};

export default CheckBox;
