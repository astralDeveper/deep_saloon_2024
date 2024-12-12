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
              ? "h-auto bg-primaryColor text-lightblack"
              : "h-[65px]"
          } transition-all duration-300`}
        >
          <div className="flex items-center justify-between">
            <h1 className="text10">{faq.question}</h1>
            <img
              onClick={() => toggleAnswer(index)}
              className="w-5 h-5 object-contain cursor-pointer"
              src={activeIndex === index ? img2 : img}
              alt={IMAGES.PLUS}
            />
          </div>
          <div className={`${activeIndex === index ? "block" : "hidden"} pt-6`}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FaqsCard;

// bg-gray text-whiteColor overflow-hidden rounded-2xl p-4 px-6 my-3
