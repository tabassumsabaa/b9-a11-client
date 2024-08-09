import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import TodoRow from "./TodoRow";



const ServiceTodo = () => {
    const {user, _id} = useContext(AuthContext);
    const [bookingsConfirm, setBookingsConfirm] = useState([]);
    // const {title} = booking;
    //const {} = useLoaderData();

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url, {credentials: 'include'})
        .then(res => res.json())
        .then(data =>setBookingsConfirm(data))
    }, [url]);

    const handleConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {
               const remaining = bookingsConfirm.filter( booking => booking._id !== id);
               const confirm = bookingsConfirm.find( booking => booking._id === id);
               confirm.status = 'confirm'
               const newConfirm = [confirm, ...remaining];
               setBookingsConfirm(newConfirm);
            }
        })
    }

    return (
        <div>
            <h2 className="text-3xl text-center my-10 bg-gradient-to-r from-[#595d67] to-[rgba(21, 21, 21, 0)] py-5 rounded-xl">Service to do: {bookingsConfirm.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>        
        <th>Photo</th>
        <th>Service Name</th>
        <th>Price</th>
        <th>Date</th>
        <th>Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        bookingsConfirm.map(booking => <TodoRow
        key={booking._id}
        booking={booking}
        handleConfirm={handleConfirm}
        ></TodoRow>)
      }
    </tbody>
  
  </table>
</div>
        </div>
    );
};

export default ServiceTodo;