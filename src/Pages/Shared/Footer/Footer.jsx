import logo  from "../../../assets/image/logo.jpg";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer bg-slate-950 text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
  <img src={logo} alt="" className="max-h-20 mb-3 pr-5"/>
    <p>SabFitZone is focus on fitness and wellness.
    <br />
    <br />
    Providing reliable Service 30 July 2024.
    </p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end pr-20 text-3xl">   
  <a href="https://www.facebook.com/sabiha.tabassum.792?mibextid=ZbWKwL" target="_blank"><BsFacebook></BsFacebook></a>
  <a href="https://www.linkedin.com/in/sabiha-tabassum-saba-b0a89620b" target="_blank"><FaLinkedin></FaLinkedin></a>
  </nav>
</footer>
    );
};

export default Footer;