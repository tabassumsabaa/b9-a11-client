import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Manage from "./Manage";
import { RiDeleteBin2Line  } from "react-icons/ri";
import { LuFolderEdit } from "react-icons/lu";
;

const ServiceManage = () => {
    
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

   const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
          .then(res => res.json())
          .then(data =>setBookings(data))
    }, []);

    return (    
        <div className="my-5">
            <h2 className="text-5xl text-center mb-10">Booking: {bookings.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className=" text-white bg-black rounded-lg">
      <tr>
        <th><button className="btn btn-circle bg-red-600 text-white text-2xl"><RiDeleteBin2Line ></RiDeleteBin2Line ></button></th>
        <th>Photo</th>       
        <th>Customer Name</th>
        <th>Service Name</th>
        <th>Date</th>
        <th>Price</th>
        <th><button className="btn text-2xl bg-green-600 text-white"><LuFolderEdit></LuFolderEdit></button></th>
      </tr>
    </thead>
    <tbody>

      {
        bookings.map(booking => <Manage
          key={booking._id}
          booking={booking}          
        ></Manage>)
      }      
     
    </tbody>
 
  </table>
</div>
        </div>
    );
};



export default ServiceManage;