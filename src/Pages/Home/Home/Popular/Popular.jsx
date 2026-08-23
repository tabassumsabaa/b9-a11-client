import { Link } from "react-router-dom";
import popu from "../../../../assets/image/popular/mgym.jpg";
import popu2 from "../../../../assets/image/popular/fgym.jpg";
import spa from "../../../../assets/image/popular/femalespa.jpg";
import spa2 from "../../../../assets/image/popular/maleSpa.jpg";
import fyo from "../../../../assets/image/popular/femaleyoga.jpg";
import myo from "../../../../assets/image/popular/maleyoga.jpg";
import fhcut from "../../../../assets/image/popular/fhcut.jpg";
import mcut from "../../../../assets/image/popular/haircut.jpg";

const popularServices = [
  {
    title: "Gym Zone",
    heading:
      "Unleash your full potential with cutting-edge fitness equipment and expert guidance!",
    description:
      "Experience state-of-the-art fitness equipment and personalized training programs designed to help you achieve your fitness goals. Join our community and transform your health and well-being in a motivating and supportive environment.",
    mainImage: popu,
    secondImage: popu2,
    reverse: false,
  },
  {
    title: "Spa Sanctuary",
    heading:
      "Revitalize your senses with luxurious treatments in a serene, tranquil haven!",
    description:
      "Indulge in ultimate relaxation with luxurious spa treatments and soothing ambiance. Rejuvenate your body and mind in a serene environment designed for your complete well-being.",
    mainImage: spa,
    secondImage: spa2,
    reverse: true,
  },
  {
    title: "Yoga Bliss",
    heading:
      "Achieve inner peace and physical harmony with our rejuvenating yoga classes!",
    description:
      "Embrace tranquility and enhance your flexibility with our expert-led yoga sessions. Join us to find balance and peace through mindful movements and guided meditation.",
    mainImage: fyo,
    secondImage: myo,
    reverse: false,
  },
  {
    title: "Hair Studio",
    heading:
      "Transform your look with precision cuts and trendsetting styles!",
    description:
      "Get a fresh, stylish look with expert cuts and modern techniques. Our skilled stylists are dedicated to enhancing your natural beauty with precision and care.",
    mainImage: mcut,
    secondImage: fhcut,
    reverse: true,
  },
];

const Popular = () => {
  return (
    <section className="my-12 px-4 sm:px-6 lg:px-0">
      <div className="text-center mb-12">
        <p className="text-red-600 font-semibold uppercase tracking-widest text-sm">
          Wellness for everyone
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold mt-3">
          Explore Our Services
        </h1>

        <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base text-gray-500">
          Find the wellness service that best matches your lifestyle, goals,
          and self-care needs.
        </p>
      </div>

      <div className="space-y-12 lg:space-y-20">
        {popularServices.map((service) => (
          <div
            key={service.title}
            className={`flex flex-col gap-8 items-center ${
              service.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            {/* Images */}
            <div className="w-full lg:w-1/2">
              <div className="relative h-72 sm:h-96 lg:h-[420px]">
                <img
                  src={service.mainImage}
                  alt={service.title}
                  className="absolute left-0 top-0 h-[85%] w-[82%] rounded-2xl object-cover shadow-xl"
                />

                <img
                  src={service.secondImage}
                  alt={`${service.title} wellness`}
                  className="absolute bottom-0 right-0 h-[55%] w-[52%] rounded-2xl border-4 border-white object-cover shadow-xl"
                />
              </div>
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-red-600 text-lg sm:text-xl font-bold">
                {service.title}
              </h3>

              <h2 className="text-2xl sm:text-3xl font-bold leading-tight mt-3">
                {service.heading}
              </h2>

              <p className="text-sm sm:text-base leading-7 text-gray-600 mt-5">
                {service.description}
              </p>

              <Link to="/services">
                <button className="btn mt-6 rounded-full border-0 bg-slate-950 px-7 text-white hover:bg-red-600">
                  Explore Services
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Popular;