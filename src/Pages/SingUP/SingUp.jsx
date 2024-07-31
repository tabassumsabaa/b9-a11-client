import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SingUp = () => {

    const {createUser} =useContext(AuthContext);
    const {signInWithGoogle, User} = useContext(AuthContext);
 

    const handlesignup = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo,password);

        createUser(email, password)
           .then(result => {
              const user = result.user;
              console.log(user);
           })
           .catch(error => {
              console.log(error);
           });

           useEffect(() => {
            if (User) {
              // Redirect or perform other actions upon successful login
              console.log("User logged in:", User);
            }
          }, [User]);       


    }

    return (
        <div className="hero bg-base-200 min-h-screen rounded-3xl mb-10">
        <div className="hero-content flex-col">
          <div className="text-center border-b-2 border-gray-200">
            <h1 className="text-5xl font-bold pt-0">Sign Up!</h1>
            <p className="py-6 text-xl">        
            Please sign in to continue booking your treatment with
            <br />SabFitZone. Already have an account?  <Link to="/login" className="text-[#6281d6] font-bold">SING IN</Link>
            </p>            
            <div className="text-center mx-auto text-5xl">
                <button onClick={signInWithGoogle} className="btn btn-active bg-slate-950 text-white hover:text-black rounded-xl sm:btn-sm md:btn-md">Continue with <FcGoogle></FcGoogle></button>
            </div>
            <br />   
           
          </div>
          <p className="text-xl text-[#6281d6] font-bold">OR</p>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handlesignup} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="url" name="photo" placeholder="Photo" className="input input-bordered"  />
              </div>  
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-active bg-slate-950 text-white hover:text-black rounded-full sm:btn-sm md:btn-md" type="submit" value="Continue" />
              </div>
            </form>
          </div>
        </div>
              </div>
    );
};

export default SingUp;