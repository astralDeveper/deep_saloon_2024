import FaqsCard from "../../Components/FaqsCard";
import { faqsData } from "../../Utils/DummyData";
import { IMAGES } from "../../Utils/images";

const FAQs = () => {
  return (
    <div className="bg-secondaryColor">
      <div className="w-[80%] mx-auto p-6">
        <FaqsCard
          FaqData={faqsData}
          styles={
            "bg-gray text-whiteColor overflow-hidden rounded-2xl p-4 px-6 my-3"
          }
          img={IMAGES.PLUS}
          img2={IMAGES.MINUSGRAY}
        />
      </div>
    </div>
  );
};

export default FAQs;
