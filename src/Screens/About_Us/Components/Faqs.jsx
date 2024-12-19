import React from "react";
import { aboutFaqData, aboutFaqs } from "../../../Utils/DummyData";
import FaqsCard from "../../../Components/FaqsCard";
import { IMAGES } from "../../../Utils/images";

const Faqs = () => {
  return (
    <div className="py-12 bg-secondaryColor">
      <div>
        {aboutFaqs.map((items, ind) => (
          <div key={ind} className="text-center">
            <h1 className="preheading text-goldColor">{items.heading}</h1>
            <p className="text8 text-whiteColor w-[70%] mx-auto py-4">
              {items.paragh}
            </p>
          </div>
        ))}
      </div>
      <div className="w-[80%] mx-auto py-16">
        <FaqsCard
          FaqData={aboutFaqData}
          styles={`border-b-[1px] overflow-hidden ${
            aboutFaqs ? "" : "rounded-xl"
          } p-4 px-6 my-3 border-primaryColor text-whiteColor`}
          img={IMAGES.BOTTOMARROW}
          img2={IMAGES.MINUSGRAY}
        />
      </div>
    </div>
  );
};

export default Faqs;
