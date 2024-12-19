import React from "react";
import Container from "../../Components/Container";
import Form from "./Components/Form";
import ContactUsCard from "./Components/ContactUsCard";
import { IMAGES } from "../../Utils/images";
import Button from "../../Components/Button";

const ContactUs = () => {
  const heading = "Want to chat now or get a call from us?";
  return (
    <Container>
      <div className="w-full h-auto bg-secondaryColor">
        {/* Form and Card start here  */}
        <div className="w-[80%] mx-auto py-8">
          <Form />
          <div className="text-center py-12">
            <h1 className="text1 text-whiteColor">{heading}</h1>
            <div
              className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 
            grid-cols-1 lg:gap-4 md:gap-3 sm:gap-3 place-items-center justify-center items-center
            gap-4 my-6"
            >
              <ContactUsCard />
            </div>
          </div>
        </div>
        {/* Form and Card end here  */}

        {/* Our Doors Are Open start here  */}
        <div className="relative flex justify-center items-center py-10">
          <img
            className="w-full h-[300px] object-cover"
            src={IMAGES.CONTACTIMG}
            alt={IMAGES.CONTACTIMG}
            draggable={false}
          />
          <div
            className="absolute bg-secondaryColor border-[1px] 
          border-primaryColor rounded-md text-center opacity-80 px-8 py-5"
          >
            <h1 className="text4 text-primaryColor">Our Doors Are Open</h1>
            <p className="text11 py-2 text-whiteColor">
              We’re Waiting For You!
            </p>
            <p className="text11 text-whiteColor">Mon-Sun 10 am- 8 pm</p>
            <Button
              btnname="Visit Now"
              btnStyle="bg-primaryColor px-3 py-1 text-black font-medium mt-4"
            />
          </div>
        </div>
        {/* Our Doors Are Open end here  */}

        {/* Google map here  */}
        <div className="w-full flex justify-center items-center px-8 py-4">
          <img
            className="lg:w-[800px] md:w-[600px] sm:w-[400px] w-[300px] object-contain"
            src={IMAGES.MAP}
            alt={IMAGES.MAP}
            draggable={false}
          />
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
