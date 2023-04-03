import React from 'react'
import './shopping.css';
import Header from './Header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider1 from './slider-1.webp';
import slider2 from './slider-2.webp';
import slider3 from './slider-3.webp';


function index() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };

    return (
        <div className='h-screen'>
            <Header />
            <div className='h-72 slider'>
            <Slider {...settings}>
                <div>
                    <img src={slider1} alt="" />
                </div>
                <div>
                    <img src={slider2} alt="" />
                </div>
                <div>
                     <img src={slider3} alt="" />
                </div>
            </Slider>
            </div>
        </div>
    )
}

export default index
