import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../../Screens/About_Us";
import FAQs from "../../Screens/FAQs";
import ContactUs from "../../Screens/ContactUs";
import Articles from "../../Screens/Articles";
import TermsConditions from "../../Screens/TermsConditions";
import Hiring from "../../Screens/Hiring";
import PrivacyPolicy from "../../Screens/PrivacyPolicy";
import Testimonials from "../../Screens/Testimonials";
import Login from "../../Screens/Auth/Login";
import Register from "../../Screens/Auth/Register";
import Home from "../../Screens/Home";
import Membership from "../../Screens/Membership";
import Personas from "../../Screens/Personas";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
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
    path: "/faqs",
    element: <FAQs />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
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
  {
    path: "/membership",
    element: <Membership />,
  },
  {
    path: "/personas",
    element: <Personas />,
  },
]);
