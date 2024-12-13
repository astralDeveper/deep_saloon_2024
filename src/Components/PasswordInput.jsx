import React, { useState } from "react";
import { IMAGES } from "../utils/Images";

const PasswordInput = ({
  label,
  name,
  values,
  onChange,
  onBlur,
  errors,
  touched,
  labelstyle,
  divstyle,
  innerdiv,
  inputStyle,
  placeholder,
  leadingImage, // Leading image prop
  imageStyle, // Style for the leading image
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className={divstyle}>
      {label && (
        <label className={`  md:mt-[21px] mt-[11px]  ${labelstyle}`}>
          {label}
        </label>
      )}
      <div className={`relative  flex items-center    ${innerdiv}`}>
        {leadingImage && (
          <img src={leadingImage} alt="leading icon" className={imageStyle} />
        )}
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          value={values}
          onChange={onChange}
          onBlur={onBlur}
          className={`placeholder-[#1C4CA1] w-full  focus:outline-none ${inputStyle} ${
            leadingImage ? "pl-3 mr-8" : "pl"
          }`} // Adds padding if image is present
          placeholder={placeholder}
        />
        <span
          className={`absolute ${
            label ? "right-3 " : "right-0"
          } top-4  cursor-pointer`}
          onClick={togglePasswordVisibility}
        >
          <img
            src={showPassword ? IMAGES.EYE : IMAGES.HIDDEN}
            alt="toggle visibility"
            className="lg:w-6 lg:h-4 w-6 h-4 mr-4"
          />
        </span>
      </div>
      {errors && touched && (
        <div className="text-end lg:text-sm md:text-xs text-[10px] text-red-500">
          {errors}
        </div>
      )}
    </div>
  );
};

export default PasswordInput;
