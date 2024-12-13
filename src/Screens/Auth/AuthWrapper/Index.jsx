import React, { useState } from "react";
import ForgotPassword from "./ForgotPassword";
import VerifyOtp from "./VerifyOtp";
import ResetPassword from "./ResetPassword";
import SuccessVerification from "./SuccessVerification";

const AuthWrapper = () => {
  const [currentScreen, setCurrentScreen] = useState("forgotPassword");

  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "forgotPassword":
        return <ForgotPassword navigateTo={navigateTo} />;
      case "verifyOtp":
        return <VerifyOtp navigateTo={navigateTo} />;
      case "resetPassword":
        return <ResetPassword navigateTo={navigateTo} />;
      case "successfullVerification":
        return <SuccessVerification navigateTo={navigateTo} />;
      default:
        return <ForgotPassword navigateTo={navigateTo} />;
    }
  };

  return <div>{renderScreen()}</div>;
};

export default AuthWrapper;
