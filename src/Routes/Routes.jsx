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
import UpdateBooking from "../Layout/UpdateBooking/UpdateBooking";
import ServiceTodo from "../Layout/ServiceTodo/ServiceTodo";


// const serviceLoader = async ({ params }) => {
//   const response = await fetch(`https://sabfitzone-server.vercel.app/${params.category}/${params.id}`);
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
          element: <PrivateRoute><BookingServices></BookingServices></PrivateRoute> ,
          loader: serviceLoader,
        },
        {
          path: "book",
          element: <PrivateRoute><Bookings></Bookings></PrivateRoute>,          
        },
        {
          path: '/book/manage',
          element: <PrivateRoute><ServiceManage></ServiceManage></PrivateRoute>
        },
        {
          path: '/book/manage/update/:id',
          element: <PrivateRoute><UpdateBooking></UpdateBooking></PrivateRoute> ,
          loader: ({params}) => fetch(`https://sabfitzone-server.vercel.app/bookings/${params.id}`)
        },
        {
          path: "/book/todo/:id",
          element: <PrivateRoute><ServiceTodo></ServiceTodo></PrivateRoute>,               
        }
    
      ]
    },
  ]);

 export default router;