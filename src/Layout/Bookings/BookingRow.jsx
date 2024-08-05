import { Link } from "react-router-dom";


const BookingRow = ({booking}) => {

    const {CustomerName, img, date, title, Price} = booking;

    return (
        <tr>
       
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
            <Link to='/book/manage'>
              <button className="btn btn-ghost btn-xs">Details</button>
            </Link>        
        </th>
      </tr>
    );
};

export default BookingRow;