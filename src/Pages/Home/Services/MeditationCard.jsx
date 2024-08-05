import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MeditationCard = ({yoga}) => {
    
    const {img, title, provide_description, price, _id } = yoga;

    return (
        <div className="card bg-base-100 w-96 shadow-xl mb-10">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>"{provide_description}"</p>
          <p className="text-red-600 font-bold">Price: ${price}</p>
          <div className="card-actions">
             <Link to={`/booking/yogaServices/${_id}`}>
                <button className="btn btn-active bg-gradient-to-r from-[#a8aaae] to-[rgba(21, 21, 21, 0)] 
                  rounded-full sm:btn-sm md:btn-md">View Details<FaArrowRightLong></FaArrowRightLong></button>
             </Link>
          </div>
        </div>
      </div>
    );
};

export default MeditationCard;