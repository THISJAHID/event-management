import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';

const HeroCart = ({ categories }) => {
    const { category ,icon } = categories;
    
    return (
        <>
            <div className="" data-aos="flip-right">
                <Link to={`/postCart/${category}`}>
                    <div className="card p-5 hover:bg-[#794cc2]  hover:text-white bg-[#faf9f9] w-full  text-center" >
                        <div className="icon mx-auto w-[100px]  justify-center">
                       <img className="w-64 h-28" src={icon} alt="" />
                        </div>
                        <div className="title font-extrabold">
                            <h2>{category}</h2>
                        </div>
                    </div>
                </Link>
               

            </div>
        </>
    );
};

export default HeroCart;