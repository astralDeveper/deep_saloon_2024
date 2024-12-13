import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../../Screens/About_Us";
import Articles from "../../Screens/Articles";
import TermsConditions from "../../Screens/TermsConditions";
import Hiring from "../../Screens/Hiring";
import PrivacyPolicy from "../../Screens/PrivacyPolicy";
import Testimonials from "../../Screens/Testimonials";  
import Login from "../../Screens/Auth/Login";
import Register from "../../Screens/Auth/Register";

export const router = createBrowserRouter([
    {
      path: "/login", 
      element: <Login />,
    },
    {
      path: "/register", 
      element: <Register />,
    },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/articles",
    element: <Articles />,
  },
  {
    path: "/testimonials",
    element: <Testimonials />,
  },

  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/term-condition",
    element: <TermsConditions />,
  },
  {
    path: "/hiring",
    element: <Hiring />,
  },
]);
