import React from "react";

const Button = ({ title, btnStyle, onclick, type }) => {
  return (
    <>
      <button
        className={`lg:px-[28px] md:px-[14px] px-[7px] py-[6px] lg:py-[12px] font-medium ${btnStyle}`}
        type={type}
        onClick={onclick}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
