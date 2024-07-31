import { useEffect, useState } from "react";
import ServicesCrad from "./ServicesCrad";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[]);

    return (
        <div className="mt-4">
            <div className="text-center space-y-5 mb-9">
              <h3 className="text-2xl font-bold mb-5">Services</h3>
              <h1 className="text-4xl font-bold mb-5 text-gradient-to-r from-[#595d67] to-[rgba(21, 21, 21, 0)]">Our Popular Services</h1>
              <p className="w-3/5 m-auto">Soothe provides spa-quality, on-demand massage, skincare, hair, and beauty treatments. Providers in the Soothe community can tailor the experience to meet your personal preferences and goals.</p>            
           </div>
           <hr />
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {
                services.map(service => <ServicesCrad
                   key={services.service_id}
                   service={service}
                ></ServicesCrad>)
              }
           </div>
        </div>
    );
};

export default Services;