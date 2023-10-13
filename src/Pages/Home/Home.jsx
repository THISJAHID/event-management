// import { useContext } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
import Gallery from "../Gallery/Gallery";
import Hero from "../Hero/Hero";
import CarouselCustomNavigation from "../Slider/Slider";
import Carosul from "../carosul/Carosul";
import Sticky from "../sticky/sticky";




const Home = () => {
    // const authinfo = useContext(AuthContext)
   
    return (
        <div className="" >
            <CarouselCustomNavigation></CarouselCustomNavigation>
            <Hero></Hero>
            <Carosul></Carosul>
          <Sticky></Sticky>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;