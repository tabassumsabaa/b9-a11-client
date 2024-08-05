import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SingUp from "../Pages/SingUP/SingUp";
import Services from "../Pages/Home/Services/Services";
import BookingServices from "../Layout/BookingServices/BookingServices";
import { serviceLoader } from "../Pages/Home/Services/ServicesLoader";
import Bookings from "../Layout/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import ServiceManage from "../Layout/ServiceManage/ServiceManage";


// const serviceLoader = async ({ params }) => {
//   const response = await fetch(`http://localhost:5000/${params.category}/${params.id}`);
//   if (!response.ok) {
//     throw new Response('Not Found', { status: 404 });
//   }
//   return response.json();
// };


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
        {
          path: "booking/:category/:id",
          element: <BookingServices></BookingServices>,
          loader: serviceLoader,
        },
        {
          path: "book",
          element: <PrivateRoute><Bookings></Bookings></PrivateRoute>,          
        },
        {
          path: '/book/manage',
          element: <PrivateRoute><ServiceManage></ServiceManage></PrivateRoute>
        }
      ]
    },
  ]);

 export default router;