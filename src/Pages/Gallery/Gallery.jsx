
import Aos from "aos";
import 'aos/dist/aos.css';
const Gallery = () => {
    Aos.init()
    return (
        <>
            <div className="w-2/4 mx-auto">
                <div className='text-center  m-6'>
                    <h3 className='font-bold text-5xl underline text-[#794CC2]'> Gallary...</h3>
                    <p className='mt-6 text-[#9b77d4]'>This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information.</p>
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-2 mt-2">
                <div className="photo">
                    <img className="w-72 h-60" src="https://i.postimg.cc/3NrD7gK2/download.jpg" alt="" data-aos="flip-right" />
                </div>
                <div className="photo">
                    <img className="w-72 h-60" src="https://i.postimg.cc/63XMr10w/Romantic-Love.png" data-aos="flip-right" alt="" />
                </div>
                <div className="photo">
                    <img className="w-72 h-60" src="https://i.postimg.cc/rpKDh8fN/fe-15.jpg"  data-aos="flip-up" alt="" />
                </div>
                <div className="photo">
                    <img className="w-72 h-60" src="https://i.postimg.cc/9MPw9Lx6/100375804.webp" data-aos="flip-up" alt="" />
                </div>
                <div className="photo">
                    <img className="w-72 h-60" src="https://i.postimg.cc/9FDF5xdc/Buffalo-Photo-Booth-Rental-retirement-party.jpg"  data-aos="flip-right"alt="" />
                </div>
                <div className="photo">
                    <img className="w-72 h-60" src="https://i.postimg.cc/rFGcLvdX/shutterstock-1527035324.jpg" data-aos="flip-right" alt="" />
                </div>
            </div>
        </>
    );
};

export default Gallery;