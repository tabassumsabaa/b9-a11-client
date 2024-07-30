import bone from "../../../../assets/image/b4.jpg";
import btwo from "../../../../assets/image/b3.jpg";
import bthree from "../../../../assets/image/b2.jpg";
import bfour from "../../../../assets/image/fh.jpg";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


const Banner = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-[500px] ">
          <img src={bone} className="w-full rounded-xl " />
          <div className="absolute left-0 right-5 top-0 bottom-0 flex items-center rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className=" text-white space-y-7 pl-20 ">
              <h1 className="text-4xl font-bold">Wellness, delivered</h1>
                <p>FitZone connects you with top-rated independent massage, 
                <br/>
                skincare, hair, and beauty service professionals near you.
                <br />
                Taking care of yourself has never been this
                <br/>
                easy and convenient.</p>
                <div className="lg:flex gap-5">
                   <button className="btn btn-active bg-slate-200 btn- sm:btn-sm md:btn-md ">Responsive</button>
                   <button className="btn btn-outline text-white sm:btn-sm md:btn-md ">Responsive</button>
               </div>
            </div>                     
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle"><FaArrowLeft></FaArrowLeft></a>
            <a href="#slide2" className="btn btn-circle"><FaArrowRight></FaArrowRight></a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-[500px]">
          <img src={btwo} className="w-full rounded-xl" />
          <div className="absolute left-0 right-5 top-0 bottom-0  flex items-center rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className=" text-white space-y-7 pl-20 ">
              <h1 className="text-4xl font-bold">Wellness, delivered</h1>
                <p>FitZone connects you with top-rated independent massage, 
                <br/>
                skincare, hair, and beauty service professionals near you.
                <br />
                Taking care of yourself has never been this
                <br/>
                easy and convenient.</p>
                <div className="lg:flex gap-5">
                   <button className="btn btn-active bg-slate-200 btn- sm:btn-sm md:btn-md ">Responsive</button>
                   <button className="btn btn-outline text-white sm:btn-sm md:btn-md ">Responsive</button>
               </div>
            </div>                     
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle"><FaArrowLeft></FaArrowLeft></a>
            <a href="#slide3" className="btn btn-circle"><FaArrowRight></FaArrowRight></a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-[500px]">
          <img src={bthree} className="w-full rounded-xl" />
          <div className="absolute left-0 right-5 top-0 bottom-0  flex items-center rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className=" text-white space-y-7 pl-20 ">
              <h1 className="text-4xl font-bold">Wellness, delivered</h1>
                <p>FitZone connects you with top-rated independent massage, 
                <br/>
                skincare, hair, and beauty service professionals near you.
                <br />
                Taking care of yourself has never been this
                <br/>
                easy and convenient.</p>
                <div className="lg:flex gap-5">
                   <button className="btn btn-active bg-slate-200 btn- sm:btn-sm md:btn-md ">Responsive</button>
                   <button className="btn btn-outline text-white sm:btn-sm md:btn-md ">Responsive</button>
               </div>
            </div>                     
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle"><FaArrowLeft></FaArrowLeft></a>
            <a href="#slide4" className="btn btn-circle"><FaArrowRight></FaArrowRight></a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-[500px]">
          <img src={bfour} className="w-full rounded-xl" />
          <div className="absolute left-0 right-5 top-0 bottom-0  flex items-center rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className=" text-white space-y-7 pl-20 ">
              <h1 className="text-4xl font-bold">Wellness, delivered</h1>
                <p>FitZone connects you with top-rated independent massage, 
                <br/>
                skincare, hair, and beauty service professionals near you.
                <br />
                Taking care of yourself has never been this
                <br/>
                easy and convenient.</p>
                <div className="lg:flex gap-5">
                   <button className="btn btn-active bg-slate-200 btn- sm:btn-sm md:btn-md ">Responsive</button>
                   <button className="btn btn-outline text-white sm:btn-sm md:btn-md ">Responsive</button>
               </div>
            </div>                     
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle"><FaArrowLeft></FaArrowLeft></a>
            <a href="#slide1" className="btn btn-circle"><FaArrowRight></FaArrowRight></a>
          </div>
        </div>
      </div>
    );
};

export default Banner;