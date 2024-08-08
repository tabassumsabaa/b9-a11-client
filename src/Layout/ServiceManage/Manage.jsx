import { Link } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";
import { useState } from "react";
import Swal from "sweetalert2";


const Manage = ({booking}) => {

    const {_id, CustomerName, img, date, title, Price} = booking;  
    const [bookings, setBookings] = useState([]);
    
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
              fetch(`http://localhost:5000/bookings/${_id}`, {
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                console.log(data);
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
        <tr>
        <td>
            <div>
                <button onClick={() => handleDelete(_id)} className="btn bg-red-600 font-bold text-white btn-circle btn-sm text-2xl">
                    <RxCrossCircled></RxCrossCircled></button>
            </div>
        </td>
        <td>          
            <div className="avatar">
              <div className="rounded h-24 w-24">
               { img && <img src={img} alt="Avatar Tailwind CSS Component" />}
              </div>
            </div>          
        </td>
        <td>{CustomerName}</td>
        <td>{title}</td>
        <td>{date}</td>
        <td>{Price}</td>
        <th>
            <Link to={`/book/manage/update/${_id}`}>
              <button className="btn btn-ghost btn-xs">Update</button>
            </Link>        
        </th>
      </tr>
    );
};

export default Manage;