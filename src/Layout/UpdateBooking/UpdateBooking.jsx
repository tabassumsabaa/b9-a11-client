import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';

const UpdateBooking = () => {
    const {user} = useContext(AuthContext);
    const update = useLoaderData();
    const {title, _id, Price, CustomerName} = update;

    
    const handleUpdate = e =>{
        e.preventDefault();
        const form =e.target;  
        const name = form.name.value;                      
        const date = form.date.value;                
        const email = user?.email;
        const updated = {
             email, title, date,  Service: _id, CustomerName, Price, name
        }
        console.log(updated);

        fetch(`http://localhost:5000/bookings/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updated)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.modifiedCount > 0) {
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
        py-5">Update services: {title}</h2>         
  <form onSubmit={handleUpdate} className="card-body">
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="form-control">
      <label className="label">
        <span className="label-text"> Name</span>
      </label>
      <input type="text" name="firstname" defaultValue={update.CustomerName} className="input input-bordered" required />
    </div>
  
    <div className="form-control">
      <label className="label">
        <span className="label-text">Date</span>
      </label>
      <input type="date" name="date" defaultValue={update.date} placeholder="date" className="input input-bordered" required />
    </div>    
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Price $</span>
      </label>
      <input type="text" name="price" defaultValue={ update.Price} className="input input-bordered" required />
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

export default UpdateBooking;