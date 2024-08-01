import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SingUp from "../Pages/SingUP/SingUp";
import Services from "../Pages/Home/Services/Services";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/login",
          element: <LogIn></LogIn>
        },
        {
          path: "/singup",
          element: <SingUp></SingUp>
        },
        {
          path: "services",
          element: <Services></Services>
        },
      ]
    },
  ]);

 export default router;