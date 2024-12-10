import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../../Screens/About_Us";
import FAQs from "../../Screens/FAQs";

export const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/faqs",
    element: <FAQs />,
  },
]);
