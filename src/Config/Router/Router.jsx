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
import HairCare from "../../Screens/Services/Hair-Care";
import SkinCare from "../../Screens/Services/Skin-Care";
import Favorites from "../../Screens/Services/Favorite";
import InnerPage from "../../Screens/Services/innerpage/Inner-Page";
import BookAppointment from "../../Screens/BookAppointment";
import Cart from "../../Screens/Cart/Cart";

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
    path: "/service/hair-care",
    element: <HairCare />,
  },
  {
    path: "/service/skin-care",
    element: <SkinCare />,
  },
  {
    path: "/service/favorite",
    element: <Favorites />,
  },
  {
    path: "/service/inner-page",
    element: <InnerPage />,
  },
  {
    path: "/book-appointment",
    element: <BookAppointment />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);
