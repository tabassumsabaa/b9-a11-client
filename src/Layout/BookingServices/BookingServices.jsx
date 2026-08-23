import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const BookingServices = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();

  const { title, _id, img, price } = service;

  const handleBooking = async (event) => {
    event.preventDefault();

    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const serviceDate = form.serviceDate.value;
    const instructions = form.instructions.value;

    const booking = {
      CustomerName: `${firstName} ${lastName}`.trim(),
      email: user?.email,
      customerEmail: user?.email,

      Service: _id,
      serviceId: _id,
      title,
      serviceName: title,
      img,
      serviceImage: img,

      date: serviceDate,
      serviceDate,
      Price: price,
      price,

      instructions,
      status: "pending",
      paymentStatus: "unpaid",
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await fetch(
        "https://sabfitzone-server.vercel.app/bookings",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(booking),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Booking could not be saved.");
      }

      if (data.insertedId) {
        await Swal.fire({
          icon: "success",
          title: "Booking created!",
          text: "Your service booking is pending payment.",
          confirmButtonColor: "#404349",
        });

        form.reset();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Booking failed",
        text: error.message,
      });
    }
  };

  return (
    <div>
      <h2
        className="text-center font-semibold text-2xl sm:text-3xl my-5
        bg-gradient-to-r from-[#595d67] to-[rgba(21,21,21,0)] rounded-xl py-5 px-4"
      >
        Booking service: {title}
      </h2>

      <div className="card bg-base-100 shadow-xl max-w-4xl mx-4 sm:mx-auto mb-10">
        <div className="card-body p-4 sm:p-8">
          <div className="flex flex-col sm:flex-row gap-5 items-center border-b pb-6">
            <img
              src={img}
              alt={title}
              className="w-full sm:w-44 h-48 sm:h-32 rounded-xl object-cover"
            />

            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-red-600 font-bold mt-2">
                Price: ${price}
              </p>
            </div>
          </div>

          <form onSubmit={handleBooking} className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Date</span>
                </label>
                <input
                  type="date"
                  name="serviceDate"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  value={user?.email || ""}
                  className="input input-bordered w-full"
                  readOnly
                />
              </div>

              <div className="form-control md:col-span-2">
                <label className="label">
                  <span className="label-text">Special Instructions</span>
                </label>
                <textarea
                  name="instructions"
                  placeholder="Address, preferred time, special requirements, or service plan..."
                  className="textarea textarea-bordered w-full min-h-28"
                ></textarea>
              </div>

              <div className="form-control md:col-span-2">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  value={`$${price}`}
                  className="input input-bordered w-full"
                  readOnly
                />
              </div>
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-outline bg-gradient-to-r from-[#404349] to-[rgba(21,21,21,0)] rounded-full btn-block"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingServices;