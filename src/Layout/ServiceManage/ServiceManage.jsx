import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Manage from "./Manage";
import { RiDeleteBin2Line  } from "react-icons/ri";
import { LuFolderEdit } from "react-icons/lu";
import Swal from "sweetalert2";

const ServiceManage = () => {
    
    const {user, _id} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

   const url = `https://sabfitzone-server.vercel.app/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url, {credentials: 'include'})
          .then(res => res.json())
          .then(data =>setBookings(data))
    }, []);

    const handleDelete = id => {      
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://sabfitzone-server.vercel.app/bookings/${_id}`, {
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                //console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      }); 
                      const remaining = bookings.filter(booking => booking._id !== id);
                      setBookings(remaining);             
                }
              })            
            }
          });            
    } 

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
          handleDelete={handleDelete}
        ></Manage>)
      }      
     
    </tbody>
 
  </table>
</div>
        </div>
    );
};



export default ServiceManage;