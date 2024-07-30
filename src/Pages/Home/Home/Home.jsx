import Services from "../Services/Services";
import Banner from "./Banner/Banner";
import Popular from "./Popular/Popular";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Popular></Popular>
            <Services></Services>
        </div>
    );
};

export default Home;