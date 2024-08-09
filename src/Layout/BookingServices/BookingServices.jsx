import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const BookingServices = () => {

    // const hairServices = useLoaderData();
    // const {title, _id, price} = hairServices;
    const {user} = useContext(AuthContext);

     const service = useLoaderData();
     const {title, _id, img} = service

    const handleBooking = e =>{
        e.preventDefault();
        const form =e.target;  
        const Firstname = form.Firstname.value; 
        const lastname = form.lastname.value;                
        const date = form.date.value;
        const price = form.price.value;        
        const email = user?.email;
        const booking = {
            CustomerName: Firstname + lastname, email, img, title, date, Price: price, Service: _id
        }
        console.log(booking);

        fetch("https://sabfitzone-server.vercel.app/bookings", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: "Do you want to save the changes?",
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: "Save",
                    denyButtonText: `Don't save`
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                      Swal.fire("Saved!", "", "success");
                    } else if (result.isDenied) {
                      Swal.fire("Changes are not saved", "", "info");
                    }
                  });
            }
        })
    }

    return (
        <div>
        <h2 className="text-center font-semibold text-3xl my-5 bg-gradient-to-r from-[#595d67] to-[rgba(21, 21, 21, 0)] rounded-xl 
        py-5">Booking services: {service.title}</h2>         
  <form onSubmit={handleBooking} className="card-body">
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="form-control">
      <label className="label">
        <span className="label-text">First Name</span>
      </label>
      <input type="text" name="Firstname" placeholder="First" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Last Name</span>
      </label>
      <input type="text" name="lastname" placeholder="Last" className="input input-bordered" required />        
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Date</span>
      </label>
      <input type="date" name="date" placeholder="date" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo</span>
      </label>
      <input type="url" name="photo" placeholder="photo url" className="input input-bordered"  />        
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Price</span>
      </label>
      <input type="text" name="price" defaultValue={'$ ' + service.price} className="input input-bordered" required />
    </div>
    </div>

    <div className="form-control mt-6">    
      <input className="btn btn-outline bg-gradient-to-r from-[#404349] to-[rgba(21, 21, 21, 0)] 
      rounded-full sm:btn-sm md:btn-md btn-block" type="submit" value="Booking confirm"  />
    </div>
  </form>
</div>
    );
};

export default BookingServices;