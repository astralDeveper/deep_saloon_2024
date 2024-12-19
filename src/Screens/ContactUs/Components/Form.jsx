import React from "react";
import Inputfield from "../../../Components/Inputfield";
import Button from "../../../Components/Button";

const Form = () => {
  return (
    <div className="max-w-[700px] mx-auto lg:p-6 md:p-5 sm:p-3 p-3 rounded-xl flex flex-col justify-center items-center border-[1px] border-primaryColor">
      <h1 className="text2 text-whiteColor font-semibold py-3">Contact Us</h1>
      <div className="text-center text-primaryColor">
        <div className="grid md:grid-cols-2 gap-4">
          <Inputfield
            placeholder="First Name"
            type="name"
            inputStyle=" placeholder-primaryColor 
                  w-full py-3 px-5 rounded-full bg-transparent 
                  border-[1px] border-primaryColor"
          />
          <Inputfield
            placeholder="Last Name"
            type="name"
            inputStyle=" placeholder-primaryColor 
                  w-full py-3 px-5 rounded-full bg-transparent 
                  border-[1px] border-primaryColor"
          />
        </div>
        <Inputfield
          placeholder="E-mail"
          type="name"
          inputStyle="w-full mx-auto mt-4 
                placeholder-primaryColor py-3 px-5 
                rounded-full bg-transparent border-[1px] 
                border-primaryColor"
        />
        <Inputfield
          placeholder="Phone"
          type="name"
          inputStyle="w-full mx-auto mt-4 
                placeholder-primaryColor py-3 px-5 
                rounded-full bg-transparent border-[1px] 
                border-primaryColor"
        />
        <textarea
          placeholder="Write a Message"
          className="resize-none mt-4 py-8 px-5 rounded-2xl
               outline-none placeholder-primaryColor border-[1px] border-primaryColor bg-transparent w-full"
        ></textarea>
        <Button
          divstyle="bg-primaryColor text-secondaryColor 
                px-10 py-3 text-c rounded-full md:my-[20px] my-[12px]"
          btnname="Submit"
          type="submit"
        />
      </div>
    </div>
  );
};

export default Form;
