import React, { useState } from "react"; 
import { IMAGES } from "../../utils/Images"; 
import Inputfield from "../../Components/Inputfield";
import Button from "../../Components/Button";

const Login = () => { 

  return (
    <div className="w-full  md:min-h-screen flex md:flex-row flex-col-reverse bg-secondaryColor">
      <div className="md:w-[50%] w-full flex flex-col items-center justify-center  ">
        <div className=" w-[70%] ">
          <div className="flex gap-4 items-center text2 justify-start  ">
            <p className=" text-start text-white">Welcome Back </p>
            <p>👋</p>
          </div>
          <p className="text8 font-medium text-white  ">Today is a new day. It's your day. You shape it.
            Sign in to get started. </p>

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

          </div>
          <p className="text-right text-textRedColor mt-7 cur">
            Forgot Password?
          </p>

          <Button
            divstyle="w-full md:mt-[40px] mt-[20px]  text-white bg-goldColor font-medium lg:py-3 py-2 text8"
            btnname="Sign in"
            type="submit"
          />

          <Button
            divstyle="w-full  mt-[20px]  text-socialColor bg-white font-medium lg:py-3 py-2 text8"
            btnname="Sign in with Google"
            image={IMAGES.GOOGLE}
            imagediv="flex justify-center items-center gap-8"
            imageStyle="w-[31px] h-[31px]"
            type="submit"
          />
          <Button
            divstyle="w-full mt-[20px]  text-socialColor bg-white font-medium lg:py-3 py-2 text8"
            btnname="Sign in with Facebook"
            image={IMAGES.FACEBOOK}
            imagediv="flex justify-center items-center gap-8"
            imageStyle="w-[31px] h-[31px]"

            type="submit"
          />

          <p className="text-white text-center mt-10">Don't you have an account?<span className="text-primaryColor"> Sign up</span></p>
        </div>
      </div>

      <div className="  md:w-[50%] w-full flex items-center justify-center  ">
        <div className=" bg-blue-600 p-8">
          <img src={IMAGES.SIGNINIMG} className="w-[806px] h-[600px]" />
        </div>
      </div>
    </div>
  );
};

export default Login;
