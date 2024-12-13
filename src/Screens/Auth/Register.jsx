import React, { useState } from "react";
import { IMAGES } from "../../utils/Images";
import Inputfield from "../../Components/Inputfield";
import Button from "../../Components/Button";

const Register = () => {

  return (
    <div className="w-full  md:min-h-screen flex md:flex-row flex-col-reverse bg-secondaryColor">
      <div className="md:w-[50%] w-full flex flex-col items-center justify-center  ">
        <div className=" w-[70%] ">
          <div className="flex gap-4 items-center text2 justify-start  ">
            <p className=" text-start text-white">Create Your Account</p>
            <p>👋</p>
          </div>
          <p className="text8 font-medium text-white  ">Today is a new day. It's your day. You shape it.
            Sign in to get started.</p>

          <div>
            <Inputfield
              divstyle="mt-7 "
              Labelname="Email Address"
              labelstyle="text-white"
              innerDiv="border-[1px] border-borderColor w-full text-white mt-2"
              inputStyle="w-full px-5 py-3 bg-transparent "
              type="email"
              placeholder="Enter your Email"
              name="email"
            />

            <Inputfield
              divstyle="mt-7 "
              Labelname="Password"
              labelstyle="text-white "
              innerDiv="border-[1px] border-borderColor w-full text-white mt-2"
              inputStyle="w-full px-5 py-3 bg-transparent "
              type="password"
              placeholder="Your password"
              name="password"
            />

            <Inputfield
              divstyle="mt-7 "
              Labelname="Email Address"
              labelstyle="text-white"
              innerDiv="border-[1px] border-borderColor w-full text-white mt-2"
              inputStyle="w-full px-5 py-3 bg-transparent "
              type="email"
              placeholder="Enter your Email"
              name="email"
            />

            <Inputfield
              divstyle="mt-7 "
              Labelname="Password"
              labelstyle="text-white "
              innerDiv="border-[1px] border-borderColor w-full text-white mt-2"
              inputStyle="w-full px-5 py-3 bg-transparent "
              type="password"
              placeholder="Your password"
              name="password"
            />

            <Inputfield
              divstyle="mt-7 "
              Labelname="Email Address"
              labelstyle="text-white"
              innerDiv="border-[1px] border-borderColor w-full text-white mt-2"
              inputStyle="w-full px-5 py-3 bg-transparent "
              type="email"
              placeholder="Enter your Email"
              name="email"
            />

            <Inputfield
              divstyle="mt-7 "
              Labelname="Password"
              labelstyle="text-white "
              innerDiv="border-[1px] border-borderColor w-full text-white mt-2"
              inputStyle="w-full px-5 py-3 bg-transparent "
              type="password"
              placeholder="Your password"
              name="password"
            />

          </div>
          <p className="text-right text-textRedColor mt-7 cur">
            Forgot Password?
          </p>

          <Button
            divstyle="w-full md:mt-[40px] mt-[20px]  text-white bg-goldColor font-medium lg:py-3 py-3 text8"
            btnname="Sign in"
            type="submit"
          />




          <p className="text-white text-center mt-10">Don't you have an account?<span className="text-primaryColor">Sign In</span></p>
        </div>
      </div>

      <div className="  md:w-[50%] w-full flex items-center justify-center  ">
        <div className="   p-8">
          <img src={IMAGES.SIGNINIMG} className="md:w-full md:h-full w-[250px] h-[200px]" />
        </div>
      </div>
    </div>
  );
};

export default Register;
