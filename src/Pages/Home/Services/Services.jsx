import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ServicesCrad from "./ServicesCrad";
import FacetreatCard from "./FacetreatCard";
import GymCard from "./GymCard";
import MeditationCard from "./MeditationCard";

const Services = () => {
  const location = useLocation();

  const [services, setServices] = useState([]);
  const [facials, setFacials] = useState([]);
  const [gyms, setGyms] = useState([]);
  const [yogas, setYogas] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://sabfitzone-server.vercel.app/hairservices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  useEffect(() => {
    fetch("https://sabfitzone-server.vercel.app/facialservices")
      .then((res) => res.json())
      .then((data) => setFacials(data));
  }, []);

  useEffect(() => {
    fetch("https://sabfitzone-server.vercel.app/gymservices")
      .then((res) => res.json())
      .then((data) => setGyms(data));
  }, []);

  useEffect(() => {
    fetch("https://sabfitzone-server.vercel.app/yogaServices")
      .then((res) => res.json())
      .then((data) => setYogas(data));
  }, []);

  const filterServices = (items) => {
    return items.filter((item) =>
      item.title?.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredHairServices = filterServices(services);
  const filteredFacials = filterServices(facials);
  const filteredGyms = filterServices(gyms);
  const filteredYogas = filterServices(yogas);

  const totalResults =
    filteredHairServices.length +
    filteredFacials.length +
    filteredGyms.length +
    filteredYogas.length;

  return (
    <div className="mt-4">
      <div className="text-center space-y-5 mb-9">
        <h3 className="text-2xl font-bold mb-5 text-red-600">Services</h3>

        <h1 className="text-4xl font-bold mb-5">
          Our Popular Services
        </h1>

        <p className="w-3/5 m-auto">
          SabFitZone provides spa-quality, on-demand massage, skincare, hair,
          and beauty treatments. Providers in the Soothe community can tailor
          the experience to meet your personal preferences and goals.
        </p>

        <hr />
      </div>

      {location.pathname === "/services" && (
        <div className="w-3/5 mx-auto mb-8">
          <input
            type="search"
            placeholder="Search services by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered w-full rounded-full"
          />
        </div>
      )}

      {search && totalResults === 0 && (
        <p className="text-center text-red-600 font-semibold my-8">
          No services found for {search}.
        </p>
      )}

      {filteredHairServices.length > 0 && (
        <>
          <div className="bg-gradient-to-r from-[#595d67] to-[rgba(21,21,21,0)] text-2xl font-bold text-center rounded-lg font-serif py-2 mb-2">
            <h2>Haircuts and hairstyle services</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 lg:px-0">
            {filteredHairServices.map((service) => (
              <ServicesCrad key={service._id} service={service} />
            ))}
          </div>
        </>
      )}

      {filteredFacials.length > 0 && (
        <>
          <div className="bg-gradient-to-r from-[#595d67] to-[rgba(21,21,21,0)] text-2xl font-bold text-center rounded-lg font-serif py-2 mb-2">
            <h2>Facial services</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 lg:px-0">
            {filteredFacials.map((facial) => (
              <FacetreatCard key={facial._id} facial={facial} />
            ))}
          </div>
        </>
      )}

      {filteredGyms.length > 0 && (
        <>
          <div className="bg-gradient-to-r from-[#595d67] to-[rgba(21,21,21,0)] text-2xl font-bold text-center rounded-lg font-serif py-2 mb-2">
            <h2>Gym services</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 lg:px-0">
            {filteredGyms.map((gym) => (
              <GymCard key={gym._id} gym={gym} />
            ))}
          </div>
        </>
      )}

      {filteredYogas.length > 0 && (
        <>
          <div className="bg-gradient-to-r from-[#595d67] to-[rgba(21,21,21,0)] text-2xl font-bold text-center rounded-lg font-serif py-2 mb-2">
            <h2>Yoga services</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 lg:px-0">
            {filteredYogas.map((yoga) => (
              <MeditationCard key={yoga._id} yoga={yoga} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Services;