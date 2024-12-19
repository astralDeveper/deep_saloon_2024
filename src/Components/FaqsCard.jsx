import React, { useState } from "react";
import { IMAGES } from "../Utils/images";

const FaqsCard = ({ FaqData, styles, img, img2 }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {FaqData.map((faq, index) => (
        <div
          key={index}
          className={`${styles} ${
            activeIndex === index
              ? "h-auto bg-primaryColor text-grayColor2 rounded-lg"
              : "h-[65px]"
          } transition-all duration-300`}
        >
          <div
            onClick={() => toggleAnswer(index)}
            className="flex items-center cursor-pointer pt-1 justify-between"
          >
            <h1
              className={`text11 ${
                activeIndex === index
                  ? "font-bold text-black"
                  : "font-normal text-grayColor"
              }`}
            >
              {faq.question}
            </h1>
            <img
              className="w-5 h-5 object-contain cursor-pointer"
              src={activeIndex === index ? img2 : img}
              alt={IMAGES.PLUS}
            />
          </div>
          <div className={`${activeIndex === index ? "block" : "hidden"} pt-6`}>
            <p
              className={`text11 ${
                activeIndex === index ? "text-black" : "text-grayColor"
              }`}
            >
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FaqsCard;
