import { FaArrowRightLong } from "react-icons/fa6";

const FacetreatCard = ({facial}) => {

    const {service_image, service_name, service_description, price} = facial;

    return (
        <div className="card bg-base-100 w-96 shadow-xl mb-10">
        <figure className="px-10 pt-10">
          <img src={service_image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{service_name}</h2>
          <p>"{service_description}"</p>
          <p className="text-red-600 font-bold">Price: ${price}</p>
          <div className="card-actions">
            <button className="btn btn-active bg-gradient-to-r from-[#a8aaae] to-[rgba(21, 21, 21, 0)] rounded-full sm:btn-sm md:btn-md">View Details<FaArrowRightLong></FaArrowRightLong></button>
          </div>
        </div>
      </div>
    );
};

export default FacetreatCard;