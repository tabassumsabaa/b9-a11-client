import { useEffect, useState } from "react";
import ServicesCrad from "./ServicesCrad";
import FacetreatCard from "./FacetreatCard";
import GymCard from "./GymCard";
import MeditationCard from "./MeditationCard";



const Services = () => {
    const [services, setServices] = useState([]);
    const [facials, setFacials] = useState([]);
    const [gyms, setgyms] = useState([]);
    const [yogas, setYogas] = useState([]);


    useEffect(()=>{
        fetch('https://sabfitzone-server.vercel.app/hairservices')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[]);

    useEffect(()=>{
        fetch('https://sabfitzone-server.vercel.app/facialservices')
        .then(res =>res.json())
        .then(data => setFacials(data))
    },[]);

    useEffect(()=>{
        fetch('https://sabfitzone-server.vercel.app/gymservices')
        .then(res =>res.json())
        .then(data => setgyms(data))
    },[]);

    useEffect(()=>{
        fetch('https://sabfitzone-server.vercel.app/yogaServices')
        .then(res =>res.json())
        .then(data => setYogas(data))
    },[]);

    return (
        <div className="mt-4">
            <div className="text-center space-y-5 mb-9">
              <h3 className="text-2xl font-bold mb-5 text-red-600 ">Services</h3>
              <h1 className="text-4xl font-bold mb-5 text-gradient-to-r from-[#595d67] to-[rgba(21, 21, 21, 0)]">Our Popular Services</h1>
              <p className="w-3/5 m-auto">SabFitZone provides spa-quality, on-demand massage, skincare, hair, and beauty treatments. Providers in the Soothe community can tailor the experience to meet your personal preferences and goals.</p> 
              <hr />           
           </div>
           
           <div className="bg-gradient-to-r from-[#595d67] to-[rgba(21, 21, 21, 0)] text-2xl font-bold text-center rounded-lg font-serif py-2 mb-2">
               <h2>Haircuts and hairstyle services</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {
                services.map(service => <ServicesCrad
                   key={services.service_id}
                   service={service}
                ></ServicesCrad>)
              }
           </div> 

            <div className="bg-gradient-to-r from-[#595d67] to-[rgba(21, 21, 21, 0)] text-2xl font-bold text-center rounded-lg font-serif py-2 mb-2">
               <h2>Facial services</h2>
           </div>                   

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {
                facials.map(facial => <FacetreatCard
                   key={facial.servicef_id}
                   facial={facial}
                   ></FacetreatCard>)
              }
           </div>

           <div className="bg-gradient-to-r from-[#595d67] to-[rgba(21, 21, 21, 0)] text-2xl font-bold text-center rounded-lg font-serif py-2 mb-2">
               <h2>gym services</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {
                gyms.map(gym => <GymCard
                   key={gym.service_id}
                   gym={gym}
                   ></GymCard>)
              }
           </div>

           <div className="bg-gradient-to-r from-[#595d67] to-[rgba(21, 21, 21, 0)] text-2xl font-bold text-center rounded-lg font-serif py-2 mb-2">
               <h2>Yoga services</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {
                yogas.map(yoga => <MeditationCard
                   key={yoga.service_id}
                   yoga={yoga}
                   ></MeditationCard>)
              }
           </div>

        </div>
    );
};

export default Services;