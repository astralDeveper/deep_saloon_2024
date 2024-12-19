import React from "react";
import { IMAGES } from "../../Utils/images";
import About_Card from "./Components/About_Card";
import MeetYourExpectation from "./Components/MeetYourExpectation";
import NeedToCancel from "./Components/NeedToCancel";
import OurMission from "./Components/OurMission";
import OurStory from "./Components/OurStory";
import MembersCard from "./Components/MembersCard";
import WhatPeopleSay from "./Components/WhatPeopleSay";
import Review from "./Components/Review";
import Faqs from "./Components/Faqs";
import Container from "../../Components/Container";

const AboutUs = () => {
  return (
    <Container>
      <div className="bg-secondaryColor">
        <div className="relative">
          <img
            className="w-[100%]"
            src={IMAGES.ABOUTHEROBANNER}
            alt={IMAGES.ABOUTHEROBANNER}
          />
        </div>
        <OurStory />
        <div>
          <div className="max-w-[90%] mx-auto">
            <About_Card />
          </div>
          <NeedToCancel />
          <OurMission />
          <MeetYourExpectation />
          <MembersCard />
          <WhatPeopleSay />
          <Review />
          <Faqs />
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
