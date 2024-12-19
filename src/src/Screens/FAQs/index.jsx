import FaqsCard from "../../Components/FaqsCard";
import { faqsData } from "../../Utils/DummyData";
import { IMAGES } from "../../Utils/images";
import Container from "../../Components/Container";

const FAQs = () => {
  return (
    <Container>
      <div className="bg-secondaryColor">
        <div className="md:w-[80%] sm:w-[90%] mx-auto px-6 py-8">
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
    </Container>
  );
};

export default FAQs;
