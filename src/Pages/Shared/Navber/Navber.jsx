import { Link } from "react-router-dom";
import logo from "../../../assets/image/logo.jpg";

const Navber = () => {
    const navItem = <>
       <li><Link>Home</Link></li>  
       <li><Link>Services</Link> </li> 
        <li><a>Log-In</a></li>  
      </>
    return (
        <div className="navbar bg-base-100 h-20 mb-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
        xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

        {navItem}

      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-xl"><img src={logo} alt="" className="w-10 h-10 mr-2"/>SabFitZone</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

      {navItem}

    </ul>
  </div>
  <div className="navbar-end">      
       <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className="w-8 h-8 rounded-full ml-2" />     
  </div>
</div>


        // <div className="navbar bg-base-100">
        //   <div className="flex-1">
        //     <Link className="btn btn-ghost normal-case text-xl">
        //       <img src={logo} alt="logo" className="w-10 h-10 mr-2" />
        //       
        //     </Link>
        //   </div>
        //   <div className="flex-none">
        //     <ul className="menu menu-horizontal px-1">
        //       <li><Link to="/">Home</Link></li>
        //       <li><Link to="/services">Services</Link></li>
        //       {/* {isLoggedIn ? (
        //         <>
        //           <li tabIndex={0}>
        //             <a>
        //               Dashboard
        //               <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        //               <path d="M19 9l-7 7-7-7"></path></svg>
        //             </a>
        //             <ul className="p-2 bg-base-100">
        //               <li><Link to="/add-service">Add Service</Link></li>
        //               <li><Link to="/manage-service">Manage Service</Link></li>
        //               <li><Link to="/booked-services">Booked Services</Link></li>
        //               <li><Link to="/service-to-do">Service To Do</Link></li>
        //             </ul>
        //           </li>
        //           <li>
        //             <a href="/logout" className="flex items-center">
        //               Logout
        //               <img src={user.image} alt="User" className="w-8 h-8 rounded-full ml-2" />
        //             </a>
        //           </li>
        //         </>
        //       ) : (
        //         <li><Link to="/login">Log-in</Link></li>
        //       )} */}
        //       <li><Link to="/login">Log-in</Link></li>
        //       <li>
        //          <a href="/logout" className="flex items-center">Logout  
        //            <img src="" alt="User" className="w-8 h-8 rounded-full ml-2" />
        //          </a>
        //       </li>
        //     </ul>
        //   </div>
        // </div>
      );
};

export default Navber;