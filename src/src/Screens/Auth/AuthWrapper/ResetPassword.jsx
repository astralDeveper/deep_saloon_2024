import React from "react";
import AuthHeader from "../../../Components/AuthHeader";
import { IMAGES } from "../../../utils/Images";
import PasswordInput from "../../../Components/PasswordInput";
import Button from "../../../Components/Button";
import { useFormik } from "formik";
import { ResetPasswordschema } from "../../../utils/schema";
import { post } from "../../../api/axios.tsx";
import { useSelector } from "react-redux";
import { Toast } from "../../../Components/toast.jsx";

const ResetPassword = ({ navigateTo }) => {
  const { email } = useSelector((state) => state.Auth);
  const handleSubmit = async (values) => {
    try {
      const response = await post({
        url: "/forgot-password",
        includeToken: false,
        data: { ...values, email: email },
      });
      console.log(response);

      if (response != null) {
        navigateTo("successfullVerification");
      }
    } catch (error) {
      Toast({ message: error?.message, isError: true });
      console.log(error?.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      password_confirmation: "",
    },
    validationSchema: ResetPasswordschema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <div className="w-full h-screen flex">
      <AuthHeader />

      <div className="flex flex-col items-center justify-center bg-[#060531]  md:w-[50%] w-full h-full ml-auto lg:w-6/12 xl:w-6/12">
        <img
          src={IMAGES.LOGO}
          className="block md:hidden mx-auto md:h-[120px] md:w-[180px]  h-[90px] w-[90px] object-contain my-10 "
          alt="Logo"
        />
        <div className=" items-center justify-center md:max-w-[60%] max-w-[90%]    mx-auto">
          <div className="  text-center   md:mb-8 mb-6">
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
              <PasswordInput
                label=" Password"
                labelstyle="text-white text-base font-light"
                innerdiv="my-2 bg-white rounded-full w-full px-5 bg-transparent"
                inputStyle="w-full px-3 py-3  "
                name="password"
                placeholder="Enter Password"
                leadingImage={IMAGES.AUTH_KEY}
                imageStyle="w-6 h-6 mr-2"
                onChange={formik.handleChange}
                values={formik.values.password}
                errors={formik.errors.password}
                touched={formik.touched.password}
              />
              <PasswordInput
                label="Confirm Password"
                innerdiv="my-2 bg-white rounded-full  px-5 bg-transparent"
                labelstyle="text-white text-base  font-light"
                inputStyle="w-full px-3 py-3 "
                name="password_confirmation"
                placeholder="Enter Password"
                leadingImage={IMAGES.AUTH_KEY}
                imageStyle="w-6 h-6 mr-2 "
                onChange={formik.handleChange}
                values={formik.values.password_confirmation}
                errors={formik.errors.password_confirmation}
                touched={formik.touched.password_confirmation}
              />

              <div className="flex justify-center mt-16 mb-5 gap-5 ">
                <Button
                  divstyle="w-[50%] md:mt-[60px] mt-[30px] rounded-full text-[#060531] md:text-lg text-sm bg-white font-medium lg:py-3 py-2 text-[20px]"
                  btnname="Continue"
                  type="submit"
                />
                <Button
                  onPress={() => navigateTo("verifyOtp")}
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

export default ResetPassword;
