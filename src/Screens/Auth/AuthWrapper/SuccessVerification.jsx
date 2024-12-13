import React, { useState, useEffect } from "react";
import { IMAGES } from "../../../utils/Images";
import Modal from "../../../Components/Modal";
import { useNavigate } from "react-router-dom";

const SuccessVerification = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <div className="h-screen bg-authBg bg-no-repeat bg-cover flex justify-center items-center">
      <Modal
        showModal={showModal}
        customStyle="   w-[90%]"
        childrenFour={
          <div className="md:w-full w-[90%]">
            <div
              onClick={() => {
                setShowModal(false);
                navigate("/login");
              }}
              className="cursor-pointer relative"
            >
              <img
                src={IMAGES.AUTH_CLOSE}
                className="md:w-[60px] md:h-[60px] w-[35px] h-[35px]   absolute   md:right-5 right-0 md:-top-5 -top-8"
                alt="Logo"
              />
            </div>

            <div className="flex flex-col justify-center items-center  md:p-10 p-5 md:mt-8 mt-3">
              <img
                src={IMAGES.SECURE}
                className="w-[300px] md:h-[200px] h-[100px] md:mb-4 mb-2 object-contain"
                alt="Logo"
              />
              <p className="lg:text-[35px] md:text-[25px]  text-[20px] font-bold text-center   text-[#0565B5]">
                Password Updated Successfully
              </p>
              <div className=" md:w-[80%] w-[100%] mt-2">
                <p className="text-[18px] font-light text-[#A8A8A8] text-center">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default SuccessVerification;
