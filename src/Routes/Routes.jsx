import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SingUp from "../Pages/SingUP/SingUp";

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
      ]
    },
  ]);

 export default router;