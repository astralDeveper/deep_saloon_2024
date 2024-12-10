import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../../Screens/About_Us";

export const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  {
    path: "/about",
    element: <AboutUs />,
  },
]);
