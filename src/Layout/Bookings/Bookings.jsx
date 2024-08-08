import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";


const Bookings = () => {

    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

   const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url, {credentials: 'include'})
          .then(res => res.json())
          .then(data =>setBookings(data))
    }, [])

    return (
        <div className="my-5">
            <h2 className="text-5xl text-center mb-10">Booking: {bookings.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Photo</th>       
        <th>Customer Name</th>
        <th>Service Name</th>
        <th>Date</th>
        <th>Price</th>
        <th>Manage Service</th>
      </tr>
    </thead>
    <tbody>

      {
        bookings.map(booking => <BookingRow
          key={booking._id}
          booking={booking}
        ></BookingRow>)
      }           
    </tbody> 
  </table>
</div>
        </div>
    );
};

export default Bookings;