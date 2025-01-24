import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/pagination";
import "../pages/styles.css";
// import { Pagination } from "swiper";
import saket from "../images/testimonialImage/saket.jpeg";
import ashwin from "../images/testimonialImage/ashwin.jpeg";
import aryan from "../images/testimonialImage/aryan.jpeg";
// import avneesh from "../images/testimonialImage/avneesh.jpeg";
import khushi from "../images/testimonialImage/khushi.jpeg";
// import sambhrant from "../images/testimonialImage/sambhrant.jpeg";
import ayush from "../images/testimonialImage/ayush.jpeg";
import SwiperCore, { Autoplay } from 'swiper';
// import Archit from "../images/testimonialImage/Archit.jpeg";
// import Tushar from "../images/testimonialImage/Tushar.jpeg";


SwiperCore.use([Autoplay]);
// test 
import { Navigation } from "swiper";
import "swiper/css/navigation";
import React from "react";


export default function Testimonial() {
    // const [windowSize, setWindowSize] = React.useState(getWindowSize());
    // React.useEffect(() => {
    //     function handleWindowResize() {
    //         setWindowSize(getWindowSize());
    //     }
    //     window.addEventListener('resize', handleWindowResize);

    //     return () => {
    //         window.removeEventListener('resize', handleWindowResize);
    //     };
    // }, []);
    // function getWindowSize() {
    //     const { innerWidth, innerHeight } = window;
    //     return { innerWidth, innerHeight };
    // }
    return (
        <section className="test-head">
            <div className="test-head-1">
                <h1 className="head-h2">Feedback About Me</h1>
                <p className="head-p1">It is very easy to start smoking but it is an uphill task to quit it. Ask any chain smoker or even a person.</p>
            </div>
            <Swiper
                // navigation={true}
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }
                }
                // pagination={{
                //     clickable: true,
                // }}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="swip-slide">
                        <div className="slide-img">
                            <img src={saket} alt="saket" />
                        </div>
                        <div className="slide-content">
                            <div className="slide-p1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque</div>
                            <div className="slide-h1 bold">Saket Tiwari</div>
                            <div className="slide-h2">Technical Member:-E-cell</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide> <div className="swip-slide">
                    <div className="slide-img">
                        <img src={ashwin} alt="ashwin" />
                    </div>
                    <div className="slide-content">
                        <div className="slide-p1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque </div>
                        <div className="slide-h1 bold">Ashwin Yadav</div>
                        <div className="slide-h2">FrontEnd Developer</div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide> <div className="swip-slide">
                    <div className="slide-img">
                        <img src={aryan} alt="aryan" className="slide-img" />
                    </div>
                    <div className="slide-content">
                        <div className="slide-p1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque</div>
                        <div className="slide-h1 bold">Aryan tiwari</div>
                        <div className="slide-h2">MERN Developer</div>
                    </div>
                </div></SwiperSlide>
                {/* <SwiperSlide> <div className="swip-slide">
                    <div className="slide-img">
                        <img src={avneesh} alt="avneesh" />
                    </div>
                    <div className="slide-content">
                        <div className="slide-p1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque</div>
                        <div className="slide-h1 bold">Avaneesh Sir</div>
                        <div className="slide-h2">DSC:-Technical Head</div>
                    </div>
                </div></SwiperSlide> */}
                <SwiperSlide> <div className="swip-slide">
                    <div className="slide-img">
                        <img src={khushi} alt="khushi" />
                    </div>
                    <div className="slide-content">
                        <div className="slide-p1">hLorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque</div>
                        <div className="slide-h1 bold">Khushi Aggerwal</div>
                        <div className="slide-h2">Java Developer</div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide> <div className="swip-slide">
                    <div className="slide-img">
                        <img src={ayush} alt="ayush" />
                    </div>
                    <div className="slide-content">
                        <div className="slide-p1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque</div>
                        <div className="slide-h1 bold">Ayush Sangwan</div>
                        <div className="slide-h2">Content Writer</div>
                    </div>
                </div></SwiperSlide>
                {/* <SwiperSlide> <div className="swip-slide">
                    <div className="slide-img">
                        <img src={Archit} alt="archit" />
                    </div>
                    <div className="slide-content">
                        <div className="slide-p1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque</div>
                        <div className="slide-h1 bold">Archit Sir</div>
                        <div className="slide-h2">MyCIN:-Head</div>
                    </div>
                </div></SwiperSlide> */}
                {/* <SwiperSlide> <div className="swip-slide">
                    <div className="slide-img">
                        <img src={Tushar} alt="tushar" />
                    </div>
                    <div className="slide-content">
                        <div className="slide-p1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque</div>
                        <div className="slide-h1 bold">Tushar Sir</div>
                        <div className="slide-h2">MyCIN:-Technical Head</div>
                    </div>
                </div></SwiperSlide> */}
                {/* <SwiperSlide> <div className="swip-slide">
                    <div className="slide-img">
                        <img src={sambhrant} alt="sambhrant" />
                    </div>
                    <div className="slide-content">
                        <div className="slide-p1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque</div>
                        <div className="slide-h1 bold">Sambhrant Tiwari</div>
                        <div className="slide-h2">Cotlin Developer</div>
                    </div>
                </div></SwiperSlide> */}
            </Swiper>
        </section>
    );
}