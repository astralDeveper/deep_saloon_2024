import React from "react";
import AuthHeader from "../../../Components/AuthHeader";
import { IMAGES } from "../../../utils/Images";
import Inputfield from "../../../Components/Inputfield";
import Button from "../../../Components/Button";
import { useFormik } from "formik";
import { VerifyOtpschema } from "../../../utils/schema";
import { post } from "../../../api/axios.tsx";
import { useSelector } from "react-redux";
import { Toast } from "../../../Components/toast.jsx";

const VerifyOtp = ({ navigateTo }) => {
  const { email } = useSelector((state) => state.Auth);
  const handleSubmit = async (values) => {
    try {
      const response = await post({
        url: "/verify-code",
        includeToken: false,
        data: { ...values, email: email },
      });

      if (response != null) {
        navigateTo("resetPassword");
      }
    } catch (error) {
      Toast({ message: error?.message, isError: true });
      console.log(error?.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: VerifyOtpschema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <div className="w-full h-screen flex">
      <AuthHeader />
      <div className="flex flex-col items-center justify-center bg-[#060531] md:w-[50%] w-full h-full ml-auto lg:w-6/12 xl:w-6/12">
        <img
          src={IMAGES.LOGO}
          className="block md:hidden mx-auto md:h-[120px] md:w-[180px]  h-[90px] w-[90px] object-contain my-10 "
          alt="Logo"
        />
        <div className=" items-center justify-center md:max-w-[60%] max-w-[90%]    mx-auto">
          <div className="  text-center  md:mb-8 mb-6">
            <p className=" text-white font-bold lg:text-[34px] md:text-[24px] text-[20px]">
              Password Recovery
            </p>
            <p className=" text-white font-light md:text-lg text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="w-full ">
            <form className="  mx-auto " onSubmit={formik.handleSubmit}>
              <Inputfield
                Labelname="Verification Code"
                labelstyle="text-white text-lg "
                innerDiv="bg-white rounded-full w-full px-[22px] bg-transparent mt-2"
                inputStyle="w-full px-2 py-3 "
                type="text"
                placeholder="Enter Verification Code"
                name="code"
                htmlFor="code"
                id="code"
                autoComplete="code"
                leadingImage={IMAGES.AUTH_MESSAGES}
                imageStyle="w-[30px] h-[30px] -ml-3 mr-2"
                onChange={formik.handleChange}
                values={formik.values.code}
                errors={formik.errors.code}
                touched={formik.touched.code}
              />

              <div className="flex justify-center mt-16 mb-5 gap-5">
                <Button
                  divstyle="w-[50%] md:mt-[60px] mt-[30px] rounded-full text-[#060531] md:text-lg text-sm bg-white font-medium lg:py-3 py-2 text-[20px]"
                  btnname="Continue"
                  type="submit"
                />
                <Button
                  onPress={() => navigateTo("forgotPassword")}
                  divstyle="w-[50%] md:mt-[60px] mt-[30px] rounded-full text-[#060531] md:text-lg text-sm bg-white font-medium  lg:py-3 py-2 text-[20px]"
                  btnname="Back To Login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
