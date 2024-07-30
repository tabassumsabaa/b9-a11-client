import popu from "../../../../assets/image/popular/mgym.jpg";
import popu2 from "../../../../assets/image/popular/fgym.jpg";
import spa from "../../../../assets/image/popular/femalespa.jpg";
import spa2 from "../../../../assets/image/popular/maleSpa.jpg";
import fyo from "../../../../assets/image/popular/femaleyoga.jpg";
import myo from "../../../../assets/image/popular/maleyoga.jpg";
import fhcut from "../../../../assets/image/popular/fhcut.jpg";
import mcut from "../../../../assets/image/popular/haircut.jpg";

const Popular = () => {
    return (
        <div className="my-10">
        <div className="text-center">
           <h1 className="text-3xl font-bold mb-5 bg-gradient-to-r from-[#595d67] to-[rgba(21, 21, 21, 0)] my-5 p-5 rounded-2xl">Our Popular services</h1>
           <hr />
        </div>
        <div className="hero rounded-xl mb-5 py-0 lg:mb-32">
  <div className="hero-content flex-col lg:flex-row">
    <div className="lg:w-1/2 relative">
       <img src={popu} className="w-3/4 h-[400px] rounded-lg shadow-2xl" />
       <img src={popu2} alt="" className="w-1/2 h-[300px] absolute right-5 top-1/2 rounded-full border-8 border-white shadow-2xl"/>
    </div>
    
    <div className="lg:w-1/2 space-y-3 m-auto pr-10">
       <h3 className="text-2xl font-bold">Gym Zone</h3>
      <h1 className="text-3xl ">Unleash your full potential with cutting-edge fitness equipment and expert guidance!</h1>
      <p className="py-6">
       experience state-of-the-art fitness equipment and personalized training programs designed to help you achieve your fitness goals. Join our community and transform your health and well-being in a motivating and supportive environment.
      </p>
      <button className="btn btn-active bg-slate-950 text-slate-200 rounded-full sm:btn-sm md:btn-md ">Book Now</button>
    </div>
  </div>  
</div>
<hr />
<div className="hero  rounded-xl mb-5 py-0 lg:mb-40">
  <div className="hero-content flex-col sm: lg:flex-row-reverse ">
    <div className="lg:w-1/2 relative">       
       <img src={spa} className="w-3/4 h-[400px] rounded-lg shadow-2xl" />  
       <img src={spa2} alt="" className="w-[50%] h-[250px] absolute right-5 top-3/4 rounded-full border-4 border-white shadow-2xl lg:-left-28"/>     
    </div>
    
    <div className="lg:w-1/2 space-y-3 m-auto pr-14">
       <h3 className="text-2xl font-bold">Spa Sanctuary</h3>
      <h1 className="text-3xl ">Revitalize your senses with luxurious treatments in a serene, tranquil haven!</h1>
      <p className="py-6">
      Indulge in ultimate relaxation with luxurious spa treatments and soothing ambiance. Rejuvenate your body and mind in a serene environment designed for your complete well-being.
      </p>
      <button className="btn btn-active bg-slate-950 text-slate-200 rounded-full sm:btn-sm md:btn-md ">Book Now</button>
    </div>
  </div>  
</div>
<hr />
<div className="hero  rounded-xl mb-5 py-0 lg:mb-32">
  <div className="hero-content flex-col lg:flex-row">
    <div className="lg:w-1/2 relative">
       <img src={myo} alt="" className="w-1/2 h-[300px] absolute right-5 top-1/2 rounded-full border-8 border-white shadow-2xl"/>
       <img src={fyo} className="w-3/4 h-[400px] rounded-lg shadow-2xl" />       
    </div>

    <div className="lg:w-1/2 space-y-3 m-auto pr-10">
       <h3 className="text-2xl font-bold">Yoga Bliss</h3>
      <h1 className="text-3xl ">Achieve inner peace and physical harmony with our rejuvenating yoga classes!</h1>
      <p className="py-6">
      Embrace tranquility and enhance your flexibility with our expert-led yoga sessions. Join us to find balance and peace through mindful movements and guided meditation.
      </p>
      <button className="btn btn-active bg-slate-950 text-slate-200 rounded-full sm:btn-sm md:btn-md ">Book Now</button>
    </div>
  </div>  
</div>
<hr />
<div className="hero  rounded-xl mb-5 py-0 lg:mb-40">
  <div className="hero-content flex-col sm: lg:flex-row-reverse ">
    <div className="lg:w-1/2 relative">       
       <img src={mcut} className="w-3/4 h-[400px] rounded-lg shadow-2xl" />  
       <img src={fhcut} alt="" className="w-[50%] h-[250px] absolute right-5 top-3/4 rounded-full border-4 border-white shadow-2xl lg:-left-28"/>     
    </div>
    
    <div className="lg:w-1/2 space-y-3 m-auto pr-14">
       <h3 className="text-2xl font-bold">Hair Studio</h3>
      <h1 className="text-3xl ">Transform your look with precision cuts and trendsetting styles!</h1>
      <p className="py-6">
      Get a fresh, stylish look with expert cuts and modern techniques. Our skilled stylists are dedicated to enhancing your natural beauty with precision and care.
      </p>
      <button className="btn btn-active bg-slate-950 text-slate-200 rounded-full sm:btn-sm md:btn-md ">Book Now</button>
    </div>
  </div>  
</div>

</div>

    );
};

export default Popular;