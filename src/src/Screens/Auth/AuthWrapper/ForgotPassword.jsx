import React from "react";
import AuthHeader from "../../../Components/AuthHeader";
import { IMAGES } from "../../../utils/Images";
import Inputfield from "../../../Components/Inputfield";
import Button from "../../../Components/Button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Forgotvalidationschema } from "../../../utils/schema";
import { post } from "../../../api/axios.tsx";
import { useDispatch } from "react-redux";
import { setEmail } from "../../../redux/slices/AuthSlice.js";
import { Toast } from "../../../Components/toast.jsx";

const ForgotPassword = ({ navigateTo }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    try {
      const response = await post({
        url: "/request-code",
        includeToken: false,
        data: values,
      });

      if (response != null) {
        dispatch(setEmail(values?.email));
        navigateTo("verifyOtp");
      }
    } catch (error) {
      Toast({ message: error?.message, isError: true });
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Forgotvalidationschema,
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
            <form className="  mx-auto  " onSubmit={formik.handleSubmit}>
              <Inputfield
                Labelname="Email Address"
                labelstyle="text-white"
                innerDiv="bg-white rounded-full w-full px-[22px] bg-transparent mt-2"
                inputStyle="w-full px-2 py-3  "
                type="email"
                placeholder="Enter Email Address"
                name="email"
                htmlFor="email"
                id="email"
                autoComplete="email"
                leadingImage={IMAGES.AUTH_MESSAGES}
                imageStyle="w-[30px] h-[30px] -ml-3 mr-2"
                onChange={formik.handleChange}
                values={formik.values.email}
                errors={formik.errors.email}
              touched={formik.touched.email}
              />

              <div className="flex justify-center mt-16 mb-5 gap-5">
                <Button
                  divstyle="w-[50%] md:mt-[60px] mt-[30px] rounded-full text-[#060531] md:text-lg text-sm bg-white font-medium lg:py-3 py-2 text-[20px]"
                  btnname="Continue"
                  type="submit"
                />
                <Button
                  onPress={() => navigate("/login")}
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

export default ForgotPassword;
